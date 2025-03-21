# Базовый образ с Node.js
FROM node:20.17.0-alpine AS base

# Устанавливаем необходимые пакеты
RUN apk add --no-cache libc6-compat

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json перед установкой зависимостей
COPY package.json package-lock.json ./

# Устанавливаем все зависимости (включая devDependencies) сразу
RUN npm ci

# Этап сборки
FROM base AS build

# Копируем весь код проекта
COPY . .

# Генерируем Prisma клиент (если используется Prisma)
RUN npm run prisma:generate

# Собираем приложение NestJS
RUN npm run build

# Финальный продакшн-образ
FROM node:20.17.0-alpine AS production

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем только production-зависимости из билдового образа
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json /app/package-lock.json ./

# Копируем собранное приложение
COPY --from=build /app/dist ./dist

# Устанавливаем переменную окружения
ENV NODE_ENV=production 

# Открываем порт (если бек работает на 3000)
EXPOSE 3001

# Запускаем приложение
CMD ["node", "dist/main"]
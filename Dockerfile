# Базовый образ с Node.js
FROM node:20.17.0-alpine AS base

# Устанавливаем необходимые пакеты
RUN apk add --no-cache libc6-compat

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем production-зависимости
RUN npm ci --omit=dev

# Этап сборки
FROM base AS build

# Копируем весь код проекта
COPY . .

# Устанавливаем все зависимости (с devDependencies)
RUN npm ci

# Генерируем Prisma клиент (если используется Prisma)
RUN npm run prisma generate

# Собираем приложение NestJS
RUN npm run build

# Финальный продакшн-образ
FROM base AS production

# Устанавливаем переменную окружения
ENV NODE_ENV=production 

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json из билдового образа
COPY --from=build /app/package.json /app/package-lock.json ./

# Устанавливаем только продакшн-зависимости
RUN npm ci --omit=dev

# Копируем собранное приложение
COPY --from=build /app/dist ./dist

# Открываем порт (если бек работает на 3000)
EXPOSE 3000

# Запускаем приложение
CMD ["node", "dist/main"]
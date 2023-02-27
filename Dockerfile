# build stage
FROM node:16

LABEL maintainer=18011468389@163.com

# 创建一个工作目录
WORKDIR /app

COPY . .

RUN yarn install --registry=https://registry.npm.taobao.org

RUN npm run build


EXPOSE 12005 3002

VOLUME ["app/public"]

CMD ["node", "dist/server.bundle.js"]
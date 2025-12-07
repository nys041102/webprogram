# 1) Node 20 이미지 사용
FROM node:20

# 2) 컨테이너 내부 경로 생성
WORKDIR /app

# 3) package.json 복사
COPY package*.json ./

# 4) 라이브러리 설치
RUN npm install

# 5) 나머지 코드 복사
COPY . .

# 6) 포트 개방 (Railway는 자동 감지)
EXPOSE 3000

# 7) 서버 실행 명령
CMD ["node", "server.js"]

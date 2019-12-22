# WebSystem_project
아주대학교 웹시스템설계 14조

이안규, 박지민, 권태성 - 총 3명


## 개요
넥슨의 피파온라인4 OPEN API를 이용하여 실제적인 선수의 경기 수치를 이용하여 사용자에게 웹으로 보여주는 Application입니다.

## 사용된 환경 & version
- window10 64bit
- @vue/cli 4.1.1
- nodejs v10.16.0
- express 4.16.1
- mongodb 4.0.10
- [FIFAONLINE4 API Spring boot Server](<https://github.com/lang0909/FifaOnline4Api>)

## 사용 시 주의사항
#### npm install 필요

```bash
cd frontend
npm install
cd ../
cd backend
npm intall
cd ../
cd frontend
npm run build
cd ../
cd backend
npm start
```

#### 선수이미지 다운로드 후 ../backend/ 에 저장
[FIFAONLINE PLAYER IMAGE](<https://drive.google.com/open?id=1Ajcyl4F8UVHaTOO-SsnB67WbMAhJdQNq>)

#### 데이터 다운로드 후 압축풀고 mongodb import
[TopRankerUsingData](<https://drive.google.com/open?id=1bCP2IcEyF6BN0YFBfpZf7bAfXreVjz-w>)

```bash
mongoimport --db fifaonline-spid --collection spid --type json --file spid.json

mongoimport --db fifaonline-top10000 --collection topRankerUsingAverage --type json --file topRankerUsingAverage.json
```

## 기능 설명

# WebSystem_project
웹시스템설계 14조

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
npm install
cd ../
cd frontend
npm run build
cd ../
cd backend
npm start
```

#### 선수이미지 다운로드 후 ../backend/ 에 저장
[FIFAONLINE PLAYER IMAGE](<https://github.com/lang0909/FIFAONLINE_PLAYER_IMAGE>)

#### 데이터 다운로드 후 압축풀고 mongodb import
[Data](<https://github.com/lang0909/FIFAONLINE_DATA>)

```bash
mongoimport --db fifaonline-spid --collection spid --file spid.json --jsonArray

mongoimport --db fifaonline-top10000 --collection topRankerUsingAverage --file topRankerUsingAverage.json

mongoimport --db Formation --collection formation --file formation.json

mongoimport --db Name --collection spid --file spid.json --jsonArray
```

#### 접속주소
[FIFAONLINE_COMPARE](<http://ec2-54-180-32-236.ap-northeast-2.compute.amazonaws.com:3000/>)

#### 기능 설명

- **Home**
    - 클릭 시 검색과 선수선택을 할 수 있는 처음화면으로 돌아옵니다.
    
    - **검색**
        - 검색한 선수이름으로 검색결과가 나옵니다.
        
    - **선택**
        - 선택 된 선수가 사용 된 모든 포지션 중 실제 300경기 이상 사용 된 포지션의 데이터만 보여줍니다.
        - 이 때 각 수치 중 가장 높은 수치에 해당하는 수치들은 붉은색으로 표시됩니다.
            - 300경기 이상의 데이터가 없는 경우 alert창이 생깁니다.
            - 각각의 차트 선택시 comment 입력가능한 화면으로 넘어갑니다.
            - apply comment 버튼을 누르게 되면 alert창이 생기고 comment가 밑에 입력됩니다.

- **Compare**
    - 선수를 검색하고 선택한 두명의 선수의 포지션의 데이터를 직접비교할 수 있습니다(300경기 이상 사용 된 겹치는 포지션의 데이터가 있는경우).
    
    - **담기**
        - 담기를 누르면 비교를 위한 비교하기 버튼이 생깁니다.
    
    - **비교하기**
        - 담기 버튼으로 넣은 두명의 선수의 300경기 이상 사용 된 겹치는 포지션의 데이터만 보여줍니다.
        - 비교하기 버튼을 누를 시 한명의 선수만 있거나 300경기 이상 사용 된 겹치는 포지션의 데이터가 없는 경우 alert창이 생깁니다.

- **Recommend**
    - 포메이션을 선택하고 포메이션의 각 포지션마다 원하는 수치로 top3의 정보를 보여줍니다.


## 시연 영상

**화면클릭시 영상으로 이동**

[![Video Label](http://img.youtube.com/vi/8j_WySiM2Tk/0.jpg)](https://www.youtube.com/watch?v=8j_WySiM2Tk)

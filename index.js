// const express = require("express") ;  옛날 즉 commonjs 방식
import express from "express"; // 현대 방식 module 방식
import cors from "cors";
// 도움말 및 기능 테스트 Swagger
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";

const app = express();
const port = 4000; // 서버에 접속시 포트번호
// cors 처리(웹브라우저로 접속시 보안관련 처리)
app.use(
  cors({
    origin: "*",
  })
);

// json 데이터를 사용하겠다고 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerSpec = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// REST API 요청 처리
// 첫페이지
app.get("/", function (req, res) {
  res.send("인터파크 API");
});
// 게시판 API (백엔드 호출 함수)
// get 은 프론트에서 자료 요청
// localhost:4000/board : 게시판 자료를 요청.
app.get("/board", (req, res) => {
  console.log("GET", req);
  // DB 에서 조건을 보고 결과를 {} 만들어서 [] 담아서준다.
  // MongoDB, MaraiDB(MySql)
  const result = [
    {
      number: 1,
      writer: "철수",
      title: "제목입니다.",
      contents: "내용입니다.",
    },
    {
      number: 2,
      writer: "영희",
      title: "영희입니다.",
      contents: "내용입니다.",
    },
    {
      number: 3,
      writer: "훈희",
      title: "훈희입니다.",
      contents: "내용입니다.",
    },
  ];
  res.send(result);
});

// post 는 프론트에서 백엔드로 자료 전송
// localhost:4000/board : 게시판 자료를 추가한다.
// axios.post("/board", {자료})
app.post("/board", (req, res) => {
  // console.log("POST", req);
  console.log("BODY 프론트가 보낸 데이터 ", req.body);
  // req.body 를 바탕으로 DB 에 내용 추가
  res.send("게시물 추가에 성공하였습니다.");
});

// 인터파크 API (백엔드 호출 함수)
// visual 영역에 출력할 자료 요청
// localhost:4000/visual
app.get("/visual", (req, res) => {
  const result = {
    total: 6,
    visual_1: {
      file: "images/v1.png",
      url: "",
    },
    visual_2: {
      file: "images/v2.jpg",
      url: "",
    },
    visual_3: {
      file: "images/v3.jpg",
      url: "",
    },
    visual_4: {
      file: "images/v4.jpg",
      url: "",
    },
    visual_5: {
      file: "images/v5.jpg",
      url: "",
    },
    visual_6: {
      file: "images/v6.png",
      url: "",
    },
  };
  res.send(result);
});
// recommend 영역에 출력할 자료 요청
// localhost:4000/visual
app.get("/recommend", (req, res) => {
  const result = {
    total: 12,
    good_1: {
      image: "images/recommend_1.jpg",
      discount: 47,
      price: 6090,
      desc: "[오쎈특가 쿠폰최종가 소형 5,070원] [2024년 달력 얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼, 모네, 고흐, 윤동주 등",
      url: "a.html",
    },
    good_2: {
      image: "images/recommend_2.jpg",
      discount: 38,
      price: 12900,
      desc: "유혜광 통등심돈까스 10장 (총 5팩)",
      url: "a.html",
    },
    good_3: {
      image: "images/recommend_3.jpg",
      discount: 42,
      price: 12900,
      desc: "[10/31 단하루/한정수량] 매일 어메이징 오트 언스위트 190ml 24팩 + 오리지널 6팩 증정",
      url: "a.html",
    },
    good_4: {
      image: "images/recommend_4.png",
      discount: 2,
      price: 8240,
      desc: "베베숲 센시티브 20매 휴대 캡 12팩 외 휴대용 아기 물티슈 모음 / 외출 필수품",
      url: "a.html",
    },
    good_5: {
      image: "images/recommend_5.jpg",
      discount: 22,
      price: 39000,
      desc: "★10월 마지막!★ 베어파우 키즈 방한 패딩 양털 부츠 베이비 남아 여아 아기 어린이 유아",
      url: "a.html",
    },
    good_6: {
      image: "images/recommend_6.jpg",
      discount: 29,
      price: 34900,
      desc: "[스포츠파크] 뉴발란스 남성 UNI 에센셜 스몰로고 맨투맨 4종택1",
      url: "a.html",
    },
    good_7: {
      image: "images/recommend_7.jpg",
      discount: 2,
      price: 22220,
      desc: "[더쎈위크] 롯데빼빼로 3종 x 20갑 (오리지널/아몬드/초코필드) 골라담기",
      url: "a.html",
    },
    good_8: {
      image: "images/recommend_8.jpg",
      discount: 35,
      price: 26900,
      desc: "[한정수량특가] 한양식품 국내산 꽃보다오징어 오리지날 260g+260g",
      url: "a.html",
    },
    good_9: {
      image: "images/recommend_9.jpg",
      discount: 14,
      price: 18260,
      desc: "샤오미 미지아 가습기2/미지아 스마트 살균가습기2/MJJSQ06DY/관부가세포함",
      url: "a.html",
    },
    good_10: {
      image: "images/recommend_10.jpg",
      discount: 18,
      price: 2930,
      desc: "[쇼핑앱특가2400원] 아이팝 무라벨 먹는샘물 생수 2L*6펫 / 하이트진로",
      url: "a.html",
    },
    good_11: {
      image: "images/recommend_11.jpg",
      discount: 25,
      price: 10410,
      desc: "제주 삼다수 2L 12병 (유/무라벨 랜덤발송)",
      url: "a.html",
    },
    good_12: {
      image: "images/slide_end_bt.svg",
      url: "go.html",
    },
  };
  res.send(result);
});

// tour 영역에 출력할 자료 요청
app.get("/tour", (req, res) => {
  const result = {
    total: 9,
    tour_1: {
      image: "images/tour_1.jpg",
      point: "히트상품",
      summary: "사이판 최대 워터파크 웨이브정글 이용가능",
      title: "[사이판5일]사이판 월드리조트_골드카드",
      price: 1049000,
      url: "b.html",
    },
    tour_2: {
      image: "images/tour_2.jpg",
      point: "국적기직항",
      summary: "라스베가스 준특급 2박, 5대특식 포함",
      title: "[미서부/단독/BEST] 3대도시+8대캐년 완전일주 7박10일 [아시아나]",
      price: 3399000,
      url: "b.html",
    },
    tour_3: {
      image: "images/tour_3.jpg",
      point: "강력특가",
      summary: "룸온니 초특가",
      title: "인터컨티넨탈 알펜시아 평창",
      price: 107000,
      url: "b.html",
    },
    tour_4: {
      image: "images/tour_4.png",
      point: "강력특가",
      summary: "디럭스 킹, 부분바다 전망, 리뉴얼 객실",
      title: "해운대 썬클라우드 호텔",
      price: 70000,
      url: "b.html",
    },
    tour_5: {
      image: "images/tour_5.jpg",
      point: "베스트셀러",
      summary: "최다판매 상품",
      title: "[부산-하노이 5일]★가족여행최고★하노이/하롱베이+옌뜨 5일",
      price: 679000,
      url: "b.html",
    },
    tour_6: {
      image: "images/tour_6.webp",
      point: "타이베이",
      summary: "시먼역 도보 3분, 4성급 모던 호텔",
      title: "저스트 슬립 시먼딩",
      price: 180885,
      url: "b.html",
    },
    tour_7: {
      image: "images/tour_7.jpg",
      point: "국적기직항",
      summary: "아시아나항공, 특급호텔",
      title: "북경/만리장성/서커스/이화원/전일정쉐라톤 4일",
      price: 299000,
      url: "b.html",
    },
    tour_8: {
      image: "images/tour_8.jpg",
      point: "소아동반인기",
      summary: "얼리 체크인 or 레이트 체크아웃 포함",
      title:
        "[더욱 오래 단둘이]푸꾸옥 5일_특급서비스 얼리체크인OR레이트체크아웃 풀만리조트",
      price: 740000,
      url: "b.html",
    },
    tour_9: {
      image: "images/tour_9.webp",
      point: "나트랑",
      summary: "공항 15분 거리, 논느억 해변에 위치",
      title: "빈펄 나트랑 베이 리조트 & 빌라",
      price: 124592,
      url: "b.html",
    },
  };
  res.send(result);
});

// 서버에서 Request 요청대기
app.listen(port, () => {
  console.log(`현재 웹서버가 ${port} 로 접속하였습니다.`);
});

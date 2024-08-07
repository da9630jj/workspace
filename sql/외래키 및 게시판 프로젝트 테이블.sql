-- 데이터베이스의 키 (KEY) 종류
-- KEY : 데이터베이스에서 각 행을 구분하는 식별자를 의미
-- 슈퍼키 (SUPER KEY) : 하나의 행을 식별할 수 있는 하나 이상의 컬럼
-- 후보키 (CANDIDATE KEY) : 기본 키가 될 수 있는 후보 
-- 기본키 (PRIMARY KEY, PK) : 후보키 중에 각 행을 구분짓기 위해 결정한 키
-- 대체키 (ALTERNATE KEY) :  후보키 중에서 기본키를 제외한 키
-- 외래키 (FOREIGN KEY, FK) : 다른 테이블의 기본키로 사용되는 키

-- 로그인, 게시글, 댓글 관련 기능 포함 게시판 프로젝트
-- 테이블 : 회원정보, 게시글 번호, 댓글 정보

-- 회원정보
-- USER : 일반회원
-- ADMIN : 관리자
CREATE TABLE BOARD_MEMBER(
	MEM_ID VARCHAR(50) PRIMARY KEY
	, MEM_PW VARCHAR(50) NOT NULL
	, MEM_NAME VARCHAR(50) NOT NULL
	, GENDER VARCHAR(10) -- 'male', 'female'
	, MEM_ROLE VARCHAR(20) DEFAULT 'USER'
);

-- 임시 회원 데이터
INSERT INTO board_member(MEM_ID, MEM_PW, MEM_NAME, GENDER, MEM_ROLE)
VALUES('java', '1111', '김자바', 'male', 'USER');
INSERT INTO board_member(MEM_ID, MEM_PW, MEM_NAME, GENDER, MEM_ROLE)
VALUES('admin', '1111', '관리자', 'female', 'ADMIN');

SELECT * FROM board_member;

-- 게시판 (회원만 게시글 작성 가능)
CREATE TABLE BOARD(
	BOARD_NUM INT AUTO_INCREMENT PRIMARY KEY
	, TITLE VARCHAR(50) NOT NULL
	, CONTENT VARCHAR(100)
	, MEM_ID VARCHAR(50) REFERENCES BOARD_MEMBER (MEM_ID) --외래키
	, CREATE_DATE DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 게시글 임시데이터
INSERT INTO board (TITLE, CONTENT, MEM_ID)
VALUES('1번글', '1번 내용', 'java');
INSERT INTO board (TITLE, CONTENT, MEM_ID)
VALUES('2번글', '2번 내용', 'java');
INSERT INTO board (TITLE, CONTENT, MEM_ID)
VALUES('3번글', '3번 내용', 'admin');

-- 댓글 (회원만 가능)
CREATE TABLE BOARD_REPLY(
	REPLY_NUM INT AUTO_INCREMENT PRIMARY KEY
	, REPLY_CONTENT VARCHAR(50) NOT NULL
	, REPLY_DATE DATETIME DEFAULT CURRENT_TIMESTAMP
	, MEM_ID VARCHAR(50) REFERENCES BOARD_MEMBER (MEM_ID)
	, BOARD_NUM INT REFERENCES BOARD(BOARD_NUM)
);

-- 댓글 임시데이터
INSERT INTO board_reply(REPLY_CONTENT, MEM_ID, BOARD_NUM)
VALUES('댓글 1', 'java', 3);
INSERT INTO board_reply(REPLY_CONTENT, MEM_ID, BOARD_NUM)
VALUES('댓글 2', 'java', 2);
INSERT INTO board_reply(REPLY_CONTENT, MEM_ID, BOARD_NUM)
VALUES('댓글 3', 'java', 3);
INSERT INTO board_reply(REPLY_CONTENT, MEM_ID, BOARD_NUM)
VALUES('댓글 4', 'admin', 3);
INSERT INTO board_reply(REPLY_CONTENT, MEM_ID, BOARD_NUM)
VALUES('댓글 5', 'admin', 2);

SELECT * FROM board_member;
SELECT * FROM board;
SELECT * FROM board_reply;


-- 데이터 조회 연습
-- 회원의 이름이 '김자바'인 회원이 작성한 게시글의
-- 글번호, 제목, 작성자 아이디, 작성자 이름을 조회, 작성일 기준 최신글부터 조회(내림차순)
SELECT BOARD_NUM, TITLE, B.MEM_ID, MEM_NAME
FROM board B, board_member BM
WHERE MEM_NAME = '김자바'
AND B.MEM_ID = BM.MEM_ID
ORDER BY CREATE_DATE DESC;

-- 모든 게시글의 글번호, 글 제목, 작성자 및 해당 글에 작성된
-- 댓글의  댓글 내용, 댓글 작성자, 댓글 작성일을 조회
-- 게시글 번호 기준 최신순으로 정렬 후 
-- 같은 게시글에 대한 댓글은 가장 최근에 달린 댓글 순으로 조회
SELECT B.BOARD_NUM, TITLE, B.MEM_ID, REPLY_CONTENT, BR.MEM_ID, REPLY_DATE
FROM board B, board_reply BR
WHERE B.BOARD_NUM= BR.BOARD_NUM
ORDER BY CREATE_DATE DESC, REPLY_DATE DESC;

-- 아이디가 'java'인 회원이 작성한 게시글의
-- 글제목, 내용, 작성자id, 작성자명, 작성자의 권한을 조회

SELECT TITLE, CONTENT, B.MEM_ID, MEM_NAME, MEM_ROLE
FROM board B, BOARD_MEMBER M
WHERE B.MEM_ID='java'
AND B.MEM_ID=M.MEM_ID;

-- 글번호가 5번 이하인 게시글의 
-- 글번호, 제목, 글 작성자를 조회하되,
-- 글번호 기준 오름차순으로 정렬

SELECT B.BOARD_NUM, TITLE, MEM_NAME
FROM board B, board_member M
WHERE B.BOARD_NUM <= 5
AND B.MEM_ID = M.MEM_ID
ORDER BY B.BOARD_NUM ASC; 

-- 2번 게시글 제목, 작성자ID 및 2번 게시글에 작성된 댓글 내용, 댓글 작성자ID 조회
SELECT TITLE, B.MEM_ID, REPLY_CONTENT, R.MEM_ID
FROM board B, board_reply R
WHERE B.BOARD_NUM =2
AND B.BOARD_NUM = R.BOARD_NUM;

-- 2번 게시글 제목, 작성자ID 및
-- 2번 게시글에 작성된 댓글 내용, 댓글 작성자ID, 댓글 작성자 이름을 조회
SELECT TITLE, B.MEM_ID, REPLY_CONTENT, R.MEM_ID, MEM_NAME
FROM board B, board_reply R, board_member M
WHERE B. BOARD_NUM =2
AND B.BOARD_NUM = R.BOARD_NUM
AND R.MEM_ID=M.MEM_ID;

-- 게시글번호, 게시글 제목, 게시글 작성자, 게시글작성일, 게시글 내용
-- 댓글 달린날짜, 댓글 작성자ID, 댓글 내용
SELECT B.BOARD_NUM, TITLE, B.MEM_ID, CREATE_DATE, CONTENT, REPLY_DATE, R.MEM_ID, REPLY_CONTENT
FROM board B, board_reply R
WHERE B.BOARD_NUM = R.BOARD_NUM;


CREATE TABLE TEST_ITEM(
	ITEM_CODE INT AUTO_INCREMENT PRIMARY KEY
	, ITEM_NAME VARCHAR(30) NOT NULL
);

INSERT INTO TEST_ITEM VALUES(1, '상품1');
INSERT INTO TEST_ITEM VALUES(2, '상품2');
INSERT INTO TEST_ITEM VALUES(3, '상품3');

CREATE TABLE TEST_ORDER(
	ORDER_NUM INT AUTO_INCREMENT PRIMARY KEY
	, BUYER VARCHAR(50) NOT NULL
	, ITEM_CODE INT NOT NULL REFERENCES TEST_ITEM (ITEM_CODE) ON DELETE CASCADE
);

INSERT INTO TEST_ORDER VALUES (1, '김자바', 1);
INSERT INTO TEST_ORDER VALUES (2, '김자바', 1);
INSERT INTO TEST_ORDER VALUES (3, '김자바', 2);
INSERT INTO TEST_ORDER VALUES (4, '김자바', NULL);

SELECT * FROM TEST_ITEM;
SELECT * FROM TEST_ORDER;

DROP TABLE TEST_ORDER;
DROP TABLE TEST_ITEM;

DELETE FROM TEST_ITEM WHERE ITEM_CODE = 1;


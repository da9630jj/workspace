CREATE TABLE LIST_USER (
	USER_NUM INT AUTO_INCREMENT PRIMARY KEY UNIQUE
	, ID VARCHAR(50) NOT NULL
	, PW VARCHAR(255) NOT NULL
	, USER_NAME VARCHAR(50) NOT NULL
	, EMAIL VARCHAR(100)
);

CREATE TABLE LIST_CATEGORY(
	CATE_CODE INT AUTO_INCREMENT PRIMARY KEY
	, CATE_NAME VARCHAR(100) NOT NULL
	, USER_NUM INT NOT NULL REFERENCES LIST_USER(USER_NUM) ON DELETE CASCADE
);

CREATE TABLE TASK(
	TASK_NUM INT NOT NULL AUTO_INCREMENT PRIMARY KEY
	, TITLE VARCHAR(255) NOT NULL
	, CONTENET TEXT
	, IS_DONE BOOLEAN DEFAULT FALSE
	, PRIORITY INT DEFAULT 3 CHECK (PRIORITY IN (1,2,3))
	, START_DATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	, END_DTE TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	, COLOR INT DEFAULT 8 CHECK (PRIORITY IN(1,2,3,4,5,6,7,8))
	, USER_NUM INT NOT NULL REFERENCES LIST_USER(USER_NUM) ON DELETE CASCADE
	, CATE_CODE INT NOT NULL REFERENCES LIST_CATEGORY(CATE_CODE) ON DELETE CASCADE
);

-- 테이블 문자셋 확인
SHOW CREATE TABLE LIST_CATEGORY;

-- 테이블 문자셋을 utf8mb4로 변경
ALTER TABLE LIST_CATEGORY CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


-- 기본 사용자 추가
INSERT INTO LIST_USER (ID, PW, USER_NAME, EMAIL)
VALUES 
('1', '1', 'Minjae', 'minjae@goole.com'),
('jane_smith', 'securepass', 'Jane Smith', 'jane.smith@example.com'),
('admin_user', 'admin123', 'Admin', 'admin@example.com');

-- 기본 카테고리 추가
INSERT INTO LIST_CATEGORY (CATE_NAME, USER_NUM)
VALUES 
('일', 1),
('중요', 1),
('취미', 1),
('Shopping', 2),
('Important', 3);


-- 기본 작업 추가
INSERT INTO TASK (TITLE, CONTENET, IS_DONE, PRIORITY, START_DATE, END_DTE, COLOR, USER_NUM, CATE_CODE)
VALUES
('Complete Project Report', 'Finish writing the project report and submit it by the end of the week.', FALSE, 1, '2025-01-22 10:00:00', '2025-01-24 17:00:00', 1, 1, 1),
('Buy Groceries', 'Get groceries for the week including vegetables and snacks.', FALSE, 3, '2025-01-22 12:00:00', '2025-01-23 15:00:00', 4, 2, 3),
('Doctor Appointment', 'Go for a routine checkup at the local clinic.', TRUE, 2, '2025-01-21 08:00:00', '2025-01-21 09:00:00', 5, 2, 2),
('Plan Weekend Trip', 'Make travel plans for the upcoming weekend trip.', FALSE, 2, '2025-01-22 14:00:00', '2025-01-25 10:00:00', 6, 1, 4);

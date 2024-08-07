CREATE TABLE CAR_INFO(
	MODEL_NUM INT PRIMARY KEY AUTO_INCREMENT
	, MODEL_NAME VARCHAR(50) NOT NULL
	, PRICE INT NOT NULL
	, COMPANY VARCHAR(50) NOT NULL
);

CREATE TABLE SALES_INFO(
	SALES_NUM INT PRIMARY KEY AUTO_INCREMENT
	, BUYER VARCHAR(50) NOT NULL
	, BUYER_TELNUM VARCHAR(50)
	, COLOR VARCHAR(50) NOT NULL
	, SALE_DATE DATETIME DEFAULT CURRENT_TIMESTAMP
	, MODEL_NUM INT NOT NULL REFERENCES CAR_INFO (MODEL_NUM)
);
INSERT INTO CAR_INFO(MODEL_NAME,PRICE, COMPANY)
VALUES('아반떼', 10000, '현대');

SELECT * FROM CAR_INFO;

DELETE FROM car_info
WHERE MODEL_NUM =2;

DROP TABLE car_info;
DROP TABLE sales_info;
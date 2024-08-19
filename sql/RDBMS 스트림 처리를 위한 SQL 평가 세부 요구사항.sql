-- 1.
CREATE TABLE MY_MEMBER(
	MEM_NUM INT AUTO_INCREMENT PRIMARY KEY
	, MEM_ID VARCHAR(50) NOT NULL
	, MEM_PW VARCHAR(50) NOT NULL
	, MEM_NAME VARCHAR(20) NOT NULL
	, MEM_AGE INT 
	, EMAIL VARCHAR(50)
);

-- 2.
INSERT INTO MY_MEMBER VALUES(1, 'MEMID', 'MEMPW', 'MEMNAME', 20 , 'EMAIL');
DELETE FROM MY_MEMBER;

SELECT * FROM MY_MEMBER;

-- 3.
UPDATE MY_MEMBER
SET MEM_NAME='김자바', MEM_ID='KIMJAVA'
WHERE MEM_NUM=1;

-- 4.
SELECT EMPNO, ENAME, SAL, COMM
FROM emp
WHERE SAL<=500
AND SAL>= 300
AND COMM IS NOT NULL;

-- 5.
SELECT EMPNO, ENAME, HIREDATE
FROM emp
WHERE ENAME LIKE '%기'
OR ENAME LIKE '%김%'
ORDER BY EMPNO DESC;

-- 6.
SELECT EMPNO, ENAME, DEPTNO,
	CASE
		WHEN DEPTNO =10 THEN '인사부'
		WHEN DEPTNO =20 THEN '영업부'
		WHEN DEPTNO =30 THEN '개발부'
		WHEN DEPTNO =40 THEN '생산부'
	END AS 부서명
FROM EMP;

-- 7.
SELECT EMPNO, ENAME, HIREDATE, COMM,
IFNULL(COMM, 0)
FROM EMP
WHERE MONTH(HIREDATE)=1;

-- 8.
SELECT DEPTNO, SUM(SAL), AVG(SAL), AVG(IFNULL(COMM, 0))
FROM EMP
GROUP BY DEPTNO
ORDER BY SUM(SAL) DESC;

-- 9.
SELECT EMPNO, ENAME, HIREDATE, SAL, DEPTNO, (SELECT DNAME FROM DEPT WHERE DNAME='인사부')
FROM EMP
WHERE DEPTNO = (SELECT DEPTNO FROM DEPT WHERE DNAME='인사부');

SELECT * FROM emp;
SELECT * FROM dept;

-- 10.
SELECT EMPNO, ENAME, HIREDATE, SAL, E.DEPTNO, DNAME
FROM EMP E, DEPT D
WHERE E.DEPTNO = D.DEPTNO
AND D.DNAME !='인사부'
AND SAL>=500
ORDER BY EMPNO DESC, ENAME ASC;
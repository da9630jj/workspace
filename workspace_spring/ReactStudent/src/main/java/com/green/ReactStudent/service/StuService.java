package com.green.ReactStudent.service;

import com.green.ReactStudent.vo.StudentVO;

import java.util.List;

public interface StuService {
    List<StudentVO> selectStu();

    void insertStu(StudentVO studentVO);

    StudentVO detail(int stuNum);

    List<StudentVO> delStu();

    void delete(int stuNum);

    void putScore(StudentVO studentVO);

    StudentVO getScore(int stuNum);
}

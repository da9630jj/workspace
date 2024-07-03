package com.green.ListPractice.controller;

import com.green.ListPractice.service.StudentService;
import com.green.ListPractice.vo.StudentVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.lang.model.element.Name;
import java.util.ArrayList;
import java.util.List;

@Controller
public class StudentController {
    //학생 여러명이 저장될 수 있는 공간
    StudentService studentService = new StudentService();

    @GetMapping("/stu_list")
    public String stu_list(Model model){
        //학생 목록 데이터 받아오기
        List<StudentVO> list =studentService.getStuList();
        //학생 목록을 html로 전달
        model.addAttribute("stuList", list);
        return "stu_list";
    }
    //학생 등록 페이지
    @GetMapping("/reg_student")
    public String reg_student(){
        return "reg_student";
    }
    //학생 등록 + 학생 목록 페이지로 이동
    @PostMapping("/regStu")
    public String regStu(StudentVO studentVO){
        studentService.regStudent(studentVO);
        return "redirect:/stu_list";
    }
    @GetMapping("/student_detail")
    public String student_detail(@RequestParam(name = "grade") int grade, Model model){
        //내가 클릭한 학생 한명을 검색(학번을 알면 된다.)
        StudentVO student = studentService.getStuDetail(grade);
        //학생 상세 정보 데이터를 html로 전달
        model.addAttribute("student",student);
        return "student_detail";
    }
    //학생 삭제 + 목록페이지로 이동
    @GetMapping("/stuDelete")
    public String stuDelete(@RequestParam(name = "grade") int grade){
        //학생 삭제
        studentService.deleteStu(grade);
        return "redirect:/stu_list";
    }
    //학생 정보 수정 페이지
    @GetMapping("/updateForm")
    public String updateForm(@RequestParam(name = "grade") int grade,Model model){
        //정보를 수정할 학생의 원래 정보를 html에 전달
        //1. 정보를 수정할 학생 한 명을 pick
        StudentVO student = studentService.getStuDetail(grade);
        //2. 수정할 학생을 html 로 전달
        model.addAttribute("student", student);
        return "update_student";
    }
    @PostMapping("/updateStu")
    public String updateStu(StudentVO studentVO){
        //학생 정보 수정
        studentService.updateStu(studentVO);

        return "redirect:/student_detail?grade="+studentVO.getGrade();
    }
}

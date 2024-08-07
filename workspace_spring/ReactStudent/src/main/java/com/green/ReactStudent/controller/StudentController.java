package com.green.ReactStudent.controller;

import com.green.ReactStudent.service.StuService;
import com.green.ReactStudent.vo.StudentVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentController {
    @Resource(name="stuService")
    private StuService stuService;

    @GetMapping("/list")
    public List<StudentVO> selectStu(){
        List<StudentVO> stuList = stuService.selectStu();
        return stuList;
    }
    @PostMapping("/insertStu")
    public void insertStu(@RequestBody StudentVO studentVO){
        stuService.insertStu(studentVO);

    }

    @GetMapping("/detail/{stuNum}")
    public StudentVO detail(@PathVariable("stuNum") int stuNum) {
        return stuService.detail(stuNum);
    }

    @GetMapping("/delStu")
    public List<StudentVO> delStu() {
        return stuService.delStu();
    }

    @DeleteMapping("/delete/{stuNum}")
    public void delete(@PathVariable(name = "stuNum") int stuNum){
        stuService.delete(stuNum);
    }

    @PutMapping("/putScore/{stuNum}")
    public void putScore(@RequestBody StudentVO studentVO){
        stuService.putScore(studentVO);
    }

    @GetMapping("/getScore/{stuNum}")
    public StudentVO getScore(@PathVariable(name = "stuNum") int stuNum){
        return stuService.getScore(stuNum);
    }

}

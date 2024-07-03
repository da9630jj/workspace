package com.green.DB_Score.controller;

import com.green.DB_Score.service.ScoreServiceImpl;
import com.green.DB_Score.vo.ScoreVO;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

@Controller
public class ScoreController {
    @Resource(name = "scoreService")
    private ScoreServiceImpl scoreService;

    @GetMapping("/stuList")
    public String stuList(Model model){
        List<ScoreVO> list = scoreService.select();
        model.addAttribute("stuList", list);
        return "stu_list";
    }
    @GetMapping("/regStudent")
    public String regStudent(){
        return "reg_student";
    }
    @PostMapping("/register")
    public String register(ScoreVO scoreVO){
        scoreService.insert(scoreVO);
        return "redirect:/stuList";
    }
    @GetMapping("/studentDetail")
    public String studentDetail(ScoreVO scoreVO, Model model){
        ScoreVO student = scoreService.selectNum(scoreVO);
        model.addAttribute("student", student);
        return "student_detail";
    }
    @GetMapping("/updateForm")
    public String updateForm(ScoreVO scoreVO, Model model){
        model.addAttribute("student", scoreVO);
        return "update_form";
    }
    @PostMapping("/update")
    public String update(ScoreVO scoreVO){
        scoreService.update(scoreVO);
        return "redirect:/stuList";
    }
    @GetMapping("/delete")
    public String delete(ScoreVO scoreVO){
        scoreService.delete(scoreVO);
        return "redirect:/stuList";
    }
}

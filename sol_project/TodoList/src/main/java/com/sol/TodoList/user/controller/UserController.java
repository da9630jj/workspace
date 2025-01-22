package com.sol.TodoList.user.controller;

import com.sol.TodoList.user.service.UserService;
import com.sol.TodoList.user.service.UserServiceImpl;
import com.sol.TodoList.user.vo.UserVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    @Resource(name = "userService")
    private UserService userService;

    @PostMapping("/login")
    private UserVO login(@RequestBody UserVO userVO){
        return userService.login(userVO);
    }
}

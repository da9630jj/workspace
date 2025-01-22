package com.sol.TodoList.task.controller;

import com.sol.TodoList.task.service.TaskService;
import com.sol.TodoList.user.service.UserService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/task")
public class TaskController {
    @Resource(name = "taskService")
    private TaskService taskService;
}

package com.sol.TodoList.category.controller;

import com.sol.TodoList.category.service.CategoryService;
import com.sol.TodoList.user.service.UserService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/category")
public class CategoryController {
    @Resource(name = "categoryService")
    private CategoryService categoryService;
}

package com.sol.TodoList.task.service;

import com.sol.TodoList.category.service.CategoryService;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("taskService")
public class TaskServiceImpl implements TaskService {
    @Autowired
    private SqlSession sqlSession;
}

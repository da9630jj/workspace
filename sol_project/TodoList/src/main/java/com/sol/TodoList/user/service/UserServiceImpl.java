package com.sol.TodoList.user.service;

import com.sol.TodoList.task.service.TaskService;
import com.sol.TodoList.user.vo.UserVO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("userService")
public class UserServiceImpl implements UserService {
    @Autowired
    private SqlSession sqlSession;

    @Override
    public UserVO login(UserVO userVO) {
        return sqlSession.selectOne("userMapper.login", userVO);
    }
}

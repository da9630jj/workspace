package com.sol.TodoList.task.vo;

import lombok.Data;

import java.util.Date;

@Data
public class TaskVO {
    private int taskNum;
    private String title;
    private String content;
    private boolean isDone;
    private int priority;
    private Date startDate;
    private Date endDate;
    private int color;
    private int userNum;
    private int cateCode;
}

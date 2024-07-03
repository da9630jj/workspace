package com.green.DataPractice.vo;

import java.util.Arrays;

public class OrderVO {
    private String chicken;
    private int num;
    private String[] plus;
    private String request;

    public String getChicken() {
        return chicken;
    }

    public void setChicken(String chicken) {
        this.chicken = chicken;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public String[] getPlus() {
        return plus;
    }

    public void setPlus(String[] plus) {
        this.plus = plus;
    }

    public String getRequest() {
        return request;
    }

    public void setRequest(String request) {
        this.request = request;
    }

    @Override
    public String toString() {
        return "OrderVO{" +
                "chicken='" + chicken + '\'' +
                ", num=" + num +
                ", plus=" + Arrays.toString(plus) +
                ", request='" + request + '\'' +
                '}';
    }
}

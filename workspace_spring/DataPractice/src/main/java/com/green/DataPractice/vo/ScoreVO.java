package com.green.DataPractice.vo;

import java.util.Arrays;

public class ScoreVO {
    private String name;
    private int grade;
    private String[] tellNum;
    private String gender;
    private int korScore;
    private int mathScore;
    private int engScore;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    public String[] getTellNum() {
        return tellNum;
    }

    public void setTellNum(String[] tellNum) {
        this.tellNum = tellNum;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public int getKorScore() {
        return korScore;
    }

    public void setKorScore(int korScore) {
        this.korScore = korScore;
    }

    public int getMathScore() {
        return mathScore;
    }

    public void setMathScore(int mathScore) {
        this.mathScore = mathScore;
    }

    public int getEngScore() {
        return engScore;
    }

    public void setEngScore(int engScore) {
        this.engScore = engScore;
    }

    @Override
    public String toString() {
        return "ScoreVO{" +
                "name='" + name + '\'' +
                ", grade=" + grade +
                ", tellNum=" + Arrays.toString(tellNum) +
                ", gender='" + gender + '\'' +
                ", korScore=" + korScore +
                ", mathScore=" + mathScore +
                ", engScore=" + engScore +
                '}';
    }
}

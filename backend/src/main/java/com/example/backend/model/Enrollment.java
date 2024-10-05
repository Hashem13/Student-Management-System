package com.example.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "registrations") // Update to match the DB table name
public class Enrollment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "course_id", nullable = false)
    private Course course;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserInfo userInfo;

    // Constructors
    public Enrollment() {}

    public Enrollment(Course course, UserInfo userInfo) {
        this.course = course;
        this.userInfo = userInfo;
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public UserInfo getUser() {
        return userInfo;
    }

    public void setUser(UserInfo userInfo) {
        this.userInfo = userInfo;
    }
}
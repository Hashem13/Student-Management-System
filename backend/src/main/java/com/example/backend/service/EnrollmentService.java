package com.example.backend.service;

import com.example.backend.model.Enrollment;
import com.example.backend.model.Course;
import com.example.backend.model.UserInfo;
import com.example.backend.repository.EnrollmentRepository;
import com.example.backend.repository.CourseRepository; // Make sure you have this
import com.example.backend.repository.UserRepository; // Make sure you have this
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnrollmentService {

    @Autowired
    private EnrollmentRepository enrollmentRepository;

    @Autowired
    private CourseRepository courseRepository; // Add CourseRepository

    @Autowired
    private UserRepository userInfoRepository; // Add UserInfoRepository

    // Save enrollment method
    public Enrollment saveEnrollment(Enrollment enrollment) {
        // Optionally validate course and user here
        return enrollmentRepository.save(enrollment);
    }

    // New method to enroll user in a course
    public Enrollment enrollUserInCourse(Long userId, Long courseId) {
        UserInfo userInfo = userInfoRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found"));

        Enrollment enrollment = new Enrollment(course, userInfo);
        return enrollmentRepository.save(enrollment);
    }

    // Other service methods
    public List<Enrollment> getAllEnrollments() {
        return enrollmentRepository.findAll();
    }

    public Enrollment getEnrollmentById(Long id) {
        return enrollmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Enrollment not found"));
    }

    public void deleteEnrollment(Long id) {
        enrollmentRepository.deleteById(id);
    }
}

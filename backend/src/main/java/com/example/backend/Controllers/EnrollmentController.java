package com.example.backend.Controllers;

import com.example.backend.model.Enrollment;
import com.example.backend.service.EnrollmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/enrollments")
public class EnrollmentController {

    @Autowired
    private EnrollmentService enrollmentService;

    @PreAuthorize("hasAuthority('ROLE_USER')")
    @GetMapping
    public List<Enrollment> getAllEnrollments() {
        return enrollmentService.getAllEnrollments();
    }

    @PreAuthorize("hasAuthority('ROLE_USER')")
    @GetMapping("/{id}")
    public Enrollment getEnrollmentById(@PathVariable Long id) {
        return enrollmentService.getEnrollmentById(id);
    }

    @PreAuthorize("hasAuthority('ROLE_USER')")
    @PostMapping("/enroll")
    public Enrollment enrollUser(@RequestBody Enrollment enrollment) {
        return enrollmentService.enrollUserInCourse(enrollment.getUser().getId(), enrollment.getCourse().getId());
    }

    @PreAuthorize("hasAuthority('ROLE_USER')")
    @DeleteMapping("/{id}")
    public void deleteEnrollment(@PathVariable Long id) {
        enrollmentService.deleteEnrollment(id);
    }

    // New method to get enrollments by user ID
    @PreAuthorize("hasAuthority('ROLE_USER')")
    @GetMapping("/user/{userId}")
    public List<Enrollment> getEnrollmentsByUserId(@PathVariable Long userId) {
        return enrollmentService.getEnrollmentsByUserId(userId);
    }

}

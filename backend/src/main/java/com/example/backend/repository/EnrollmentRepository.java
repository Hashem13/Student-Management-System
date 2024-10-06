package com.example.backend.repository;

import com.example.backend.model.Enrollment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EnrollmentRepository extends JpaRepository<Enrollment, Long> {
    List<Enrollment> findByUserInfo_Id(Long userId); // Note the "_Id" to access the user id

}

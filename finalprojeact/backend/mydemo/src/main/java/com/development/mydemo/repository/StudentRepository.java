// package com.development.mydemo.repository;

// import org.springframework.data.jpa.repository.JpaRepository;

// import com.development.mydemo.model.Student;

// public interface StudentRepo extends JpaRepository<Student,Integer>{
    
// }










package com.development.mydemo.repository;

import com.development.mydemo.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
}

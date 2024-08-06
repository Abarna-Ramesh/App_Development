// package com.development.mydemo.service;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.development.mydemo.model.Student;
// import com.development.mydemo.repository.StudentRepo;

// @Service
// public class StudentService {
//     @Autowired
//     StudentRepo studentRepo;

//     //post and create 
//     public Student createbBookDetails(Student student)
//     {
//         return studentRepo.save(student);
//     }

//     //get
//     public List<Student> getBookDetails()
//     {
//         return studentRepo.findAll();
//     }

//     //get by id
//     public Student getBookById(int id)
//     {
//         return  studentRepo.findById(id).orElse(null);
//     }

//     //update or put
//     public boolean updateBookDetails(int id,Student student)
//     {
//         if(this.getStudentById(id)==null)
//         {
//             return false;
//         }
//         try{
//             studentRepo.save(student);
//         }
//         catch(Exception e)
//         {
//             return false;
//         }
//         return true;
//     }

//     private Object getStudentById(int id) {
//         // TODO Auto-generated method stub
//         throw new UnsupportedOperationException("Unimplemented method 'getStudentById'");
//     }

//     //delete
//     public boolean deleteBookDetails(int id)
//     {
//         if(this.getStudentById(id)==null)
//         {
//             return false;
//         }
//         studentRepo.deleteById(id);
//         return true;
//     }
// }



package com.development.mydemo.service;

import com.development.mydemo.model.Student;
import com.development.mydemo.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Optional<Student> getStudentById(Long studentid) {
        return studentRepository.findById(studentid);
    }

    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    public void deleteStudent(Long studentid) {
        studentRepository.deleteById(studentid);
    }
}

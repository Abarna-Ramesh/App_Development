
package com.example.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;


import com.example.backend.model.Book;
public interface BookRepo extends JpaRepository<Book,Integer>{
    
}

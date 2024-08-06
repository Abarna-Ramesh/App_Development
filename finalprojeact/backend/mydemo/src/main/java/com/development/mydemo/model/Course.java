package com.development.mydemo.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Course {

    public enum Category {
        PYTHON, JAVA, BOOTSTRAP, DATA_SCIENCE, MACHINE_LEARNING, WEB_DEVELOPMENT, CYBERSECURITY, SQL, REACT, ANDROID
    }
    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "student_id", nullable = false)
    private Student student;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String title;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Category category;

    @Column(length = 1000)
    private String description;

    @Column(nullable = false)
    private String instructorName;

    @Column
    private LocalDate startDate;

    @Column
    private LocalDate endDate;

    @Column
    private Integer durationHours; // Total duration in hours

    @Column
    private Double price; // Course price

    @Column
    private Double rating; // Average rating (e.g., 4.5)

    @ElementCollection
    @CollectionTable(name = "course_tags", joinColumns = @JoinColumn(name = "course_id"))
    @Column(name = "tag")
    private List<String> tags; // List of tags for better searchability

    @Column
    private Integer enrollmentCount; // Number of students enrolled

    @Column(nullable = false)
    private Boolean isPublished; // Indicates whether the course is published

    // Default constructor
    public Course() {}

    // Parameterized constructor
    public Course(String title, Category category, String description, String instructorName,
                   LocalDate startDate, LocalDate endDate, Integer durationHours, Double price,
                   Double rating, List<String> tags, Integer enrollmentCount, Boolean isPublished) {
        this.title = title;
        this.category = category;
        this.description = description;
        this.instructorName = instructorName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.durationHours = durationHours;
        this.price = price;
        this.rating = rating;
        this.tags = tags;
        this.enrollmentCount = enrollmentCount;
        this.isPublished = isPublished;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getInstructorName() {
        return instructorName;
    }

    public void setInstructorName(String instructorName) {
        this.instructorName = instructorName;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public Integer getDurationHours() {
        return durationHours;
    }

    public void setDurationHours(Integer durationHours) {
        this.durationHours = durationHours;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    public Integer getEnrollmentCount() {
        return enrollmentCount;
    }

    public void setEnrollmentCount(Integer enrollmentCount) {
        this.enrollmentCount = enrollmentCount;
    }

    public Boolean getIsPublished() {
        return isPublished;
    }

    public void setIsPublished(Boolean isPublished) {
        this.isPublished = isPublished;
    }
}

















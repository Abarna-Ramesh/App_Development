// AvailableCourses.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const AvailableCourses = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Available Courses
      </Typography>
      <Typography variant="body1" paragraph>
        Here is a list of our available courses:
      </Typography>
      <ul>
        <li>Course 1: Introduction to Programming</li>
        <li>Course 2: Advanced Web Development</li>
        <li>Course 3: Data Science with Python</li>
        <li>Course 4: Machine Learning Basics</li>
        <li>Course 5: UI/UX Design Fundamentals</li>
      </ul>
    </Box>
  );
};

export default AvailableCourses;

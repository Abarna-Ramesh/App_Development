import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f7f9fc;
`;

const Navbar = styled.nav`
  background-color: #007bff;
  padding: 1rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavTitle = styled.h1`
  margin: 0;
  font-size: 24px;
`;

const NavLinks = styled.div`
  a {
    color: white;
    margin-left: 1rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const MainContent = styled.main`
  padding: 2rem;
  flex: 1;
  overflow-y: auto;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-align: center;
  flex: 1;
  margin: 0 1rem;

  h2 {
    margin: 0;
    font-size: 32px;
  }

  p {
    color: #666;
  }
`;

const RecentActivities = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const ActivityList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #ddd;

    &:last-child {
      border-bottom: none;
    }
  }
`;

const FooterText = styled.p`
  text-align: center;
  margin-top: 2rem;
  color: #666;
`;

function AdminDashboard() {
  return (
    <Container>
      <Navbar>
        <NavTitle>Admin Dashboard</NavTitle>
        <NavLinks>
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">Users</a>
          <a href="#">Settings</a>
        </NavLinks>
      </Navbar>
      <MainContent>
        <StatsContainer>
          <StatCard>
            <h2>150</h2>
            <p>Active Courses</p>
          </StatCard>
          <StatCard>
            <h2>5000</h2>
            <p>Total Users</p>
          </StatCard>
          <StatCard>
            <h2>300</h2>
            <p>New Enrollments</p>
          </StatCard>
        </StatsContainer>
        <RecentActivities>
          <h2>Recent Activities</h2>
          <ActivityList>
            <li>User John Doe enrolled in "React for Beginners"</li>
            <li>New course "Advanced JavaScript" created</li>
            <li>User Jane Smith completed "Intro to Python"</li>
            <li>Course "Data Science 101" updated</li>
            <li>User Alex Johnson left a review on "Machine Learning Basics"</li>
          </ActivityList>
        </RecentActivities>
      </MainContent>
      <FooterText>© 2024 E-Learning Platform. All rights reserved.</FooterText>
    </Container>
  );
}

export default AdminDashboard;

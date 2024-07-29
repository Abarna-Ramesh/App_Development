// import React from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #f7f9fc;
// `;

// const LoginBox = styled.div`
//   background: white;
//   border-radius: 8px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//   padding: 2rem;
//   width: 400px;
//   text-align: center;
// `;

// const Title = styled.h1`
//   margin-bottom: 1.5rem;
//   font-size: 24px;
//   color: #333;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin-bottom: 1rem;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   font-size: 16px;

//   &:focus {
//     border-color: #007bff;
//     outline: none;
//   }
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 10px;
//   background-color: #007bff;
//   border: none;
//   border-radius: 4px;
//   color: white;
//   font-size: 16px;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const FooterText = styled.p`
//   margin-top: 1rem;
//   font-size: 14px;
//   color: #666;

//   a {
//     color: #007bff;
//     text-decoration: none;

//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// function AdminLogin() {
//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log('Login attempt');
//   };

//   return (
//     <Container>
//       <LoginBox>
//         <Title>Admin Login</Title>
//         <form onSubmit={handleLogin}>
//           <Input type="email" placeholder="Email" required />
//           <Input type="password" placeholder="Password" required />
//           <Button type="submit">Login</Button>
//         </form>
//         <FooterText>
//           Forgot your password? <a href="#">Reset it here</a>
//         </FooterText>
//       </LoginBox>
//     </Container>
//   );
// }

// export default AdminLogin;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f9fc;
`;

const LoginBox = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 400px;
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 24px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const FooterText = styled.p`
  margin-top: 1rem;
  font-size: 14px;
  color: #666;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function AdminLogin() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt');

    // Navigate to the Admin Dashboard on successful login
    navigate('/admin-dashboard'); // Adjust the route as necessary
  };

  return (
    <Container>
      <LoginBox>
        <Title>Admin Login</Title>
        <form onSubmit={handleLogin}>
          <Input type="email" placeholder="Email" required />
          <Input type="password" placeholder="Password" required />
          <Button type="submit">Login</Button>
        </form>
        <FooterText>
          Forgot your password? <a href="#">Reset it here</a>
        </FooterText>
      </LoginBox>
    </Container>
  );
}

export default AdminLogin;

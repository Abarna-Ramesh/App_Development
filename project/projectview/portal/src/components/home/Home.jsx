
// // import * as React from 'react';
// // import { styled, useTheme } from '@mui/material/styles';
// // import Box from '@mui/material/Box';
// // import Drawer from '@mui/material/Drawer';
// // import CssBaseline from '@mui/material/CssBaseline';
// // import MuiAppBar from '@mui/material/AppBar';
// // import Toolbar from '@mui/material/Toolbar';
// // import List from '@mui/material/List';
// // import Typography from '@mui/material/Typography';
// // import Divider from '@mui/material/Divider';
// // import IconButton from '@mui/material/IconButton';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// // import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// // import ListItem from '@mui/material/ListItem';
// // import ListItemButton from '@mui/material/ListItemButton';
// // import ListItemIcon from '@mui/material/ListItemIcon';
// // import ListItemText from '@mui/material/ListItemText';
// // import InboxIcon from '@mui/icons-material/MoveToInbox';
// // import MailIcon from '@mui/icons-material/Mail';
// // import DashboardIcon from '@mui/icons-material/Dashboard';
// // import LoginIcon from '@mui/icons-material/Login';
// // import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
// // import { SiCoursera } from "react-icons/si";
// // import { FaBook } from "react-icons/fa";
// // import { HiUsers } from "react-icons/hi2";
// // import { RiAdminFill } from "react-icons/ri"; // Import the RiAdminFill icon
// // import ExpandLess from '@mui/icons-material/ExpandLess';
// // import ExpandMore from '@mui/icons-material/ExpandMore';
// // import Button from '@mui/material/Button'; // Import Button component
// // import { useNavigate } from 'react-router-dom'; // Import useNavigate

// // const drawerWidth = 240;

// // const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
// //   ({ theme, open }) => ({
// //     flexGrow: 1,
// //     padding: theme.spacing(3),
// //     transition: theme.transitions.create('margin', {
// //       easing: theme.transitions.easing.sharp,
// //       duration: theme.transitions.duration.leavingScreen,
// //     }),
// //     marginLeft: `-${drawerWidth}px`,
// //     ...(open && {
// //       transition: theme.transitions.create('margin', {
// //         easing: theme.transitions.easing.easeOut,
// //         duration: theme.transitions.duration.enteringScreen,
// //       }),
// //       marginLeft: 0,
// //     }),
// //   }),
// // );

// // const AppBar = styled(MuiAppBar, {
// //   shouldForwardProp: (prop) => prop !== 'open',
// // })(({ theme, open }) => ({
// //   transition: theme.transitions.create(['margin', 'width'], {
// //     easing: theme.transitions.easing.sharp,
// //     duration: theme.transitions.duration.leavingScreen,
// //   }),
// //   ...(open && {
// //     width: `calc(100% - ${drawerWidth}px)`,
// //     marginLeft: `${drawerWidth}px`,
// //     transition: theme.transitions.create(['margin', 'width'], {
// //       easing: theme.transitions.easing.easeOut,
// //       duration: theme.transitions.duration.enteringScreen,
// //     }),
// //   }),
// // }));

// // const DrawerHeader = styled('div')(({ theme }) => ({
// //   display: 'flex',
// //   alignItems: 'center',
// //   padding: theme.spacing(0, 1),
// //   ...theme.mixins.toolbar,
// //   justifyContent: 'flex-end',
// // }));

// // export default function Dashboard() {
// //   const theme = useTheme();
// //   const [open, setOpen] = React.useState(false);
// //   const [usersOpen, setUsersOpen] = React.useState(false);
// //   const navigate = useNavigate(); // Initialize useNavigate

// //   const handleDrawerOpen = () => {
// //     setOpen(true);
// //   };

// //   const handleDrawerClose = () => {
// //     setOpen(false);
// //   };

// //   const handleUsersClick = () => {
// //     setUsersOpen(!usersOpen);
// //   };

// //   const handleLearnersClick = () => {
// //     alert('Learners button clicked');
// //   };

// //   const handleNavigate = (path) => {
// //     navigate(path); // Navigate to the specified path
// //   };

// //   return (
// //     <Box sx={{ display: 'flex' }}>
// //       <CssBaseline />
// //       <AppBar position="fixed" open={open}>
// //         <Toolbar>
// //           <IconButton
// //             color="inherit"
// //             aria-label="open drawer"
// //             onClick={handleDrawerOpen}
// //             edge="start"
// //             sx={{ mr: 2, ...(open && { display: 'none' }) }}
// //           >
// //             <MenuIcon />
// //           </IconButton>
// //           <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
// //             Persistent drawer
// //           </Typography>
// //           <Box>
// //             <Button color="inherit" onClick={() => handleNavigate('/login')}>
// //               Login
// //             </Button>
// //             <Button color="inherit" onClick={() => handleNavigate('/register')}>
// //               Register
// //             </Button>
// //           </Box>
// //         </Toolbar>
// //       </AppBar>
// //       <Drawer
// //         sx={{
// //           width: drawerWidth,
// //           flexShrink: 0,
// //           '& .MuiDrawer-paper': {
// //             width: drawerWidth,
// //             boxSizing: 'border-box',
// //           },
// //         }}
// //         variant="persistent"
// //         anchor="left"
// //         open={open}
// //       >
// //         <DrawerHeader>
// //           <IconButton onClick={handleDrawerClose}>
// //             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
// //           </IconButton>
// //         </DrawerHeader>
// //         <Divider />
// //         <List>
// //           {[
// //             { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
// //             { text: 'LoginPage', icon: <LoginIcon />, path: '/login' },
// //             { text: 'Register', icon: <AppRegistrationIcon />, path: '/register' },
// //             { text: 'Courses', icon: <SiCoursera size={24} />, path: '/courses' },
// //           ].map((item, index) => (
// //             <ListItem key={item.text} disablePadding>
// //               <ListItemButton onClick={() => handleNavigate(item.path)}>
// //                 <ListItemIcon>{item.icon}</ListItemIcon>
// //                 <ListItemText primary={item.text} />
// //               </ListItemButton>
// //             </ListItem>
// //           ))}
// //         </List>
// //         <Divider />
// //         <List>
// //           {['Question Bank', 'Users', 'Admin'].map((text, index) => (
// //             <React.Fragment key={text}>
// //               <ListItem disablePadding>
// //                 <ListItemButton onClick={text === 'Users' ? handleUsersClick : null}>
// //                   <ListItemIcon>
// //                     {index === 0 ? <FaBook size={24} /> 
// //                     : index === 1 ? <HiUsers size={24} /> 
// //                     : index === 2 ? <RiAdminFill size={24} /> 
// //                     : index % 2 === 0 ? <InboxIcon /> 
// //                     : <MailIcon />}
// //                   </ListItemIcon>
// //                   <ListItemText primary={text} />
// //                   {text === 'Users' ? (usersOpen ? <ExpandLess /> : <ExpandMore />) : null}
// //                 </ListItemButton>
// //               </ListItem>
// //               {text === 'Users' && usersOpen && (
// //                 <List component="div" disablePadding>
// //                   <ListItemButton sx={{ pl: 4 }} onClick={handleLearnersClick}>
// //                     <ListItemText primary="Learners" />
// //                   </ListItemButton>
// //                 </List>
// //               )}
// //             </React.Fragment>
// //           ))}
// //         </List>
// //       </Drawer>
// //       <Main open={open}>
// //         <DrawerHeader />
// //         <Typography paragraph>
// //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
// //           tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
// //           enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
// //           imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
// //           Convallis convallis tellus id interdum velit laoreet id donec ultrices.
// //           Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
// //           adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
// //           nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
// //           leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
// //           feugiat vivamus at augue. At augue eget arcu dictum varius duis at
// //           consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
// //           sapien faucibus et molestie ac.
// //         </Typography>
// //         <Typography paragraph>
// //           Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
// //           eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
// //           neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
// //           tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
// //           sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
// //           tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
// //           gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
// //           et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
// //           tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
// //           eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
// //           posuere sollicitudin aliquam ultrices sagittis orci a.
// //         </Typography>
// //       </Main>
// //     </Box>
// //   );
// // }




// // import * as React from 'react';
// // import { styled, useTheme } from '@mui/material/styles';
// // import Box from '@mui/material/Box';
// // import Drawer from '@mui/material/Drawer';
// // import CssBaseline from '@mui/material/CssBaseline';
// // import MuiAppBar from '@mui/material/AppBar';
// // import Toolbar from '@mui/material/Toolbar';
// // import List from '@mui/material/List';
// // import Typography from '@mui/material/Typography';
// // import Divider from '@mui/material/Divider';
// // import IconButton from '@mui/material/IconButton';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// // import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// // import ListItem from '@mui/material/ListItem';
// // import ListItemButton from '@mui/material/ListItemButton';
// // import ListItemIcon from '@mui/material/ListItemIcon';
// // import ListItemText from '@mui/material/ListItemText';
// // import InboxIcon from '@mui/icons-material/MoveToInbox';
// // import MailIcon from '@mui/icons-material/Mail';
// // import DashboardIcon from '@mui/icons-material/Dashboard';
// // import LoginIcon from '@mui/icons-material/Login';
// // import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
// // import { SiCoursera } from "react-icons/si";
// // import { FaBook } from "react-icons/fa";
// // import { HiUsers } from "react-icons/hi2";
// // import { RiAdminFill } from "react-icons/ri"; // Import the RiAdminFill icon
// // import ExpandLess from '@mui/icons-material/ExpandLess';
// // import ExpandMore from '@mui/icons-material/ExpandMore';
// // import Button from '@mui/material/Button'; // Import Button component
// // import { useNavigate } from 'react-router-dom'; // Import useNavigate

// // const drawerWidth = 240;

// // const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
// //   ({ theme, open }) => ({
// //     flexGrow: 1,
// //     padding: theme.spacing(3),
// //     transition: theme.transitions.create('margin', {
// //       easing: theme.transitions.easing.sharp,
// //       duration: theme.transitions.duration.leavingScreen,
// //     }),
// //     marginLeft: `-${drawerWidth}px`,
// //     ...(open && {
// //       transition: theme.transitions.create('margin', {
// //         easing: theme.transitions.easing.easeOut,
// //         duration: theme.transitions.duration.enteringScreen,
// //       }),
// //       marginLeft: 0,
// //     }),
// //     backgroundColor: '#f0f0f0', // Set a background color
// //   }),
// // );

// // const AppBar = styled(MuiAppBar, {
// //   shouldForwardProp: (prop) => prop !== 'open',
// // })(({ theme, open }) => ({
// //   transition: theme.transitions.create(['margin', 'width'], {
// //     easing: theme.transitions.easing.sharp,
// //     duration: theme.transitions.duration.leavingScreen,
// //   }),
// //   ...(open && {
// //     width: `calc(100% - ${drawerWidth}px)`,
// //     marginLeft: `${drawerWidth}px`,
// //     transition: theme.transitions.create(['margin', 'width'], {
// //       easing: theme.transitions.easing.easeOut,
// //       duration: theme.transitions.duration.enteringScreen,
// //     }),
// //   }),
// // }));

// // const DrawerHeader = styled('div')(({ theme }) => ({
// //   display: 'flex',
// //   alignItems: 'center',
// //   padding: theme.spacing(0, 1),
// //   ...theme.mixins.toolbar,
// //   justifyContent: 'flex-end',
// // }));

// // export default function HomePage() {
// //   const theme = useTheme();
// //   const [open, setOpen] = React.useState(false);
// //   const [usersOpen, setUsersOpen] = React.useState(false);
// //   const navigate = useNavigate(); // Initialize useNavigate

// //   const handleDrawerOpen = () => {
// //     setOpen(true);
// //   };

// //   const handleDrawerClose = () => {
// //     setOpen(false);
// //   };

// //   const handleUsersClick = () => {
// //     setUsersOpen(!usersOpen);
// //   };

// //   const handleLearnersClick = () => {
// //     alert('Learners button clicked');
// //   };

// //   const handleNavigate = (path) => {
// //     navigate(path); // Navigate to the specified path
// //   };

// //   return (
// //     <Box sx={{ display: 'flex' }}>
// //       <CssBaseline />
// //       <AppBar position="fixed" open={open}>
// //         <Toolbar>
// //           <IconButton
// //             color="inherit"
// //             aria-label="open drawer"
// //             onClick={handleDrawerOpen}
// //             edge="start"
// //             sx={{ mr: 2, ...(open && { display: 'none' }) }}
// //           >
// //             <MenuIcon />
// //           </IconButton>
// //           <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
// //             E-Learning Platform
// //           </Typography>
// //           <Box>
// //             <Button color="inherit" onClick={() => handleNavigate('/login')}>
// //               Login
// //             </Button>
// //             <Button color="inherit" onClick={() => handleNavigate('/register')}>
// //               Register
// //             </Button>
// //           </Box>
// //         </Toolbar>
// //       </AppBar>
// //       <Drawer
// //         sx={{
// //           width: drawerWidth,
// //           flexShrink: 0,
// //           '& .MuiDrawer-paper': {
// //             width: drawerWidth,
// //             boxSizing: 'border-box',
// //           },
// //         }}
// //         variant="persistent"
// //         anchor="left"
// //         open={open}
// //       >
// //         <DrawerHeader>
// //           <IconButton onClick={handleDrawerClose}>
// //             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
// //           </IconButton>
// //         </DrawerHeader>
// //         <Divider />
// //         <List>
// //           {[
// //             { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
// //             { text: 'Login', icon: <LoginIcon />, path: '/login' },
// //             { text: 'Register', icon: <AppRegistrationIcon />, path: '/register' },
// //             { text: 'Courses', icon: <SiCoursera size={24} />, path: '/courses' },
// //           ].map((item, index) => (
// //             <ListItem key={item.text} disablePadding>
// //               <ListItemButton onClick={() => handleNavigate(item.path)}>
// //                 <ListItemIcon>{item.icon}</ListItemIcon>
// //                 <ListItemText primary={item.text} />
// //               </ListItemButton>
// //             </ListItem>
// //           ))}
// //         </List>
// //         <Divider />
// //         <List>
// //           {['Question Bank', 'Users', 'Admin'].map((text, index) => (
// //             <React.Fragment key={text}>
// //               <ListItem disablePadding>
// //                 <ListItemButton onClick={text === 'Users' ? handleUsersClick : null}>
// //                   <ListItemIcon>
// //                     {index === 0 ? <FaBook size={24} /> 
// //                     : index === 1 ? <HiUsers size={24} /> 
// //                     : index === 2 ? <RiAdminFill size={24} /> 
// //                     : index % 2 === 0 ? <InboxIcon /> 
// //                     : <MailIcon />}
// //                   </ListItemIcon>
// //                   <ListItemText primary={text} />
// //                   {text === 'Users' ? (usersOpen ? <ExpandLess /> : <ExpandMore />) : null}
// //                 </ListItemButton>
// //               </ListItem>
// //               {text === 'Users' && usersOpen && (
// //                 <List component="div" disablePadding>
// //                   <ListItemButton sx={{ pl: 4 }} onClick={handleLearnersClick}>
// //                     <ListItemText primary="Learners" />
// //                   </ListItemButton>
// //                 </List>
// //               )}
// //             </React.Fragment>
// //           ))}
// //         </List>
// //       </Drawer>
// //       <Main open={open}>
// //         <DrawerHeader />
// //         <Typography variant="h4" component="h1" gutterBottom>
// //           Welcome to Our E-Learning Platform
// //         </Typography>
// //         <Typography variant="body1" paragraph>
// //           We are dedicated to providing quality education through a variety of online courses. 
// //           Join us and start your learning journey today!
// //         </Typography>
// //         <Typography variant="body1" paragraph>
// //           Explore our extensive library of courses, designed to meet the needs of learners of all levels. 
// //           Whether you're looking to advance your career or learn something new, we have something for everyone.
// //         </Typography>
// //       </Main>
// //     </Box>
// //   );
// // }

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { SiCoursera } from "react-icons/si";
import { FaBook } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { RiAdminFill } from "react-icons/ri";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import image from "../../assets/image.png";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
    backgroundColor: '#f0f0f0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Ensure the content takes full viewport height
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Footer = styled('footer')(({ theme }) => ({
  marginTop: 'auto',
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  color: 'white',
}));

export default function HomePage() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [usersOpen, setUsersOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleUsersClick = () => {
    setUsersOpen(!usersOpen);
  };

  const handleLearnersClick = () => {
    alert('Learners button clicked');
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            E-Learning Platform
          </Typography>
          <Box>
            <Button color="inherit" onClick={() => handleNavigate('/login')}>
              Login
            </Button>
            <Button color="inherit" onClick={() => handleNavigate('/register')}>
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            // { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
            {  path: '/login' },
            { text: 'Register', icon: <AppRegistrationIcon />, path: '/register' },
            { text: 'ALogin', icon: <SiCoursera size={24} />, path: '/alogin' },
            { text: 'ADash', icon: <SiCoursera size={24} />, path: '/adash' },
          ].map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton onClick={() => handleNavigate(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Question Bank', 'Users', 'Admin'].map((text, index) => (
            <React.Fragment key={text}>
              <ListItem disablePadding>
                <ListItemButton onClick={text === 'Users' ? handleUsersClick : null}>
                  <ListItemIcon>
                    {index === 0 ? <FaBook size={24} /> 
                    : index === 1 ? <HiUsers size={24} /> 
                    : index === 2 ? <RiAdminFill size={24} /> 
                    : index % 2 === 0 ? <InboxIcon /> 
                    : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                  {text === 'Users' ? (usersOpen ? <ExpandLess /> : <ExpandMore />) : null}
                </ListItemButton>
              </ListItem>
              {text === 'Users' && usersOpen && (
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }} onClick={handleLearnersClick}>
                    <ListItemText primary="Learners" />
                  </ListItemButton>
                </List>
              )}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
     
      <Main open={open}>
        <DrawerHeader />
        <Box textAlign="center">
          <Typography variant="h4" component="h1" gutterBottom>
            E-Learning Platform
          </Typography>
          <Typography variant="body1" paragraph>
            We are dedicated to providing quality education through a variety of online courses. 
            Join us and start your learning journey today!

          </Typography>
          <Typography variant="body1" paragraph>
            Explore our extensive library of courses, designed to meet the needs of learners of all levels. 
            Whether you're looking to advance your career or learn something new, we have something for everyone.
          </Typography>
        </Box>
        <Box>
          <img src={image} alt="image"></img>
        </Box>
        <Footer>
          <Box display="flex" justifyContent="center" alignItems="center">
            <IconButton color="inherit" href="https://facebook.com" target="_blank">
              <FaFacebook />
            </IconButton>
            <IconButton color="inherit" href="https://twitter.com" target="_blank">
              <FaTwitter />
            </IconButton>
            <IconButton color="inherit" href="https://instagram.com" target="_blank">
              <FaInstagram />
            </IconButton>
            <IconButton color="inherit" href="https://linkedin.com" target="_blank">
              <FaLinkedin />
            </IconButton>
          </Box>
        </Footer>
      </Main>
    </Box>
  );
}

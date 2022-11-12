import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { useForm } from "react-hook-form";

function RiderSignUp() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);


  return (
    <form onSubmit={handleSubmit(onSubmit)} {...register("ridersignup")} style={{width: "30vw", height:"60vh", display:"flex", flexDirection:"column",
    alignItems:"flex-start"}}>
       <input style={{boxShadow:"inset 0px 1.5px 4px rgba(0,0,0,0.2)"}} type="text" name="firstName" placeholder="First Name" {...register("firstName", { required: true, maxLength: 20 })} />
      <input style={{boxShadow:"inset 0px 1.5px 4px rgba(0,0,0,0.2)"}} type="text" name="lastName" placeholder="Last Name" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input style={{boxShadow:"inset 0px 1.5px 4px rgba(0,0,0,0.2)"}} type="email" name="email" placeholder="Email Address" {...register("email", { pattern: /^[A-Za-z]@[A-Za-z]+$.com/i })} />
      <input style={{boxShadow:"inset 0px 1.5px 4px rgba(0,0,0,0.2)"}} type="submit" />
    </form>
  );
}

function DriverSignUp() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);


  return (
    <form onSubmit={handleSubmit(onSubmit)} {...register("driversignup")} style={{ width:"30vw", height:"60vh", display:"flex", flexDirection:"column",
    alignItems:"flex-start"}}>
      <input style={{boxShadow:"inset 0px 1.5px 4px rgba(0,0,0,0.2)"}} type="text" name="firstName" placeholder="First Name" {...register("firstName", { required: true, maxLength: 20 })} />
      <input style={{boxShadow:"inset 0px 1.5px 4px rgba(0,0,0,0.2)"}} type="text" name="lastName" placeholder="Last Name" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input style={{boxShadow:"inset 0px 1.5px 4px rgba(0,0,0,0.2)"}} type="email" name="email" placeholder="Email Address" {...register("email", { pattern: /^[A-Za-z]@[A-Za-z]+$.com/i })} />
      <input style={{boxShadow:"inset 0px 1.5px 4px rgba(0,0,0,0.2)"}} type="submit" />
    </form>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
     
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ m: 5, p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
};

const fabGreenStyle = {
  color: 'common.white',
  bgcolor: green[100],
  '&:hover': {
    bgcolor: green[600],
  },
};
function SignUpForm() {
  const theme = useTheme();
  const { register, handleSubmit } = useForm();
 
   
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const onSubmit = data => console.log(data);

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: 'primary',
      sx: fabStyle,
      icon: <AddIcon />,
      label: 'Add',
    },
    {
      color: 'secondary',
      sx: fabStyle,
      icon: <EditIcon />,
      label: 'Edit',
    },
    {
      color: 'inherit',
      sx: { ...fabStyle, ...fabGreenStyle },
      icon: <UpIcon />,
      label: 'Expand',
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        width: "80vw",
        margin:"15vh auto",
        position: 'relative',
        minHeight: 200,
      }}
    >
      
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="Fade Sign-Up Form"
          
        >
          <Tab label="Rider Sign-Up" {...a11yProps(0)} />
          <Tab label="Driver Sign-Up" {...a11yProps(1)} />
        
        </Tabs>
   
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Typography variant="h4">Fade Rider Sign-Up</Typography>
          <RiderSignUp/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Typography variant="h4">Fade Driver Sign-Up</Typography>
          <DriverSignUp/>
        </TabPanel>
        
      </SwipeableViews>
     
    </Box>
  );
}

export default SignUpForm
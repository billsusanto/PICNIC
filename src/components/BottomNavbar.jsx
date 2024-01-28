import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

import { Link } from 'react-router-dom';

import CreateIcon from "@mui/icons-material/AddLocationAlt";
import ExploreIcon from '@mui/icons-material/Explore';
import ProfileIcon from '@mui/icons-material/AccountCircle';

function BottomNavBar() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <BottomNavigation showlabels value={value} onChange={handleChange} showLabels className='w-full flex items-center py-5 fixed bottom-0'>
        <BottomNavigationAction label="Search" icon={<ExploreIcon />} />
        <BottomNavigationAction 
            label="Create" 
            icon={<CreateIcon />} 
            component={Link} // Use the Link component
            to="/create" // Define the routing path
        />
        <BottomNavigationAction label="Profile" icon={<ProfileIcon />} />
      </BottomNavigation>
    );
  }

  export default BottomNavBar;
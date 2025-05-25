import React, { useState } from 'react';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Typography, Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleIcon from '@mui/icons-material/People';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Sidebar = () => {
  const initialItems = [
    { icon: <HomeIcon sx={{ color: '#757575' }} />, label: 'Home', selected: false },
    { icon: <AppsIcon sx={{ color: 'white' }} />, label: 'Modules', selected: true },
    { section: 'Actions' },
    { icon: <AssignmentIcon sx={{ color: '#757575' }} />, label: 'My Actions', selected: false },
    { icon: <AssignmentIcon sx={{ color: '#757575' }} />, label: 'All Actions', selected: false },
    { section: 'Others' },
    { icon: <AssignmentIcon sx={{ color: '#757575' }} />, label: 'All Reports', selected: false },
    { icon: <PeopleIcon sx={{ color: '#757575' }} />, label: 'User Management', selected: false },
    { icon: <HelpOutlineIcon sx={{ color: '#757575' }} />, label: 'Help Manual', selected: false },
  ];

  const [items, setItems] = useState(initialItems);

  const handleItemClick = (index) => {
    const updatedItems = items.map((item, i) => ({
      ...item,
      selected: item.section ? false : i === index,
      icon: item.section ? null : React.cloneElement(item.icon, {
        sx: { color: i === index ? 'white' : '#757575' },
      }),
    }));
    setItems(updatedItems);
  };

  return (
    <Box
      sx={{
        width: { xs: '200px', sm: '240px' },
        bgcolor: '#ffffff',
        minHeight: '100vh',
        borderRight: '1px solid #e0e0e0',
      }}
    >
      <Box sx={{ p: 2, pb: 0.5 }}>
        <Stack direction="row" spacing={1} alignItems="flex-start">
          <Box
            sx={{
              width: 44,
              height: 44,
              backgroundColor: '#000000',
              borderRadius: 1,
              flexShrink: 0,
            }}
          />
          <Box>
            <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 700, color: '#000' }}>
              SYSTEM
            </Typography>
            <Stack direction="row" alignItems="center" spacing={0.3} mt={0.5}>
              <LocationOnIcon sx={{ fontSize: '0.9rem', color: '#757575' }} />
              <Typography sx={{ fontSize: '0.7rem', color: '#757575' }}>
                SiteMINE223
              </Typography>
              <ArrowDropDownIcon sx={{ fontSize: '1rem', color: '#757575' }} />
            </Stack>
          </Box>
        </Stack>
      </Box>

      <List sx={{ pt: 0 }}>
        {items.map((item, index) => (
          item.section ? (
            <Typography
              key={index}
              sx={{
                px: 2,
                pt: index === 2 ? 2 : 3,
                pb: 0.5,
                fontSize: '0.8rem',
                fontWeight: 600,
                color: '#757575',
              }}
            >
              {item.section}
            </Typography>
          ) : (
            <ListItemButton
              key={index}
              selected={item.selected}
              onClick={() => handleItemClick(index)}
              sx={{
                py: 0.75,
                px: 2,
                '&.Mui-selected': {
                  backgroundColor: '#09A2E3',
                  color: 'white',
                  '& .MuiListItemIcon-root': {
                    color: 'white',
                  },
                  borderRadius: '10px',
                },
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 32 }}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontSize: '0.85rem', fontWeight: 500 }}
              />
            </ListItemButton>
          )
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
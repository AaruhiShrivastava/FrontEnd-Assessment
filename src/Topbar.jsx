import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  InputBase,
  Button,
  Stack,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import MapIcon from '@mui/icons-material/Map';
import HomeIcon from '@mui/icons-material/Home';

const Topbar = () => {
  return (
    <Box
      sx={{
        bgcolor: '#fff',
        px: 2,
        pt: 1,
        pb: 1.5,
        borderBottom: '1px solid #e0e0e0',
        position: 'relative',
        width: '100%',
        top: 0,
        zIndex: 10,
        margin: 0,         // ✅ ensure no margin
      }}
    >
      {/* Top Row */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Search */}
        <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', borderRadius: 2, px: 1.5, py: 0.5 }}>
          <SearchIcon sx={{ color: '#9e9e9e', fontSize: '1.2rem' }} />
          <InputBase
            placeholder="Search or type"
            sx={{ ml: 1, color: '#616161', fontSize: '0.9rem', width: 160 }}
          />
        </Box>

        {/* Icons */}
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton><LocationOnIcon sx={{ color: '#424242' }} /></IconButton>
          <IconButton><MapIcon sx={{ color: '#424242' }} /></IconButton>
          <IconButton><CalendarTodayIcon sx={{ color: '#424242' }} /></IconButton>
          <IconButton><HeadsetMicIcon sx={{ color: '#424242' }} /></IconButton>
          <IconButton><NotificationsIcon sx={{ color: '#424242' }} /></IconButton>

          {/* Orange Circle */}
          <Box
            sx={{
              width: 32,
              height: 32,
              bgcolor: '#FFB98A',
              borderRadius: '50%',
            }}
          />
        </Stack>
      </Box>

      {/* Breadcrumb */}
      <Box mt={1.5} display="flex" alignItems="center" gap={1}>
        <HomeIcon sx={{ fontSize: 18, color: '#757575' }} />
        <Typography variant="body2" color="text.secondary">Modules</Typography>
        <Typography variant="body2" color="text.secondary">{`>`}</Typography>
        <Typography variant="body2" color="text.secondary">Medical management</Typography>
      </Box>

      {/* net zero button */}
      <Box
        sx={{
          position: 'absolute',
          right: 16,
          bottom: 10,
        }}
      >
        <Button
          sx={{
            bgcolor: '#00AEEF',
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '0.85rem',
            px: 2,
            py: 0.2,
            minHeight: '28px',
            '&:hover': { bgcolor: '#0096cc' },
          }}
        >
          <Typography component="span" sx={{ color: '#fff', fontWeight: 600 }}>
            net
          </Typography>
          <Typography component="span" sx={{ color: '#000', fontWeight: 600, ml: 0.5 }}>
            zero
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;

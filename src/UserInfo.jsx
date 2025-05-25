import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import userImage from './image.jpg';

const stats = [
  { label: 'Age', value: '34 years old' },
  { label: 'Weight', value: '82 Kg' },
  { label: 'Height', value: '182 cm' },
  { label: 'Blood', value: 'O +' },
];

const UserInfo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%', // Fit the allocated 10vh
        position: 'relative',
        borderRadius: '12px',
        bgcolor: '#FDFDFE',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        p: 1,
        display: 'flex',
        gap: 1,
        marginBottom:3,
        
      }}
    >
      <Avatar src={userImage} sx={{ width: 48, height: 48 }} />
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          sx={{
            bgcolor: '#09A2E3',
            color: '#fff',
            px: 1,
            py: 0.3,
            fontSize: '10px',
            fontWeight: 600,
            borderRadius: '4px',
            width: 'fit-content',
            mb: 0.3,
          }}
        >
          61984164984
        </Typography>
        <Typography fontSize={14} fontWeight={700} mb={0.3}>
          Ajay Pal
        </Typography>
        <Typography fontSize="0.6rem" color="text.secondary">
          Employee ID
        </Typography>
        <Stack direction="row" spacing={1}>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <PhoneIcon sx={{ fontSize: 12 }} />
            <Typography fontSize={10}>+91 - 0000000000</Typography>
          </Stack>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <EmailIcon sx={{ fontSize: 12 }} />
            <Typography fontSize={10}>imied@trash.com</Typography>
          </Stack>
        </Stack>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          display: 'flex',
          flexWrap: 'wrap',
          gap: '4px',
          width: isMobile ? '100%' : 200,
        }}
      >
        {stats.map((item, i) => (
          <Box
            key={i}
            sx={{
              width: isMobile ? '48%' : '80px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              border: '0.6px solid #B7C8E5',
              borderRadius: '5px',
              bgcolor: '#F6F6F6',
              px: 0.5,
            }}
          >
            <Box
              sx={{
                width: 24,
                height: 24,
                background:
                  'linear-gradient(154.85deg, rgba(255,255,255,0.5) -53.08%, rgba(10, 162, 227, 0.5) 168.34%)',
                borderRadius: '6.5px',
              }}
            />
            <Box sx={{ ml: 1 }}>
              <Typography fontSize={8} fontWeight={500} color="#8B8B8B">
                {item.label}
              </Typography>
              <Typography fontSize={8} fontWeight={500}>
                {item.value}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default UserInfo;
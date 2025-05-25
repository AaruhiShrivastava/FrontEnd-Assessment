import React from 'react';
import { Box, Paper, Typography, IconButton } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const MedicalExamination = () => {
  const entries = [48, 89, 130, 171];

  return (
    <Paper
      elevation={0}
      sx={{
        width: '270px',
        height: '216px',
        borderRadius: '12px',
        bgcolor: '#FDFDFE', // Updated to match the image
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        position: 'relative',
        p: 0,
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          position: 'absolute',
          top: 15,
          left: 16,
          fontFamily: 'Roboto',
          fontSize: 16,
          fontWeight: 600,
          lineHeight: '19px',
          color: '#000000',
        }}
      >
        Medical Examination
      </Typography>

      {/* Open in new icon */}
      <IconButton
        sx={{
          position: 'absolute',
          top: 12,
          right: 12,
          width: 24,
          height: 24,
          backgroundColor: '#F1F0F1',
          borderRadius: '12px',
          '&:hover': { backgroundColor: '#E0E0E0' },
        }}
      >
        <OpenInNewIcon sx={{ fontSize: 16, color: '#000000' }} />
      </IconButton>

      {/* Entries */}
      {entries.map((top, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            top: `${top}px`,
            left: '12px',
            width: '246px',
            height: '33px',
            borderRadius: '4px',
            bgcolor: '#F5F7FA', // Updated to match the image
            display: 'flex',
            alignItems: 'center',
            pl: '4px',
            pr: '8px',
          }}
        >
          {/* Gradient rectangle */}
          <Box
            sx={{
              width: 25,
              height: 25,
              background:
                'linear-gradient(154.85deg, rgba(255,255,255,0.5) -53.08%, rgba(10, 162, 227, 0.5) 168.34%)',
              borderRadius: '5.6px',
            }}
          />

          {/* Text content */}
          <Box sx={{ ml: '12px' }}>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontSize: 10,
                fontWeight: 500,
                lineHeight: '12px',
                color: '#8B8B8B',
              }}
            >
              Date
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontSize: 10,
                fontWeight: 500,
                lineHeight: '12px',
                color: '#000000',
                mt: '2px',
              }}
            >
              PME
            </Typography>
          </Box>

          {/* Right arrow icon */}
          <ChevronRightIcon
            sx={{
              marginLeft: 'auto',
              fontSize: 20,
              color: '#8B8B8B',
            }}
          />
        </Box>
      ))}
    </Paper>
  );
};

export default MedicalExamination;
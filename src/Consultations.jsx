import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Stack,
  useMediaQuery,
  useTheme,
  Button,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const consultations = [
  {
    doctor: 'Doctor Name',
    designation: 'Designation',
    date: 'Date',
    time: 'Time',
    treatment: 'Treatment Name',
  },
  {
    doctor: 'Doctor Name',
    designation: 'Designation',
    date: 'Date',
    time: 'Time',
    treatment: 'Treatment Name',
  },
  {
    doctor: 'Doctor Name',
    designation: 'Designation',
    date: 'Date',
    time: 'Time',
    treatment: 'Treatment Name',
  },
  {
    doctor: 'Doctor Name',
    designation: 'Designation',
    date: 'Date',
    time: 'Time',
    treatment: 'Treatment Name',
  },
];

const Consultations = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleFileClick = (index) => {
    alert(`Open file for consultation #${index + 1}`);
  };

  const handlePillClick = (index) => {
    alert(`Prescribe for consultation #${index + 1}`);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" px={isMobile ? 1 : 0} gap={0.5} >

      {/* Main Card */}
      <Paper
        sx={{
          width: '100%',
          maxWidth: 700,
    
          backgroundColor: '#FDFDFE',
          borderRadius: 2,
          p: 0.5, // Further reduced padding
          boxSizing: 'border-box',
          
        }}
      >
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={0.5}>
          <Typography fontSize={14} fontWeight={600}>
            Consultations
          </Typography>
          <Box
            sx={{
              width: 20,
              height: 20,
              backgroundColor: '#F1F0F1',
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <OpenInNewIcon sx={{ fontSize: 14 }} />
          </Box>
        </Box>

        {/* Rows */}
        <Stack spacing={0.5}> {/* Further reduced spacing */}
          {consultations.map((item, index) => (
            <Box
              key={index}
              display="flex"
              flexDirection={isMobile ? 'column' : 'row'}
              justifyContent="space-between"
              alignItems={isMobile ? 'flex-start' : 'center'}
              gap={isMobile ? 0.3 : 0}
              py={0.2} // Further reduced padding
              sx={{
                borderBottom: '1px solid #f0f0f0',
                pb: 0.3,
              }}
            >
              {/* Doctor Info */}
              <Box
                display="flex"
                gap={1}
                alignItems="center"
                width={isMobile ? '100%' : 110}
              >
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    border: '2px solid #009FF5',
                    backgroundColor: '#D9D9D9',
                  }}
                />
                <Box>
                  <Typography fontSize={10} fontWeight={600}>
                    {item.doctor}
                  </Typography>
                  <Typography fontSize={8}>{item.designation}</Typography>
                </Box>
              </Box>

              {/* Date & Time */}
              <Box width={isMobile ? '100%' : 50}>
                <Typography fontSize={10} fontWeight={600}>
                  {item.date}
                </Typography>
                <Typography fontSize={8}>{item.time}</Typography>
              </Box>

              {/* Treatment */}
              <Box width={isMobile ? '100%' : 90}>
                <Typography fontSize={10} fontWeight={600}>
                  Treatment
                </Typography>
                <Typography fontSize={8}>{item.treatment}</Typography>
              </Box>

              {/* Action Icons */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  gap: '6px',
                  width: '40px',
                  height: '16px',
                }}
              >
                {/* Folder Icon */}
                <Box
                  onClick={() => handleFileClick(index)}
                  sx={{
                    width: 16,
                    height: 16,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#09A2E3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 6C3 4.9 3.9 4 5 4H9L11 6H19C20.1 6 21 6.9 21 8V18C21 19.1 20.1 20 19 20H5C3.9 20 3 19.1 3 18V6Z" />
                  </svg>
                </Box>

                {/* Tilted Capsule Icon */}
                <Box
                  onClick={() => handlePillClick(index)}
                  sx={{
                    width: 16,
                    height: 16,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#09A2E3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g transform="rotate(125 12 12)">
                      <rect x="3" y="10" width="18" height="7" rx="3.5" />
                      <line x1="12" y1="10" x2="12" y2="17" />
                    </g>
                  </svg>
                </Box>
              </Box>
            </Box>
          ))}
        </Stack>
      </Paper>

      {/* Start Examination Button */}
      <Button
        variant="contained"
        fullWidth
        sx={{
          bgcolor: '#09A2E3',
          height: '50px',
          color: 'white',
          borderRadius: 2,
          py: 0.5, // Further reduced padding
          width: '100%',
          marginTop:'10px',
          maxWidth: 700,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          '&:hover': { bgcolor: '#0490c8' },
        }}
        endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
      >
        <Typography sx={{ fontSize: '0.8rem', fontWeight: 500 }}>
          Start Examination
        </Typography>
      </Button>
    </Box>
  );
};

export default Consultations;
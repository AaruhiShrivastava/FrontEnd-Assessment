import React from 'react';
import { Paper, Box, Typography, Stack } from '@mui/material';

const BloodStatusCard = () => {
  return (
    <Paper
      sx={{
        p: 1, // Reduced padding from 2 to 1 (8px) for a tighter layout
        borderRadius: '12px',
        boxShadow: 2,
        width: { xs: '100%', sm: '122px' }, // Responsive width: 100% on xs screens, 192px on sm and above
        height: { xs: 'auto', sm: '112px' }, // Auto height on xs for better content fit, 162px on sm and above
        minHeight: '120px', // Ensure minimum height for smaller screens
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1} mb={0.5}> {/* Reduced spacing from 1.5 to 1, mb from 1 to 0.5 */}
        <Box sx={{ width: 20, height: 20, background:
                'linear-gradient(154.85deg, rgba(255,255,255,0.5) -53.08%, rgba(10, 162, 227, 0.5) 168.34%)', borderRadius: 1 }} /> {/* Slightly smaller box */}
        <Typography fontSize={{ xs: '0.9rem', sm: '1rem' }} fontWeight={600}>Blood Level</Typography>
      </Stack>
      <Typography fontSize={{ xs: '1.2rem', sm: '1.5rem' }} fontWeight={700} mb={0.5}>120/80</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', height: { xs: '4vh', sm: '6vh' } }}> {/* Adjusted height for responsiveness */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 1.5 }}> {/* Reduced mr from 2 to 1.5 */}
          <Box sx={{ width: 8, height: { xs: 30, sm: 40 }, bgcolor: '#4a90e2', borderRadius: 1 }} /> {/* Responsive bar height */}
          <Typography fontSize={{ xs: '0.8rem', sm: '0.9rem' }} mt={0.3}>120</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box sx={{ width: 8, height: { xs: 20, sm: 30 }, bgcolor: '#4a90e2', borderRadius: 1 }} /> {/* Responsive bar height */}
          <Typography fontSize={{ xs: '0.8rem', sm: '0.9rem' }} mt={0.3}>80</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default BloodStatusCard;
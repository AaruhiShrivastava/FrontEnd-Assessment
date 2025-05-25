import React from 'react';
import { Paper, Box, Typography, Stack } from '@mui/material';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';

const glucoseData = [
  { time: 0, value: 200 },
  { time: 1, value: 210 },
  { time: 2, value: 220 },
  { time: 3, value: 230 },
  { time: 4, value: 230 },
  { time: 5, value: 220 },
];

const GlucoseLevelCard = () => {
  return (
    <Paper
      sx={{
        p: 1, // Reduced padding from 2 to 1 (8px)
        borderRadius: '12px',
        boxShadow: 2,
        width: { xs: '100%', sm: '122px' }, // Responsive width
        height: { xs: 'auto', sm: '112px' }, // Auto height on xs, 162px on sm and above
        minHeight: '120px', // Ensure minimum height for smaller screens
        marginLeft: 1,
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1} mb={0.5}> {/* Reduced spacing from 1.5 to 1, mb from 1 to 0.5 */}
        <Box sx={{ width: 20, height: 20, background:
                'linear-gradient(154.85deg, rgba(255,255,255,0.5) -53.08%, rgba(10, 162, 227, 0.5) 168.34%)', borderRadius: 1 }} /> {/* Slightly smaller box */}
        <Typography fontSize={{ xs: '0.9rem', sm: '1rem' }} fontWeight={600}>Glucose</Typography>
      </Stack>
      <Typography fontSize={{ xs: '1.2rem', sm: '1.5rem' }} fontWeight={700} mb={0.5}>230/ml</Typography>
      <Box sx={{ width: '100%', height: { xs: '4vh', sm: '6vh' } }}> {/* Adjusted height for responsiveness */}
        <ResponsiveContainer>
          <AreaChart data={glucoseData}>
            <Area type="monotone" dataKey="value" stroke="#4a90e2" fill="#e6f0fa" fillOpacity={0.5} />
            <Tooltip
              content={({ payload }) =>
                payload?.length ? (
                  <Box sx={{ bgcolor: '#e6f0fa', color: '#4a90e2', p: 0.5, borderRadius: 1, fontSize: '0.8rem' }}>
                    {payload[0].value}/ml
                  </Box>
                ) : null
              }
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default GlucoseLevelCard;
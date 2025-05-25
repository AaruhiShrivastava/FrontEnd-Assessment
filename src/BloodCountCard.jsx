import React from 'react';
import { Paper, Box, Typography, Stack } from '@mui/material';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';

const bloodCountData = [
  { time: 0, value: 80 },
  { time: 1, value: 82 },
  { time: 2, value: 85 },
  { time: 3, value: 90 },
  { time: 4, value: 88 },
  { time: 5, value: 90 },
];

const BloodCountCard = () => {
  return (
    <Paper sx={{  pt: 1, px: 2, pb: 0, borderRadius: 3, boxShadow: 2, height: '15vh' }}>
      <Stack direction="row" alignItems="center" spacing={1.5} mb={1}>
        <Box sx={{ width: 24, height: 24, background:
                'linear-gradient(154.85deg, rgba(255,255,255,0.5) -53.08%, rgba(10, 162, 227, 0.5) 168.34%)', borderRadius: 1 }} />
        <Typography fontSize="1rem" fontWeight={600}>Blood Count</Typography>
      </Stack>
      <Typography fontSize="1.5rem" fontWeight={700} mb={1}>80 - 90</Typography>
      <Box sx={{ width: '100%', height: '9vh' }}>
        <ResponsiveContainer>
          <AreaChart data={bloodCountData}>
            <Area type="monotone" dataKey="value" stroke="#4a90e2" fill="#e6f0fa" fillOpacity={0.5} />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default BloodCountCard;
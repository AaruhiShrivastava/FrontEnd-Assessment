import React from 'react';
import { Paper, Box, Typography, Stack } from '@mui/material';

const HeartbeatCard = () => {
  return (
    <Paper sx={{ p: 2, borderRadius: 3, boxShadow: 2, height: '115px', width: '280px' }}>
      <Stack direction="row" alignItems="center" spacing={1.5} mb={1}>
        <Box sx={{ width: 24, height: 24, background: 'linear-gradient(154.85deg, rgba(255,255,255,0.5) -53.08%, rgba(10, 162, 227, 0.5) 168.34%)', borderRadius: 1 }} />
        <Typography fontSize="1rem" fontWeight={600}>Heartbeat</Typography>
      </Stack>
      <Typography fontSize="1.5rem" fontWeight={700} mb={1}>83 bpm</Typography>
      <Box sx={{ width: '100%', height: '54px' }}>
        <svg width="250" height="54" viewBox="0 0 400 54">
          <path
            d="M0 27 L20 27 L30 10 L40 40 L50 20 L60 30 L70 15 L80 35 L90 25 L100 30 L110 20 L120 35 L130 27"
            fill="none"
            stroke="#09A2E3"
            strokeWidth="1.5"
          />
          <path
            d="M90 27 L100 30 L110 20 L120 35 L130 27 L140 15 L150 40 L160 20 L170 30 L180 25 L190 35 L200 20 L210 30 L220 27"
            fill="none"
            stroke="#09A2E3"
            strokeWidth="1.5"
          />
          <path
            d="M180 27 L190 35 L200 20 L210 30 L220 27 L230 15 L240 40 L250 20 L260 30 L270 25 L280 35 L290 20 L300 30 L310 27"
            fill="none"
            stroke="#09A2E3"
            strokeWidth="1.5"
          />
          <path
            d="M270 27 L280 35 L290 20 L300 30 L310 27 L320 15 L330 40 L340 20 L350 30 L360 25 L370 35 L380 20 L390 30 L400 27"
            fill="none"
            stroke="#09A2E3"
            strokeWidth="1.5"
          />
        </svg>
      </Box>
    </Paper>
  );
};

export default HeartbeatCard;
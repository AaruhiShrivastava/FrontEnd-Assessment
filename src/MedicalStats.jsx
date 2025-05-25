import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';

// Data to match the exact shapes and values in the image
const heartbeatData = [
  { time: 1, value: 82 },
  { time: 2, value: 90 },
  { time: 3, value: 76 },
  { time: 4, value: 92 },
  { time: 5, value: 80 },
  { time: 6, value: 88 },
  { time: 7, value: 78 },
  { time: 8, value: 86 },
  { time: 9, value: 81 },
  { time: 10, value: 83 },
];

const bloodPressureData = [
  { time: 1, systolic: 118, diastolic: 78 },
  { time: 2, systolic: 122, diastolic: 82 },
  { time: 3, systolic: 116, diastolic: 76 },
  { time: 4, systolic: 124, diastolic: 84 },
  { time: 5, systolic: 120, diastolic: 80 },
];

const glucoseData = [
  { time: 1, value: 230 },
  { time: 2, value: 210 },
  { time: 3, value: 240 },
  { time: 4, value: 220 },
  { time: 5, value: 250 },
  { time: 6, value: 230 },
];

const bloodCountData = [
  { time: 1, value: 82 },
  { time: 2, value: 88 },
  { time: 3, value: 80 },
  { time: 4, value: 92 },
  { time: 5, value: 85 },
  { time: 6, value: 90 },
  { time: 7, value: 87 },
];

// Component for each graph with label and value
const StatGraph = ({ label, value, chart }) => (
  <Paper
    sx={{
      p: 1,
      bgcolor: '#e3f2fd',
      borderRadius: 1,
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      position: 'relative',
      height: '100px',
    }}
  >
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
      <Typography
        sx={{
          fontSize: '0.8rem',
          color: 'text.secondary',
          pl: 1,
        }}
      >
        {label}
      </Typography>
      <Typography
        sx={{
          fontSize: '0.9rem',
          fontWeight: 600,
          pr: 1,
        }}
      >
        {value}
      </Typography>
    </Box>
    <Box sx={{ height: '60px', width: '100%' }}>{chart}</Box>
  </Paper>
);

const MedicalStats = () => {
  return (
    <Grid container spacing={1}>
      {/* Heartbeat Graph */}
      <Grid item xs={12}>
        <StatGraph label="Heartbeat" value="83 bpm" width="400px" height="145px">
          <svg width="400" height="54" viewBox="0 0 400 54">
            {/* Vector 1 */}
            <path
              d="M0 27 L20 27 L30 10 L40 40 L50 20 L60 30 L70 15 L80 35 L90 25 L100 30 L110 20 L120 35 L130 27"
              fill="none"
              stroke="#09A2E3"
              strokeWidth="1.5"
            />
            {/* Vector 2 */}
            <path
              d="M90 27 L100 30 L110 20 L120 35 L130 27 L140 15 L150 40 L160 20 L170 30 L180 25 L190 35 L200 20 L210 30 L220 27"
              fill="none"
              stroke="#09A2E3"
              strokeWidth="1.5"
            />
            {/* Vector 3 */}
            <path
              d="M180 27 L190 35 L200 20 L210 30 L220 27 L230 15 L240 40 L250 20 L260 30 L270 25 L280 35 L290 20 L300 30 L310 27"
              fill="none"
              stroke="#09A2E3"
              strokeWidth="1.5"
            />
            {/* Vector 4 */}
            <path
              d="M270 27 L280 35 L290 20 L300 30 L310 27 L320 15 L330 40 L340 20 L350 30 L360 25 L370 35 L380 20 L390 30 L400 27"
              fill="none"
              stroke="#09A2E3"
              strokeWidth="1.5"
            />
          </svg>
        </StatGraph>
      </Grid>

      {/* Blood Status Graph */}
      <Grid item xs={6}>
        <StatGraph
          label="Blood Status"
          value="120/80"
          chart={
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={bloodPressureData}
                margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
              >
                <Area
                  type="monotone"
                  dataKey="systolic"
                  stroke="#1976d2"
                  fill="#90caf9"
                  fillOpacity={0.3}
                  strokeWidth={1.5}
                />
                <Area
                  type="monotone"
                  dataKey="diastolic"
                  stroke="#90caf9"
                  fill="#bbdefb"
                  fillOpacity={0.3}
                  strokeWidth={1.5}
                />
                <XAxis hide />
                <YAxis hide />
              </AreaChart>
            </ResponsiveContainer>
          }
        />
      </Grid>

      {/* Glucose Level Graph */}
      <Grid item xs={6}>
        <StatGraph
          label="Glucose Level"
          value="230/ml"
          chart={
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={glucoseData}
                margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
              >
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#1976d2"
                  strokeWidth={1.5}
                  dot={false}
                />
                <XAxis hide />
                <YAxis hide />
              </LineChart>
            </ResponsiveContainer>
          }
        />
      </Grid>

      {/* Blood Count Graph */}
      <Grid item xs={12}>
        <StatGraph
          label="Blood Count"
          value="80 - 90"
          chart={
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={bloodCountData}
                margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
              >
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#1976d2"
                  strokeWidth={1.5}
                  dot={false}
                />
                <XAxis hide />
                <YAxis hide />
              </LineChart>
            </ResponsiveContainer>
          }
        />
      </Grid>
    </Grid>
  );
};

export default MedicalStats;
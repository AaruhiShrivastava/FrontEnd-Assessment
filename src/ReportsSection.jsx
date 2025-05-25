import React from 'react';
import { Paper, Typography, Box, Stack, Divider, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const reports = [
  { title: 'Blood Report' },
  { title: 'Blood Report' },
  { title: 'Blood Report' },
  { title: 'Blood Report' },
];

const ReportsSection = () => {
  return (
    <Paper
      sx={{
        p: 1.5,
        borderRadius: 5,
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        // height: '50px', // Increased height
        // width: '400px',  // Increased width
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={0.3}>
        <Typography variant="h6" sx={{ fontSize: '0.9rem', fontWeight: 600 }}>
          Reports / Documents
        </Typography>
        <Box
          sx={{
            width: 24,
            height: 24,
            backgroundColor: '#F1F0F1',
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          <OpenInNewIcon sx={{ fontSize: 16, color: '#000000' }} />
        </Box>
      </Box>
      <Box>
        {reports.map((report, index) => (
          <React.Fragment key={index}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ py: 0.7 }}
            >
              <Stack direction="row" alignItems="center" spacing={1}> {/* Increased spacing from 0.5 to 1 */}
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    background: 'linear-gradient(154.85deg, rgba(255,255,255,0.5) -53.08%, rgba(10, 162, 227, 0.5) 168.34%)',
                    border: '1px solid rgba(10, 162, 227, 0.5)',
                    borderRadius: 1,
                  }}
                />
                <Typography sx={{ fontSize: '0.7rem', color: '#333', fontWeight: 500 }}> {/* Added fontWeight: 500 */}
                  {report.title}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={0.3}>
                <IconButton size="small">
                  <VisibilityIcon sx={{ color: '#09A2E3', fontSize: '1rem' }} />
                </IconButton>
                <IconButton size="small">
                  <DownloadIcon sx={{ color: '#09A2E3', fontSize: '1rem' }} />
                </IconButton>
              </Stack>
            </Stack>
            {index < reports.length - 0.5 && <Divider sx={{ borderColor: '#e0e0e0' }} />}
          </React.Fragment>
        ))}
      </Box>
    </Paper>
  );
};

export default ReportsSection;
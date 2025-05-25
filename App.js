import React from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import UserInfo from './components/UserInfo';
import ReportsSection from './components/ReportsSection';
import OfficerDetails from './components/OfficerDetails';
import Consultations from './components/Consultations';
import MedicalExamination from './components/MedicalExamination';
import ErrorBoundary from './components/ErrorBoundary';
import HeartbeatCard from './components/HeartbeatCard';
import BloodStatusCard from './components/BloodStatusCard';
import GlucoseLevelCard from './components/GlucoseLevelCard';
import BloodCountCard from './components/BloodCountCard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const App = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <ErrorBoundary>
        <Sidebar />
      </ErrorBoundary>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: '#f7f9fc',
          p: { xs: 1, sm: 2 },
          overflow: 'hidden',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ErrorBoundary>
          <Topbar />
        </ErrorBoundary>
        <Box
          sx={{
            flexGrow: 1,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              flexGrow: 1,
              overflow: 'hidden',
            }}
          >
            {/* Left Column (md=7): UserInfo, then Medical/Reports + Health Cards */}
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <Box sx={{ flexShrink: 0 }}>
                  <ErrorBoundary>
                    <UserInfo />
                  </ErrorBoundary>
                </Box>
                <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
                  <Box sx={{ width: { xs: '100%', md: '50%' }, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box sx={{ flexShrink: 0 }}>
                      <ErrorBoundary>
                        <MedicalExamination />
                      </ErrorBoundary>
                    </Box>
                    <Box sx={{ flexShrink: 0 }}>
                      <ErrorBoundary>
                        <ReportsSection />
                      </ErrorBoundary>
                    </Box>
                  </Box>
                  <Box sx={{ width: { xs: '100%', md: '50%' }, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box sx={{ flexShrink: 0 }}>
                      <ErrorBoundary>
                        <HeartbeatCard />
                      </ErrorBoundary>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on xs, row on sm and above
                        gap: { xs: 1, sm: 2 }, // Responsive gap: 8px on xs, 16px on sm
                        flexShrink: 0,
                        justifyContent: { xs: 'center', sm: 'flex-start' }, // Center on xs for better alignment
                      }}
                    >
                      <Box sx={{ width: { xs: '100%', sm: 'auto' } }}>
                        <ErrorBoundary>
                          <BloodStatusCard />
                        </ErrorBoundary>
                      </Box>
                      <Box sx={{ width: { xs: '100%', sm: 'auto' } }}>
                        <ErrorBoundary>
                          <GlucoseLevelCard />
                        </ErrorBoundary>
                      </Box>
                    </Box>
                    <Box sx={{ flexShrink: 0 }}>
                      <ErrorBoundary>
                        <BloodCountCard />
                      </ErrorBoundary>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Right Column (md=5): Officer Details, Consultations */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  
                }}
              >
                <Box sx={{ flexShrink: 0 }}>
                  <ErrorBoundary>
                    <OfficerDetails />
                  </ErrorBoundary>
                </Box>
                <Box sx={{ flexShrink: 0, overflow: 'hidden' }}>
                  <ErrorBoundary>
                    <Consultations />
                  </ErrorBoundary>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
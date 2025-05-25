import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Stack,
  IconButton,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const OfficerDetails = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        width: 478,
        // left : 50,
        height: 248,
        bgcolor: '#FDFDFE',
        borderRadius: '12px',
        position: 'relative',
        p: 2,
      }}
    >
      {/* Rectangle Icon */}
      <Box
        sx={{
          position: 'absolute',
          width: 32,
          height: 32,
          top: 12,
          left: 12,
          borderRadius: '8px',
          background:
            'linear-gradient(154.85deg, rgba(255,255,255,0.5) -53.08%, rgba(10, 162, 227, 0.5) 168.34%)',
        }}
      />

      {/* Header Title */}
      <Typography
        sx={{
          position: 'absolute',
          top: 19,
          left: 52,
          fontSize: 16,
          fontWeight: 600,
          fontFamily: 'Roboto',
        }}
      >
        Medical Officer Details
      </Typography>

      {/* Arrow Icon */}
      <IconButton
        sx={{
          position: 'absolute',
          right: 12,
          top: 16,
          width: 24,
          height: 24,
          backgroundColor: '#F1F0F1',
          borderRadius: '12px',
          '&:hover': { backgroundColor: '#E0E0E0' },
        }}
      >
        <OpenInNewIcon sx={{ fontSize: 16 }} />
      </IconButton>

      {/* Officer Name & MBBS */}
      <Typography
        sx={{
          position: 'absolute',
          top: 56,
          left: 12,
          fontSize: 20,
          fontWeight: 700,
        }}
      >
        Ajay Pal
      </Typography>

      <Typography
        sx={{
          position: 'absolute',
          top: 63,
          left: 95,
          fontSize: 12,
          color: '#8B8B8B',
          fontWeight: 500,
        }}
      >
        Medical@gmail.com
      </Typography>

      <Typography
        sx={{
          position: 'absolute',
          top: 58,
          left: 421,
          fontSize: 16,
          fontWeight: 700,
          color: '#09A2E3',
        }}
      >
        MBBS
      </Typography>

      {/* First Info Row */}
      <Box
        sx={{
          position: 'absolute',
          top: 91,
          left: 12,
          display: 'flex',
          gap: '63px',
          width: 454,
        }}
      >
        {/* Designation 1 */}
        <Stack spacing={0.3}>
          <Typography fontSize={14} color="#8B8B8B" fontWeight={600}>
            Designation 1
          </Typography>
          <Typography fontSize={12} color="#09A2E3" fontWeight={500}>
            Designation 1
          </Typography>
        </Stack>

        {/* Designation 2 */}
        <Stack spacing={0.3}>
          <Typography fontSize={14} color="#8B8B8B" fontWeight={600}>
            Designation 1
          </Typography>
          <Typography fontSize={12} color="#09A2E3" fontWeight={500}>
            Designation 1
          </Typography>
        </Stack>

        {/* Regd No. 1 */}
        <Stack spacing={0.3}>
          <Typography fontSize={14} color="#8B8B8B" fontWeight={600}>
            Regd No. 1
          </Typography>
          <Typography fontSize={12} color="#09A2E3" fontWeight={700}>
            99005853
          </Typography>
        </Stack>
      </Box>

      {/* Regd No. 1 Details */}
      <Box
        sx={{
          position: 'absolute',
          top: 139,
          left: 12,
          width: 454,
        }}
      >
        <Stack spacing={0.5}>
          <Typography fontSize={14} color="#8B8B8B" fontWeight={600}>
            Regd No. 1 Details
          </Typography>
          <Typography fontSize={12} color="#09A2E3" fontWeight={500} noWrap>
            Lorem ipsum dolor sit amet consectetur. Nunc lectus porttitor pellentesque sem...
          </Typography>
        </Stack>
      </Box>

      {/* Regd No. 2 & Details */}
      <Box
        sx={{
          position: 'absolute',
          top: 181,
          left: 12,
          display: 'flex',
          width: 454,
          justifyContent: 'space-between',
        }}
      >
        {/* Regd No. 2 */}
        <Stack spacing={0.5} width="192px">
          <Typography fontSize={14} color="#8B8B8B" fontWeight={600}>
            Regd No. 2
          </Typography>
          <Typography fontSize={12} color="#09A2E3" fontWeight={700}>
            99005853
          </Typography>
        </Stack>

        {/* Regd No. 2 Details */}
        <Stack spacing={0.5} width="262px">
          <Typography fontSize={14} color="#8B8B8B" fontWeight={600}>
            Regd No. 2 Details
          </Typography>
          <Typography fontSize={12} color="#09A2E3" fontWeight={500} noWrap>
            Lorem ipsum dolor sit amet consectetur. Nunc lectus porttitor pellentesque sem...
          </Typography>
        </Stack>
      </Box>

      {/* Pagination Dots */}
      <Box
        sx={{
          position: 'absolute',
          top: 237,
          left: 'calc(50% - 20px)',
          display: 'flex',
          gap: '20px',
        }}
      >
        <Box sx={{ width: 9, height: 9, bgcolor: '#09A2E3', borderRadius: '50%' }} />
        <Box sx={{ width: 9, height: 9, bgcolor: '#D9D9D9', borderRadius: '50%' }} />
      </Box>
    </Paper>
  );
};

export default OfficerDetails;

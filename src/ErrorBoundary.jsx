import React, { Component } from 'react';
import { Typography, Box } from '@mui/material';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" color="error">
          </Typography>
        </Box>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
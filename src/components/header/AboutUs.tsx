import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const AboutUs = () => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
    <Card sx={{ maxWidth: 500, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h4" component="div" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Welcome to Namaste React! <br />
          We are passionate about building modern web applications using React.<br />
          Our mission is to help developers learn and grow with hands-on projects and tutorials.<br />
          🍽️ Happy Coding!
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default AboutUs;
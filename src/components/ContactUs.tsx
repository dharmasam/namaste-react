import React from "react";
import { Card, CardContent, Typography, TextField, Button, Box } from "@mui/material";

const ContactUs = () => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
    <Card sx={{ maxWidth: 500, width: "100%", boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h4" component="div" gutterBottom>
          Contact Us
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Your Name"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            variant="outlined"
            type="email"
          />
          <TextField
            fullWidth
            label="Message"
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
          />
          <Button variant="contained" color="primary" sx={{ mt: 2, color: '#fff' }}>
            Send
          </Button>
        </Box>
      </CardContent>
    </Card>
  </Box>
);

export default ContactUs;
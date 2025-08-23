import React from "react";
import { Card, CardContent, Typography, List, ListItem, ListItemText, Box } from "@mui/material";

const Services = () => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
    <Card sx={{ maxWidth: 500, width: "100%", boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h4" component="div" gutterBottom>
          Our Services
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Online Food Ordering" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Fast Delivery" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Restaurant Reviews" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Customer Support" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  </Box>
);

export default Services;
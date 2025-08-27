import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";

const groceryItems = [
  { name: "Apples", price: 120 },
  { name: "Bananas", price: 60 },
  { name: "Milk", price: 50 },
  { name: "Bread", price: 40 },
  { name: "Eggs", price: 70 },
];

const Grocery = () => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
    <Card sx={{ maxWidth: 600, width: "100%", boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h4" component="div" gutterBottom>
          Grocery Store 🛒
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Fresh groceries delivered to your doorstep!
        </Typography>
        <Grid container spacing={2}>
          {groceryItems.map((item) => (
            <Grid item xs={6} sm={4} key={item.name}>
              <Card sx={{ boxShadow: 1 }}>
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2">₹{item.price}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  </Box>
);

export default Grocery;
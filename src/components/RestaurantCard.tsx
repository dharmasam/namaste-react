import React from "react";
import { Card, CardContent, CardMedia, Typography, Box, Chip, Stack } from "@mui/material";
import { RestaurantCardImageUrl } from "../utils/constants";

export const RestaurantCard = ({ resData }) => {
  const { name, costForTwo, cuisines, cloudinaryImageId, avgRating, sla } = resData.info;

  return (
    <Card sx={{ width: 250, height: 450, borderRadius: 2, boxShadow: 3, m: 1, cursor: "pointer", "&:hover": { boxShadow: 6, backgroundColor: '#f9f4f0ff' } }}>
      <CardMedia
        component="img"
        height="230"
        image={`${RestaurantCardImageUrl}${cloudinaryImageId}`}
        alt={name}
        sx={{ borderRadius: 2 }}
      />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {name}
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center" mb={1}>
          <Chip label={`⭐ ${avgRating}`} color="success" size="small" />
          <Chip label={`${sla?.deliveryTime || "--"} mins`} size="small" />
        </Stack>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {costForTwo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cuisines.join(", ")}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default RestaurantCard;
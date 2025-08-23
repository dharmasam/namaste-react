import React from "react";
import { useRouteError } from "react-router-dom";
import { Box, Typography, Card, CardContent } from "@mui/material";

const ErrorPage = () => {
    type ErrorType = {
        statusText?: string;
        message?: string;
        data?: string;
        status?: number;
    }
    const error = useRouteError() as ErrorType;
    console.error(error);

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
            <Card sx={{ maxWidth: "100vh", width: "100%", boxShadow: 3 }}>
                <CardContent>
                    <Typography variant="h4" color="error" gutterBottom>
                        Oops! Something went wrong.
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {error.data}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {error?.statusText}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {error?.status}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ErrorPage;
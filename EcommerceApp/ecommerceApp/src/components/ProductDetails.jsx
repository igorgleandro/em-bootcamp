import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

export default function ProductDetails({
  name = "Product Name",
  description = "This is a short description of the product with its key features.",
  price = 0,
  rating = 4.5,
  reviews = 120,
  availability = true,
  onAddToCart,
}) {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        bgcolor: "background.paper",
      }}
    >
      {/* Product name */}
      <Typography variant="h5" fontWeight={700} gutterBottom>
        {name}
      </Typography>

      {/* Price */}
      <Typography variant="h6" color="primary" gutterBottom>
        ${price.toFixed(2)}
      </Typography>

      {/* Rating */}
      <Stack direction="row" spacing={1} alignItems="center" mb={2}>
        <Rating value={rating} precision={0.5} readOnly />
        <Typography variant="body2" color="text.secondary">
          ({reviews} reviews)
        </Typography>
      </Stack>

      <Divider sx={{ mb: 2 }} />

      {/* Description */}
      <Typography variant="body2" color="text.secondary" mb={2}>
        {description}
      </Typography>

      {/* Availability */}
      <Typography
        variant="body2"
        color={availability ? "success.main" : "error.main"}
        fontWeight={600}
        mb={2}
      >
        {availability ? "In Stock" : "Out of Stock"}
      </Typography>

      {/* Add to cart */}
      <Button
        fullWidth
        variant="contained"
        color="warning"
        disabled={!availability}
        onClick={onAddToCart}
        sx={{ fontWeight: 600 }}
      >
        Add to Cart
      </Button>
    </Box>
  );
}

// src/CustomerReviews.js
import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Avatar, Box, Divider, IconButton, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AddCommentIcon from '@mui/icons-material/AddComment';

// Styled components
const ReviewCard = styled(Card)(({ theme }) => ({
  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
  },
}));

const AvatarStyled = styled(Avatar)({
  width: 60,
  height: 60,
  marginRight: 16,
});

const ReviewContent = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  padding: '16px',
});

const ReviewText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  fontStyle: 'italic',
  marginTop: '8px',
  marginBottom: '8px',
}));

const ReviewAuthor = styled(Typography)({
  fontWeight: 'bold',
});

const LikeButton = styled(IconButton)({
  marginRight: 8,
});

const CommentSection = styled(Box)({
  marginTop: '16px',
});

const CustomerReviews = () => {
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState('');

  // Dummy data for customer reviews
  const reviews = [
    {
      author: 'John Doe',
      text: '“Great products and excellent service. Highly recommended!”',
      image: 'https://via.placeholder.com/60', // Replace with actual reviewer images
    },
    {
      author: 'Jane Smith',
      text: '“Fast delivery and amazing quality. Will shop again!”',
      image: 'https://via.placeholder.com/60', // Replace with actual reviewer images
    },
  ];

  const handleLike = (index) => {
    alert(`Liked review ${index + 1}`);
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (reviewIndex) => {
    setComments({
      ...comments,
      [reviewIndex]: [...(comments[reviewIndex] || []), newComment],
    });
    setNewComment('');
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '32px' }}>
      <Typography variant="h3" align="center" gutterBottom>
        What Our Customers Are Saying
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        We take pride in providing the best products and service. Here's what our customers have to say about their experiences.
      </Typography>
      <Grid container spacing={4}>
        {reviews.map((review, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <ReviewCard>
              <ReviewContent>
                <AvatarStyled src={review.image} alt={review.author} />
                <Box>
                  <ReviewAuthor variant="h6">{review.author}</ReviewAuthor>
                  <ReviewText variant="body1">{review.text}</ReviewText>
                </Box>
                <Box display="flex" alignItems="center" marginLeft="auto">
                  <LikeButton onClick={() => handleLike(index)}>
                    <ThumbUpIcon />
                  </LikeButton>
                  <Typography variant="body2">Like</Typography>
                </Box>
              </ReviewContent>
              <Divider />
              <CardContent>
                <CommentSection>
                  <TextField
                    label="Add a comment"
                    multiline
                    rows={2}
                    fullWidth
                    variant="outlined"
                    value={newComment}
                    onChange={handleCommentChange}
                    style={{ marginBottom: '8px' }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<AddCommentIcon />}
                    onClick={() => handleCommentSubmit(index)}
                  >
                    Comment
                  </Button>
                  <Box marginTop="16px">
                    {comments[index]?.map((comment, idx) => (
                      <Typography key={idx} variant="body2" style={{ marginBottom: '8px' }}>
                        {comment}
                      </Typography>
                    ))}
                  </Box>
                </CommentSection>
              </CardContent>
            </ReviewCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CustomerReviews;

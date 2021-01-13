import { Container, Typography, Box, Button } from '@material-ui/core';
import Link from 'next/link';

const Index = () => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          About
        </Typography>
        <Link href="/">
          <Button variant="contained">Go to the index page</Button>
        </Link>
      </Box>
    </Container>
  );
};
export default Index;

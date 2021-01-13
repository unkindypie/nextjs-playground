import { Container, Typography, Box, Button } from '@material-ui/core';
import Link from 'next/link';

const Index = () => {
  return (
    <Container maxWidth="sm">
      {/* my - марджины по оси y */}
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Main page
        </Typography>
        <Link href="/about">
          <Button variant="contained">Go to the about page</Button>
        </Link>
      </Box>
    </Container>
  );
};
export default Index;

import { Container, Typography, Box, Button, Grid } from '@material-ui/core';
import Link from 'next/link';

import Card from 'components/Card';

import useStyles from './styles';

const cardsList = [
  {
    title: "It's a test card",
    date: 'January, 16',
    text: `This impressive paella is a perfect party dish and a fun meal to cook together with your
    guests. Add 1 cup of frozen peas along with the mussels, if you like.`,
    imageUrl:
      'https://i2.rozetka.ua/goods/20675375/asus_90nb0rf3_m04850_images_20675375481.jpg',
  },
  {
    title: 'Some other info',
    date: 'January, 18',
    text: `This impressive paella is a perfect party dish and a fun meal to cook together with your
    guests. Add 1 cup of frozen peas along with the mussels, if you like.`,
    imageUrl:
      'https://i2.rozetka.ua/goods/20675375/asus_90nb0rf3_m04850_images_20675375481.jpg',
  },
  {
    title: 'Dummy text',
    date: 'January, 3',
    text: `This impressive paella is a perfect party dish and a fun meal to cook together with your
    guests. Add 1 cup of frozen peas along with the mussels, if you like.`,
    imageUrl:
      'https://i2.rozetka.ua/goods/20675375/asus_90nb0rf3_m04850_images_20675375481.jpg',
  },
  {
    title: 'Hello there',
    date: 'January, 16',
    text: `This impressive paella is a perfect party dish and a fun meal to cook together with your
    guests. Add 1 cup of frozen peas along with the mussels, if you like.`,
    imageUrl:
      'https://i2.rozetka.ua/goods/20675375/asus_90nb0rf3_m04850_images_20675375481.jpg',
  },
  {
    title: 'How are you',
    date: 'January, 16',
    text: `This impressive paella is a perfect party dish and a fun meal to cook together with your
    guests. Add 1 cup of frozen peas along with the mussels, if you like.`,
    imageUrl:
      'https://i2.rozetka.ua/goods/20675375/asus_90nb0rf3_m04850_images_20675375481.jpg',
  },
];

const Index = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      {/* my - марджины по оси y */}
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Main page
        </Typography>
        <Link href="/about">
          <Button variant="contained">Go to the about page</Button>
        </Link>

        <Grid
          container
          justify="center"
          spacing={3}
          direction="row"
          className={classes.list}
        >
          {cardsList.map((item, id) => (
            <Grid key={id} item xs={12} sm={6}>
              <Card {...item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
export default Index;

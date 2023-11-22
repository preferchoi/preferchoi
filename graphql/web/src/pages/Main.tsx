import { Box, Heading } from '@chakra-ui/react';
import FilmList from '../compnents/film/FilmList';

export default function Main(): React.ReactElement {
  return (
    <Box>
      <Heading size={"lg"}></Heading>
      <FilmList />
    </Box>
  );
}

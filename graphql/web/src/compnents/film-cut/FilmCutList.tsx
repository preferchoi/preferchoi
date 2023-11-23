import { Box, Spinner, SimpleGrid, Image } from '@chakra-ui/react';
import { useCutsQuery } from '../../generated/graphql';

interface FilmCutListPorps {
  filmId: number;
}

export default function FilmCutList({
  filmId,
}: FilmCutListPorps): React.ReactElement {
  const { data, loading } = useCutsQuery({ variables: { filmId } });

  if (loading) {
    return (
      <Box textAlign={'center'} my={10}>
        <Spinner />
      </Box>
    );
  }

  return (
    <SimpleGrid my={4} columns={[1, 2, null, 3]} spacing={[2, null, 8]}>
      {data?.cuts.map((cut) => (
        <Image src={cut.src} key={cut.id} />
      ))}
    </SimpleGrid>
  );
}

import {
  Box,
  Spinner,
  SimpleGrid,
  Image,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import { useCutsQuery } from '../../generated/graphql';
import LazyLoad from 'react-lazyload';

interface FilmCutListPorps {
  filmId: number;
  onClick: (cutId:number) => void
}

export default function FilmCutList({
  filmId,
  onClick
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
        <LazyLoad height={200} once key={cut.id}>
          <LinkBox as={'article'}>
            <Box>
              <LinkOverlay cursor={'pointer'} onClick={() => onClick(cut.id)}>
                <Image src={cut.src} key={cut.id} />
              </LinkOverlay>
            </Box>
          </LinkBox>
        </LazyLoad>
      ))}
    </SimpleGrid>
  );
}

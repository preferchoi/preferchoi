import CommonLayout from '../compnents/CommonLayout';
import { useParams } from 'react-router-dom';
import { Box, Text, Spinner } from '@chakra-ui/react';
import { useFilmQuery } from '../generated/graphql';

// interface FilmPageParams {
//   filmId: string;
// }

export default function Film(): React.ReactElement {
  const { filmId } = useParams<{ filmId: string }>();
  const { data, loading, error } = useFilmQuery({
    variables: { filmId: Number(filmId) },
  });
  return (
    <CommonLayout>
      {loading && <Spinner />}
      {error && <Text>페이지를 표시할 수 없습니다.</Text>}
      <Box>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Box>
    </CommonLayout>
  );
}

import CommonLayout from '../compnents/CommonLayout';
import { useParams } from 'react-router-dom';
import { Text, Spinner } from '@chakra-ui/react';
import { useFilmQuery } from '../generated/graphql';
import FilmDetail from '../compnents/film/FilmDetail';

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
      {filmId && data?.film ? (
        <FilmDetail film={data.film} />
      ) : (
        <Text>페이지를 표시할 수 없습니다.</Text>
      )}
    </CommonLayout>
  );
}

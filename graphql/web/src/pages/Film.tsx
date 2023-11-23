import { useState } from 'react';
import CommonLayout from '../compnents/CommonLayout';
import { useParams } from 'react-router-dom';
import { Text, Spinner, Box, useDisclosure } from '@chakra-ui/react';
import { useFilmQuery } from '../generated/graphql';
import FilmDetail from '../compnents/film/FilmDetail';
import FilmCutList from '../compnents/film-cut/FilmCutList';
import FilmCutModal from '../compnents/film-cut/FilmCutModal';

// interface FilmPageParams {
//   filmId: string;
// }

export default function Film(): React.ReactElement {
  const { filmId } = useParams<{ filmId: string }>();
  const { data, loading, error } = useFilmQuery({
    variables: { filmId: Number(filmId) },
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCutId, setSelectedCutId] = useState<number>();
  const handleCutSelect = (cutId: number) => {
    setSelectedCutId(cutId);
    onOpen();
  };
  return (
    <CommonLayout>
      {loading && <Spinner />}
      {error && <Text>페이지를 표시할 수 없습니다.</Text>}
      {filmId && data?.film ? (
        <>
          <FilmDetail film={data.film} />
          <Box mt={12}>
            <FilmCutList filmId={data.film.id} onClick={handleCutSelect} />
          </Box>
        </>
      ) : (
        <Text>페이지를 표시할 수 없습니다.</Text>
      )}

      {selectedCutId ? (
        <FilmCutModal open={isOpen} onClose={onClose} cutId={selectedCutId} />
      ) : null}
    </CommonLayout>
  );
}

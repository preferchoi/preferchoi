import {
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useCutQuery } from '../../generated/graphql';
import FilmCutDetail from './FilmCutDetail';

interface FilmCutModalProps {
  open: boolean;
  onClose: () => void;
  cutId: number;
}

export default function FilmCutModal({
  open,
  onClose,
  cutId,
}: FilmCutModalProps): React.ReactElement {
  const { data, loading } = useCutQuery({
    variables: { cutId: Number(cutId) },
  });
  const modalSize = useBreakpointValue({ base: 'full', md: 'xl' });
  return (
    <Modal
      onClose={onClose}
      isOpen={open}
      isCentered
      size={modalSize}
      preserveScrollBarGap
    >
      <ModalOverlay />
      <ModalContent pt={2}>
        <ModalHeader>{data?.cut?.film?.title}</ModalHeader>
        <ModalCloseButton mt={3} />
        <ModalBody>
          {loading && (
            <Center py={4}>
              <Spinner />
            </Center>
          )}
          {!loading && !data && <Center>데이터를 불러오지 못했습니다.</Center>}
          {data && data.cut && (
            <FilmCutDetail
              cutId={data.cut.id}
              cutImg={data.cut.src}
              votesCount={data.cut.votesCount}
              isVoted={data.cut.isVoted}
            />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

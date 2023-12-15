import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import {
  CutDocument,
  CutQuery,
  useVoteMutation,
  CutQueryVariables,
} from '../../generated/graphql';

interface FilmCutDetailProps {
  cutImg: string;
  cutId: number;
  isVoted?: boolean;
  votesCount?: number;
}

export default function FilmCutDetail({
  cutImg,
  cutId,
  isVoted = false,
  votesCount = 0,
}: FilmCutDetailProps): React.ReactElement {
  const voteButtonColor = useColorModeValue('gray.500', 'gray.400');
  const [vote, { loading: voteLoading }] = useVoteMutation({
    variables: { cutId },
    update: (cache, fetchResult) => {
      const currentCut = cache.readQuery<CutQuery, CutQueryVariables>({
        query: CutDocument,
        variables: { cutId },
      });
      if (currentCut && currentCut.cut) {
        if (fetchResult.data?.vote) {
          cache.writeQuery<CutQuery, CutQueryVariables>({
            query: CutDocument,
            variables: { cutId: currentCut.cut.id },
            data: {
              __typename: 'Query',
              ...currentCut,
              cut: {
                ...currentCut.cut,
                votesCount: isVoted
                  ? currentCut.cut.votesCount - 1
                  : currentCut.cut.votesCount + 1,
                isVoted: !isVoted,
              },
            },
          });
        }
      }
    },
  });
  return (
    <Box>
      <AspectRatio ratio={16 / 9}>
        <Image src={cutImg} objectFit={'cover'} fallbackSrc="" />
      </AspectRatio>

      <Box py={4}>
        <Flex justify={'space-between'} alignItems={'center'}>
          <Heading size={'sm'}>{cutId}번째 사진</Heading>
          <HStack spacing={1} alignItems={'center'}>
            <Button
              color={isVoted ? 'ponk.400' : voteButtonColor}
              aria-label="like_this_btn"
              leftIcon={<FaHeart />}
              isLoading={voteLoading}
              onClick={() => vote()}
            >
              <Text>{votesCount}</Text>
            </Button>
            <Button colorScheme="teal">감상 남기기</Button>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}

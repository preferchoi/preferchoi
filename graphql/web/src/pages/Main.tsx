import { Heading } from '@chakra-ui/react';
import CommonLayout from "../compnents/CommonLayout";
import FilmList from '../compnents/film/FilmList';

export default function Main(): React.ReactElement {
  return (
    <CommonLayout>
      <Heading size={"lg"}>최고의 장면을 찾아보세요</Heading>
      <FilmList />
    </CommonLayout>
  );
}

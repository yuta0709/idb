import {
  Box,
  Button,
  Center,
  Container,
  Spinner,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { useIdeas } from "../lib/use-ideas";
import Idea from "../components/ideaListPage/Idea";
import IdeaPostModal from "../components/IdeaPostModal";

const Home: NextPage = () => {
  const { data, loading, error, reload } = useIdeas();

  if (error) {
    return (
      <Container>
        <Center>
          <Text color={"red"}>エラー</Text>
        </Center>
      </Container>
    );
  }

  if (loading) {
    return (
      <Container>
        <Center>
          <Spinner />
        </Center>
      </Container>
    );
  }

  return (
    <Container>
      {data.map((idea, i) => {
        return (
          <Box key={idea.id} my={2}>
            <Link href={`/${idea.id}`}>
              <a>
                <Idea idea={idea} />
              </a>
            </Link>
          </Box>
        );
      })}

      <Box position={"fixed"} bottom={5} right={5}>
        <IdeaPostModal onPost={reload} />
      </Box>
    </Container>
  );
};

export default Home;

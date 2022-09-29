import {
  Box,
  Center,
  Container,
  Spinner,
  Text,
  Stack,
  Heading,
  Divider,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useIdea } from "../lib/use-idea";
import { useRouter } from "next/router";
import Comment from "../components/Comment";
import CommentPostModal from "../components/CommentPostModal";

const Home: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error, reload } = useIdea(id as string);

  if (error) {
    return (
      <Container>
        <Center>
          <Text color={"red"}>エラー</Text>
        </Center>
      </Container>
    );
  }

  if (loading || !data) {
    return (
      <Container>
        <Center>
          <Spinner />
        </Center>
      </Container>
    );
  }

  return (
    <Container color={"gray.800"}>
      <Stack py={3} mb={40}>
        <Heading as={"h1"}>{data.title}</Heading>
        <Stack direction={"row"}>
          <Text fontSize={1} color={"gray.600"}>
            期限:
          </Text>
          <Text fontSize={1} color={"gray.600"}>
            {data.deadline}
          </Text>
        </Stack>
        <Text>{data.description}</Text>
      </Stack>
      <Heading as={"h2"} fontSize={"xl"}>
        コメント
      </Heading>
      <Box>
        {data.comments.map((comment) => {
          return (
            <Stack key={comment.id}>
              <Comment comment={comment} />
              <Divider />
            </Stack>
          );
        })}
      </Box>
      <Box position={"fixed"} bottom={5} right={5}>
        <CommentPostModal onPost={reload} id={data.id} />
      </Box>
    </Container>
  );
};

export default Home;

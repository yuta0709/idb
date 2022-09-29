import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

import { Idea } from "../../lib/use-ideas";

type Props = {
  idea: Idea;
};

const Idea: React.FC<Props> = ({ idea }) => {
  return (
    <Box rounded={5} p={5} border={"black"} borderWidth={1}>
      <Stack>
        <Heading>{idea.title}</Heading>
        <Text color="gray.600">期限: {idea.deadline}</Text>
      </Stack>
    </Box>
  );
};

export default Idea;

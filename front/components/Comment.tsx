import { Box, Stack, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import { Comment } from "../lib/use-idea";

type Props = {
  comment: Comment;
};

const Comment: React.FC<Props> = ({ comment }) => {
  return (
    <Box py={4}>
      <Stack>
        <Stack direction={"row"}>
          <Text>ID: {comment.id}</Text>
          <Text>
            投稿日: {format(new Date(comment.created_at), "yyyy-MM-dd")}
          </Text>
        </Stack>

        <Text>{comment.comment}</Text>
      </Stack>
    </Box>
  );
};

export default Comment;

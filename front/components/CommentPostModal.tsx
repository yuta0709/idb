import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

import axios from "axios";

type Props = {
  id: string | number;
  onPost: VoidFunction;
};

const CommentPostModal: React.FC<Props> = ({ onPost, id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const submit = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ORIGIN}/ideas/${id}/comment`,
        {
          comment,
        }
      );
      onClose();
      onPost();
    } catch (e) {
      console.error(e);
      setError("投稿に失敗しました");
    }
  };

  return (
    <>
      <IconButton
        bg={"blue.400"}
        color={"white"}
        aria-label="投稿"
        onClick={onOpen}
      >
        <AddIcon></AddIcon>
      </IconButton>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>コメントを投稿</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>コメント</FormLabel>
              <Textarea
                ref={initialRef}
                placeholder="コメント"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </FormControl>

            {error && <Text color={"tomato"}>{error}</Text>}
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={submit}
              disabled={!comment}
            >
              投稿
            </Button>
            <Button onClick={onClose}>キャンセル</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CommentPostModal;

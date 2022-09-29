import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Input,
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
import { Idea } from "../lib/use-ideas";

type Props = {
  onPost: (idea: Idea) => void;
};

const IdeaPostModal: React.FC<Props> = ({ onPost }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [error, setError] = useState("");

  const submit = async () => {
    try {
      const res = await axios.post<Idea>(
        `${process.env.NEXT_PUBLIC_API_ORIGIN}/ideas`,
        {
          title,
          description,
          deadline,
        }
      );
      onClose();
      onPost(res.data);
      setTitle("");
      setDescription("");
      setDeadline("");
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
          <ModalHeader>アイデアを投稿しよう</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>タイトル</FormLabel>
              <Input
                ref={initialRef}
                placeholder="タイトル"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>説明</FormLabel>
              <Textarea
                placeholder="説明"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>締め切り</FormLabel>
              <Input
                placeholder="締切"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </FormControl>
            {error && <Text color={"tomato"}>{error}</Text>}
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={submit}
              disabled={!(title && description && deadline)}
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

export default IdeaPostModal;

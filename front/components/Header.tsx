import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
  return (
    <Flex bg="black" h={"60px"} align="center">
      <Link href={"/"}>
        <a>
          <Box ml={3}>
            <Text color={"white"} fontSize={25}>
              IdeaBox
            </Text>
          </Box>
        </a>
      </Link>
    </Flex>
  );
};

export default Header;

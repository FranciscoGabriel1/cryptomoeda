import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function Carrousel() {
  return (
    <Flex w="100%" maxWidth={1480} mx="auto" px="6" bg="#54df77">
      <Text fontWeight={"bold"} fontSize={16}>
        Favoritos
      </Text>
      <Flex>
        <Box>
          <Heading>aqui vai um carrosel</Heading>
        </Box>
      </Flex>
    </Flex>
  );
}

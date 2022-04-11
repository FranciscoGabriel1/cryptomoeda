import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export default function Carrousel() {
  return (
    <SimpleGrid w="100%" maxWidth={1480} mx="auto" px="6" bg={"gray.100"}>
      <Text fontWeight={"bold"} fontSize={16}>
        Favoritos
      </Text>

      <Box h="120px">
        <Text>Aqui vai um carrousel de favoritos</Text>
      </Box>
    </SimpleGrid>
  );
}

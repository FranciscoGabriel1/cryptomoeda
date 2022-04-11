import {
  Box,
  Flex,
  FormLabel,
  Heading,
  SimpleGrid,
  Spacer,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import Carrousel from "../components/Carrousel";
import Header from "../components/Header";
import Table from "../components/Table";
import { Switch } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <>
      <Flex direction="column" h="100vh">
        <Header />
        <Flex w="100%" maxWidth={1480} mx="auto" px="6">
          <SimpleGrid
            flex="1"
            gap="4"
            minChildWidth={"320px"}
            alignContent="flex-start"
            mt="1px"
          >
            <Flex width={"100%"} mt="6">
              <Box p="4" width={"50%"}>
                <Heading as="h4" size="lg">
                  Preço das criptomoedas por valor de mercado
                </Heading>
              </Box>
              <Spacer />
              <Box p="4" width={"20%"}>
                <Flex verticalAlign="center">
                  <Text color="#A7B1C2" mr={2} fontSize={16}>
                    Highlights
                  </Text>
                  <Switch id="isChecked" />
                </Flex>
              </Box>
            </Flex>
          </SimpleGrid>
        </Flex>
        <Carrousel />
        <Table />
      </Flex>
    </>
  );
}

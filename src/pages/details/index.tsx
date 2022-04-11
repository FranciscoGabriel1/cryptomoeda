import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Header from "../../components/Header";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../services/api";

type DataType = {
  market_cap_rank: number;
  name: string;
  price: number;
  current_price: number;
  price_change_percentage_24h: number;
  atl: number;
  market_cap: number;
};

export default function Dashboard() {
  const [crypto, setCrypto] = useState<DataType[]>([]);

  const getCrypto = useCallback(async () => {
    try {
      let url = "/coins/bitcoin";
      const getCrytoData = await api.get(url);
      const getCryptoContent: DataType[] = getCrytoData.data;
      const newData = getCryptoContent;
      setCrypto(newData);
      console.log("getCryptoContent: ", getCryptoContent);
    } catch (e) {
      console.error("Analysis error: ", e);
    }
  }, [setCrypto]);

  useEffect(() => {
    getCrypto();
  }, [getCrypto]);

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
              <HStack>
                <Text color="#A7B1C2" fontSize={16}>
                  Criptomoedas &rsaquo;
                </Text>
                <Text color="#A7B1C2" fontSize={16}>
                  Moedas &rsaquo;
                </Text>
                <Text fontWeight={"semibold"} fontSize={16}>
                  Criptomoedas{" "}
                </Text>
              </HStack>
            </Flex>
          </SimpleGrid>
        </Flex>
        <Box w="100%" maxWidth={1480} mx="auto" px="6">
          <Flex width={"100%"} mt="6">
            <Box width={"50%"}>
              <Box bg="tomato" p={4} color="white">
                This is the Box
              </Box>
            </Box>
            <Spacer />
            <Box p="4" width={"20%"}>
              <Flex verticalAlign="center">
                <Box bg="tomato" w="100%" p={4} color="white">
                  This is the Box
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

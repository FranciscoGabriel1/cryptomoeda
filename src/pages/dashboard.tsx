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
import { DataTable } from "../components/DataTable";
import { Switch } from "@chakra-ui/react";
import { Column } from "react-table";
import { useCallback, useEffect, useState } from "react";
import { api } from "../services/api";


const columns: Column<any>[] = [
  {
    Header: " ",
    accessor: "",
  },
  {
    Header: "#",
    accessor: "market_cap_rank",
  },
  {
    Header: "Nome",
    accessor: "name",
    isNumeric: true,
  },
  {
    Header: "Preço",
    accessor: "current_price",
    isNumeric: true,
  },
  {
    Header: "24h %",
    accessor: "price_change_percentage_24h",
  },
  {
    Header: "7d %",
    accessor: "atl",
    isNumeric: true,
  },
  {
    Header: "Valor de mercado",
    accessor: "market_cap",
  },
];

export default function Dashboard() {
  const [crypto, setCrypto] = useState<any>("");


  const getCrypto = useCallback(async () => {
    try {
      let url = "/coins/markets/?vs_currency=usd";
      const getCrytoData = await api.get(url);
      const getCryptoContent: any = getCrytoData.data;
      setCrypto(getCryptoContent);
      console.log("getCryptoContent: ",getCryptoContent)
      console.log(crypto);
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
              <Box width={"50%"}>
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
        <Box w="100%" maxWidth={1480} mx="auto" px="6" mt="30px">
          <DataTable columns={columns} data={crypto} />
        </Box>

      </Flex>
    </>
  );
}

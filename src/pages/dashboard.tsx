import { Box, Flex, Heading, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import Carrousel from "../components/Carrousel";
import Header from "../components/Header";
import { DataTable } from "../components/DataTable";
import { Switch } from "@chakra-ui/react";
import { Column } from "react-table";
import { useCallback, useEffect, useState } from "react";
import { api } from "../services/api";
import NameWithImage from "../components/NameWithImage";
import ButtonSmall from "../components/ButtonSmall";
import PriceUpOrDown from "../components/PriceUpOrDown";

type DataType = {
  market_cap_rank: number;
  name: string;
  price: number;
  current_price: number;
  price_change_percentage_24h: number;
  atl: number;
  market_cap: number;
};

const columns: Column<any>[] = [
  {
    Header: " ",
    accessor: "favorite",
  },
  {
    Header: "#",
    accessor: "market_cap_rank",
  },
  {
    Header: "Nome",
    accessor: "customName",
  },
  {
    Header: "Preço",
    accessor: "current_price",
    isNumeric: true,
  },
  {
    Header: "24h %",
    accessor: "customPriceChangePercentage24h",
  },
  {
    Header: "7d %",
    accessor: "customCurrentPriceModified",
  },
  {
    Header: "Valor de mercado",
    accessor: "market_cap",
  },
];

const buildDataToTable = (requestedData: DataType[]) => {
  let data = requestedData.map((item: any) => {
    let newItem = { ...item };
    let nameModified = (
      <Flex>
        <NameWithImage
          name={item.name}
          image={item.image}
          symbol={item.symbol}
        />
        {item.price_change_percentage_24h < 0 ? (
          <ButtonSmall label="Buy" />
        ) : null}
      </Flex>
    );

    let currentPriceModified = <PriceUpOrDown price={item.atl} />;

    let priceChangePercentage24hModified = (
      <PriceUpOrDown price={item.price_change_percentage_24h} />
    );

    newItem = {
      ...item,
      favorite: "★",
      customName: nameModified,
      customPriceChangePercentage24h: priceChangePercentage24hModified,
      customCurrentPriceModified: currentPriceModified,
    };
    return newItem;
  });
  return data;
};

export default function Dashboard() {
  const [crypto, setCrypto] = useState<DataType[]>([]);

  const getCrypto = useCallback(async () => {
    try {
      let url = "/coins/markets/?vs_currency=usd";
      const getCrytoData = await api.get(url);
      const getCryptoContent: DataType[] = getCrytoData.data;
      const newData = buildDataToTable(getCryptoContent);
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

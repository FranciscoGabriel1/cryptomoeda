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

type UnitConversion = {
  position:number;
  name: string;
  price: number;
  day: number;
  week: number;
  marketValue: number;
};

const data: UnitConversion[] = [
  {
    position:1,
    name: "Bitcoin",
    price: 5000,
    day: 199,
    week: 88,
    marketValue: 19,
  },
  {
    position:2,
    name: "BNB",
    price: 4000,
    day: 198,
    week: 78,
    marketValue: 49,
  },
  {
    position:3,
    name: "XRP",
    price: 8000,
    day: 196,
    week: 68,
    marketValue: 79,
  },
];

// see https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-table
// to configure react-table typings
const columns: Column<UnitConversion>[] = [
  {
    Header: " ",
    accessor: "",
  },
  {
    Header: "#",
    accessor: "position",
  },
  {
    Header: "Nome",
    accessor: "name",
    isNumeric: true,
  },
  {
    Header: "Preço",
    accessor: "price",
    isNumeric: true,
  },
  {
    Header: "24h %",
    accessor: "day",
  },
  {
    Header: "7d %",
    accessor: "week",
    isNumeric: true,
  },
  {
    Header: "Valor de mercado",
    accessor: "marketValue",
  },
];

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
        <Box w="100%" maxWidth={1480} mx="auto" px="6">
          <DataTable columns={columns} data={data} />
        </Box>

        {/* <DataTable /> */}
      </Flex>
    </>
  );
}

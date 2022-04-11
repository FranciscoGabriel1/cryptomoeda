import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";

interface IPrice {
  price: number;
}

export default function PriceUpOrDown({ price }: IPrice) {
  return (
    <>
      {price < 0 ? (
        <Flex>
          <TriangleDownIcon
            aria-label="sorted descending"
            color="#EA3943"
            fontSize={10}
            fontWeight="semibold"
          />
          <Text color="#EA3943" ml={1} fontWeight="semibold">
            {price.toFixed(2).replace("-", "")}%
          </Text>
        </Flex>
      ) : (
        <Flex>
          <TriangleUpIcon
            aria-label="sorted ascending"
            color="#16C784"
            fontSize={10}
            fontWeight="semibold"
          />
          <Text ml={1} color="#16C784" fontWeight="semibold">
            {price.toFixed(2)}%
          </Text>
        </Flex>
      )}
    </>
  );
}

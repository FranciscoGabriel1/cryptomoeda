import { Text } from "@chakra-ui/react";

interface IDollar {
  price: string;
}

export default function ValueInDollar({ price }: IDollar) {
  return <Text fontWeight={"semibold"}>${price} </Text>;
}

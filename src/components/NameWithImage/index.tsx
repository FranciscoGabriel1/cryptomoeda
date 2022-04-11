import { Image, Text } from "@chakra-ui/react";

interface ICustomName {
  image: string;
  name: string;
  symbol: string;
}

export default function NameWithImage({ image, name, symbol }: ICustomName) {
  return (
    <>
      <Image borderRadius="full" boxSize="24px" src={image} alt="Dan Abramov" />
      <Text fontWeight={"semibold"} ml={2}>
        {name}
      </Text>
      <Text ml={2} color="#A7B1C2">
        {symbol.toUpperCase()}
      </Text>
    </>
  );
}

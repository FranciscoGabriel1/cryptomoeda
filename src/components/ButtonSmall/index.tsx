import { Button } from "@chakra-ui/react";

interface ICustomButtonSmall {
  label: string;
}

export default function ButtonSmall({ label }: ICustomButtonSmall) {
  return (
    <>
      <Button
        colorScheme="blue"
        size="xs"
        color={"#3C67F7"}
        bg="#E7F0FF"
        ml={2}
        _hover={{ bg: "#5c91ee", color: "white" }}
      >
        {label}
      </Button>
    </>
  );
}

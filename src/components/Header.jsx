import {
	Box,
	Flex,
	Text,
	Button,
	useColorModeValue,
	Container,
	Heading,
} from "@chakra-ui/react";

const button = ["Characters", "Locations", "Episodes"];

export default function Header() {
	return (
		<Container maxW={"6xl"}>
			<Flex
				bg={useColorModeValue("white", "gray.800")}
				color={useColorModeValue("gray.600", "white")}
				minH={"80px"}
				py={{ base: 2 }}
				px={{ base: 4 }}
				align={"center"}
			>
				<Flex ml={{ base: -2 }} display={{ base: "flex", md: "none" }}></Flex>
				<Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
					<Heading size={"lg"} textAlign={{ base: "center", md: "left" }}>
						Characters
					</Heading>
				</Flex>

				<Box display={{ base: "none", md: "flex" }} gap={2}>
					{button &&
						button.map((value) => (
							<Button colorScheme="blue" size={"sm"}>
								{value}
							</Button>
						))}
				</Box>
			</Flex>
		</Container>
	);
}

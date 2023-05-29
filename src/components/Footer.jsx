import {
	Box,
	chakra,
	Container,
	IconButton,
	Stack,
	Text,
	useColorModeValue,
	VisuallyHidden,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export default function SmallWithSocial() {
	return (
		<Box
			bg={useColorModeValue("gray.50", "gray.900")}
			color={useColorModeValue("gray.700", "gray.200")}
		>
			<Container
				as={Stack}
				maxW={"6xl"}
				py={4}
				direction={{ base: "column", md: "row" }}
				spacing={4}
				justify={{ base: "center", md: "space-between" }}
				align={{ base: "center", md: "center" }}
			>
				<Stack>
					<Text>Muhammad Azhar Rizki - azharrizki7834@gmail.com</Text>
				</Stack>
				<Stack direction={"row"} spacing={6}>
					<IconButton
						variant={"ghost"}
						size={"md"}
						icon={<FaGithub size={24} />}
					/>
				</Stack>
			</Container>
		</Box>
	);
}

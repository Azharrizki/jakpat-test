import {
	Flex,
	Image,
	Stack,
	Heading,
	Text,
	Box,
	Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Content = () => {
	const [character, setCharacter] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchData = async () => {
		setLoading(true);
		setError(null);

		try {
			const response = await fetch(
				`https://rickandmortyapi.com/api/character?page=${page}`
			);
			const data = await response.json();

			setCharacter(data.results);
			setLoading(false);
		} catch (err) {
			setLoading(false);
			setError("Gagal menampilkan karakter");
		}
	};

	useEffect(() => {
		fetchData();
	}, [page]);

	return (
		<Flex my={"60px"} gap={12} flexWrap={"wrap"} justifyContent={"center"}>
			{loading ? (
				<p>Loading...</p>
			) : error ? (
				<p>{error}</p>
			) : (
				<>
					{character &&
						character.map((char) => (
							<Box
								key={char.id}
								w={"250px"}
								p={4}
								rounded={"lg"}
								bgColor={"gray.50"}
								_hover={{
									backgroundColor: "gray.200",
									transition: "all 0.4s",
								}}
							>
								<Image
									src={char.image}
									alt="Green double couch with wooden legs"
									borderRadius="lg"
									mb={"8px"}
								/>
								<Stack>
									<Heading
										size="md"
										color={"blue.700"}
										_hover={{
											cursor: "pointer",
										}}
									>
										{char.name}
									</Heading>
									<Text color={"gray.600"}>{char.species}</Text>
								</Stack>
							</Box>
						))}
					<Button onClick={() => setPage((p) => p + 1)}>Load More</Button>
				</>
			)}
		</Flex>
	);
};

export default Content;

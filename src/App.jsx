import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { Box, Container } from "@chakra-ui/react";

const App = () => {
	return (
		<>
			<Box
				borderBottom={1}
				borderStyle={"solid"}
				borderColor={"gray.200"}
				position="fixed"
				top="0"
				left="0"
				right="0"
				zIndex="999"
			>
				<Header />
			</Box>
			<Container maxW={"container.xl"}>
				<Content />
			</Container>
			<Footer />
		</>
	);
};

export default App;

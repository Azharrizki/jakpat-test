import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { Box, Container } from "@chakra-ui/react";

const App = () => {
	return (
		<>
			<Box borderBottom={1} borderStyle={"solid"} borderColor={"gray.200"}>
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

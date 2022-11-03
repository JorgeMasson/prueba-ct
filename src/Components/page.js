import { useState, } from "react";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "./sidebar";

export default function Page({ main }) {
    const [mainMargin, setMainMargin] = useState(200);

    return (
        <Flex minHeight="100vh" width="98.9vw" background="#F2F5F5">
            <Sidebar />
            <Box ml={mainMargin} zIndex={2}>
                {main}
            </Box>
        </Flex>
    );
}
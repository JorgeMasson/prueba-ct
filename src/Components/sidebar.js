import React, { useState } from "react";
import Button from "../Platform/button";
import { Stack, Flex, Box, Text } from "@chakra-ui/react";

export default function Sidebar() {
    const [userType, setUserType] = useState("admin");
    return (
        <Box h="100%" background="white" w="200px" position="fixed">
            <Stack m="auto">
                <Flex>
                    <Button
                        background={userType === "admin" && "green"}
                        _hover={{ background: "green2" }}
                        ghost
                        w="100%"
                        py={50}
                        onClick={() => setUserType("admin")}
                    >
                        <Text
                            color={userType === "admin" ? "white" : "black"}
                            fontWeight={userType === "admin" ? "bold" : "light"}
                        >
                            Administrador
                        </Text>
                    </Button>
                </Flex>
                <Flex>
                    <Button
                        background={userType === "solicitante" && "green"}
                        _hover={{ background: "green2" }}
                        ghost
                        w="100%"
                        py={50}
                        onClick={() => setUserType("solicitante")}
                    >
                        <Text
                            color={userType === "solicitante" ? "white" : "black"}
                            fontWeight={userType === "solicitante" ? "bold" : "light"}
                        >
                            Solicitante
                        </Text>
                    </Button>
                </Flex>
            </Stack>
        </Box>
    );
}

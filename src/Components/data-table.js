import React, { useState } from "react";
import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Image,
    Modal,
    ModalBody,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    Select,
    ButtonGroup,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useDisclosure,
    Textarea,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Skeleton,
    TableCaption,
    Checkbox,
    MenuDivider,
    Center,
} from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import Button from "../Platform/button";
import Form from "./form";

export default function DataTable() {
    const [alphabeticalSort, setAlphabeticalSort] = useState("none");
    const [filterApplied, setFilterApplied] = useState([]);

    function applyFilter() {
        var newArray = filterApplied;
        if (alphabeticalSort === "name_down") {
            newArray.sort((a, b) =>
                a > b
                    ? 1
                    : b > a
                        ? -1
                        : 0
            );
        } else if (alphabeticalSort === "name_up") {
            newArray.sort((a, b) =>
                a > b
                    ? -1
                    : b > a
                        ? 1
                        : 0
            );
        }

        return Array;
    }

    return (
        <Box py="10px" px="54px" width={{ base: "100%", "2xl": "1300px" }}>
            <Heading fontWeight={600} as="h1">
                Promociones
            </Heading>
            <Box background="white" w="100%" margin="auto" px={8} py={8} mt={5}>
                <Table mt={8}>
                    <Thead>
                        <Tr>
                            <Th>
                                <Flex alignItems="center">
                                    <Text mr={2}>PRODUCTO</Text>
                                    <Stack spacing={0}>
                                        <TriangleUpIcon
                                            color={alphabeticalSort !== "producto_up" && "#ccc"}
                                            onClick={() => {
                                                if (alphabeticalSort !== "producto_up") {
                                                    setAlphabeticalSort("producto_up");
                                                } else {
                                                    setAlphabeticalSort("none");
                                                }
                                            }}
                                        />
                                        <TriangleDownIcon
                                            color={alphabeticalSort !== "producto_down" && "#ccc"}
                                            onClick={() => {
                                                if (alphabeticalSort !== "producto_down") {
                                                    setAlphabeticalSort("producto_down");
                                                } else {
                                                    setAlphabeticalSort("none");
                                                }
                                            }}
                                        />
                                    </Stack>
                                </Flex>
                            </Th>
                            <Th>
                                <Flex alignItems="center">
                                    <Text mr={2}>IMPORTE</Text>
                                    <Stack spacing={0}>
                                        <TriangleUpIcon
                                            color={alphabeticalSort !== "importe_up" && "#ccc"}
                                            onClick={() => {
                                                if (alphabeticalSort !== "importe_up") {
                                                    setAlphabeticalSort("importe_up");
                                                } else {
                                                    setAlphabeticalSort("none");
                                                }
                                            }}
                                        />
                                        <TriangleDownIcon
                                            color={alphabeticalSort !== "importe_down" && "#ccc"}
                                            onClick={() => {
                                                if (alphabeticalSort !== "importe_down") {
                                                    setAlphabeticalSort("importe_down");
                                                } else {
                                                    setAlphabeticalSort("none");
                                                }
                                            }}
                                        />
                                    </Stack>
                                </Flex>
                            </Th>
                            <Th>
                                <Flex alignItems="center">
                                    <Text mr={2}>MONEDA</Text>
                                    <Stack spacing={0}>
                                        <TriangleUpIcon
                                            color={alphabeticalSort !== "moneda_up" && "#ccc"}
                                            onClick={() => {
                                                if (alphabeticalSort !== "moneda_up") {
                                                    setAlphabeticalSort("moneda_up");
                                                } else {
                                                    setAlphabeticalSort("none");
                                                }
                                            }}
                                        />
                                        <TriangleDownIcon
                                            color={alphabeticalSort !== "moneda_down" && "#ccc"}
                                            onClick={() => {
                                                if (alphabeticalSort !== "moneda_down") {
                                                    setAlphabeticalSort("moneda_down");
                                                } else {
                                                    setAlphabeticalSort("none");
                                                }
                                            }}
                                        />
                                    </Stack>
                                </Flex>
                            </Th>
                            <Th>
                                <Flex alignItems="center">
                                    <Text mr={2}>FECHA INICIO</Text>
                                    <Stack spacing={0}>
                                        <TriangleUpIcon
                                            color={alphabeticalSort !== "inicio_up" && "#ccc"}
                                            onClick={() => {
                                                if (alphabeticalSort !== "inicio_up") {
                                                    setAlphabeticalSort("inicio_up");
                                                } else {
                                                    setAlphabeticalSort("none");
                                                }
                                            }}
                                        />
                                        <TriangleDownIcon
                                            color={alphabeticalSort !== "inicio_down" && "#ccc"}
                                            onClick={() => {
                                                if (alphabeticalSort !== "inicio_down") {
                                                    setAlphabeticalSort("inicio_down");
                                                } else {
                                                    setAlphabeticalSort("none");
                                                }
                                            }}
                                        />
                                    </Stack>
                                </Flex>
                            </Th>
                            <Th>
                                <Flex alignItems="center">
                                    <Text mr={2}>FECHA FIN</Text>
                                    <Stack spacing={0}>
                                        <TriangleUpIcon
                                            color={alphabeticalSort !== "fin_up" && "#ccc"}
                                            onClick={() => {
                                                if (alphabeticalSort !== "fin_up") {
                                                    setAlphabeticalSort("fin_up");
                                                } else {
                                                    setAlphabeticalSort("none");
                                                }
                                            }}
                                        />
                                        <TriangleDownIcon
                                            color={alphabeticalSort !== "fin_down" && "#ccc"}
                                            onClick={() => {
                                                if (alphabeticalSort !== "fin_down") {
                                                    setAlphabeticalSort("fin_down");
                                                } else {
                                                    setAlphabeticalSort("none");
                                                }
                                            }}
                                        />
                                    </Stack>
                                </Flex>
                            </Th>
                            <Th>
                                <Flex alignItems="center">
                                    <Text mr={2}>ESTATUS</Text>
                                    <Stack spacing={0}>
                                        <TriangleUpIcon
                                            color={alphabeticalSort !== "estatus_up" && "#ccc"}
                                            onClick={() => {
                                                if (alphabeticalSort !== "estatus_up") {
                                                    setAlphabeticalSort("estatus_up");
                                                } else {
                                                    setAlphabeticalSort("none");
                                                }
                                            }}
                                        />
                                        <TriangleDownIcon
                                            color={alphabeticalSort !== "estatus_down" && "#ccc"}
                                            onClick={() => {
                                                if (alphabeticalSort !== "estatus_down") {
                                                    setAlphabeticalSort("estatus_down");
                                                } else {
                                                    setAlphabeticalSort("none");
                                                }
                                            }}
                                        />
                                    </Stack>
                                </Flex>
                            </Th>
                            <Th>
                                <Flex alignItems="center">
                                    <Text mr={2}>COMENTARIO</Text>
                                </Flex>
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>
                                <Text >...</Text>
                            </Td>
                            <Td>
                                <Text >...</Text>
                            </Td>
                            <Td>
                                <Text >...</Text>
                            </Td>
                            <Td>
                                <Text >...</Text>
                            </Td>
                            <Td>
                                <Text >...</Text>
                            </Td>
                            <Td>
                                <Text >...</Text>
                            </Td>
                            <Td>
                                <Text >...</Text>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
        </Box>
    );
}

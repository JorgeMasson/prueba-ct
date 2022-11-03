import React, { useState, useMemo, useEffect } from "react";
import {
    Box,
    Flex,
    Heading,
    Text,
    Input,
    HStack,
    VStack,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import Button from "../Platform/button";

export default function Form() {
    const [isDisabled, setIsDisabled] = useState(false);
    const [producto, setProducto] = useState("");
    const [importe, setImporte] = useState(0);
    const [moneda, setMoneda] = useState("mxn");
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaFin, setFechaFin] = useState("");
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    const disabledButton = useMemo(() => {
        return !producto || !importe || !moneda || !fechaInicio || !fechaFin;
    }, [producto, importe, moneda, fechaInicio, fechaFin]);

    return (
        <Box py="10px" px="54px" width="1300px">
            <Heading fontWeight={600} as="h1">
                Nueva Promoción
            </Heading>
            <Flex p={10} mt={5} background="white" flexDirection="column">
                <HStack spacing="50px">
                    <Box>
                        <VStack spacing="10px" alignItems="flex-start">
                            <Text py={2} w={150}>
                                Producto
                            </Text>
                            <Text py={2}>Importe</Text>
                            <Text py={2}>Fecha Inicio</Text>
                            <Text py={2}>Fecha Fin</Text>
                        </VStack>
                    </Box>
                    <Box>
                        <VStack spacing="10px">
                            <Input
                                w={300}
                                rounded="none"
                                onChange={(e) => setProducto(e.target.value)}
                            />
                            <InputGroup>
                                <Input w={300} type="number" rounded="none" onChange={(e) => setImporte(e.target.value)} />
                                <InputRightElement width="5rem" pr="5px">
                                    <Button
                                        isDisabled={isDisabled}
                                        bgColor={moneda === "mxn" ? "brightGreen" : "transparent"}
                                        h="1.6rem"
                                        size="sm"
                                        onClick={() => setMoneda("mxn")}
                                    >
                                        <Text color="black">MXN</Text>
                                    </Button>
                                    <Button
                                        isDisabled={isDisabled}
                                        ml={1}
                                        bgColor={moneda === "usd" ? "brightGreen" : "transparent"}
                                        h="1.6rem"
                                        size="sm"
                                        onClick={() => setMoneda("usd")}
                                    >
                                        <Text color="black">USD</Text>
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <Input
                                w={300}
                                rounded="none"
                                type="date"
                                min={yyyy + "-" + mm + "-" + dd}
                                onChange={(e) => setFechaInicio(e.target.value)}
                            />
                            <Input
                                isDisabled={!fechaInicio}
                                w={300}
                                rounded="none"
                                type="date"
                                min={fechaInicio}
                                onChange={(e) => setFechaFin(e.target.value)}
                            />
                        </VStack>
                    </Box>
                </HStack>
                <Button mt={10} w={150} background="brightGreen" isDisabled={disabledButton}>
                    <Text color="black">Guardar</Text>
                </Button>
            </Flex>
        </Box>
    );
}

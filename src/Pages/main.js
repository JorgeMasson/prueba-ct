import React, { useEffect, useState } from "react";
import Button from "../Platform/button";
import {
    Stack,
    Flex,
    Image,
    Slide,
    useDisclosure,
    Divider,
    CloseButton,
    SlideFade,
    Text,
    Box,
    HStack,
    Link as ChakraLink,
    Collapse,
    ChakraProvider,
    ScaleFade,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Select,
    Input,
    Center,
    Spacer,
} from "@chakra-ui/react";
import Form from "../Components/form";
import Page from "../Components/page";
import DataTable from "../Components/data-table";

export default function Main() {
    const [isForm, setIsForm] = useState(false);


    return (
        <Page
            main={
                <>
                    <Box w="100%" margin="auto" px={8} py={8} mt={12}>
                        <Flex justifyContent="space-between" alignItems="center">
                            <Button w="150px" secondary onClick={() => setIsForm(!isForm)}>
                                {isForm ? "Regresar" : "Nueva Promoción"}
                            </Button>
                        </Flex>
                    </Box>
                    {isForm ? <Form /> : <DataTable />}
                </>
            }
        />
    );
}

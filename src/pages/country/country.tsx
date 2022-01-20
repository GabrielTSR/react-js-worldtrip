import {
    Box,
    Flex,
    Image,
    Text,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
    IconButton,
    Icon,
    Heading,
} from '@chakra-ui/react';
import Head from 'next/head';
import { Header } from '../../components/Header';

import { AiOutlineInfoCircle } from 'react-icons/ai';
import { CityMoreHundred } from '../../components/CityMoreHundred';

export default function Country() {
    return (
        <>
            <Head>
                <title>worldtrip | Europa</title>
            </Head>
            <Header />
            <Flex
                h={[200, 500]}
                align={['center', 'flex-end']}
                justify={['center', 'flex-start']}
                pl={['0', '130px']}
                pb={['0', '70px']}
                backgroundImage="/images/europeBanner.svg"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                color="white"
                fontSize={['xx-large', 'xxx-large']}
                fontWeight="600"
            >
                Europa
            </Flex>
            <Box px="6vw">
                <Flex mt={50} gap={20} direction={['column', 'row']}>
                    <Text flex="1" textAlign="justify" fontSize={['xl', '2xl']}>
                        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental
                        da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes
                        Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                    </Text>
                    <Flex flex="1" align="center" justify="space-around">
                        <Box>
                            <Text fontWeight={['500', '600']} fontSize={['md', '2xl']} textAlign={['start', 'center']}>
                                <Text as="span" color="yellow.700" fontSize="3xl" lineHeight="8">
                                    50 <br />
                                </Text>
                                países
                            </Text>
                        </Box>
                        <Box>
                            <Text fontWeight={['500', '600']} fontSize={['md', '2xl']} textAlign={['start', 'center']}>
                                <Text as="span" color="yellow.700" fontSize="3xl" lineHeight="8">
                                    60 <br />
                                </Text>
                                línguas
                            </Text>
                        </Box>
                        <Box>
                            <Text fontWeight={['500', '600']} fontSize={['md', '2xl']} textAlign={['start', 'center']}>
                                <Text as="span" color="yellow.700" fontSize="3xl" lineHeight="8">
                                    27 <br />
                                </Text>
                                cidades +100
                                <Popover>
                                    <PopoverTrigger>
                                        <IconButton
                                            h="20px"
                                            w="10px"
                                            variant="unstyled"
                                            aria-label="Open navigation"
                                            color="gray.400"
                                            icon={<Icon as={AiOutlineInfoCircle} fontWeight="bold" />}
                                        ></IconButton>
                                    </PopoverTrigger>
                                    <PopoverContent bg="white" right={20}>
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverHeader>Cidades +100</PopoverHeader>
                                        <PopoverBody>
                                            São aquelas que alcançaram mais de 100 mil habitantes.
                                        </PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
                <Box marginTop={20}>
                    <Heading as="h2" fontWeight="500">
                        Cidades +100
                    </Heading>
                    <Flex w="100%" flexWrap="wrap" pb={10} gap="40px">
                        <CityMoreHundred />
                        <CityMoreHundred />
                        <CityMoreHundred />
                        <CityMoreHundred />
                        <CityMoreHundred />
                        <CityMoreHundred />
                    </Flex>
                </Box>
            </Box>
        </>
    );
}

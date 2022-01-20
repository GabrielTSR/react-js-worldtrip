import { Flex, Heading, Link as ChakraLink, Text } from '@chakra-ui/react';
import Link from 'next/link';

export function SliderContent() {
    return (
        <Link href="/country/country" passHref>
            <ChakraLink
                display="flex"
                backgroundImage="/images/europeSlider.svg"
                alignItems="center"
                justifyContent="center"
                h={[300, 500]}
                backgroundSize="cover"
                flexDir="column"
                color="white.800"
            >
                <Heading mb={5} fontSize={['3xl', '5xl']} fontWeight={700}>
                    Europa
                </Heading>
                <Text fontSize={['medium', '2xl']} fontWeight={700}>
                    O continente mais antigo
                </Text>
            </ChakraLink>
        </Link>
    );
}

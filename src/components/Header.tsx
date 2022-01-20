import { Flex, Icon, IconButton, Image, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoIosArrowBack } from 'react-icons/io';

export function Header() {
    const { asPath } = useRouter();

    return (
        <Flex h="85" align="center">
            {asPath !== '/' && (
                <Link href="/" passHref>
                    <ChakraLink>
                        <IconButton
                            position="relative"
                            left="5vw"
                            variant="unstyled"
                            aria-label="Open navigation"
                            icon={<Icon as={IoIosArrowBack} fontSize="5xl" fontWeight="bold" />}
                        ></IconButton>
                    </ChakraLink>
                </Link>
            )}
            <Image h="45" mx="auto" src="/images/logo.svg" alt="logo"></Image>
        </Flex>
    );
}

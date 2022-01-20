import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export function CityMoreHundred() {
    return (
        <Box mt={10} mx={['auto', '0']} minWidth="256px" borderRadius="4px">
            <Image src="/images/london.svg" />
            <Flex borderX="1px solid" borderBottom="1px solid" borderColor="yellow.700" borderRadius="4px">
                <Box flex="1" pl="30px" mt="20px" fontFamily="Cities">
                    <Heading as="h6" fontWeight="600" fontSize="large">
                        Londres
                    </Heading>
                    <Text color="gray.400" fontWeight="500" mt="3" marginBottom={5}>
                        Reino Unido
                    </Text>
                </Box>
                <Image src="/images/england-flag.svg" mr={5} />
            </Flex>
        </Box>
    );
}

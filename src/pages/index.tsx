import { Box, Flex, Heading, Text, Image, useBreakpointValue } from '@chakra-ui/react';
import Head from 'next/head';
import { Header } from '../components/Header';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles/swiper.module.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Scrollbar, A11y, Autoplay } from 'swiper';
import { CategoryIcon } from '../components/CategoryIcon';
import { SliderContent } from '../components/SliderContent';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Scrollbar, A11y, Autoplay]);

export default function Home() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <>
            <Head>
                <title>worldtrip | Home</title>
            </Head>
            <Header />
            <Flex
                mb="5rem"
                py="2rem"
                gap="5"
                bg="#0000008"
                bgImage="/images/sky-night-background.svg"
                backgroundSize="cover"
                bgBlendMode="darken"
            >
                <Flex ml="8vw" pr={['2', '20']} justify="center" direction="column" flex="1">
                    <Heading
                        lineHeight={['2rem', '3.375rem']}
                        color="white.800"
                        as="h2"
                        fontSize={['2xl', '4xl']}
                        fontWeight="500"
                        mb="30"
                    >
                        5 Continentes,
                        <br /> infinitas possibilidades.
                    </Heading>
                    <Text color="white.600" fontSize={['medium', 'xl']} fontWeight="400">
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.{' '}
                    </Text>
                </Flex>
                {isWideVersion && (
                    <Flex flex="1" align="center">
                        <Image src="/images/Airplane.svg" position="relative" width="90%" bottom="-20%" />
                    </Flex>
                )}
            </Flex>
            <Flex mb={20} px={['6vw', '8vw']} gap={['2', '4']} flexWrap="wrap">
                <CategoryIcon
                    srcImage="/images/cocktail.svg"
                    categoryName="vida noturna"
                    isWideVersion={isWideVersion}
                />
                <CategoryIcon srcImage="/images/surf.svg" categoryName="praia" isWideVersion={isWideVersion} />
                <CategoryIcon srcImage="/images/building.svg" categoryName="moderno" isWideVersion={isWideVersion} />
                <CategoryIcon srcImage="/images/museum.svg" categoryName="clássico" isWideVersion={isWideVersion} />
                <CategoryIcon srcImage="/images/earth.svg" categoryName="e mais..." isWideVersion={isWideVersion} />
            </Flex>
            <Box px={['0', '100']}>
                <Box w="100px" h="2px" bg="gray.600" mx="auto" mb={20}></Box>
                <Heading fontSize={['2xl', '3xl']} textAlign="center" fontWeight="500" mb={20}>
                    Vamos nessa?
                    <br /> Então escolha seu continente
                </Heading>
                <Swiper
                    slidesPerView={1}
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    autoplay={{
                        delay: 4000,
                    }}
                    className={styles.swiper}
                    mousewheel={true}
                    keyboard={true}
                >
                    <SwiperSlide>
                        <SliderContent />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderContent />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderContent />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderContent />
                    </SwiperSlide>
                </Swiper>
            </Box>
        </>
    );
}

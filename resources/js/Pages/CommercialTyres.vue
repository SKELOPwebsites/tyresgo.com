<template>
    <Head>
        <title>Commercial Mobile Tyre Fitting | Van Mobile Tyre Fitting | Tyres GO</title>
        <meta name="description" content="Yes, we also do commercial &amp; van tyres alongside normal passenger tyres, fitted at your desired location on the same day of your call">
        <meta name="keywords" content="mobile tyre fitting, mobile tyre service, tyre fitted at home, emergency tyre service, emergency tyre fitting, roadside tyre fitter, roadside tyre service, tyre fitted at work, mobile tyre puncture repair, tyre puncture repair">
        <link rel="canonical" href="">
    </Head>
    <Container>
        <div class="flex md:flex-row flex-col md:pt-12 sm:pt-6 xl:h-[340px] lg:h-[300px] md:h-[280px]">
            <div class="xl:w-[70%] md:w-[65%] w-full">
                <div class="relative overflow-hidden md:h-full sm:h-[300px] h-[200px]">
                    <img
                        src="/assets/images/showcase/commercial-tyres.webp"
                        srcset="/assets/images/showcase/commercial-tyres.webp 1920w,
                                    /assets/images/showcase/commercial-tyres-500.webp 500w,
                                    /assets/images/showcase/commercial-tyres-300.webp 300w"
                        class="object-cover object-center w-full h-full brightness-[0.6]"
                        sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw"
                        alt="Mobile Tyre Fitting"
                    >
                    <div class="absolute left-0 right-0 xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center">
                        <h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1">Van Commercial Tyres</h1>
                        <p class="sm:text-sm text-xs text-center">Same day service for emergencies & non-emergencies.</p>
                    </div>
                </div>
            </div>
            <div class="xl:w-[30%] md:w-[35%] w-full">
                <SearchTyre />
            </div>
        </div>
        <OurServices />
    </Container>

    <Container>
        <Content>
            <div class="xl:px-11 sm:px-8 px-4">
                <h1 class="font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase">Commercial Mobile Tyre Fitting</h1>
                <h2 class="md:text-xl sm:text-lg text-base mb-10">Yes, we also fit commercial tyres alongside normal passenger tyres.</h2>

                <div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4">
                    <div class="col-span-12 lg:p-4">
                        <p class="text-sm">
                            Why not take advantage of our convenient commercial mobile tyre fitting service?
                        </p>
                        <br>
                        <p class="text-sm">
                            Our services comes to your desired fitting location to fit your new commercial
                            tyre so you don't have to waste your time to get your tyres fitted at a garage,
                            and best of all, we operate every day of the week and can fit your tyre on the
                            same day of your call so you and your commercial vehicle are safe on the road.
                        </p>
                        <br>
                        <p class="text-sm flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07442980101">07442 980101</a> for a prompt service</span>
                        </p>
                    </div>
                </div>
            </div>
        </Content>
    </Container>

    <OurQualities />
</template>

<script setup>
import { Link, Head } from '@inertiajs/vue3'
import Container from '../Shared/Container.vue'
import Content from '../Shared/Content.vue'
import MainCarousel from '../Shared/Carousel/MainCarousel.vue'
import SearchTyre from '../Shared/SearchTyre.vue'
import OurServices from '../Shared/OurServices.vue'
import OurQualities from '../Shared/OurQualities.vue'
</script>

<style scoped>

</style>

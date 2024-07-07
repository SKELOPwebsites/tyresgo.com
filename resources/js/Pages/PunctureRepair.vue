<template>
    <Head>
        <title>Puncture Repair | Tyres GO</title>
        <meta name="description" content="Mobile puncture repair could never be easier! We come and repair your tyre whether your at home, work or even roadside.">
        <meta name="keywords" content="tyre fitting, mobile tyre fitting, tyre services, repair my tyre">
        <link rel="canonical" href="https://tyresgo.com/puncture-repair">
    </Head>
    <Container>
        <div class="flex md:flex-row flex-col md:pt-12 sm:pt-6 xl:h-[340px] lg:h-[300px] md:h-[280px]">
            <div class="xl:w-[70%] md:w-[65%] w-full">
                <div class="relative overflow-hidden md:h-full sm:h-[300px] h-[200px]">
                    <img
                        src="/assets/images/showcase/puncture-repair.webp"
                        srcset="/assets/images/showcase/puncture-repair.webp 1920w,
                                    /assets/images/showcase/puncture-repair-500.webp 500w,
                                    /assets/images/showcase/puncture-repair-300.webp 300w"
                        class="object-cover object-center w-full h-full brightness-[0.6]"
                        sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw"
                        alt="Mobile Tyre Fitting"
                    >
                    <div class="absolute left-0 right-0 xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center">
                        <h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1">Puncture Repair</h1>
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
                <h1 class="font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase">Mobile Puncture Repair</h1>
                <h2 class="md:text-xl sm:text-lg text-base mb-10">Our <b>Puncture Repair</b> service will repair your old tyre today!</h2>

                <div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4">
                    <div class="xl:col-span-4 col-span-5 lg:p-4">
                        <img
                            class="w-100"
                            src="/assets/images/main/tyre-fitting-2.webp"
                            srcset="/assets/images/main/tyre-fitting-2.webp 1024w,
									/assets/images/main/tyre-fitting-2-500.webp 500w,
									/assets/images/main/tyre-fitting-2-300.webp 300w,
									/assets/images/main/tyre-fitting-2-150.webp 150w"
                            sizes="(max-width: 576px) calc(100vw - 52.5px), (max-width: 768px) 493px, (max-width: 992px) 194.33px, (max-width: 1200px) 274.33px, (max-width: 1400px) 334.33px, 394.33px"
                            alt="Wheel being secured to vehicle"
                        >
                    </div>
                    <div class="xl:col-span-8 col-span-7 lg:p-4">
                        <h2 class="lg:text-3xl text-2xl font-light">Is my puncture sealable?</h2>
                        <br>
                        <p class="text-sm">
                            If you managed to locate the puncture, you can check if your tyre is repairable if it doesn't fit any of the following criteria:
                        </p>
                        <br>
                        <ul class="text-sm list-disc pl-5 mt-2 space-y-1">
                            <li>If the puncture is located on the sidewall of the tyre.</li>
                            <li>Runflat tyres cannot be repaired.</li>
                            <li>If the diameter of the damaged area is larger than 6mm.</li>
                            <li>If your tyre treads are worn less than 1.6mm.</li>
                            <li>If your tyre shows signs of ageing.</li>
                        </ul>
                        <h2 class="lg:text-3xl text-2xl font-light mt-8">What should I do?</h2>
                        <br>
                        <p class="text-sm">
                            If your punctured tyre meets the criteria above and you're happy to proceed with a puncture repair
                        </p>
                        <br>
                        <p class="text-sm flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span>To arrange a mobile tyre change or repair, please call us on <a class="text-blue-600 underline" href="tel:07442980101">07442 980101</a></span>
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

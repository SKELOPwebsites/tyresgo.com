<template>
    <Head>
        <title>Tyres | Tyres GO</title>
        <meta name="description" content="Learn more about your vehicle tyres">
        <meta name="keywords" content="my tyre, tyre size, new tyres, tyre fitting">
        <link rel="canonical" href="https://tyresgo.com/tyres">
    </Head>
    <Container>
        <div class="flex md:flex-row flex-col md:pt-12 sm:pt-6 xl:h-[340px] lg:h-[300px] md:h-[280px]">
            <div class="xl:w-[70%] md:w-[65%] w-full">
                <div class="relative overflow-hidden md:h-full sm:h-[300px] h-[200px]">
                    <img
                        src="/assets/images/showcase/gallary/mobile-tyre-fitting-2.webp"
                        srcset="/assets/images/showcase/gallary/mobile-tyre-fitting-2.webp 1080w,
                                    /assets/images/showcase/gallary/mobile-tyre-fitting-2-500.webp 500w,
                                    /assets/images/showcase/gallary/mobile-tyre-fitting-2-300.webp 300w"
                        class="object-cover object-center w-full h-full brightness-[0.6]"
                        sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw"
                        alt="Mobile Tyre Fitting"
                    >
                    <div class="absolute left-0 right-0 xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center">
                        <h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1">Your Tyre Fitters</h1>
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
                <h1 class="font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase">Your Tyre Fitters</h1>
                <h2 class="md:text-xl sm:text-lg text-base mb-10">We provide and fit the best Tyres for you in no time!</h2>

                <div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4">
                    <div class="xl:col-span-4 col-span-5 lg:p-4">
                        <img
                            class="w-100"
                            src="/assets/images/main/tyre-1.webp"
                            srcset="/assets/images/main/tyre-1.webp 1024w,
									/assets/images/main/tyre-1-500.webp 500w,
									/assets/images/main/tyre-1-300.webp 300w,
									/assets/images/main/tyre-1-150.webp 150w"
                            sizes="(max-width: 576px) calc(100vw - 52.5px), (max-width: 768px) 493px, (max-width: 992px) 194.33px, (max-width: 1200px) 274.33px, (max-width: 1400px) 334.33px, 394.33px"
                            alt="Wheel being secured to vehicle"
                        >
                    </div>
                    <div class="xl:col-span-8 col-span-7 lg:p-4">
                        <h2 class="lg:text-3xl text-2xl font-light">About your tyres</h2>
                        <br>
                        <p class="text-sm">
                            Tyres are an essential part of your vehicle. It is the only part of the car in-contact with the ground,
                            so it must always be in the best condition to ensure your safety. The condition depends on many things,
                            such as the driver, wheel alignment and pressure, and the road. In the UK the minimum tyre tread depth is 1.6mm.
                        </p>
                        <br>
                        <p class="text-sm">
                            The depth of the tyre treads can be tested using the '20p Check', a 20p coin should fit enough so it hides the outer edges,
                            otherwise your tyre may be illegal.
                        </p>
                        <br>
                        <p class="text-sm">
                            Regardless of the vehicle you drive, here at Tyres GO we have the right tyres for you,
                            whether it's Run-flats, 4x4, all-season or just regular tyres, our specialists always choose
                            the most appropriate and best-suited tyre for your car.
                        </p>
                    </div>
                    <div class="xl:col-span-8 col-span-7 lg:p-4">
                        <h2 class="lg:text-3xl text-2xl font-light">Don't know the tyre size you need?</h2>
                        <br>
                        <p class="text-sm">
                            You can find the size of your car tyre from the tyre itself.
                            On the side of the tyre there will be a few numbers that show the size of the tyre.
                            The first number is the width of the tyre measured from one side to the other.
                            The second number is the profile of the tyre which is measured from the rim to edge of the tyre.
                            The third number is the rim size and the last is the speed rating. You will need these when purchasing a tyre for your vehicle.
                        </p>
                        <br>
                        <p class="text-sm">
                            Another way to find the size of your tyres is by reading the <b>vehicle owner manual</b>.
                        </p>
                    </div>
                    <div class="xl:col-span-4 col-span-5 lg:p-4">
                        <img
                            class="w-100"
                            src="/assets/images/main/tyre-size-guide.webp"
                            srcset="/assets/images/main/tyre-size-guide.webp 1024w,
									/assets/images/main/tyre-size-guide-500.webp 500w,
									/assets/images/main/tyre-size-guide-300.webp 300w,
									/assets/images/main/tyre-size-guide-150.webp 150w"
                            sizes="(max-width: 576px) calc(100vw - 52.5px), (max-width: 768px) 493px, (max-width: 992px) 194.33px, (max-width: 1200px) 274.33px, (max-width: 1400px) 334.33px, 394.33px"
                            alt="Wheel being secured to vehicle"
                        >
                    </div>
                    <div class="xl:col-span-4 col-span-5 lg:p-4">
                        <img
                            class="w-100"
                            src="/assets/images/main/tyre-3.webp"
                            srcset="/assets/images/main/tyre-3.webp 1024w,
									/assets/images/main/tyre-3-500.webp 500w,
									/assets/images/main/tyre-3-300.webp 300w,
									/assets/images/main/tyre-3-150.webp 150w"
                            sizes="(max-width: 576px) calc(100vw - 52.5px), (max-width: 768px) 493px, (max-width: 992px) 194.33px, (max-width: 1200px) 274.33px, (max-width: 1400px) 334.33px, 394.33px"
                            alt="Wheel being secured to vehicle"
                        >
                    </div>
                    <div class="xl:col-span-8 col-span-7 lg:p-4">
                        <h2 class="lg:text-3xl text-2xl font-light">When should I get my tyres changed?</h2>
                        <br>
                        <p class="text-sm">
                            You should get your tyres changed if you experience any of the following signs of damage:
                        </p>
                        <br>
                        <ul class="text-sm list-disc pl-5 mt-2 space-y-1">
                            <li>Once the tyre tread has worn to the legal limit of 1.6mm.</li>
                            <li>If you hear a sqeaky humming sound caused by a chopped tread.</li>
                            <li>A puncture on the side of the tyre.</li>
                            <li>You can notice the lack of traction in your tyres due to tread wear.</li>
                            <li>If your tyre shows signs of ageing.</li>
                            <li>If the tyre is not suited for your vehicle.</li>
                            <li>Other reasons.</li>
                        </ul>
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

<template>
    <Head>
        <title>Tyre Replacement | Tyres GO</title>
        <meta name="description" content="24/7 Mobile tyre replacement couldn't be easier! Call us now to grab yourself a brand new high quality tyre - fitted wherever you are!">
        <meta name="keywords" content="tyre fitting, mobile tyre fitting, tyre services, repair my tyre">
        <link rel="canonical" href="https://tyresgo.com/tyre-replacement">
    </Head>
    <Container>
        <div class="flex md:flex-row flex-col md:pt-12 sm:pt-6 xl:h-[340px] lg:h-[300px] md:h-[280px]">
            <div class="xl:w-[70%] md:w-[65%] w-full">
                <div class="relative overflow-hidden md:h-full sm:h-[300px] h-[200px]">
                    <img
                        src="/assets/images/showcase/tyre-replacement.webp"
                        srcset="/assets/images/showcase/tyre-replacement.webp 1920w,
                                    /assets/images/showcase/tyre-replacement-500.webp 500w,
                                    /assets/images/showcase/tyre-replacement-300.webp 300w"
                        class="object-cover object-center w-full h-full brightness-[0.6]"
                        sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw"
                        alt="Mobile Tyre Fitting"
                    >
                    <div class="absolute left-0 right-0 xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center">
                        <h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1">24/7 Mobile Tyre Replacement</h1>
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
                <h1 class="font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase">Mobile Tyre Replacement</h1>
                <h2 class="md:text-xl sm:text-lg text-base mb-10">Our <b>Tyre Replacement</b> service will replace your old tyre today!</h2>

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
                        <h2 class="lg:text-3xl text-2xl font-light">Need to get your tyres changed?</h2>
                        <br>
                        <p class="text-sm">
                            Have faulty tyres and want to replace them? At <b>Tyres GO</b> we provide easy alternative to going to repair your tyres at a mechanic.
                            Our Mobile Tyre Fitting Service will bring the mechanic to you, whether you're at home, stuck on a motorway or anywhere else,
                            you can call us and expect one of our specialists to be with you soon.
                        </p>
                        <br>
                        <p class="text-sm">
                            In addition to that, if your situation is not as urgent but you still need us, you can
                            <a href="https://tyresanywhere.com/search-tyres" class="text-blue-600 underline">Make a Booking</a>
                            and choose what you need in our broad range of options
                        </p>
                        <br>
                        <p class="text-sm">
                            More info about your vehicle's tyres can be found in our <Link href="/tyres" class="text-blue-600 underline">tyres</Link> page
                        </p>
                    </div>
                    <div class="xl:col-span-8 col-span-7 lg:p-4">
                        <h2 class="lg:text-3xl text-2xl font-light">What can you expect when we arrive?</h2>
                        <br>
                        <p class="text-sm">
                            When we arrive, our Tyre Fitter experts will efficiently change your tyre in no time.
                            Our colleagues will handle your tyre with up-most care. You can rest whilst they swiftly secure your brand
                            new tyre so you can be safe next time you travel.
                        </p>
                        <br>
                        <p class="text-sm">
                            If you've made a booking, we will contact you before we arrive.
                            You can calmly rest at home or watch our specialist get the job done in no time and get your vehicle up and running.
                        </p>
                    </div>
                    <div class="xl:col-span-4 col-span-5 lg:p-4">
                        <img
                            class="w-100"
                            src="/assets/images/main/tyre-fitting-3.webp"
                            srcset="/assets/images/main/tyre-fitting-3.webp 1024w,
									/assets/images/main/tyre-fitting-3-500.webp 500w,
									/assets/images/main/tyre-fitting-3-300.webp 300w,
									/assets/images/main/tyre-fitting-3-150.webp 150w"
                            sizes="(max-width: 576px) calc(100vw - 52.5px), (max-width: 768px) 493px, (max-width: 992px) 194.33px, (max-width: 1200px) 274.33px, (max-width: 1400px) 334.33px, 394.33px"
                            alt="Wheel being secured to vehicle"
                        >
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

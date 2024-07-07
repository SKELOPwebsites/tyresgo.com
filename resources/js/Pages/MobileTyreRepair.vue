<template>
    <Head>
        <title>Same Day Mobile Tyre Repair | Tyres GO</title>
        <meta name="description" content="Our mobile tyre repair service ensures your punctured tyre is taken care of by our professional tyre fitters at the location of your choice, AND on the same day!">
        <meta name="keywords" content="mobile tyre fitting, mobile tyre service, tyre fitted at home, emergency tyre service, emergency tyre fitting, roadside tyre fitter, roadside tyre service, tyre fitted at work, mobile tyre puncture repair, tyre puncture repair">
        <link rel="canonical" href="https://tyresgo.com/mobile-tyre-repair">
    </Head>
    <Container>
        <div class="flex md:flex-row flex-col md:pt-12 sm:pt-6 xl:h-[340px] lg:h-[300px] md:h-[280px]">
            <div class="xl:w-[70%] md:w-[65%] w-full">
                <div class="relative overflow-hidden md:h-full sm:h-[300px] h-[200px]">
                    <img
                        src="/assets/images/showcase/mobile-puncture-repair.webp"
                        srcset="/assets/images/showcase/mobile-puncture-repair.webp 2000w,
                                    /assets/images/showcase/mobile-puncture-repair-500.webp 500w,
                                    /assets/images/showcase/mobile-puncture-repair-300.webp 300w"
                        class="object-cover object-center w-full h-full brightness-[0.6]"
                        sizes="(min-width: 1536px) 1280px, (min-width: 1280px) 1152px, (min-width: 1024px) 896px, 100vw"
                        alt="Mobile Tyre Fitting"
                    >
                    <div class="absolute left-0 right-0 xl:top-24 xl:translate-y-0 top-1/2 -translate-y-1/2 pt-5 pb-5 text-white text-center">
                        <h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-1">Mobile Puncture Repair</h1>
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
                <h1 class="font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase">Mobile Tyre Repair Service</h1>
                <h2 class="md:text-xl sm:text-lg text-base mb-10">We seal your punctured tyre securely at your desired location.</h2>

                <div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4">
                    <div class="col-span-12 lg:p-4">
                        <h2 class="lg:text-3xl text-2xl font-semibold">Is my puncture repairable?</h2>
                        <br>
                        <p class="text-sm">
                            It's quite complicated actually. Whether the tyre is repairable or not depends on many factors,
                            such as: The location of the puncture, size of the puncture, the condition & age of the tyre or whether or not the tyre is a runflat tyre.
                        </p>
                        <br>
                        <p class="text-sm">
                            A tyre can only be repaired if the diameter of the damaged area is less than 6mm and located in the central ¾ of the tyre.
                            If the puncture is outside of the central ¾ it is deemed too close to the sidewall to promise a safe and long-lasting repair.
                        </p>
                        <br>
                        <p class="text-sm">
                            Read more at our <Link href="/puncture-repair" class="text-blue-600 underline">puncture repair</Link> page.
                        </p>
                    </div>
                    <div class="col-span-12 lg:p-4">
                        <h2 class="lg:text-3xl text-2xl font-semibold">Sometimes it's better to go for a new tyre</h2>
                        <br>
                        <p class="text-sm">
                            Puncture repairs are only a temporary solution - there is still a chance that your tyre may start to leak air again,
                            especially if you've repaired the same tyre once before.
                        </p>
                        <br>
                        <p class="text-sm">
                            It can be more cost-effective to go for a brand new tyre as it will most likely last longer
                            than the old tyre and give you better performance depending on the tyre.
                        </p>
                        <br>
                        <p class="text-sm">For emergency or non-emergency situations, our mobile tyre fitting service is a more convenient solution for your requirement.</p>
                    </div>
                    <div class="col-span-12 lg:p-4">
                        <h2 class="lg:text-3xl text-2xl font-semibold">When should I get a new tyre?</h2>
                        <br>
                        <p class="text-sm">You should get your tyres changed if you experience any of the following signs of damage:</p>
                        <ul class="text-sm list-disc pl-5 mt-3 space-y-1">
                            <li>Once the tyre tread has worn to the legal limit of 1.6mm.</li>
                            <li>Runflat tyres cannot be repaired.</li>
                            <li>If the diameter of the damaged area is larger than 6mm.</li>
                            <li>If you hear a squeaky humming sound caused by a chopped tread.</li>
                            <li>A puncture on the side of the tyre.</li>
                            <li>You can notice the lack of traction in your tyres due to tread wear.</li>
                            <li>If your tyre shows signs of ageing.</li>
                            <li>If the tyre is not suited for your vehicle.</li>
                            <li>Other reasons.</li>
                        </ul>
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

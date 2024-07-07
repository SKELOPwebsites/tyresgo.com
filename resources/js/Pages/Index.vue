<template>
    <Head>
        <title>24hr Same Day Mobile Tyre Fitting & Services | Car & Van Tyres Fitted at Home, Work or Roadside | Tyres GO</title>
        <meta name="description" content="We provide 24/7 Mobile Tyre Fitting & Services and fit your tyre on the same day of your call.">
        <meta name="keywords" content="mobile tyre fitting, mobile tyre service, tyre fitted at home, emergency tyre service, emergency tyre fitting, roadside tyre fitter, roadside tyre service, tyre fitted at work, mobile tyre puncture repair, tyre puncture repair">
        <link rel="canonical" href="https://tyresgo.com/">
    </Head>

    <Container>
        <div class="flex md:flex-row flex-col md:pt-12 sm:pt-6 xl:h-[340px] lg:h-[300px] md:h-[280px]">
            <div class="xl:w-[70%] md:w-[65%] w-full">
                <MainCarousel />
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
                <h1 class="font-montserrat font-extrabold md:text-4xl sm:text-2xl text-xl mb-2 uppercase">Welcome to <span class="text-wheelfit-300">Tyres GO</span></h1>
                <h2 class="md:text-xl sm:text-lg text-base mb-10">We bring our mobile services right to your location.</h2>
                <p class="text-sm">
                    <b>Tyres GO</b> is a well-rounded and a prominent mobile tyre services business in United Kingdom.
                    Our tyre fitters are well equipped with experience and knowledge in the tyre fitting and tyre repairs section,
                    and we are positive we can solve your problem quickly. Our mobile tyre fitting van will meet you at your desired location,
                    whether your at home, work, roadside or on the hard-shoulder.
                </p>
                <br>

                <div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4">
                    <div class="col-span-6 lg:p-4">
                        <h2 class="lg:text-3xl text-2xl font-semibold">Same day mobile tyre service</h2>
                        <br>
                        <p class="text-sm">
                            Our same day mobile tyre service will ensure your new tyre is fitted or repaired within hours of your call.
                        </p>
                        <br>
                        <p class="text-sm">
                            To order a same day service, please call us on <a class="text-blue-600 underline" href="tel:07442980101">07442 980101</a>
                        </p>
                        <br>
                        <p class="text-sm">Information you may be asked for:</p>
                        <ul class="text-sm list-disc pl-5 mt-2">
                            <li>Your tyre size</li>
                            <li>Your name</li>
                            <li>Full address of fitting location</li>
                            <li>Vehicle registration/color</li>
                        </ul>
                    </div>
                    <div class="col-span-6 lg:p-4">
                        <h2 class="lg:text-3xl text-2xl font-semibold">Stuck on a roadside or motorway</h2>
                        <br>
                        <p class="text-sm">
                            If you are stuck on motorway and need an emergency tyre replacement, look no further.
                        </p>
                        <br>
                        <p class="text-sm">
                            We will come out to you as soon as possible so you can be back to your own business quicker.
                        </p>
                        <br>
                        <p class="text-sm">
                            To call us out, please call us on <a class="text-blue-600 underline" href="tel:07442980101">07442 980101</a>
                        </p>
                        <br>
                        <p class="text-sm">Information you may be asked for:</p>
                        <ul class="text-sm list-disc pl-5 mt-2">
                            <li>Your tyre size</li>
                            <li>Your name</li>
                            <li>Live location through WhatsApp/Waze/Google Maps.</li>
                            <li>Vehicle registration/color</li>
                        </ul>
                    </div>
                    <div class="col-span-6 lg:p-4">
                        <h2 class="lg:text-3xl text-2xl font-semibold mb-2">What do we do?</h2>
                        <br>
                        <p class="text-sm">
                            Having a punctured tyre can give you a bad headache, especially on the motorway.
                            It prevents you from many daily activities such as going to work and may lead to you having to wait hours and hours for breakdown service.
                        </p>
                        <br>
                        <p class="text-sm">
                            That's why at <b>Tyres GO</b> we bring the expertise of a garage right to your chosen location.
                            We can fit your new tyres within minutes of your call, or at a time you decide to get your vehicle back on the road safely.
                            We fit budget, mid-range or premium tyres of all major brands and sizes.
                        </p>
                        <br>
                        <p class="text-sm">
                            If a new tyre isn't what you're looking for, we can also repair punctured tyres at a cheaper price. Read more at our <Link class="text-blue-600 underline" href="/puncture-repair">puncture repair</Link> page.
                        </p>
                    </div>
                    <div class="col-span-6 lg:p-4">
                        <h2 class="lg:text-3xl text-2xl font-semibold">Tyre brands we supply</h2>
                        <br>
                        <b class="text-sm">Budget/Mid-range Brands</b>
                        <ul class="text-sm list-disc pl-5 mt-2">
                            <li>Farroad</li>
                            <li>Hifly</li>
                            <li>Churchill</li>
                            <li>RoadX</li>
                            <li>Infinity</li>
                        </ul>
                        <p class="text-sm">& Many more...</p>
                        <br>
                        <b class="text-sm">Premium Brands</b>
                        <ul class="text-sm list-disc pl-5 mt-2">
                            <li>Michelin</li>
                            <li>Pirelli</li>
                            <li>Bridgestone</li>
                            <li>Goodyear</li>
                            <li>Continental</li>
                        </ul>
                        <p class="text-sm">& Many more...</p>
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

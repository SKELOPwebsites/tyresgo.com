<template>
    <Container class="select-none relative flex md:flex-row flex-col items-center md:justify-between justify-center md:pb-5 pb-3">
        <div class="sm:w-[300px] w-[250px]">
            <Link href="/">
                <img
                    src="/assets/images/main/tyresanywhere.webp"
                    srcset="/assets/images/main/tyresanywhere.webp 300w,
							/assets/images/main/tyresanywhere-250.webp 250w"
                    sizes="(max-width: 576px) 250px, 300px"
                    height="112"
                    width="300"
                    alt="Tyres Anywhere Group">
            </Link>
        </div>
        <div class="md:absolute relative md:left-1/2 md:top-1/2 bottom-auto md:-translate-y-1/2 md:-translate-x-1/2 md:mt-0 mt-3">
            <p class="xl:text-4xl lg:text-3xl lg:block md:hidden font-semibold whitespace-nowrap">WE COME TO <span class="text-wheelfit-300">YOU</span></p>
            <div class="cover absolute top-0 bottom-0 right-0 h-full w-full bg-white z-10"></div>
        </div>
        <div class="md:block hidden font-montserrat">
            <p class="mb-1 text-3xl font-extrabold">Need HELP?</p>
            <span class="font-extrabold text-xl">
                CALL US ON
                <a class="text-xl text-wheelfit-300 text-shadow" href="tel:07442980101" title="Phone Number">07442 980101</a>
            </span>
        </div>
    </Container>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import Container from "./Container.vue";

</script>

<style scoped>
.text-shadow{
    text-shadow: 2px 2px 2px rgba(255,112,112,0.3);
}

.cover{
    transform-origin: right;
    animation: typewriter 2s infinite
}

@keyframes typewriter{
    0%{
        width: 100%
    }
    50%{
        width: 0
    }
    100%{
        width: 0
    }
}

</style>

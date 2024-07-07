<template>
    <div class="flex flex-col h-full bg-gray-200 py-2.5 px-5">
        <p class="uppercase text-shadow 2xl:text-2xl lg:text-xl text-lg text-center font-bold">Search tyres by tyre size</p>

        <img
            class="w-full"
            src="/assets/images/main/tyre-size-gd-trn.webp"
            srcset="/assets/images/main/tyre-size-gd-trn.webp 720w,
						/assets/images/main/tyre-size-gd-trn-500.webp 500w,
						/assets/images/main/tyre-size-gd-trn-300.webp 300w,
						/assets/images/main/tyre-size-gd-trn-150.webp 150w"
            sizes="(max-width: 576px) calc(100vw - 65px),(max-width: 768px) 500px, (max-width: 992px) 320px, (max-width: 1200px) 344px, (max-width: 1400px) 359px, 356px"
            alt="Tyre Size Guide"
        />

        <a href="https://tyresanywhere.com/search-tyres" class="flex items-center justify-center bg-wheelfit-500 w-full 2xl:h-20 lg:h-16 h-14 md:mt-auto mt-4 rounded-lg cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="lg:w-16 w-10 lg:h-16 h-10 fill-white" viewBox="0 0 24 24">
                <path d="M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z"></path>
            </svg>
        </a>
    </div>
</template>

<script setup>

</script>

<style scoped>
.text-shadow {
    text-shadow: 0 4px 3px rgba(255,102,102,0.3), 0 8px 13px rgba(255,102,102,0.2), 0 18px 23px rgba(255,102,102,0.1), 0 24px 29px rgba(255,102,102,0.05);
}
</style>

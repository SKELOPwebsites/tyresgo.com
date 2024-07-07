<template>
    <Link :href="href" class="lg:text-sm text-[13px] text-gray-100 hover:bg-secondary-400 lg:px-5 px-3 lg:py-3.5 py-2 uppercase block transition duration-150 ease-in-out">
        <slot></slot>
    </Link>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";

defineProps({
    href: String
})

</script>

<style scoped>

</style>

<template>
    <Container>
        <Content>
            <p class="md:text-3xl sm:text-2xl text-xl text-center">Our Values</p>

            <div class="flex md:flex-row flex-col px-12 mt-12 md:space-y-0 space-y-8">
                <div class="md:w-1/3 w-full px-4 flex flex-col items-center justify-center">
                    <img src="/assets/images/main/affordable.webp" class="h-icons" width="90" height="90" alt="Affordable prices">
                    <span class="text-lg my-2">Affordable</span>
                    <p class="text-center text-sm">At TyresAnywhere, our prices are reasonable for every service we offer. We provide high-quality budget, mid-range or premium tyres at a fair price.</p>
                </div>
                <div class="md:w-1/3 w-full px-4 flex flex-col items-center justify-center">
                    <img src="/assets/images/main/fast.webp" class="h-icons" width="90" height="90" alt="Affordable prices">
                    <span class="text-lg my-2">Fast Response</span>
                    <p class="text-center text-sm">We provide reliable mobile tyre fitting to ensure your road ready within hours or even minutes of your call.</p>
                </div>
                <div class="md:w-1/3 w-full px-4 flex flex-col items-center justify-center">
                    <img src="/assets/images/main/authentic.webp" class="h-icons" width="90" height="90" alt="Affordable prices">
                    <span class="text-lg my-2">Authentic</span>
                    <p class="text-center text-sm">All of our tyres & products are 100% authentic, brand new and UK Standard</p>
                </div>
            </div>
            <div class="mt-24">
                <p class="md:text-3xl sm:text-2xl text-xl text-center">Accepted Payment Methods</p>
                <div class="flex md:flex-row flex-col px-12 mt-12 md:space-y-0 space-y-8">
                    <div class="md:w-1/3 w-full px-4 flex flex-col items-center justify-center">
                        <img src="/assets/images/main/paypal.webp" class="h-icons" width="90" height="90" alt="Affordable prices">
                        <span class="text-lg my-2">PayPal</span>
                        <p class="text-center text-sm">We accept PayPal payments through our online booking system.</p>
                    </div>
                    <div class="md:w-1/3 w-full px-4 flex flex-col items-center justify-center">
                        <img src="/assets/images/main/card.webp" class="h-icons" width="90" height="90" alt="Affordable prices">
                        <span class="text-lg my-2">Card Payments</span>
                        <p class="text-center text-sm">We accept any major debit/credit card through our online booking system or in-person.</p>
                    </div>
                    <div class="md:w-1/3 w-full px-4 flex flex-col items-center justify-center">
                        <img src="/assets/images/main/cash.webp" class="h-icons" width="90" height="90" alt="Affordable prices">
                        <span class="text-lg my-2">Cash</span>
                        <p class="text-center text-sm">We accept cash payments</p>
                    </div>
                </div>
            </div>
        </Content>
    </Container>
</template>

<script setup>
import Container from '../Shared/Container.vue'
import Content from '../Shared/Content.vue'

</script>

<style scoped>

</style>

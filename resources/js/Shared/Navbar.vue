<template>
    <nav class="select-none shadow-[0_0px_10px_0px_rgba(0,0,0,0.8)] bg-secondary-500 relative flex items-center justify-start">
        <Container class="md:block hidden relative">
            <div class="flex items-center">
                <ul class="flex flex-row list-none">
                    <li>
                        <NavLink href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 512 512">
                                <path d="M261.56,101.28a8,8,0,0,0-11.06,0L66.4,277.15a8,8,0,0,0-2.47,5.79L63.9,448a32,32,0,0,0,32,32H192a16,16,0,0,0,16-16V328a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8l0,136a16,16,0,0,0,16,16h96.06a32,32,0,0,0,32-32l0-165.06a8,8,0,0,0-2.47-5.79Z"></path><path d="M490.91,244.15l-74.8-71.56,0-108.59a16,16,0,0,0-16-16h-48a16,16,0,0,0-16,16l0,32L278.19,40.62C272.77,35.14,264.71,32,256,32h0c-8.68,0-16.72,3.14-22.14,8.63L21.16,244.13c-6.22,6-7,15.87-1.34,22.37A16,16,0,0,0,43,267.56L250.5,69.28a8,8,0,0,1,11.06,0L469.08,267.56a16,16,0,0,0,22.59-.44C497.81,260.76,497.3,250.26,490.91,244.15Z"></path>
                            </svg>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/mobile-tyre-fitting" title="Mobile Tyre Fitting">Mobile Tyre Fitting</NavLink>
                    </li>
                    <li>
                        <a href="https://tyresanywhere.com/search-tyres" class="lg:text-sm text-[13px] text-gray-100 hover:bg-secondary-400 lg:px-5 px-3 lg:py-3.5 py-2 uppercase block transition duration-150 ease-in-out" title="Search Tyres">Search Tyres</a>
                    </li>
                    <li>
                        <NavLink href="/tyres" title="Tyres Information">Tyres</NavLink>
                    </li>
                    <li>
                        <NavbarDropdown>
                            <template v-slot:trigger>
                                <span class="cursor-pointer flex items-center lg:text-sm text-[13px] text-gray-100 hover:bg-secondary-400 lg:px-5 px-3 lg:py-3.5 py-2 uppercase block transition duration-150 ease-in-out">
                                    Other Services
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </template>
                            <template v-slot:content>
                                <div class="flex flex-row m-0">
                                    <div class="lg:w-1/4 w-1/3 px-3">
                                        <p class="pl-4 text-2xl font-light">Other Services</p>
                                        <hr class="my-2 border-t-2 border-wheelfit-300/30">
                                        <div class="space-y-2">
                                            <Link class="block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200" href="/mobile-tyre-repair" title="Mobile Tyre Repair">Mobile Tyre Repair</Link>
                                            <Link class="block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200" href="/tyre-replacement" title="Tyre Replacement">Tyre Replacement</Link>
                                            <Link class="block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200" href="/puncture-repair" title="Puncture Repair">Puncture Repair</Link>
                                            <Link class="block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200" href="/commercial-tyres" title="Commercial Tyres">Commercial Tyres</Link>
                                        </div>
                                    </div>
                                    <div class="lg:w-1/4 w-1/3 lg:ml-auto px-3">
                                        <p class="pl-4 text-2xl font-light">Need Help?</p>
                                        <hr class="my-2 border-t-2 border-wheelfit-300/30">
                                        <div class="space-y-2">
                                            <Link class="block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200" href="/contact-us" title="Contact Us">Contact Us</Link>
                                            <a class="block text-sm w-full py-1 px-4 clear-both text-gray-800 hover:bg-gray-200" href="tel:07442980101">
                                                07442 980101
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </template>

                        </NavbarDropdown>
                    </li>
                    <li>
                        <NavLink href="/contact-us" title="Contact Us">Contact Us</NavLink>
                    </li>
                </ul>
            </div>
        </Container>

        <!--Mobile Navigation-->
        <div class="md:hidden block w-full flex items-center justify-center relative h-[3.5rem]">
            <a class="flex items-center color-anim" href="tel:07442 980101">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span class="text-xl">07442 980101</span>
            </a>
            <button @click="toggleMobileNav()" class="menu-btn h-10 w-10 bg-wheelfit-500 hover:bg-wheelfit-400 text-white border-0 outline-0 text-xl flex items-center justify-center transition duration-150 absolute right-2.5 top-1/2 -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>

        <transition name="mobile-nav">
            <div v-show="mobileNavShow" class="md:hidden block mobile-nav w-72 fixed top-0 left-0 z-50">
                <div class="h-screen overflow-y-scroll">
                    <button @click="hideMobileNav" class="w-full flex items-center justify-center h-14 bg-[#ebebeb] text-wheelfit-600 text-lg" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                        CLOSE
                    </button>
                    <div class="flex flex-col">
                        <NavLinkMob href="/" component="Index" class="border-b flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            HOME
                        </NavLinkMob>
                        <NavLinkMob href="/mobile-tyre-fitting" component="MobileTyreFitting" title="Mobile Tyre Fitting" class="border-b">Mobile Tyre Fitting</NavLinkMob>
                        <a href="https://tyresanywhere.com/search-tyres" title="Search Tyres" class="border-b w-full py-4 pl-4 border-[#ebebeb] text-sm text-gray-400">Search Tyres</a>
                        <NavLinkMob href="/tyres" component="Tyres" title="Tyres" class="border-b">Tyres</NavLinkMob>
                        <div class="w-full py-4 pl-4 border-b border-[#ebebeb] text-sm text-gray-400">
                            <span @click="otherServicesOpen = !otherServicesOpen" class="flex items-center">
                                Other Services
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </span>
                            <div v-show="otherServicesOpen" class="flex flex-col space-y-2 mt-2">
                                <NavLinkMob href="/mobile-tyre-repair" component="MobileTyreRepair" title="Mobile Tyre Repair" class="border-l-2 border-dotted">Mobile Tyre Repair</NavLinkMob>
                                <NavLinkMob href="/tyre-replacement" component="TyreReplacement" title="Tyre Replacement" class="border-l-2 border-dotted">Tyre Replacement</NavLinkMob>
                                <NavLinkMob href="/puncture-repair" component="PunctureRepair" title="Puncture Repair" class="border-l-2 border-dotted">Puncture Repair</NavLinkMob>
                                <NavLinkMob href="/commercial-tyres" component="CommercialTyres" title="Commercial Tyres" class="border-l-2 border-dotted">Commercial Tyres</NavLinkMob>
                            </div>
                        </div>
                        <NavLinkMob href="/contact-us" component="ContactUs" title="Contact Us" class="border-b"><a>Contact Us</a></NavLinkMob>
                    </div>
                </div>
            </div>
        </transition>
    </nav>
</template>

<script setup>
import { ref } from "vue"
import { router, Link } from "@inertiajs/vue3";
import NavbarDropdown from "./NavbarDropdown.vue"
import Container from "./Container.vue"
import NavLink from "./NavLink.vue"
import NavLinkMob from "./NavLinkMob.vue"

router.on('start', (event) => {
    hideMobileNav()
})

const otherServicesOpen = ref(false)
const mobileNavShow = ref(false)
const sliding = ref(false)

function toggleMobileNav(){
    if(sliding.value) return;
    mobileNavShow.value = !mobileNavShow.value;
    setSliding();
}
function hideMobileNav(){
    if(sliding.value) return;
    mobileNavShow.value = false;
    setSliding();
}
function setSliding() {
    sliding.value = true;
    setTimeout(() => {
        sliding.value = false;
    }, 500)
}
</script>

<style scoped>
@keyframes bg-animation{
    0%{
        background-position: left;
    }
    100%{
        background-position: right;
    }
}

.nav-link-gradient-animation{
    background-size: 400px !important;
    border: none !important;
    animation: bg-animation 25s infinite alternate;
}
.nav-link-gradient-1{
    background: linear-gradient(-45deg, #F09821, #E1F328, #85F758, #23E566);
    color: #000 !important;
}
.nav-link-gradient-2{
    background: linear-gradient(45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab);
    color: #fff;
}

.mobile-nav{
    background: linear-gradient(to right, #ffffff 72%, #ebebeb 100%);
}
.menu-btn{
    box-shadow:
        0 0.0625rem 0.0625rem rgba(0, 0, 0, 0.25),
        0 0.125rem 0.5rem rgba(0, 0, 0, 0.25),
        0 0 0 1px inset rgba(255, 255, 255, 0.10);
}
.color-anim{
    animation: color-anim 1.5s infinite;
}

@keyframes color-anim {
    0%{ color: #fff }
    50%{ color: #ff3333 }
    100%{ color: #fff }
}

.mobile-nav-enter-active{
    animation: navInAnimation 0.5s ease;
}
.mobile-nav-leave-active{
    animation: navOutAnimation 0.5s ease;
}

@keyframes navInAnimation {
    from { transform: translateX(-100%); }
    to { transform: translateX(0) }
}
@keyframes navOutAnimation {
    from { transform: translateX(0); }
    to { transform: translateX(-100%) }
}
</style>

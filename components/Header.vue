<template>
    <header class="header">
        <div class="logo" :class="`type${type}`"></div>
        <div class="menu">
            <div class="menu-top">
                <div class="lang-btn" v-for="locale in locales" @click="setLocale(locale.code)">{{ locale.name }}</div>
                <NuxtLinkLocale to="/" class="btn">{{ $t('home') }}</NuxtLinkLocale>
                <NuxtLinkLocale to="/guest" class="btn">{{ $t('guest') }}</NuxtLinkLocale>
                <NuxtLinkLocale to="/restaurant" class="btn">{{ $t('restaurant') }}</NuxtLinkLocale>
                <NuxtLinkLocale to="/facility" class="btn">{{ $t('facility') }}</NuxtLinkLocale>
                <NuxtLinkLocale to="/service" class="btn">{{ $t('service') }}</NuxtLinkLocale>
                <NuxtLinkLocale to="/booking" class="booking-btn fade-in">{{ $t('booking') }}</NuxtLinkLocale>
            </div>
            <div class="menu-bottom">
                <NuxtLinkLocale to="/tour" class="btn">{{ $t('tour') }}</NuxtLinkLocale>
                <NuxtLinkLocale to="/access" class="btn">{{ $t('access') }}</NuxtLinkLocale>
                <NuxtLinkLocale to="/company" class="btn">{{ $t('company') }}</NuxtLinkLocale>
                <NuxtLinkLocale to="/faq" class="btn">{{ $t('faq') }}</NuxtLinkLocale>
            </div>
        </div>
        <div class="mobile-toggle" @click="toggle">
            <span class="" ref="btn"></span>
        </div>
    </header>

    <div class="mobile-menu" ref="mobileMenu">
        <div class="lang-wrap">
            <div class="mobile-btn" v-for="locale in locales" @click="setLocale(locale.code)">{{ locale.name }}</div>
        </div>
        <NuxtLinkLocale to="/" class="mobile-btn">{{ $t('home') }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/guest" class="mobile-btn">{{ $t('guest') }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/restaurant" class="mobile-btn">{{ $t('restaurant') }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/facility" class="mobile-btn">{{ $t('facility') }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/service" class="mobile-btn">{{ $t('service') }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/booking" class="mobile-btn booking">{{ $t('booking') }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/tour" class="mobile-btn">{{ $t('tour') }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/access" class="mobile-btn">{{ $t('access') }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/company" class="mobile-btn">{{ $t('company') }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/faq" class="mobile-btn">{{ $t('faq') }}</NuxtLinkLocale>

    </div>

</template>

<script setup>
const { locales, setLocale } = useI18n()
import { useTemplateRef, onMounted, ref,onUnmounted } from 'vue'
const btn = useTemplateRef('btn')
const mobileMenu = useTemplateRef('mobileMenu')
const status = ref(false);
const type = ref(0);

const checkSize = () => {
    if (window.innerWidth >= 1010) {
        type.value = 1;
    } else {
        type.value = 2;
    }
    console.log(type.value)
}

const toggle = () => {
    btn.value.classList.toggle("active");
    mobileMenu.value.classList.toggle("open");
    status.value = !status.value;
}

const closeMenu = (e)=>{
    if (status.value == true && 
    !e.target.closest('.mobile-menu') && 
    !e.target.closest('.mobile-toggle')) {
    status.value = false;
    mobileMenu.value.classList.remove("open");
    btn.value.classList.remove("active");
}
}

const resizeCloseMenu = ()=>{
    if (!status.value) {
            return;
        }
        if(mobileMenu.value.classList){
            status.value=false;
            mobileMenu.value.classList.remove("open");
            btn.value.classList.remove("active");
        }
    
}

onMounted(() => {
    window.addEventListener("resize",resizeCloseMenu)
    window.addEventListener("click",closeMenu);
    checkSize();
})

onUnmounted(()=>{
    window.removeEventListener("resize",resizeCloseMenu)
    window.removeEventListener("click",closeMenu);
})



</script>



<style lang="scss" scoped></style>
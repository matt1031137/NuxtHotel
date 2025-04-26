<template>
    <Header />
    <main class="main">
        <div class="item1"><img src="/assets/img/1.png" alt="" class="pic1" ></div>
        <div class="item2"><img src="/assets/img/2.png" alt="" class="pic2" ></div>
        <div class="item3"><img src="/assets/img/3.png" alt="" class="pic3" ></div>
        <div class="cover"></div>

        <KeenSlider />
        <div class="slogan" :class="`type${type}`">
            <p>{{ $t('slogan1') }}</p>
            <p>{{ $t('slogan2') }}</p>
            <h5>{{ $t('slogan3') }}</h5>
            <p class="en-slogan">WITH JAPANESE HOSPITALITY</p>
        </div>
    </main>
</template>



<script setup>
import { ref, onMounted, } from "vue";
const type = ref(0);


const moveCheck = ref("");
const checkSize = () => {
    if (window.innerWidth >= 1010) {
        type.value = 1; 
    } else {
        type.value = 2;
    }
}

onMounted(() => {
    checkSize();
    window.addEventListener("resize",()=>{
        checkSize();
    })
})


</script>

<style lang="scss" scoped></style>
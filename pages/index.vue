<template>


    <div v-if="loading" class="loadingWrap">
        <img src="/assets/img/logo.png" alt="logo" class="" />
        <div class="loadingBar">
            <div class="progress" :style="{ width: progress + '%' }"></div>
        </div>
    </div>


    <div v-else>
        <!-- 原本 index.vue 的全部內容 -->
        <Header />
        <main class="main">
            <div class="item1"><img src="/img/1.png" alt="" class="pic1"></div>
            <div class="item2"><img src="/img/2.png" alt="" class="pic2"></div>
            <div class="item3"><img src="/img/3.png" alt="" class="pic3"></div>
            <div class="cover"></div>

            <KeenSlider />
            <div class="slogan" :class="`type${type}`">
                <p>{{ $t('slogan1') }}</p>
                <p>{{ $t('slogan2') }}</p>
                <h5>{{ $t('slogan3') }}</h5>
                <p class="en-slogan">WITH JAPANESE HOSPITALITY</p>
            </div>
        </main>



    </div>




    <!-- <Header />
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
    </main> -->



</template>


<script setup>
import { ref, onMounted, } from "vue";

const type = ref(0);
const checkSize = () => {
    if (window.innerWidth >= 1010) {
        type.value = 1;
    } else {
        type.value = 2;
    }
}

const loading = ref(true)
const progress = ref(0)
const preloadDone = ref(false)

const preloading = () => {
    let timer
    let startTime = Date.now()

    // 模擬進度條自己跑
    timer = setInterval(() => {
        const elapsed = Date.now() - startTime
        progress.value = Math.min(100, (elapsed / 4000) * 100) // 5秒到100%
        if (progress.value >= 100 && preloadDone.value) {
      clearInterval(timer)
      loading.value = false
    };
     
    
    
    }, 100)


    // 實際預載圖片
    const images = [
        '/img/1.png',
        '/img/2.png',
        '/img/3.png',
    ]

    const preloadImages = images.map(src => {
        return new Promise((resolve) => {
            const img = new Image()
            img.src = src
            img.onload = resolve
            img.onerror = resolve
        })
    })

    Promise.race([
        Promise.all(preloadImages),
        new Promise(resolve => setTimeout(resolve, 4000)) // 最多5秒
    ]).then(() => {
        preloadDone.value = true
    })
}


onMounted(() => {
    checkSize();
    window.addEventListener("resize", () => {
        checkSize();
    })
    preloading();
})


</script>

<style lang="scss" scoped></style>
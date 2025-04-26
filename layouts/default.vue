<script setup>


useHead({
  title: 'Tokino Hoshi Hotel || 網頁切版練習',
  link:[
   {rel:"icon",type:"image/png",href:"https://ik.imagekit.io/qsqeqoe68/icons8-star-50.png?updatedAt=1745673620730"}
  ],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: '只是練習Nuxt.js的網站 By Matt' }
  ],
})

</script>

<template>
    <div>
        <slot />
    </div>
</template>


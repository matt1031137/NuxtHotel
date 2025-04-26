<script setup>


useHead({
  title: 'Tokino Hoshi Hotel || 網頁切版練習',
  link:[
   {rel:"icon",type:"image/png",href:"https://ik.imagekit.io/qsqeqoe68/icons8-star-50.png?updatedAt=1745673620730"}
  ],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: '這裡是 Nuxt 3 學習筆記 實戰部落格' }
  ],
})

</script>

<template>
    <div>
        <slot />
    </div>
</template>


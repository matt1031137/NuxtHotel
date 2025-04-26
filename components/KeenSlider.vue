<template>
    <div ref="container" class="keen-slider">
        <div class="keen-slider__slide number-slide1">
       
        </div>
        <div class="keen-slider__slide number-slide2">
        
        </div>
        <div class="keen-slider__slide number-slide3">
         
        </div>
    </div>
</template>

<script>
import { useKeenSlider } from 'keen-slider/vue.es'
import 'keen-slider/keen-slider.min.css'


export default {
    setup() {
        const [container] = useKeenSlider({
            loop: true,
        }, [
        (slider) => {
          let timeout
          let mouseOver = false
          function clearNextTimeout() {
            clearTimeout(timeout)
          }
          function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
              slider.next()
            }, 2000)
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true
              clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false
              nextTimeout()
            })
            nextTimeout()
          })
          slider.on("dragStarted", clearNextTimeout)
          slider.on("animationEnded", nextTimeout)
          slider.on("updated", nextTimeout)
        },
      ])
        return { container }
    }
}
</script>

<style>
body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

[class^="number-slide"],
[class*=" number-slide"] {
    background: grey;
    font-size: 50px;
    color: #fff;
    font-weight: 500;
    z-index: 10;
}

.number-slide1 {
    width: 100%;
    height: 100vh;
    background-image: url('/img/1.png');
    background-position: center;
    background-size: cover;
    filter: brightness(50%);
    
}
.number-slide2 {
    width: 100%;
    height: 100vh;
    background-image: url('/img/2.png');
    background-position: center;
    background-size: cover;
    filter: brightness(50%);
}

.number-slide3 {
    width: 100%;
    height: 100vh;
    background-image: url('/img/3.png');
    background-position: center;
    background-size: cover;
    filter: brightness(50%);
}
@media(min-width:1009px) {
    .keen-slider {
        display: none;
    }
}

/* .keen-slider__slide img{
    object-fit: cover;
  } */
</style>
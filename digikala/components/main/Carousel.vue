<template>
  <div class="carousel" ref="carousel">
    <div class="slider-wrapper">
      <div class="inner" ref="inner">
        <slot></slot>
      </div>
    </div>
    <div class="carousel-nav">
      <button class="prev" @click="switchToPrev()">
        <svg style="width: 24px; height: 24px;"><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>
      </button>
      <button class="next" @click="switchToNext()">
        <svg style="width: 24px; height: 24px;"><path d="M12.583 12L8.29 16.293l1.414 1.414 5-5a1 1 0 000-1.414l-5-5L8.29 7.707 12.583 12z"></path></svg>
      </button>
    </div>
    <div class="carousel-dots-wrapper" ref="dotsWrapper">
      <span v-for='index in this.numberOfDots' :key='index' :class="[ 'carousel-dot', `step-${index}` ]" :step="index" @click='switchToStep(index)'></span>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "Carousel",
  props: {
    optionsObject: Object,
  },
  
  data() {
    return {
      innerWidth: 0,
      slideWidth: 0,
      stepSize: 0,
      currentStep: 0,
      innerPosition: 0,
      numberOfDots: 0,
      slider: '',
      isMouseDown:false,
      startpointCoordinate: null,
      isDistPositive: false,
    }
  },

  methods: {
    calculateInnerPosition( decrease ) {
      if ( decrease ) {
        if ( this.optionsObject.loop && this.innerPosition <= 0 ) {
          this.innerPosition = this.innerWidth - (this.slideWidth * this.optionsObject.itemsPerStep);  
        } else if ( this.innerPosition > 0 ){
          this.innerPosition -= this.stepSize;
        }
      } else {
        if(this.optionsObject.loop && this.innerPosition >=  this.innerWidth - (this.slideWidth * this.optionsObject.itemsPerSlide) ) {
          this.innerPosition = 0;
        }
        else{
          this.innerPosition += this.stepSize
        }
      }
    },

    switchToNext() {
      this.calculateInnerPosition( false );
      this.$refs.inner.style.cssText = `transform: translateX(-${ this.innerPosition }px)`;
      this.findandActivateCurrentStep()
    },

    switchToPrev() {
      this.calculateInnerPosition( true );
      this.$refs.inner.style.cssText = `transform: translateX(-${ this.innerPosition }px)`;
      this.findandActivateCurrentStep()
    },

    switchToStep( step ) {
      this.innerPosition = this.stepSize * ( step - 1);
      this.$refs.inner.style.cssText = `transform: translateX(-${ this.innerPosition }px)`;
      this.findandActivateCurrentStep()  
      console.log("🚀 ~ file: Carousel.vue:78 ~ switchToStep ~ this.innerPosition", this.innerPosition)
    },

    findandActivateCurrentStep() {
      if (this.optionsObject.dots) {
        this.currentStep = this.innerPosition / this.stepSize + 1;
        const dotButtons = document.querySelectorAll( `.carousel-dot` );
        dotButtons.forEach(dot => dot.classList.remove( "active" ))
        document.querySelector( `.carousel-dot[step="${ this.currentStep }"]` ).classList.add( "active" );
      }
    },

    startScroll() {
      this.isMouseDown = false;
      this.slider.classList.remove('active');
      if(!this.isDistPositive) {
        this.switchToNext()
        this.findandActivateCurrentStep()
      } else {
        this.switchToPrev()
        this.findandActivateCurrentStep()
      }
    },
    mouseDown(e) {
      this.isMouseDown = true;
      this.slider.classList.add('active');
      this.startpointCoordinate = e.pageX;
    },
    mouseMove(e) {
      if(this.isMouseDown) {
        e.preventDefault();
        const endPointCoordinate = e.pageX;
        const dist = (endPointCoordinate - this.startpointCoordinate);
        if(dist < 0) {
          this.isDistPositive = false
        } else {
          this.isDistPositive = true
        }
      }
    },
    autoPlay() {
      setInterval(() => {
        this.switchToNext()
      }, 5000)
    }
  },

  mounted() {

    // variables
    const innerSelector = this.$refs.inner;
    const slidesSelector = document.querySelectorAll( `.slides` );
    const carouselWidth = innerSelector.clientWidth;
    console.log("🚀 ~ file: Carousel.vue:125 ~ mounted ~ carouselWidth", carouselWidth)
    

    // calculated variables
    this.slideWidth = ( carouselWidth / this.optionsObject.itemsPerSlide );
    console.log("🚀 ~ file: Carousel.vue:130 ~ mounted ~ this.slideWidth", this.slideWidth)
    this.stepSize = this.slideWidth * this.optionsObject.itemsPerStep;
    console.log("🚀 ~ file: Carousel.vue:132 ~ mounted ~ this.stepSize", this.stepSize)
    this.numberOfDots = Math.ceil( ( slidesSelector.length - this.optionsObject.itemsPerSlide ) / this.optionsObject.itemsPerStep) + 1;
    console.log("🚀 ~ file: Carousel.vue:134 ~ mounted ~ this.numberOfDots", this.numberOfDots)
    

    // add width for slides
    for (let i = 0; i < slidesSelector.length; i++) {
      slidesSelector[i].style.cssText = `min-width:${ this.slideWidth }px !important;`;
    }

    
    // set variables after adding slides width and margins
    this.innerWidth = this.slideWidth * slidesSelector.length;
    console.log("🚀 ~ file: Carousel.vue:145 ~ mounted ~ this.innerWidth", this.innerWidth)

    // draggable slider
    this.slider = document.querySelector('.inner');
    this.slider.addEventListener('mousedown', this.mouseDown);
    this.slider.addEventListener('mousemove', this.mouseMove);
    this.slider.addEventListener('mouseup', this.startScroll);

    // autoplay-slider
    this.autoPlay()
  },
}
</script>
  
<style lang="scss" >
@import '@/assets/scss/global.scss';

.carousel {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.slider-wrapper {
  width: 100%;
  overflow: hidden;
  height: 100%;
  position: relative;
}

.inner {
  display: flex;
  align-items: center;
  transition: 0.3s all ease;
  width: 100%;
  justify-content: flex-start;
  height: 100%;
  .slides {
    width: 1432px;
    height: 400px;
    display: flex;
    justify-content: flex-start;
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
}
.inner.active {
    cursor: grab;
}


.carousel-nav {
  position: absolute;
  display: flex;
  bottom: 42px;
  right: 40px;
  gap: 8px;
  button {
    background-color: white;
    height: 40px;
    width: 40px;
    border: 1px solid #c3c3ce;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
      fill: $dark-blue-title;
    }
  }
}
.testimonials-carousel{
    width: 100%;
    top: 45%;
}
.carousel-dots-wrapper {
  width: 100%;
  position: absolute;
  bottom: 10px;
  // z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel-dot {
  padding: 0;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  opacity: .3;
  background-color: $dark-blue-button;
  border: none;
  margin: 3px;
  cursor: pointer;
  transition: width .2s ease-in-out;
}
.carousel-dot.active {
  background-color: #fff;
  border-radius: 9999px;
  height: 6px;
  opacity: 1;
  width: 16px;
}
  
</style>
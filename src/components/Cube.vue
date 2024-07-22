<template>
  <div>
    <div class="scene">
      <div class="cube is-spinning">
        <div class="cube__face cube__face--front">
          <div
            class="-mt-40 font-secondary font-extrabold text-center text-7xl text-primary"
          >
            Alex Seeley
          </div>

          <div style="margin-top: 20px" class="text-white">Developer</div>
        </div>
        <div class="cube__face cube__face--back">Simplifier</div>
        <div class="cube__face cube__face--right">Learner</div>
        <div class="cube__face cube__face--left">Collaborator</div>
        <div class="cube__face cube__face--top">Enthusiast</div>
        <div class="cube__face cube__face--bottom">Adapter</div>
      </div>
    </div>
  </div>
</template>

<script>
// export default {
//   data() {
//     return {
//       sides: ["front", "top", "left", "back", "right", "bottom"],
//       currentSideIndex: 0,
//     };
//   },
//   computed: {
//     currentClass() {
//       return "show-" + this.sides[this.currentSideIndex];
//     },
//   },
//   mounted() {
//     this.rotateCube();
//   },
//   methods: {
//     rotateCube() {
//       setInterval(() => {
//         this.currentSideIndex = (this.currentSideIndex + 1) % this.sides.length;
//       }, 3000); // Rotate every 3 seconds
//     },
//   },
// };
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: Junge;
}

body {
  font-family: Junge;
}

.is-spinning {
  animation: spinCube 45s infinite ease-in-out;
  animation-delay: 3s;
}

/* 

0 0 front 
0 90 left 
0 180 back -
0 270 right -

90 0 bottom -
270 0 top -


*/

@keyframes spinCube {
  0% {
    transform: translateZ(-100px) rotateX(0deg) rotateY(0deg);
  }
  14% {
    transform: translateZ(25px) rotateX(360deg) rotateY(180deg);
  }
  28% {
    transform: translateZ(-25px) rotateX(90deg) rotateY(0deg);
  }
  42% {
    transform: translateZ(-100px) rotateX(0deg) rotateY(270deg);
  }
  60% {
    transform: translateZ(25px) rotateX(270deg) rotateY(720deg);
  }
  84% {
    transform: translateZ(-200px) rotateX(0deg) rotateY(90deg);
  }
  100% {
    transform: translateZ(-100px) rotateX(360deg) rotateY(360deg);
  }
}

.scene {
  width: 200px;
  height: 200px;
  perspective: 400px;
}

.cube {
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-100px);
  transition: transform 6s;
}

.front-face-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(100px, auto);
  grid-row-gap: 10px;
}

.above-item {
  grid-row: -1;
}

.cube.show-front {
  transform: translateZ(-100px) rotateY(0deg);
}

.cube.show-right {
  transform: translateZ(-100px) rotateY(-90deg);
}

.cube.show-back {
  transform: translateZ(-100px) rotateY(-180deg);
}

.cube.show-left {
  transform: translateZ(-100px) rotateY(90deg);
}

.cube.show-top {
  transform: translateZ(-100px) rotateX(-90deg);
}

.cube.show-bottom {
  transform: translateZ(-100px) rotateX(90deg);
}

.cube__face {
  position: absolute;
  width: 200px;
  height: 200px;
  /* border-radius: 9px; */
  line-height: 200px;
  font-size: 1.5rem;
  text-align: center;
}

/* primary: "#e43D12",
        secondary: "#d6536D",
        third: "#ffa2b6",
        fourth: "#efb11d",
        fifth: "#ebe9e1", */

.cube__face--front {
  @apply bg-gradient-to-br from-red-300 to-cyan-300;

  /* background: #292830; */
  color: white;
}

.cube__face--right {
  /* background: #f1bb3b;
  color: #292830; */
  @apply bg-gradient-to-tr to-red-300 from-cyan-300;
  color: white;
}

.cube__face--back {
  /* background: #292830;
  color: #ebe9e1; */
  @apply bg-gradient-to-br from-red-300 to-cyan-300;
  color: white;
}

.cube__face--left {
  /* background: #f1bb3b;
  color: #292830; */
  @apply bg-gradient-to-tr to-red-300 from-cyan-300;
  color: white;
}

.cube__face--top {
  @apply bg-gradient-to-tr from-red-300 to-cyan-300;
  color: white;

  /* background: #5da7ae;
  color: #ebe9e1; */
}

.cube__face--bottom {
  /* background: #543d46;
  color: #ebe9e1; */
  @apply bg-gradient-to-tr from-red-300 to-cyan-300;
  color: white;
}

.cube__face--front {
  transform: rotateY(0deg) translateZ(100px);
}

.cube__face--right {
  transform: rotateY(90deg) translateZ(100px);
}

.cube__face--back {
  transform: rotateY(180deg) translateZ(100px);
}

.cube__face--left {
  transform: rotateY(-90deg) translateZ(100px);
}

.cube__face--top {
  transform: rotateX(90deg) translateZ(100px);
}

.cube__face--bottom {
  transform: rotateX(-90deg) translateZ(100px);
}
</style>

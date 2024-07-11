<template>
  <div>
    <div class="scene">
      <div class="cube" :class="currentClass">
        <div class="cube__face cube__face--front">front</div>
        <div class="cube__face cube__face--back">back</div>
        <div class="cube__face cube__face--right">right</div>
        <div class="cube__face cube__face--left">left</div>
        <div class="cube__face cube__face--top">top</div>
        <div class="cube__face cube__face--bottom">bottom</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sides: ["front", "top", "left", "back", "right", "bottom"],
      currentSideIndex: 0,
    };
  },
  computed: {
    currentClass() {
      return "show-" + this.sides[this.currentSideIndex];
    },
  },
  mounted() {
    this.rotateCube();
  },
  methods: {
    rotateCube() {
      setInterval(() => {
        this.currentSideIndex = (this.currentSideIndex + 1) % this.sides.length;
      }, 3000); // Rotate every 3 seconds
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

.scene {
  width: 200px;
  height: 200px;
  border: 1px solid #f1f5f9;
  margin: 80px;
  perspective: 400px;
}

.cube {
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-100px);
  transition: transform 1s;
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
  border: 4px solid #f77c6c;
  border-radius: 9px;
  line-height: 200px;
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-align: center;
}

/* font: FFFFFF
yellowy: f8e9a1
bluey: a8d0e6
salmony: f76c6c
navyy: 374785
darkNavy: 24305E */

.cube__face--front {
  background: #f77c6c;
}

.cube__face--right {
  background: #f8e9a1;
}

.cube__face--back {
  background: #f77c6c;
}

.cube__face--left {
  background: #f8e9a1;
}

.cube__face--top {
  background: #374785;
}

.cube__face--bottom {
  background: #24305e;
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

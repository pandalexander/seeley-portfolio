<script setup>
// defineProps({
//   projectTitle: String,
//   projectDescription: String,
//   projectContent: String,
// });

import { ref, onMounted } from "vue";

const isActive = ref(false);
const content = ref(null);
const contentHeight = ref(0);

function toggleVisible() {
  isActive.value = !isActive.value;
  if (isActive.value) {
    contentHeight.value = content.value.scrollHeight + "px";
  } else {
    contentHeight.value = "0";
  }
}
</script>

<template>
  <div
    class="container flex flex-col shadow-md rounded-3xl justify-center items-center p-6 bg-gradient-to-br from-fifth to-white border-solid - border-y-2 border-x-4"
  >
    <div class="w-full flex items-center max-h-12">
      <button
        type="button"
        class="collapsible mr-4 hover:cursor-pointer"
        @click="toggleVisible"
        :class="{ active: isActive }"
      >
        <img src="../assets/plus.svg" alt="plus symbol" />
      </button>
      <div @click="toggleVisible">
        <slot name="projectTitle"></slot>
      </div>
    </div>

    <div class="w-full">
      <div
        ref="content"
        :style="{ maxHeight: contentHeight }"
        class="content flex flex-grow justify-start items-start flex-col"
      >
        <slot name="projectDescription"></slot>

        <slot name="projectContent"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.collapsible {
  cursor: pointer;
  border: none;
  text-align: left;
  outline: none;
}

.content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
}

.content * {
  text-align: left;
}
</style>

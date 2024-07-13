<script setup>
defineProps({
  projectTitle: String,
  projectDescription: String,
  projectContent: String,
});

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
    class="container flex flex-col border-2 border-solid border-primary justify-center items-center"
  >
    <h3>{{ projectTitle }}</h3>
    <p>{{ projectDescription }}</p>
    <div style="padding: 40px">
      <button
        type="button"
        class="collapsible"
        @click="toggleVisible"
        :class="{ active: isActive }"
      >
        Open Collapsible
      </button>
      <div ref="content" :style="{ maxHeight: contentHeight }" class="content">
        <p>{{ projectContent }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.collapsible {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

.active,
.collapsible:hover {
  background-color: #ccc;
}

.content {
  padding: 0 18px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  background-color: #f1f1f1;
}
</style>

<script setup>

defineProps({
  type: {
    type: String,
    default: 'button'
  }
})

defineEmits(['click'])

</script>

<template>

 <button
    class="app-button"
    :type="type"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>

</template>

<style scoped>

.app-button {
  width: 480px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  border: none;
  border-radius: 8px;
  background-color: #65071d;
  color: #ffffff;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s ease;
}

.app-button:hover {
  background-color: #7d0d29;
  transform: translateY(-1px);
}

.app-button:active {
  transform: translateY(0);
}

</style>
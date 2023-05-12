<template>
  <Teleport to="#modal-div">
    <div
      class="modal-overlay"
      @click="closeModal"
    >
      <div
      ref="modal"
      class="modal-container border border-dark border-4 p-4 rounded-4"
      >
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script>
export default {
  name: "PanellModal",
  emits: ["close"],
  methods: {
    closeModal(event) {
      if (event.target != this.$refs.modal) {
        this.$emit('close')
      }
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000080;
  display: flex;
}

.modal-container {
  max-width: 600px;
  margin: auto;
  background-color: #fff;
}
</style>
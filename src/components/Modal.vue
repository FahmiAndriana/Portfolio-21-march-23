<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header"> Default Header </slot>
          <button
            type="button"
            class="close-btn"
            @click="close"
            aria-label="Close Modal"
          >
            x
          </button>
        </header>

        <main class="modal-body" id="modalDescription">
          <slot name="body"> Default body content </slot>
        </main>

        <footer class="modal-footer">
          <slot name="footer"> Default Footer! </slot>
          <button
            type="button"
            class="btn-open-modal"
            @click="close"
            aria-label="Close Modal"
          >
            Close Modal
          </button>
        </footer>
      </div>
    </div>


    <!--props-->
     <!--<button type="button" class="button" @click="openModal()">Open Modal</button>
    <Modal v-show="visible" @close="close">
      <template v-slot:header> ene3fnr </template>

      <template v-slot:body> You can put your contents within body </template>

      <template v-slot:footer> You can put your footer here </template>
    </Modal>
    <button type="button" class="button" @click="openModal()">Open Modal</button>
    <Modal v-show="visible" @close="close">
      <template v-slot:header> 44444 </template>

      <template v-slot:body> You can put your contents within body </template>

      <template v-slot:footer> You can put your footer here </template>
    </Modal>-->

  </transition>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 80%;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: center;
  border-bottom: 1px solid rgb(227, 231, 233);
  color: blue;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid rgb(227, 231, 233);
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.close-btn {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: red;
  background: transparent;
}

.btn-open-modal {
  color: white;
  background: green;
  border: 1px solid green;
  border-radius: 4px;
  margin: 20px auto;
  padding: 5px;
  width: 40%;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
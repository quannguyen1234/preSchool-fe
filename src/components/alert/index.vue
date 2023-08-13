<template>
  <vs-dialog width="550px" not-center v-model="content.active">
    <template #header>
      <h4 class="not-margin">Warning</h4>
    </template>
    <div class="con-content">
      <p>
        {{ content.notification }}
      </p>
    </div>

    <template #footer>
      <div class="con-footer">
        <vs-button @click="$emit('closeAlert', false)" transparent>
          OK
        </vs-button>
      </div>
    </template>
  </vs-dialog>
</template>

<script>
export default {
  data() {
    return {
      checking: true,
    };
  },
  props: {
    content: {
      active: null,
      notification: null,
    },
  },
  updated() {
    this.checking != this.checking;
    if (this.checking) {
      return;
    }
    this.$emit("closeAlert", false);
  },
};
</script>

<style></style>

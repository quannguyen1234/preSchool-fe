<template>
  <div class="breadcrumbs ml-4 flex items-center gap-1 bg-gray-200 h-12 pl-4">
    <div
      class="breadcrumb flex items-center text-[#EE4D2D]"
      v-for="(item, index) in breadcrumbs"
      :key="index"
    >
      <span class="text-lg font-semibold"> {{ item }}</span>
      <span v-if="index < breadcrumbs.length - 1">
        <ArrowRight></ArrowRight>
      </span>
    </div>
  </div>
</template>

<script>
import ArrowRight from "../icons/chevron-right.vue";
export default {
  props: {
    breadcrumbs: [],
  },
  components: {
    ArrowRight,
  },
};
</script>

<style></style>

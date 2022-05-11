<template>
  <div class="rate flex items-center">
    <p class="text-2xl font-bold mr-3 text-[#EE4D2D]">{{ fillStar }}</p>
    <div
      class="item cursor-pointer"
      @mouseover="handleMouteRate(item)"
      @click="handleClickRate(item)"
      v-for="item in 5"
      :key="item"
    >
      <star
        :fill="item <= fillStar ? '#EE4D2D' : null"
        :stroke="item <= rate ? '#EE4D2D' : null"
      ></star>
    </div>
  </div>
</template>

<script>
import star from "../icons/star.vue";
export default {
  components: {
    star,
  },
  data: () => ({
    checking: false,
    fillStar: 0,
  }),
  props: {
    rate: null,
  },
  methods: {
    handleMouteRate(index) {
      this.rate = index;
    },
    handleClickRate(index) {
      if (this.checking) {
        this.fillStar = null;
      } else {
        this.fillStar = index;
      }
    },
  },
};
</script>

<style></style>

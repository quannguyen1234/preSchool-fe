<template>
  <div class="categories flex flex-wrap">
    <div
      class="category w-1/3 p-1 hover:rotate-1"
      v-for="(item, index) in categories.map(pathImage)"
      :key="index"
    >
      <div>
        <router-link :to="{ name: 'ComingSoon' }">
          <img :src="item" alt="" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        "luong-thuc.jpg",
        "thuc-pham-dong-goi.jpg",
        "thuc-pham-tuoi-song.jpg",
        "banh-keo.jpg",
        "gia-vi.jpg",
        "nhu-yeu-pham-khac.jpg",
      ],
    };
  },
  methods: {
    pathImage(data) {
      return `./assets/images/categories/${data}`;
    },
  },
};
</script>

<style></style>

<template>
  <div class="flex justify-evenly items-center bg-[#ccc] py-1 ml-4">
    <div>
      <span>Sắp xếp theo</span>
    </div>
    <div>
      <vs-button color="#EE4D2D"> Phổ biến </vs-button>
    </div>
    <div>
      <vs-button color="#EE4D2D"> Mới nhất </vs-button>
    </div>
    <div>
      <vs-button color="#EE4D2D"> Bán chạy </vs-button>
    </div>
    <div class="center con-selects">
      <vs-select :color="'#EE4D2D'" placeholder="Select" v-model="color">
        <vs-option label="Giá tăng" value="1"> Giá tăng </vs-option>
        <vs-option label="Giá giảm" value="2"> Giá giảm </vs-option>
      </vs-select>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    color: 1,
  }),
};
</script>

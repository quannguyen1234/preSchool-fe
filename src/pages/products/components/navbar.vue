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
      <vs-button color="#EE4D2D"> Nhiều bình luận nhất </vs-button>
    </div>
    <div class="center con-selects">
      <vs-select :color="'#EE4D2D'" placeholder="Select" v-model="color">
        <vs-option label="Mới nhất" value="1"> Mới nhất </vs-option>
        <vs-option label="Quan tâm nhất" value="2"> Quan tâm nhất </vs-option>
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

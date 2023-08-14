<template>
  <div>
    <div class="products flex flex-wrap gap-5">
    <div
      class="product w-[185px] p-2 bg-gray-200 hover:shadow-xl"
      v-for="(item, index) in products"
      :key="index"
    >
      <div class="container-product-image" @click="directProdcutDetail(item)">
        <img
          class="h-full w-full"

          :src= "item.image"
          alt=""
        />
      </div>
      <p class="uppercase text-center py-1">{{ item.name }}</p>
     
    </div>
  </div>
  <div style="display: flex; justify-content: center;" v-if="products.length == 0"> Không có dữ liệu</div>
  </div>
</template>

<script>
// import Cart from "../icons/cart.vue";
import { getListCooking } from "@/apis/foods";
import { API_URL } from "@/constants";
export default {
  data() {
    return {
      products: [],
      API_URL:API_URL
    };
  },
  async created() {
    
    await this.handleGetListCooking();
    this.handlePathImage();
  
  },
  methods: {
    directProdcutDetail(item) {
      console.log("item: ", item);
      this.$router.push({ name: "DetailProduct", params: { id: item.recipe_id } });
    },
    addToCart() {
      this.$router.push({ name: "ComingSoon" });
    },
    async handleGetListCooking() {
      let data = await getListCooking();
      if(data?.data?.recipes) {
        this.products = data?.data?.recipes;
      }
    },
    handlePathImage(){
     
        this.products.map(function(pro){
          if (pro.image)
            pro.image = `${API_URL}/images/${pro.image}`;
          else{
            pro.image = `https://cdn-icons-png.flaticon.com/512/2771/2771401.png`
          }
          return pro;
        });
      }
  },
  components: {
    // Cart,
  },
};
</script>

<style>
  .img{
    
  }
</style>

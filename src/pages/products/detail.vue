<template>
  <div class="categories">
    <div class="pt-14">
      <navigation></navigation>
    </div>
    <!-- <carousel></carousel> -->
    <div class="xl:max-w-5xl mx-auto relative my-10 flex gap-1 ">
      
      <div class="w-4/5">
      
        <div class="ml-4 mt-6 mx-auto" >
          <information-product :detailProduct="detailProduct"></information-product>
          <div class=" columns-2 flex">
           <div class="w-3/5">
              <ul>
                  <li class="description my-3 text-justify text-[#EE4D2D]" v-for="(data, index) in detailProduct.instructions" v-bind:key="index" style="line-height: 30px;">Bước: {{ index + 1 }}: {{ data }}</li>
              </ul>
            </div>
            <div class="w-2/5">
              <div class="author text-gray-800 font-bold mb-2">Danh sách bình luận</div>
              <listCommentComp :comments="comments"></listCommentComp>
            </div>
    
          </div>
        </div>
        <commentCooking :recipeID="detailProduct.recipeId"
          @add-comment-event="handleCommentEvent"
        > </commentCooking>
      </div>
    </div>
  </div>
</template>

<script>
import navigation from "../../components/navigation/index.vue";
import listCommentComp from "./components/comment.vue";
import informationProduct from "./components/information-product.vue";
import commentCooking from "../../components/comments";
import { getDetailFood } from "@/apis/foods";
export default {
  components: {
    listCommentComp,
    navigation,
    informationProduct,
    commentCooking,
  },
  data: () => ({ breadcrumbs: ["Trang chủ", "Lương thực", "Cá"], detailProduct: {} ,comments:[]}),
  created() {
    this.getDetailProducts(this.$route.params.id);
  },
  methods: {
    async getDetailProducts(id) {
      
      try {
        let data = await getDetailFood(id);
        this.detailProduct = data?.data;
        this.comments = this.detailProduct.comments;
        console.log("data",this.comments);
        console.log("data",data)
        console.log("recipeID",this.detailProduct.recipeId);
      } catch (e) {
        console.error(e);
      }
    },

    handleCommentEvent (comment){
      this.comments.unshift(comment);
    }
  }
 
};
</script>

<style>
  
</style>

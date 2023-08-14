<template>
    <div>
        <p class="my-3 font-medium text-lg">Bình luận:</p>
        <div class="flex h-13 items-center">

            <input v-model="context" class="flex-1 border border-sky-500 rounded-xl h-full p-2 pl-4" type="text">
            <div style="margin-left: 10px;">
                <button @click="postNewComment"
                 class="block w-40 h-full bg-slate-200 w-40 pl-2 h-full " style="background-color: coral;">Bình luận</button>
            </div>
        </div>
    </div>
</template>
<script>
// import { Axios } from 'axios'
import { getLocalToken } from '../../helpers'
import apis  from '../../apis/config'
import {
    getInfor

} from "@/helpers";
export default {
    props:{
        recipeID:String
    },
    data() {
        return {
            context: "",
        }
    },
    methods: {
        async postNewComment() {
            if (getLocalToken != null) {
                apis.post(`recipies/${this.recipeID}/post-comment`,{
                    context:this.context
                }).then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        alert("error found!",error)
                        return ;
                    });
                
                const comment = {
                    userName:getInfor().name,
                    context:this.context
                }
                this.$emit("add-comment-event",comment);
                this.context="";
            }
         
        },
        
    }
}
</script>

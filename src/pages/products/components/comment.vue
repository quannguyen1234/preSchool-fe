<template>
    <div class="list-comments ">
      <div class="comments pl-2" v-for="(data,key) in comments" v-bind:key="key" >
      <div class="comment bg-gray-200 rounded-md p-4">
        <div class="author text-gray-800 font-bold mb-2">{{data.userName}}</div>
        <div class="date text-gray-600">March 8, 2023</div>
        <div class="content text-gray-800">
          {{ data.context }}
         
        </div>
        <div class="action-buttons">
          <button class="btn btn-danger">Reply</button>
        </div>
      </div>
    </div>
    </div>


  </template>
  
  <script>
  export default {
    props:{
        comments:Array
    },
    data() {
      return {}
      
    }
  };
  </script>

<style>
  .list-comments{
    padding-left:30px ;
  }
</style>
  
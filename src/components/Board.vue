<script setup>

import { ref } from 'vue'

const list = ref(["Clear", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", " ", ".", "="])


// const props = defineProps({
//         text: { type: String, default: "0" },
//         result: { type: String, default: "0" },
//         error: { type: String, default: "" }
//     })

</script>

<template>
  <div class="board">
            <div class="button" v-for="(item,index) in list" >
                {{item}}
            </div>
        </div>
</template>

<style scoped>

.board {
    display: grid;
    grid-template-columns:  repeat(4, 1fr);
    grid-gap: 5px;
    margin-top: 5px;
}

.button{
   display: flex;
   justify-content: center;
   align-items: center; 
   padding: 1em;
   font-size: 1rem;
   background: white;
   position: relative;
   z-index: 100;
}

.button:nth-child(2),
.button:nth-child(6), 
.button:nth-child(10),
.button:nth-child(14), 
.button:nth-child(18) {
    background: hsl(47deg 100% 73%);
}

.button:nth-child(1) {
    grid-column: 1 / 4;
}

.button:nth-child(15) {
    border-bottom-left-radius: 15px;
}

.button:last-child {
    border-bottom-right-radius: 15px;
}

.button:not(:nth-child(16)):hover{
    background: #39d939;
    cursor: pointer;
}

.button__clear {
    grid-template-rows: repeat(3, 200px);
}

</style>

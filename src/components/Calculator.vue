<script setup>
import { ref } from 'vue'

const list = ref(["Clear", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", " ", ".", "="])


</script>

<template>
    <div class="calculator">
        <div class="top_bar"></div>
        <div class="screen">
            <div class="screen__top">0</div>
          <div class="screen__content">0</div>
        </div>

        <div class="board">
            <div class="button" v-for="(item,index) in list" >
                {{item}}
            </div>
        </div>
    </div>
</template>

<style scoped>
.calculator{
    background: transparent;
    width: 300px;
    height: 700px;
    border-radius: 15px;
    position: relative;
    top: 15%;
    left: 35%
    
}

/* .calculator::after{
    position: "";
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    box-shadow: 0 10px 20px black;
    opacity: .3;
} */

.top_bar {
    width: 100%;
    height: 50px;
    background: white;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 2rem;
    border-bottom: 1px solid grey;
    border-radius: 15px 15px 0 0;
}

.top_bar::after {
    content: "";
    position: absolute;
    display: block;
    width: 10px;
    height: 10px;
    background: green;
    border-radius: 50%;
    box-shadow: 20px 0 0 grey,
            -20px 0 0 red;

}

.screen{
    width: 100%;
    height: 120px;
    text-align: right;
    padding-right: 1rem;
    padding-top: .5rem;
    background:white;
}

.screen__top {
font-size: 1.5rem;
}

.screen__content {
    font-size: 3rem;
}

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

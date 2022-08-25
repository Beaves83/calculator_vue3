<script setup>
import Screen from './Screen.vue'
import Board from './Board.vue'
import TopBar from './TopBar.vue'

</script>

<template>
    <div class="calculator">
        <TopBar />
        <Screen text="45 / 0" result="0" error="Cannot be divided by 0" />

        <Board />
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
</style>

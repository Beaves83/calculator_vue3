<template>
    <div class="top_bar"></div>
</template>

<style scoped>
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
</style>

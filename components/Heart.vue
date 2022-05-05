<template>
    <div class="heart">
        <font-awesome-icon class="black_heart" icon="fa-solid fa-heart fa-stack-2x" />
        <font-awesome-icon v-bind:class="{white_heart:!good, red_heart:good}" @click="onClick" icon="fa-solid fa-heart"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            good: false,
            tech: 'tech'
        }
        
    },
    methods: {
        onClick() {
            this.good = !this.good
        }
    }
}
</script>

<style>
.heart{
    position: relative;
    overflow: hidden;
    height: 4vh;
}
.white_heart{
    font-size: 3.6vh;
    color: white;
    position: absolute;
    left: 0.1vh;
    top: 0.15vh;
}
.black_heart{
    color: rgb(145, 145, 145);
    font-size: 4vh;
    position: absolute;
    margin: 0%;
}
.red_heart{
    font-size: 3.6vh;
    color: rgb(255, 33, 118);
    position: absolute;
    left: 0.1vh;
    top: 0.15vh;
}
</style>
<template>
    <div class="post">
        <div class="post_bar">
            <div class="post_user_icon" >
                <img src="/icon.png">
            </div>
            <div class="post_name">
                username
            </div>
        </div>
        <div class="post_graph">
            <v-carousel :show-arrows='true'>
                <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
                    reverse-transition="fade-transition"
                    transition="fade-transition">
                </v-carousel-item>
            </v-carousel>
        </div>
        <div class="post_action">
            <Heart />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            items: [
                {
                    src:'/post_image.jpg'
                },
                {
                    src:'/picasso.png'
                }
            ]
        }
    },
}
</script>

<style>
.post{
    margin-bottom: 2vw;
    background-color: white;
}
.post_bar{
    display: flex;
    height: 4vw;
}
.post_name{
    display: grid;
    place-items: right;
    font-size: 3.5vw;
    bottom: 0%;
    padding-right: 1%;
    width: 100%;
}
.post_user_icon{
    border-radius: 50%;
    margin-left: 1vw;
    height: 4vw;
    width: 4.5vw;
    overflow: hidden;
    position: relative;
}
img{
    width: 100%;
}
.post_user_icon img{
    width: 100%;
    height: auto;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.v-window__next{
    right: 0px;
}
    
</style>
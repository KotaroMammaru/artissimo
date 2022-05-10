<template>
    <v-card class="post">
        <div class="post_bar">
            <div class="post_user_icon" >
                <img src="/icon.png">
            </div>
            <div class="post_name">
                username
            </div>
        </div>
        <div class="post_graph">
            <v-carousel >
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
        <v-card-title>title</v-card-title>
        <v-card-actions>
            <v-btn
                elevation="2"
                rounded>油絵</v-btn>
            <v-btn
                elevation="2"
                rounded>肖像画</v-btn>
            <v-btn
                elevation="2"
                rounded>油絵</v-btn>

                    <v-spacer></v-spacer>

                    <v-btn
                    icon
                    @click="show = !show"
                    >
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                </v-card-actions>

                <v-expand-transition>
                    <div v-show="show">
                    <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
    </v-card>
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
            ],
            show: false,
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
    height: 8vw;
}
.post_name{
    display: grid;
    place-items: right;
    font-size: 7vw;
    bottom: 0%;
    padding-right: 1%;
    width: 100%;
}
.post_user_icon{
    border-radius: 50%;
    margin-left: 1vw;
    height: 8vw;
    width: 9vw;
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
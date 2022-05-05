<template>
    <div class="post">
        <div class="post_bar">
            <div class="post_icon" >
                <img src="/icon.png">
            </div>
            <div class="post_name">
                username
            </div>
        </div>
        <div class="post_graph">
            <img src="/post_image.jpg">
        </div>
    </div>
</template>

<style>
    .post{
        margin-bottom: 2vh;
        background-color: white;
    }
    .post_bar{
        display: flex;
        height: 4vh;
    }
    .post_name{
        display: grid;
        place-items: right;
        font-size: 3.5vh;
        bottom: 0%;
        padding-right: 1%;
        width: 100%;
    }
    .post_icon{
        border-radius: 50%;
        margin-left: 1vh;
        height: 4vh;
        width: 4.5vh;
        overflow: hidden;
        position: relative;
    }
    img{
        width: 100%;
    }
    .post_icon img{
        width: 100%;
        height: auto;
        position: absolute;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

</style>
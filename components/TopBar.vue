<template>
    <div class="top_bar">
        <nuxt-link to="/about">
            <font-awesome-icon class="bar_icon" icon="fa-solid fa-house" />
        </nuxt-link>
        <nuxt-link to="/reaction">
            <font-awesome-icon class="bar_icon" icon="fa-solid fa-heart" />
        </nuxt-link>
        <nuxt-link to="/search">
            <font-awesome-icon class="bar_icon" icon="fa-solid fa-magnifying-glass" />
        </nuxt-link>
        <nuxt-link to="/select">
            <font-awesome-icon class="bar_icon" icon="cog" />
        </nuxt-link>
    </div>
</template>


<style>
    .top_bar{
        display: flex;
        justify-content: flex-end;
        background-color: white;
    }
    .bar_icon{
        margin: 0 1vw 0 1vw;
    }
</style>
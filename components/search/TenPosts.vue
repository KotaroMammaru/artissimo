<template>
    <div class="ten_post">
        <v-row>
            <v-col
            v-for="n in 10"
            :key="n"
            class="d-flex child-flex"
            cols="6">
                <v-img
                :src="`/search_photo/${n}.jpg`"
                :lazy-src="`/search_photo/${n}.jpg`"
                aspect-ratio="1"
                class="grid_post">
                </v-img>
            </v-col>
        </v-row>
    </div>
</template>

<style>
    .grid_post{
        margin: 3px;
    }
</style>
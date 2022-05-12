<template>
    <div class="top_bar">
        <v-app-bar
        color="black"
        dark
        >
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

            <v-toolbar-title>Artissimo</v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                v-model="group"
                active-class="brown--text text--accent-4"
                >
                    <nuxt-link to="/home">
                        <v-list-item>
                            <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Home</v-list-item-title>
                        </v-list-item>
                    </nuxt-link>
                    <nuxt-link to="/reaction">
                        <v-list-item>
                            <v-list-item-icon>
                            <v-icon>mdi-heart</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Reaction</v-list-item-title>
                        </v-list-item>
                    </nuxt-link>
                    <nuxt-link to="/search">
                        <v-list-item>
                            <v-list-item-icon>
                            <font-awesome-icon class="bar_icon" icon="fa-solid fa-magnifying-glass" />
                            </v-list-item-icon>
                            <v-list-item-title>Search</v-list-item-title>
                        </v-list-item>
                    </nuxt-link>
                    <nuxt-link to="/account">
                        <v-list-item>
                            <v-list-item-icon>
                            <v-icon>mdi-account</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Account</v-list-item-title>
                        </v-list-item>
                    </nuxt-link>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        data: () => ({
            drawer: false,
            group: null,
        }),
    }
</script>

<style>
    .top_bar{
        /* position: fixed; */
        display: flex;
        justify-content: flex-end;
        background-color: white;
    }
    .bar_icon{
        margin-left: 4px;
        margin-top: 3px;
        color: rgb(92, 92, 92);
    }
    .v-application {
        font-family: 'Noto Sans JP', sans-serif;
    }
</style>
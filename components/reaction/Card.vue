<template>
    <v-card class="reaction_card">
        <div class="reaction icon">
            <PostUserIcon />
        </div>
        <div class="reaction_sentents">
            usernameがあなたのアカウントをフォローしました。。
        </div>
        <div class="reaction_f_button">
            <PostFollowButton />
        </div>
    </v-card>
</template>

<style>
.reaction_card{
    height: 20vw;
    display: grid;
    grid-template-columns: 11vw 67vw 22vw;
}
.reaction.icon{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1vw;
}
.reaction_f_button{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    font-family: 'Zen Maru Gothic', sans-serif;
}
.reaction_sentents{
    width: 67vw;
    padding: 3px;
    font-size: 4vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
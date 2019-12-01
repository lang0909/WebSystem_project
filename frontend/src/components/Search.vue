<template>
<div v-for="player in player_name" class="player">
    <div>
        {{player.name}}
    </div>
</div>
</template>

<script>
export default {
    created(){
        this.$http.get(`/api/${value}`)
        .then((response) =>{
            this.player_name = response.data;
        })
    },
    props: ['value'],
    data(){
        return{
            player_name: []
        }
    },
}
</script>
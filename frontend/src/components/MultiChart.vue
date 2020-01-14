<template>
    <div>
        <hr />
        <tr v-for="compare in this.compare_value" class="compare">
            <compare-bar-chart :data="compare" :options="{responsive: false, maintainAspectRatio: false}" :first="player_name1[0].name" :second="player_name2[0].name">
            </compare-bar-chart>
            <router-view></router-view>
            <br>
        </tr>
    </div>
</template>

<script>
export default {
    async created(){
        this.player_name1 = await this.$store.dispatch('findPlayerName',{spid: this.data[0][0].spId})
        this.player_name2 = await this.$store.dispatch('findPlayerName',{spid: this.data[0][1].spId})
        this.compare_value = this.data;
    },
    props: ['data'],
    data(){
        return{
            compare_value: '',
            player_name2: '',
            player_name1: '',
            temp1: '',
            temp2: '',
        }
    },
    method:{
    }
}
</script>

<style>
.compare{
    display: inline-block;
}
</style>
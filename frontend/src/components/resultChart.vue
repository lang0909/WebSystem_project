<template>
    <div v-if="top10000.length">
        <hr />
        <tr v-for="top in top10000" class="top10000">
            <router-link :to="{name: 'show', params:{ id: String(top.spId)+String(top.spPosition)}}">
                <line-chart :data="[top.status.shoot, top.status.effectiveShoot, 
                top.status.assist, top.status.goal, top.status.dribble, top.status.passTry, top.status.passSuccess, top.status.block, top.status.tackle]" :name="top.spPosition" :options="{responsive: false, maintainAspectRatio: false}">
                </line-chart>
            </router-link>
            <br>
        </tr>
    </div>
</template>

<script>
import AAA from '../components/ShowComment.vue'

export default {
    components:{
        'show': AAA
    },
    created(){
        this.$http.get(`/top_record/${this.data}`)
        .then((response)=>{
            this.top10000 = response.data;
        })
    },
    props: ['data'],
    data(){
        return{
            top10000: ''
        }
    },
}
</script>

<style>
.top10000{
    display: inline-block;
}
</style>
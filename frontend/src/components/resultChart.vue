<template>
    <div v-if="top10000.length">
        <hr />
        <tr v-for="top in top10000" class="top10000">
            <router-link :to="{name: 'show', params:{ id: String(top.spId)+String(top.spPosition)}}">
                <bar-chart :data="[top.status.shoot, top.status.effectiveShoot, 
                top.status.assist, top.status.goal, top.status.dribble, top.status.passTry, top.status.passSuccess, top.status.block, top.status.tackle]" :name="top.spPosition" :options="{responsive: false, maintainAspectRatio: false}" :background_value="top.maxIndex">
                </bar-chart>
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
            this.top10000.filter(function(temp){
                temp.maxIndex = [];
            })
            const temp1 = Math.max.apply(Math, this.top10000.map(function(o) { return o.status.shoot; }));
            const temp2 = Math.max.apply(Math, this.top10000.map(function(o) { return o.status.effectiveShoot; }));
            const temp3 = Math.max.apply(Math, this.top10000.map(function(o) { return o.status.assist; }));
            const temp4 = Math.max.apply(Math, this.top10000.map(function(o) { return o.status.goal; }));
            const temp5 = Math.max.apply(Math, this.top10000.map(function(o) { return o.status.dribble; }));
            const temp6 = Math.max.apply(Math, this.top10000.map(function(o) { return o.status.passTry; }));
            const temp7 = Math.max.apply(Math, this.top10000.map(function(o) { return o.status.passSuccess; }));
            const temp8 = Math.max.apply(Math, this.top10000.map(function(o) { return o.status.block; }));
            const temp9 = Math.max.apply(Math, this.top10000.map(function(o) { return o.status.tackle; }));
            this.top10000.filter(function(temp){
                if(temp.status.shoot===temp1){
                    temp.maxIndex.push(0);
                }
                if(temp.status.effectiveShoot===temp2){
                    temp.maxIndex.push(1);
                }
                if(temp.status.assist===temp3){
                    temp.maxIndex.push(2);
                }
                if(temp.status.goal===temp4){
                    temp.maxIndex.push(3);
                }
                if(temp.status.dribble===temp5){
                    temp.maxIndex.push(4);
                }
                if(temp.status.passTry===temp6){
                    temp.maxIndex.push(5);
                }
                if(temp.status.passSuccess===temp7){
                    temp.maxIndex.push(6);
                }
                if(temp.status.block===temp8){
                    temp.maxIndex.push(7);
                }
                if(temp.status.tackle===temp9){
                    temp.maxIndex.push(8);
                }
            })
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
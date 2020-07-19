<template>
    <div>
        <hr />
        <div v-if="top10000.length">
            <span>
                <img v-bind:src="'/season/'+this.data.substring(0,3)+'.JPG'" class="img_cont">
                {{this.player_name}}
            </span>
        </div>
        <br/>
        <br/>
        <tr v-for="top in top10000" class="top10000">
            <router-link :to="{name: 'show', params:{ id: String(top.spId)+String(top.spPosition)}}">
                <bar-chart :data="[top.status.shoot, top.status.effectiveShoot, 
                top.status.assist, top.status.goal, top.status.passTry, top.status.passSuccess, top.status.block, top.status.tackle]" :name="top.spPosition" :options="{responsive: false, maintainAspectRatio: false}" :background_value="top.maxIndex">
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
            if(this.top10000.length==0){
                alert("정보의 양이 적거나 없습니다");
            }
            this.top10000.filter(function(temp){
                temp.maxIndex = [];
            })
            const temp1 = Math.max.apply(Math, this.top10000.map(function(o) { return o.status.shoot; }));
            const temp2 = Math.max.apply(Math, this.top10000.map(function(o) { return o.status.effectiveShoot; }));
            const temp3 = Math.max.apply(Math, this.top10000.map(function(o) { return o.status.assist; }));
            const temp4 = Math.max.apply(Math, this.top10000.map(function(o) { return o.status.goal; }));
            const temp6 = Math.max.apply(Math, this.top10000.map(function(o) { return o.status.passSuccess/o.status.passTry; }));
            const temp7 = Math.max.apply(Math, this.top10000.map(function(o) { return o.status.block; }));
            const temp8 = Math.max.apply(Math, this.top10000.map(function(o) { return o.status.tackle; }));
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
                if(temp.status.passSuccess/temp.status.passTry===temp6){
                    temp.maxIndex.push(4);
                }
                if(temp.status.block===temp7){
                    temp.maxIndex.push(5);
                }
                if(temp.status.tackle===temp8){
                    temp.maxIndex.push(6);
                }
            })
            this.top10000.sort(function(a,b){
                return b.maxIndex.length - a.maxIndex.length;
            })
        })
    },
    props: ['data','player_name'],
    data(){
        return{
            top10000: '',
            temp_position: ''
        }
    },
}
</script>

<style>
.top10000{
    display: inline-block;
}
</style>
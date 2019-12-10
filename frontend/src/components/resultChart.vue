<template>
    <div>
        <hr />
        <select v-on:change="changePosition($event)">
            <option>select position</option><option value="1">SW</option><option value="2">RWB</option><option value="3">RB</option><option value="4">RCB</option>
            <option value="5">CB</option><option value="6">LCB</option><option value="7">LB</option><option value="8">LWB</option><option value="9">RDM</option>
            <option value="10">CDM</option><option value="11">LDM</option><option value="12">RM</option><option value="13">RCM</option><option value="14">CM</option>
            <option value="15">LCM</option><option value="16">LM</option><option value="17">RAM</option><option value="18">CAM</option><option value="19">LAM</option>
            <option value="20">RF</option><option value="21">CF</option><option value="22">LF</option><option value="23">RW</option><option value="24">RS</option>
            <option value="25">ST</option><option value="26">LS</option><option value="27">LW</option><option value="28">SUB</option>
        </select>
        <select v-on:change="changeData($event)">
            <option>select data</option>
            <option value="shoot">shoot</option>
            <option value="effectiveShoot">effectiveShoot</option>
            <option value="assist">assist</option>
            <option value="goal">goal</option>
            <option value="dribble">dribble</option>
            <option value="passTry">passTry</option>
            <option value="passSuccess">passSuccess</option>
            <option value="block">block</option>
            <option value="tackle">tackle</option>
        </select>
        <div v-for="new_rec in new_record" class="player">
            <div>
                <span>
                    <img v-bind:src="'/players/'+new_rec.spId" class="back_img" :style="{'background-image': 'url('+'/season_background/'+new_rec.spId.toString().substring(0,3)+'.png)'}">
                </span>
                <span>
                    <img v-bind:src="'/season/'+new_rec.spId.toString().substring(0,3)+'.JPG'" class="img_cont">
                </span>
                <span class="name_cont">
                    {{new_rec.spId}}
                </span>
            </div>
        </div>
        <div v-if="top10000.length">
            <tr v-for="top in top10000" class="top10000">
                <router-link :to="{name: 'show', params:{ id: String(top.spId)+String(top.spPosition)}}">
                    <bar-chart :data="[top.status.shoot, top.status.effectiveShoot, 
                    top.status.assist, top.status.goal, top.status.dribble, top.status.passTry, top.status.passSuccess, top.status.block, top.status.tackle]" :name="top.spPosition" :options="{responsive: false, maintainAspectRatio: false}" :background_value="top.maxIndex">
                    </bar-chart>
                </router-link>
                <br>
            </tr>
        </div>
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
    methods:{
        changeData: function changeData(event){
            const temp = [];
            temp.push(this.temp_position);
            temp.push(event.target.value);
            this.$http.get(`/toprecord/${temp}`)
            .then((response)=>{
                this.new_record = response.data;
                console.log(this.new_record);
            })
        },
        changePosition: function changePosition(event){
            this.temp_position = event.target.value;
        }
    },
    data(){
        return{
            top10000: '',
            new_record: '',
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
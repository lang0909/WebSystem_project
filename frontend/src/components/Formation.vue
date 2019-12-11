<template>
    <div v-if="this.data.length" class="cont_field">
        <div class="field">
            <div class="lw">
                <select v-on:change="changeLW($event)">
                    <option>select data</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>                
            </div>
            <div class="ls">
                <select v-on:change="changeLS($event)">
                    <option>select data</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
            </div>
            <div class="st">
                <select v-on:change="changeST($event)">
                    <option>select data</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
            </div>
            <div class="rs">
                <select v-on:change="changeRS($event)">
                    <option>select data</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
            </div>
            <div class="rw">
                <select v-on:change="changeRW($event)">
                    <option>select data</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
            </div>
            <div class="lf">
                <select v-on:change="changeLF($event)">
                    <option>select data</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
            </div>
            <div class="cf">
                    <select v-on:change="changeCF($event)">
                        <option>select data</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                        <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                    </select>
            </div>
            <div class="rf">
                <select v-on:change="changeRF($event)">
                    <option>select data</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
            </div>
            <div class="lam">
                <select v-on:change="changeLAM($event)">
                    <option>select data</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
            </div>
            <div class="cam">
                <select v-on:change="changeCAM($event)">
                    <option>select data</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
            </div>
            <div class="ram">
                <select v-on:change="changeRAM($event)">
                    <option>select data</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
            </div>
            <div class="lm">
                <select v-on:change="changeLM($event)">
                    <option>select data</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
            </div>
            <div class="lcm">
                <select v-on:change="changeLCM($event)">
                    <option>select data</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
            </div>
            <div class="cm">
                <select v-on:change="changeCM($event)">
                    <option>select data</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
            </div>
            <div class="rcm">
                <select v-on:change="changeRCM($event)">
                    <option>select data</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
            </div>
            <div class="rm">
                <select v-on:change="changeRM($event)">
                    <option>select data</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
            </div>
            <div class="ldm">
                <select v-on:change="changeLDM($event)">
                    <option>select data</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
            </div>
            <div class="cdm">
                <select v-on:change="changeCDM($event)">
                    <option>select data</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
            </div>
            <div class="rdm">
                <select v-on:change="changeRDM($event)">
                    <option>select data</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
            </div>
            <div class="lwb">
                <select v-on:change="changeLWB($event)">
                    <option>select data</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
            </div>
            <div class="lb">
                <select v-on:change="changeLB($event)">
                    <option>select data</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
            </div>
            <div class="lcb">
                <select v-on:change="changeLCB($event)">
                    <option>select data</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
            </div>
            <div class="cb">
                <select v-on:change="changeCB($event)">
                    <option>select data</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
            </div>
            <div class="rcb">
                <select v-on:change="changeRCB($event)">
                    <option>select data</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
            </div>
            <div class="rb">
                <select v-on:change="changeRB($event)">
                    <option>select data</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
            </div>
            <div class="rwb">
                <select v-on:change="changeRWB($event)">
                    <option>select data</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created(){
        var position_temp =  ['gk','sw','rwb','rb','rcb','cb','lcb','lb','lwb','rdm','cdm',
        'ldm','rm','rcm','cm','lcm','lm','ram','cam','lam','rf','cf','lf','rw','rs','st','ls','lw','sub'];
        this.formation = this.data;
        this.$http.get(`/formation/${this.formation}`)
        .then((response)=>{
            this.position = response.data;
            console.log(this.position[0].position);
            this.position[0].position.filter(function(temp){
                console.log(temp);
                document.querySelector(`.${position_temp[temp]}`).style.display="block";
            })
        })
    },
    props: ['data'],
    data(){
        return{
            position: [],
            formation: '',
        }
    }
}
</script>

<style>
.cont_field{
    position: relative;
    width: 696px;
    height: 688px;
    margin:0 auto;
    margin-top: 5px;
    background: url('../assets/bg_filed02.jpg');
    z-index: 30;
    text-align: center;
}

.field{
    position: absolute;
    top: 34px;
    left: 4px;
    right: 4px;
    bottom: 4px;
    z-index: 20;
}
.ls{
    left: 147px;
    top:38px;
    z-index: 40;
    position: absolute;
    display: none;
}

.rs{
    left: 411px;
    top: 38px;
    z-index:40;
    position: absolute;
    display: none;
}

.lm{
    left: 6px;
    top: 210px;
    z-index: 40;
    position: absolute;
    display: none;
}

.cm{
    left: 283px;
    top: 283px;
    z-index: 40;
    position: absolute;
    display: none;
}

.rm{
    left: 552px;
    top: 210px;
    z-index: 40;
    position: absolute;
    display: none;
}

.cdm{
    left: 278px;
    top: 360px;
    z-index: 40;
    position: absolute;
    display: none;
}

.lb{
    left: 6px;
    top: 459px;
    z-index:40;
    position: absolute;
    display: none;
}

.rb{
    left: 562px;
    top: 459px;
    z-index: 40;
    position: absolute;
    display: none;
}

.rcb{
    left: 408px;
    top: 470px;
    z-index: 40;
    position: absolute;
    display: none;
}

.lcb{
    left: 173px;
    top: 470px;
    z-index: 40;
    position: absolute;
    display: none;
}

.lam{
    left: 147px;
    top: 200px;
    z-index: 40;
    position: absolute;
    display: none;
}

.ram{
    left: 411px;
    top: 200px;
    z-index: 40;
    position: absolute;    
    display: none;
}

.cam{
    left: 283px;
    top: 200px;
    z-index: 40;
    position: absolute;
    display: none;
}

.lcm {
    left: 147px;
    top: 254px;
    z-index: 40;
    position: absolute;
    display: none;
}

.rcm {
    left: 411px;
    top: 254px;
    z-index: 40;
    position: absolute;
    display: none;
}

.cf {
    left: 277px;
    top: 147px;
    z-index: 40;
    position: absolute;
    display: none;
}

.rw {
    left: 562px;
    top: 67px;
    z-index: 40;
    position: absolute;
    display: none;
}

.lw {
    left: 6px;
    top: 67px;
    z-index: 40;
    position: absolute;
    display: none;
}

.ldm {
    left: 173px;
    top: 320px;
    z-index: 40;
    position: absolute;
    display: none;
}

.rdm {
    left: 408px;
    top: 320px;
    z-index: 40;
    position: absolute;
    display: none;
}

.st {
    left: 278px;
    top: 38px;
    z-index: 40;
    position: absolute;
    display: none;
}

.cb {
    left: 281px;
    top: 470px;
    z-index: 40;
    position: absolute;
    display: none;
}

.lf {
    left: 112px;
    top: 75px;
    z-index: 40;
    position: absolute;
    display: none;
}

.rf {
    left: 441px;
    top: 79px;
    z-index: 40;
    position: absolute;
    display: none;
}

.lwb {
    left: 6px;
    top: 384px;
    z-index: 40;
    position: absolute;
    display: none;
}

.rwb {
    left: 562px;
    top: 384px;
    z-index: 40;
    position: absolute;
    display: none;
}
</style>
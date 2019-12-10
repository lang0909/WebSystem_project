<template>
<div v-if="this.data.length">
    <div class="field">
        <div class="attack"></div>
        <div class="mid"></div>
        <div class="defence"></div>
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
    </div>
</div>
</template>

<script>
export default {
    created(){
        this.formation = this.data;
        this.$http.get(`/formation/${this.formation}`)
        .then((response)=>{
            this.position = response.data;
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
.field{
    display: flex;
    flex-direction: column;
    position: absolute;
    background-image: url('../assets/ground_field.png');
    background-size: cover;
    height: 575px;
    width: 865px;
}
</style>
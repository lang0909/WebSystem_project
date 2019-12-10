<template>
    <div>
        <hr />
        <tr v-for="compare in this.compare_value" class="compare">
            <compare-bar-chart :data="compare" :options="{responsive: false, maintainAspectRatio: false}">
            </compare-bar-chart>
            <br>
        </tr>
    </div>
</template>

<script>
export default {
    created(){
        this.compare_value = this.data;
    },
    props: ['data'],
    data(){
        return{
            compare_value: '',
        }
    }
}
</script>

<style>
.compare{
    display: inline-block;
}
</style>
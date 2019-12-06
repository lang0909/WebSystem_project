<template>
    <div class="cont">
        <div v-if="this.top!=0">
            <line-chart :data="[this.top[0].status.shoot, this.top[0].status.effectiveShoot,this.top[0].status.assist, this.top[0].status.goal, this.top[0].status.dribble, this.top[0].status.passTry, this.top[0].status.passSuccess, this.top[0].status.block, this.top[0].status.tackle]" :name="this.top[0].spPosition" :options="{responsive: false, maintainAspectRatio: false}">
            </line-chart>
        </div>
        <input type="text" placeholder="Please Input Comment" v-model="comment_value" class="input_comment"><br>
        <button v-on:click="submit_comment">Apply comment</button>
        <div v-if="comments.length">
            <div v-for="comment in comments" class="comment">
                {{comment.content}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created: function(){
        const id = this.$route.params.id;
        this.$http.get(`/top_record/${id}/comment`)
        .then((response)=>{
            this.comments = response.data;
        })
    },
    created: function(){
        const spid = this.$route.params.id.substring(0,9);
        const po = parseInt(this.$route.params.id.substring(9,this.$route.params.id.length),0);
        this.$http.get(`/top_record/${spid}`)
        .then((response)=>{
            const top10000 = response.data;
            console.log(top10000);
            const temp = top10000.filter(function(temp){
                return temp.spPosition === po
            })
            console.log(temp);
            this.top = temp;            
        })
    },
    methods:{
        submit_comment(){
            if(this.comment_value.length!=0){
                const id = this.$route.params.id;
                this.$http.post(`/top_record/${id}/comment`,{
                    content: this.comment_value
                }).then((response)=>console.log(response))
            }
            else{
                alert("no valid")
            }
        }
    },
    data(){
        return{
            comments: [],
            comment_value: '',
            top: ''
        }
    }
}
</script>

<style>
.cont{
    display: inline-block;
}

.input_comment{
    width: 300px;
    height: 50px;
}
</style>
<template>
    <div class="cont">
        <bar-chart :data="[this.top[0].status.shoot, this.top[0].status.effectiveShoot,this.top[0].status.assist, this.top[0].status.goal, this.top[0].status.dribble, this.top[0].status.passTry, this.top[0].status.passSuccess, this.top[0].status.block, this.top[0].status.tackle]" :name="this.top[0].spPosition" :options="{responsive: false, maintainAspectRatio: false}" :background_value="this.top[0].maxIndex">
        </bar-chart>
        <input type="text" placeholder="Please Input Comment" v-model="comment_value" class="input_comment"><br>
        <button v-on:click="submit_comment" style="margin : 3px;">Apply comment</button>
        <div v-if="comments.length" class="mylist">
            <div v-for="comment in comments" class="comment">
                {{comment.content}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    async created(){
        const spid = this.$route.params.id.substring(0,9);
        const po = parseInt(this.$route.params.id.substring(9,this.$route.params.id.length),0);
        const top10000 = await this.$store.dispatch('searchTopRecord',{spid: spid})
        const temp =  await top10000.filter(function(temp){
            return temp.spPosition === po
        })
        this.top = temp;
        this.top[0].maxIndex = [];
        const id = this.$route.params.id;
        this.comments = await this.$store.dispatch('fetchComment',{spid: id})
    },
    methods:{
        submit_comment(){
            if(this.comment_value.length!=0){
                const id = this.$route.params.id;
                this.$http.post(`/top_record/${id}/comment`,{
                    content: this.comment_value
                }).then(
                  this.$http.get(`/top_record/${id}/comment`)
                  .then((response)=>{
                    this.comments = response.data;
                    alert('등록되었습니다');
                  }));
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

.mylist{
  background-color: gainsboro;
}
.mylist div {
    border-bottom: 1px solid #efefef; 
}

</style>
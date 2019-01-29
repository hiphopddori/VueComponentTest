<template>
    <div>
        <select v-model="selectedKey"  @change="optionChange">
                <option v-for="data in datas" v-bind:value="data.code" v-bind:key="data.code">
                    {{ data.name }}
                </option>
        </select>
    </div>

</template>

<script>

// https://rwd337.tistory.com/129 이벤트 상위 전달
export default {

    props:{
         datas:Array
        ,selectedKey:String
        ,eventId:String
    },
    data(){
        return{
        }
    }
    ,methods:{
        getSelectedData(){
            let key = this.selectedKey;
            let findItem = this.datas.find((o,i)=>{
                if (o.code == key){
                    return true;
                }
            });
            return findItem;
        }
        ,optionChange(){
            //alert(this.eventId);
            
            if (this.eventId != ""){
                this.$emit(this.eventId);         
            }
            
        }
    }
    
}
</script>

<style>

</style>

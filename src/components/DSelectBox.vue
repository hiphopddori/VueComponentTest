<template>
    <div>
        <select v-model="selectedValue" @change="optionChange">
                <option v-for="data in datas" v-bind:value="data.code">
                    {{ data.name }}
                </option>
        </select>
    </div>

</template>

<script>
export default {

    props:{
         datas:Array
        ,selectedValue:String
    },
    data(){
        return{
        }
    }
    ,methods:{
        getSelectedData(){
            let key = this.selectedValue;
            let findItem = this.datas.find((o,i)=>{
                if (o.code == key){
                    return true;
                }
            });
            return findItem;
        }
    }
    
}
</script>

<style>

</style>

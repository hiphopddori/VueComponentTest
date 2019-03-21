<template>
    <div>
            
        <select v-model="selected"  @change="optionChange">
            <option v-if="includeAll===true" v-bind:value="'ALL'" >{{allTitle}}</option>
            <option v-for="data in datas" v-bind:value="data[codeKeyName]" v-bind:key="data[codeKeyName]">
                {{data[labelKeyName]}}
            </option>
        </select>
        <span>선택함: {{ selected }}</span>
    </div>
</template>

<script>

// https://rwd337.tistory.com/129 이벤트 상위 전달
export default {

    props:{
         datas:{
            type:Array,
            default:[]
        }
        ,labelKeyName:{
            type:String,
            default:'NAME'
        }
        ,codeKeyName:{
            type:String,
            default:'CODE'
        }
        /*
        ,selectedKey:{
            type:String,
            default:''
        }
        */
        ,includeAll:{
            type:Boolean,
            default:false
        }
        ,allTitle:{
            type:String,
            default:'전체'
        }

        //,eventId:String
    },
    data(){
        return{
            selected:'ALL'
        }
    }
    ,methods:{
        getSelectedData(){
            let vi = this;
            let key = this.selected;
            console.log("select code : " + key);
            let findItem = this.datas.find((o,i)=>{
                if (o[vi.codeKeyName] == key){
                    return true;
                }
            });
            return findItem;
        }
        ,optionChange(){
            //alert(this.eventId);
            
            //if (this.eventId != ""){
            this.$emit("onChange");         
            //}
            
        }
    }
    
}
</script>

<style>

</style>

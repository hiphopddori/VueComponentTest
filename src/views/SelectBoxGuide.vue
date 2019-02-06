<template>
    <div>
        <!-- 기본 select html tag-->
        <v-card>
            <v-card-title class="headline font-weight-regular blue-grey white--text">Basic Select</v-card-title>
            <v-btn color="info"  v-on:click="getSelectedData">getItem</v-btn>
            <v-btn color="info"  v-on:click="setSeletedItem('03')">setItem</v-btn>
            <div>
                <select v-model="selected" @change="optionChange">
                    <option v-for="data in datas" v-bind:value="data.code" v-bind:key="data.code">
                        {{ data.name }}
                    </option>
                </select>
            </div>
        </v-card>
        <!-- Select Box Component -->
        <v-card>
            <v-card-title class="headline font-weight-regular blue-grey white--text">ddori select box</v-card-title>
            <v-btn color="info"  v-on:click="ddoriGetSelectedData">getItem</v-btn>
            <div>
                <d-select-box ref="cboBranch" :datas="datas" :selected-key="selected" :event-id="eventId" @onChange="changeBranch"></d-select-box>
            </div>
        </v-card>        
    </div>
</template>

<script>

import DSelectBox from '../components/core/DSelectBox.vue';
export default {
    
    components:{
        DSelectBox
    }
    ,data(){
        return{
            datas:[{code:'01',name:'Test01'},{code:'02',name:'Test02'},{code:'03',name:'Test03'}
            ]
            ,selected:'02'
            //,eventId:'changedBranch'
        }   
    }
    ,methods:{
        getSelectedData(){
            let key = this.selected;
            let findItem = this.datas.find((o,i)=>{
                if (o.code == key){
                    return true;
                }
            });
            alert(findItem.name);
            //return findItem;
        }
        ,ddoriGetSelectedData(){
        
            let findItem = this.$refs.cboBranch.getSelectedData();
            alert(findItem.name);
            //return findItem;
        }

        ,setSeletedItem(itemKey){
            this.selected = itemKey;
        }
        ,optionChange(){
            alert("chabged");
        }
        ,changeBranch(){
            alert(this.$refs.cboBranch.getSelectedData().code);
        }
    },
}
</script>

<style>

</style>

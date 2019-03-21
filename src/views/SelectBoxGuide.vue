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
                <span>선택함: {{ selected }}</span>
            </div>
        </v-card>
        <!-- Select Box Component -->
        <v-card>
            <v-card-title class="headline font-weight-regular blue-grey white--text">ddori select box</v-card-title>
            <v-btn color="info"  v-on:click="ddoriGetSelectedData">getItem</v-btn>
            <div>
                <d-select-box ref="cboDoori" :datas="datas" :selected-key="selected" ></d-select-box>
            </div>
        </v-card>   

        <!-- Select Box Component -->
        <v-card>
            <v-card-title class="headline font-weight-regular blue-grey white--text">express rest call</v-card-title>
            <v-btn color="info"  v-on:click="ddoriGetSelectedData">getItem</v-btn>
            <div>
                <d-select-box ref="cboBranch" :datas="branchs" :selected-key="selBranchCode" :labelKeyName="'BRANCH_NAME'" :codeKeyName="'BRANCH_ID'" 
                    :includeAll="includeAll"  @onChange="changeBranch">
                </d-select-box>

                <d-select-box ref="cboTeam" :datas="teams" :selected-key="selTeamCode" :labelKeyName="'TEAM_NAME'" 
                    :includeAll="includeAll">
                </d-select-box>
            </div>
        </v-card>  

    </div>
</template>

<script>

import DSelectBox from '../components/core/DSelectBox.vue';
import orgService from '../services/Org.js';
export default {
    
    components:{
        DSelectBox
    }
    ,data(){
        return{
            datas:[{code:'01',name:'Test01'},{code:'02',name:'Test02'},{code:'03',name:'Test03'}
            ]
            ,selected:'02'
            ,branchs:[]
            ,teams:[]
            ,includeAll:true
            ,selBranchCode:'ALL'
            ,selTeamCode:'ALL'
            //,eventId:'changedBranch'
        }   
    }
    ,mounted(){
        let vi = this;
        orgService.getBranchs("")
            .then(function(response){
                vi.branchs = response.data.result;
            }); 
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
        
            let findItem = this.$refs.cboDoori.getSelectedData();
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
            let vi = this;
            let branchId = this.$refs.cboBranch.getSelectedData().BRANCH_ID;
            console.log("SELECT BRANCH CODE : " + branchId)
            orgService.getTeams(branchId,"")
            .then(function(response){
                vi.teams = response.data.result;
            }); 
        }
    },
}
</script>

<style>

</style>

<template>
    
    <div>
        <d-tabs>
            <d-tab name="vue-datepicker" :selected="true" > 
                <h1>vue-datepicker</h1>
                <VueDatePicker :type="'time'" v-model="currentDate" :color="'#9f4fff'" format="HH:mm" />

            </d-tab>
            <d-tab name="Vue2 datepicker">
                <h1>Vue2 DateTimepicker</h1>
                <date-picker v-model="value9" lang="en" type="time" format="hh:mm" :minute-step="1" ></date-picker>
            </d-tab>
            <d-tab name="Tab3">
                <h1>Tab3 Contents</h1>
                {{getKeyValue(testObj,'testKey')}}
            </d-tab>
        </d-tabs>        
    </div>
</template>

<script>
import DTabs from "../components/core/DTabs.vue";
import DTab from "../components/core/DTab.vue";
import { VueDatePicker } from '@mathieustan/vue-datepicker';
import DatePicker from 'vue2-datepicker'

export default {
    data() {
        return {
            currentDate:'2019-08-16'
            ,testObj:null
            ,value9:null
            
        }
    },
    components:{
        DTabs,DTab,VueDatePicker,DatePicker
    },
    mounted(){
        this.testObj = {testKey:'kic'};
    }
    ,methods:{
        getKeyValue(data,key){
            if (data != null && data.hasOwnProperty(key)){
                return data[key]
            }else{
                return 'tess';
            }
        }
    }
}
</script>

<style>

</style>

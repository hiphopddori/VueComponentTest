<template>
    <div>
        <d-mdi-window-panel-container :mode="'V'">
            <d-mdi-window-panel v-for="chartData in chartDatas" :key="chartData.id">                            
                <basic-bar-chart :data="chartData" class="chart-container">
                </basic-bar-chart>                
            </d-mdi-window-panel>   
        </d-mdi-window-panel-container>
        <!--
        <v-container grid-list-md align-start="true" justify-start="true" ml-1>
            <v-layout row wrap>
                <v-flex xs3 v-for="chartData in chartDatas" :key="chartData.id">
                    <bar-chart-pannel :chart-data="chartData"/>
                </v-flex>
            </v-layout>
        </v-container>
        -->
    </div>
</template>

<script>

// import BarChartPannel from "../components/charts/BarChartPannel"
import BasicBarChart from "../components/charts/BasicBarChart"
import DMdiWindowPanelContainer from "../components/core/DMdiWindowPanelContainer"
import DMdiWindowPanel from "../components/core/DMdiWindowPanel"

const funcTest = function(testParam){
    console.log(testParam);
    console.log(this);
}

export default {
    components: {DMdiWindowPanelContainer,DMdiWindowPanel,BasicBarChart }
    ,mounted() {
        funcTest.bind(this)("TEST");
        
    }
    ,methods:{
        
    }
    ,data:function(){
        return{
            testDatas:[
                {title:'panel1'},{title:'panel2'}        
            ]
            ,mode:'V'
            ,chartDatas:[
            {
                id:'1' ,
                title:'읍/면/동',
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                        label: '지역별',
                        backgroundColor: '#f87979',
                        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                    }
                ]
            }
            ,{
                id:'2' ,
                title:'지역(읍/면/동)',
                labels: ['청천동', '산곡동', '석남동', '가좌동', '부평동', '태평동', '동동동', '송림동', '송현동', '가정동', '경서동', '가정동'],
                datasets: [
                    {
                        label: '지역별',
                        backgroundColor: '#f87979',
                        data: [20, 25, 72, 29, 80, 60, 29, 90, 42, 20, 12, 18]
                    }
                ]
            }
            ]        
        };
    }
}
</script>

<style>
  .chart-container{
        position:relative;
        height: 100%;
        width: 100%
    }
</style>

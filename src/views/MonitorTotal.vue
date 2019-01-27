<template>
    <v-container grid-list-md >
        <v-layout row wrap>
            <v-flex xs3 v-for="chartData in chartDatas" :key="chartData.id">
                <bar-chart-pannel :chart-data="chartData"/>
            </v-flex>
        </v-layout>
    </v-container>

</template>

<script>

import BarChartPannel from "../components/charts/BarChartPannel"
export default {
    components: { BarChartPannel }
    ,data:function(){
        return{
            chartDatas:[
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

<template>
    <!--
    <v-card>
        <v-toolbar color="blue" dark dense height="25">

            <v-toolbar-title> <span>{{chartData.title}}</span></v-toolbar-title>
            <v-spacer></v-spacer>
            
            <v-btn icon style="width:15px;">
                <v-icon>fa-window-restore</v-icon>
            </v-btn>
            
            <v-btn icon style="width:15px;">
                <v-icon>fa-window-maximize</v-icon>
            </v-btn>

        </v-toolbar>

        <basic-bar-chart :data="chartData">
        </basic-bar-chart>
    </v-card>
    -->

    <div class="box"  v-bind:class="{black: isBlack}" v-bind:style="{height: heightSize + 'vh', width: heightSize + 'vw'}">
        <button class="lower" v-on:click="lowerHeight"><i class="fa-window-minimize"></i></button>
        <button class="raise" v-on:click="raiseHeight"><i class="fa-window-maximize"></i></button>
        <basic-bar-chart :data="chartData">
        </basic-bar-chart>
    </div>
</template>


<script>
import BasicBarChart from './BasicBarChart'

export default {
     components: { BasicBarChart }
     ,props: {
            'chartData':Object
     },
     data(){
         
     }
     
}
</script>

<style>

</style>

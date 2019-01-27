<template>
    <v-card>
        <v-toolbar color="blue" dark dense height="25">

            <v-toolbar-title> <span>{{chartData.title}}</span></v-toolbar-title>
            <v-spacer></v-spacer>
            
            <v-btn icon>
                <v-icon>minimize</v-icon>
            </v-btn>
            
            <v-btn icon>
                <v-icon>maximize</v-icon>
            </v-btn>

        </v-toolbar>

        <basic-bar-chart :data="chartData">
        </basic-bar-chart>
    </v-card>
</template>

<style>

</style>


<script>
import BasicBarChart from './BasicBarChart'

export default {
     components: { BasicBarChart }
     ,props: {
            'chartData':Object
     }
}
</script>

<style>


</style>

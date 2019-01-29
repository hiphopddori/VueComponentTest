<template>
    <v-card>
        <grid  :rowData="data" :columnData="columns" />
    </v-card>
</template>

<script>

import 'tui-grid/dist/tui-grid.css';
import { Grid } from '@toast-ui/vue-grid'

export default {
    components: {
        'grid': Grid
    },
    data() {
        return {
            columns: [
                {
                    sortable: true,
                    title: 'Name',
                    name: 'name'
                },
                {
                    title: 'Artist',
                    name: 'artist',
                    formatter: function(value, rowData) {
                        let backgroudColor = "";
                        
                        if (rowData.score == "5"){
                            backgroudColor = "red";
                        }else{
                            backgroudColor = "green";    
                        }
                        return '<div style="width:100%;height:100%;background-color:'+backgroudColor+'">'+rowData.artist+'</div>';
                    }
                },
                {
                    title: 'Personal Score',
                    name: 'score',
                    onBeforeChange(ev) {
                        console.log('executes before the value changes : ', ev);
                    },
                    onAfterChange(ev) {
                        console.log('executes after the value has changed : ', ev);
                    },
                    copyOptions: {
                        useListItemText: true
                    },
                    editOptions: {
                        type: 'radio',
                        listItems: [
                            {
                                text: '★☆☆☆☆',
                                value: '1'
                            },
                            {
                                text: '★★☆☆☆',
                                value: '2'
                            },
                            {
                                text: '★★★☆☆',
                                value: '3'
                            },
                            {
                                text: '★★★★☆',
                                value: '4'
                            },
                            {
                                text: '★★★★★',
                                value: '5'
                            }
                        ],
                        useViewMode: true
                    }
                }
            ],
            data: [
                {
                    name: 'Kiss and Make Up',
                    artist: 'Dua Lipa',
                    score: '5'
                },
                {
                    name: 'Bohemian Rhapsody',
                    artist: 'Queen',
                    score: '2'
                },
                {
                    name: 'Done For Me',
                    artist: 'Charlie Puth',
                    score: '3'
                },
                {
                    name: 'thank u, next',
                    artist: 'Ariana Grande',
                    score: '4'
                },
                {
                    name: 'Handclap',
                    artist: 'Fitz & The Tantrums',
                    score: '1'
                },
                {
                    name: 'Shape Of You',
                    artist: 'Ed Sheeran',
                    score: '5'
                },
                {
                    name: 'Snowman',
                    artist: 'Sia',
                    score: '5'
                },
                {
                    name: 'Don\'t Stop Me Now ',
                    artist: 'Queen',
                    score: '3'
                },
                {
                    name: 'Havana',
                    artist: 'Camila Cabello',
                    score: '2'
                },
                {
                    name: 'A No No',
                    artist: 'Mariah Carey',
                    score: '5'
                }
            ],
            options: {
                rowHeaders: [
                    {
                        type: 'checkbox'
                    }
                ]
            }
        };
    }
}
</script>

<style>

</style>

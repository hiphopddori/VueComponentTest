<template>
    <div>
         <v-tabs
            v-model="active"
            color="cyan"
            dark
            slider-color="yellow"
        >
            <v-tab ripple>
                Tui Grid
            </v-tab>

            <v-tab-item>
                <v-card>
                    <v-btn color="info"  @click='gridControl("cell_color_change")'>cell color change</v-btn>
                    <v-btn color="info"  @click='gridControl("get_value")'>Get Value</v-btn>
                </v-card>
                <v-card>
                    <grid ref="tuiGrid" :rowData="data" :columnData="columns" />
                </v-card>
            </v-tab-item>  

            <v-tab ripple>
                Vuetify Data Grid
            </v-tab>
                
            <v-tab-item>
                <v-data-table
                    v-model="selected"
                    :headers="headers"
                    :items="desserts"
                    :hide-actions="false"
                    item-key="name"
                    select-all
                    class="elevation-1"
                    @update:pagination="updatePagination"
                    >
                    <template slot="items" slot-scope="props">
                        <td>
                        <v-checkbox
                            v-model="props.selected"
                            primary
                            hide-details
                        ></v-checkbox>
                        </td>
                        <td>{{ props.item.name }}</td>
                        <td class="text-xs-right" v-bind:class="classObject(props.item)" >{{ props.item.calories }}</td>
                        <td class="text-xs-right">{{ props.item.fat }}</td>
                        <td class="text-xs-right">{{ props.item.carbs }}</td>
                        <td class="text-xs-right">{{ props.item.protein }}</td>
                        <td class="text-xs-right">{{ props.item.iron }}</td>
                    </template>
                </v-data-table>
                
            </v-tab-item>  


         </v-tabs>

        
    </div>    
        
    

    
</template>

<script>
// tui grid method option
// http://nhnent.github.io/tui.grid/api/Grid.html

import 'tui-grid/dist/tui-grid.css';
import { Grid } from '@toast-ui/vue-grid'

export default {
    components: {
        'grid': Grid
    },
    computed: {
        
    },
    methods:{
        classObject : function(item) {
            
            let bRed = false;
            if (item.calories >= 250){
                bRed = true;
            } 
            return {    
                'backcolor-red':bRed
            }
        },
        updatePagination (pagination) {
            console.log('update:pagination', pagination)
        }
        ,gridControl(flag){
            //this.$refs.tuiGrid.getRootElement();
            //const info = this.$refs.tuiGrid.invoke('getFocusedCell');
            
            if (flag == "get_value" ){
                let row = this.$refs.tuiGrid.invoke('getValue','1','artist',true);
                alert(row);
            }else if (flag == "cell_color_change"){
                this.$refs.tuiGrid.invoke('addCellClassName', '1','artist','cell-red');
            }
        }
        ,calcCellColor(){

        }
    }
    ,data() {
        return {
            active: 0,
            columns: [
                {
                    sortable: true,
                    title: 'Name',
                    name: 'name'
                },
                {
                    title: 'Artist',
                    name: 'artist'
                    /*,formatter: function(value, rowData) {
                        let backgroudColor = "";
                        
                        if (rowData.score == "5"){
                            backgroudColor = "red";
                        }else{
                            backgroudColor = "green";    
                        }
                        return '<div style="width:100%;height:100%;background-color:'+backgroudColor+'">'+rowData.artist+'</div>';
                    }
                    */
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
            ,selected: []
            ,headers: [
                {
                text: 'Dessert (100g serving)',
                align: 'left',
                sortable: false,
                value: 'name'
                },
                { text: 'Calories', value: 'calories' },
                { text: 'Fat (g)', value: 'fat' },
                { text: 'Carbs (g)', value: 'carbs' },
                { text: 'Protein (g)', value: 'protein' },
                { text: 'Iron (%)', value: 'iron' }
            ],
            desserts: [
                {
                name: 'Frozen Yogurt',
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                iron: '1%'
                },
                {
                name: 'Ice cream sandwich',
                calories: 237,
                fat: 9.0,
                carbs: 37,
                protein: 4.3,
                iron: '1%'
                },
                {
                name: 'Eclair',
                calories: 262,
                fat: 16.0,
                carbs: 23,
                protein: 6.0,
                iron: '7%'
                },
                {
                name: 'Cupcake',
                calories: 305,
                fat: 3.7,
                carbs: 67,
                protein: 4.3,
                iron: '8%'
                },
                {
                name: 'Gingerbread',
                calories: 356,
                fat: 16.0,
                carbs: 49,
                protein: 3.9,
                iron: '16%'
                },
                {
                name: 'Jelly bean',
                calories: 375,
                fat: 0.0,
                carbs: 94,
                protein: 0.0,
                iron: '0%'
                },
                {
                name: 'Lollipop',
                calories: 392,
                fat: 0.2,
                carbs: 98,
                protein: 0,
                iron: '2%'
                },
                {
                name: 'Honeycomb',
                calories: 408,
                fat: 3.2,
                carbs: 87,
                protein: 6.5,
                iron: '45%'
                },
                {
                name: 'Donut',
                calories: 452,
                fat: 25.0,
                carbs: 51,
                protein: 4.9,
                iron: '22%'
                },
                {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: '6%'
                }
            ]

        };
    }
}
</script>
    
<style>
    .tui-grid-cell.cell-red {background-color: red}
    .backcolor-red {background-color: red}
</style>

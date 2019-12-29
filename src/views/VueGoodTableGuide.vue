<template>
    <div>
        <v-tabs
            v-model="active"
            color="cyan"
            dark
            slider-color="yellow"
            >

            <v-tab ripple>
                Vue Good Table
            </v-tab>

            <v-tab-item>
                <vue-good-table  v-if="rows && rows.length"
                    max-height="700px"
                    :fixed-header="true"        
                    :line-numbers="true"
                    :columns="columns"
                    :rows="rows"
                    :pagination-options="{
                        enabled: true,
                        mode: 'records',
                        perPage: 50,           
                        position: 'bottom',
                        perPageDropdown: [3, 7, 9],
                        dropdownAllowAll: false,
                        setCurrentPage: 2,
                        nextLabel: '다음',
                        prevLabel: '이전',
                        rowsPerPageLabel: '페이지별 행수',
                        ofLabel: 'of',
                        pageLabel: 'page', // for 'pages' mode
                        allLabel: 'All',
                    }">
                </vue-good-table>
            </v-tab-item>

            <v-tab ripple>
                Vue Table - 2 
            </v-tab>
            <v-tab-item>

            </v-tab-item>
        </v-tabs>
    </div>
</template>

<script>

import { VueGoodTable } from 'vue-good-table';
import commonData from '../data/commonData.js';
// import the styles 
import 'vue-good-table/dist/vue-good-table.css'


export default {
    data(){
        return{
            data:commonData
            ,rows:null
            ,columns:null
        }
    }
    ,mounted(){
        //this.data = commonData;
        this.columns = this.data.gridHeader;

        var tmpProw = this.data.gridData;
        for(let nIdx = 1; nIdx <=1000;nIdx++){
            tmpProw.push({id:nIdx+5,name:'임시'+nIdx,team:'ns',soju:1});
        }

        this.rows  = tmpProw;

    }
    ,components:{
        VueGoodTable
    }
}
</script>

<style>

</style>

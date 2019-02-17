<template>

    <div>
        <!--
        <v-layout row wrap>
            <v-flex xs12 sm1>
                    <v-text-field label="input index" type="number" v-model="selIndex"></v-text-field>
            </v-flex>
            <v-flex xs12 sm1 md4>
                    <v-btn color="info"  @click='getData()'>Get Data</v-btn>
            </v-flex>
        </v-layout>
        -->
        <v-card>
            <span class="black--text pl-1">
               input index :
            </span>
            <input type="number" placeholder="input index" style="width:60px"  v-model="selIndex"/>
            <v-btn color="info"  @click='getData()'>Get Data</v-btn>
        </v-card>
        <v-data-table
                v-model="selected"
                :headers="headers"
                :items="users"
                :hide-actions="false"
                item-key="name"
                class="elevation-1"
                >
                <template slot="items" slot-scope="props">
                    <td class="text-xs-center">{{ props.item.name }}</td>
                    <td class="text-xs-center">{{ props.item.age }}</td>            
                </template>
        </v-data-table>
    </div>
</template>

<script>

import {fb} from '../services/firebase.js'

export default {

    firebase:{
      users: fb.ref('users')
    },

    data(){
        return{
            selected: []
            ,headers: [
                {
                text: '이름',
                align: 'center',
                sortable: true,
                value: 'name'
                },
                { text: '나이',align: 'center', value: 'age' }
            ],
            selIndex:0
        }
    },
    methods:{
        getData(){
            alert(this.users[this.selIndex].name);
        }
    }
}
</script>

<style>

</style>

<template>

    <div>
        <v-card>
            <div>
            <v-text-field label="input index" type="number" v-model="selIndex"></v-text-field>
            <v-btn color="info"  @click='getData()'>Get Data</v-btn>
            </div>
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

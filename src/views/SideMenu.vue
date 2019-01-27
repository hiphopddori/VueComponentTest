<template>
    <v-navigation-drawer
      app
      dark
      floating
      persistent
      width="220"
    >
      
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>
  
            <v-list-tile-content>
              <v-list-tile-title>ddori</v-list-tile-title>
            </v-list-tile-content>
  
            <v-list-tile-action>
              <v-btn
                icon
                @click.stop="mini = !mini"
              >
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      
  
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" :to="item.path">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
  
          <v-list-tile-content>
             <v-list-tile-title v-text="item.title"/>
                 <!--
                 <router-link :to="item.path">{{item.title}}</router-link>
                 -->
             
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
//https://jsfiddle.net/oenbobop/
export default {
    methods:{
        goMenu:function(path){
                 
        }
    }
    ,data:function(){
        return{
            drawer: true,
            items: [
                { title: '종합감시', icon: 'dashboard' , path:'/monitor' },
                { title: 'Tui Data Grid', icon: 'question_answer', path:'/tuigrid'  },
                { title: 'Select Box', icon: 'question_answer', path:'/selectbox'  },
                { title: 'About', icon: 'question_answer', path:'/'  }
            ],
            mini: true,
            right: null
        }
    }
}
</script>

<style>

</style>

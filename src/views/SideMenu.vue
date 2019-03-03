<template>
    <v-navigation-drawer
      app
      dark
      floating
      persistent
      :mini-variant.sync="mini"
      width="220"
    >
      
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
               <v-icon>fa-user</v-icon>
               <!-- <img src="https://randomuser.me/api/portraits/men/85.jpg"> -->

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
                { title: '종합감시', icon: 'fa-desktop' , path:'/monitor' },
                { title: 'Data Grid', icon: 'fa-table', path:'/datagrid'  },
                { title: 'Select Box', icon: 'fa-caret-square-down', path:'/selectbox'  },
                { title: 'Tab', icon: 'question_answer', path:'/tab'  },
                { title: 'Firebase', icon: 'fa-database', path:'/firebase'  },
                { title: 'Modal', icon: 'fa-window-restore', path:'/modal'  },
                { title: 'Kakao Map', icon: 'fa-map-marker-alt', path:'/map'  },
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

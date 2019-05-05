<template>
  <v-app>
<!--     
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>SMILE Q</span>
        <span class="font-weight-light"> 종합 감시</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Vue version</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view>
      </router-view>  
    </v-content>

-->
    <side-menu></side-menu>    
    <toolbar></toolbar>
    <v-content>
      <div>
        <v-fade-transition mode="out-in">
          <keep-alive>
            <router-view/>
          </keep-alive>
        </v-fade-transition>
      </div>
    </v-content>

  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import SideMenu from './views/SideMenu'
import Toolbar from './views/Toolbar'

export default {
  name: 'App',
  components: {
    HelloWorld
    ,SideMenu
    ,Toolbar
  },
  data () {
    return {
      
    }
  }
}
</script>

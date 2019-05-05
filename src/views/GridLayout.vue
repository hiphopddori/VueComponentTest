<template>
 
    <grid-layout
            :layout.sync="layout"
            :col-num="12"
            :row-height="30"
            :is-draggable="true"
            :is-resizable="true"
            :is-mirrored="false"
            :vertical-compact="true"
            :margin="[10, 10]"
            :use-css-transforms="true"
            :responsive="false"
    >
        <v-card>
            <v-btn color="info"  v-on:click="addMenu('add')">add menu</v-btn>
            <v-btn color="info"  v-on:click="addMenu('maxmized')">최대화</v-btn>
        </v-card>

        <div v-show="item.visible" class="grid-item" v-for="item in layout">
            <grid-item class="grid-item" 
                    :x="item.x"
                    :y="item.y"
                    :w="item.w"
                    :h="item.h"
                    :i="item.i"
                    @moved="movedEvent"
                    >      
                
                <div class="window-button">
                    {{item.i}} 
                    <button class="lower" v-on:click="restored(item.i)"><v-icon>fa-window-restore</v-icon> </button>
                    <button class="raise" v-on:click="maxMized(item.i)"><v-icon>fa-window-maximize</v-icon></button>
                </div>

                <SelectBoxGuide>
                </SelectBoxGuide>
            </grid-item>
        </div>


    </grid-layout>

</template>

<script>

// https://github.com/jbaysolutions/vue-grid-layout

import VueGridLayout from 'vue-grid-layout';

export default {
    
    data(){
        return{
            allLayout:[
                {"x":0,"y":0,"w":4,"h":20,"i":0,visible:true,oW:0,oY:0,oW:0},
                {"x":4,"y":0,"w":4,"h":20,"i":1,visible:true,oX:0,oY:0,oW:0},
            ],
            layout:null
        }
    }
    ,mounted(){
        this.layout = this.allLayout;
    }
    ,methods: {
       addMenu(menuName){
            
            this.layout[0].visible = false;
            this.layout[1].x = 0;
            this.layout[1].y = 0;
            this.layout[1].w = 12;
            /* 
            this.$nextTick(() => {
                this.layout = [this.allLayout[1]];
            });
            */
       }
        ,maxMized(key){

            this.layout.forEach(element => {
                element.visible = false;
            });

            this.layout[key].visible = true;
            this.layout[key].oY = this.layout[key].y;
            this.layout[key].oX = this.layout[key].x;
            this.layout[key].oW = this.layout[key].w ;

            this.layout[key].x = 0;
            this.layout[key].y = 0;
            this.layout[key].w = 12;

        }
        ,restored(key){

            this.layout[key].x = this.layout[key].oX;
            this.layout[key].y = this.layout[key].oY;
            this.layout[key].w = this.layout[key].oW;

            this.layout.forEach(element => {
                element.visible = true;
            });


        }
       , movedEvent(i, newX, newY){
            console.log("MOVE i=" + i + ", X=" + newX + ", Y=" + newY);
            this.layout[i].x =0;
            this.layout[i].y =0;
        },
    }
    ,components: {
           GridLayout: VueGridLayout.GridLayout,
           GridItem: VueGridLayout.GridItem,
           SelectBoxGuide:()=>import('./SelectBoxGuide.vue'),
           TuiDataGrid:()=>import('./TuiDataGrid.vue')
    },
}
</script>

<style scoped>
    .grid-item{background:#999999}


i {
  color: yellow;
}
.window-button {
  text-align: right;
  /*  
  position: absolute;
  border: 1px solid #000;
  margin: 20px;
  transition: 0.3s;
  padding: 20px;
  padding-top: 40px;
  overflow: hidden;
  -webkit-box-shadow: 10px 10px 29px 3px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: 10px 10px 29px 3px rgba(0, 0, 0, 0.44);
  box-shadow: 10px 10px 29px 3px rgba(0, 0, 0, 0.44);
  */
}
 .lower,
 .raise {
    /*position: relative;*/
    top:10px;
    cursor: pointer;
    right: 10px;
    width: 30px;
    border: 1px solid #666;
    background-color: #f4f4f4;
    outline:none;
    margin: 3px;
  }
  .lower {
    right: 10px;
  }

.black {
  background-color: #000;
  color: #fff;
}


</style>

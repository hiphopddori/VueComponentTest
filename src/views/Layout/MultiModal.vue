<template>
    <!--
    <div class="mainView">
         
         <vue-draggable-resizable :w="item.w" :h="item.h" v-show="item.visible"  v-for="item in layout" :resizable="true">
             <div class="window-button">
                    {{item.i}} 
                    <button class="lower" v-on:click="restored(item.i)"><v-icon>fa-window-restore</v-icon> </button>
                    <button class="raise" v-on:click="maxMized(item.i)"><v-icon>fa-window-maximize</v-icon></button>
                </div>
                TEST

                <component :is=item.page></component>
                
         </vue-draggable-resizable>
    </div>
     -->   
          
     <div id="mainView">

        <div>
            <v-btn color="info" @click="addView">add View</v-btn>     
            <v-btn color="info" @click="maxmized('0')">maxmized</v-btn>        
            <v-btn color="info" @click="restored('0')">restored</v-btn>        
        </div> 

        <div id="container">
            <VueDragResize :isActive="true" :w="item.w" :h="item.h" v-show="item.visible"  v-for="item in layout" v-bind:key="item.id" 
                            v-on:resizing="resize" v-on:dragging="resize" @clicked="onActivated">
                <div class="window-button" style="z-index:999999">
                        <button class="lower" v-on:click="restored(item.id)"><v-icon>fa-window-restore</v-icon> </button>
                        <button class="raise" v-on:click="maxmized(item.id)"><v-icon>fa-window-maximize</v-icon></button>
                        
                </div>
                <component  :is=item.page></component>
            </VueDragResize>
        </div>
        
    </div>
</template>

<script>

// https://github.com/kirillmurashov/vue-drag-resize 
//import  VueDraggableResizable from 'vue-draggable-resizable'
import VueDragResize from 'vue-drag-resize';


export default {

    data(){
        return{
            layout:[
                {"page":"SelectBoxGuide",id:"0","x":0,"y":0,"w":800,"h":800,"visible":true,isActive:true ,"oX":0,"oY":0,"oW":0} /* ,
                {"page":"TuiDataGrid",id:"1","x":4,"y":0,"w":800,"h":800,"visible":true,"oX":0,"oY":0,"oW":0} */
            ]
        }
    },

    components:{
        // vueDraggableResizable: VueDraggableResizable,
        VueDragResize,
        SelectBoxGuide:()=>import('./../SelectBoxGuide.vue'),
        TuiDataGrid:()=>import('./../TuiDataGrid.vue')
    },

    methods: {
        addView(){
            this.layout.push({"page":"TuiDataGrid",id:"1","x":4,"y":0,"w":800,"h":800,"visible":true,isActive:false,"oX":0,"oY":0,"oW":0});
        }
        
        ,resize(newRect) {
                //this.width = newRect.width;
                //this.height = newRect.height;
                //this.top = newRect.top;
                //this.left = newRect.left;
        }
        ,onActivated(key){
            
            this.layout.forEach(element => {
                element.isActive = false;
            });
            this.layout[key].isActive = true;
        }
        ,
        layoutVisible(visible){
            this.layout.forEach(element => {
                element.visible = visible;
            });
        }
        ,maxmized(key){
            
            alert("maxmize");
            var containner = document.getElementsByClassName("v-content__wrap")[0];
            
            let containerW = containner.offsetWidth;
            let containerH = containner.offsetHeight;

            this.layoutVisible(false);

            this.layout[key].visible = true;
            this.layout[key].oY = this.layout[key].y;
            this.layout[key].oX = this.layout[key].x;
            this.layout[key].oW = this.layout[key].w ;

            this.layout[key].x = 0;
            this.layout[key].y = 0;
            this.layout[key].w = containerW;
            this.layout[key].h = containerH;

        }
        ,restored(key){

            this.layout[key].x = this.layout[key].oX;
            this.layout[key].y = this.layout[key].oY;
            this.layout[key].w = this.layout[key].oW;
            this.layoutVisible(true);
        }
    }  
}
</script>

<style scoped>

#mainView{
    position: relative;
}
#container{
    position: relative;
    background-color:aqua
}

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
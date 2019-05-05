<template>
     <div class="box" v-bind:style="{top:top+'vh',left:left+'vw',height:heightSize+'vh',width:widthSize+'vw',display:display}">
        <button class="lower" v-show="isRestore" v-on:click="restored"><v-icon>fa-window-restore</v-icon> </button>
        <button class="raise" v-show="isMaximize" v-on:click="maximized"><v-icon>fa-window-maximize</v-icon></button>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'DMdiWindowPanel'
    
    ,data(){
         return{
            title:''
            ,heightSize: 0
            ,widthSize:0
            ,top:0
            ,left:0
            ,display:''
            ,isRestore:false
            ,isMaximize:true
         }
     }
     ,mounted(){
          //this.$children[2].height = this.heightSize + 'vh';
     }
     ,methods: {
        restored(){
            //test
            this.$slots.default.forEach(vNode => {
                // alert(vNode.componentInstance.$data);
            });
            this.$parent.sort();
        },
        maximized(){
            this.$parent.allHidden();
            this.heightSize =80;
            this.left = 0;
            this.widthSize = 80
            this.isMaximize = false;
            this.isRestore = true;
            this.display = '';
            
            //this.$children[2].height = '80vh';
        },
        reDraw(){
             
        }
    }
    
}
</script>

<style>

i {
  color: yellow;
}
.box {
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
}
 .box .lower,
 .box .raise {
    position: absolute;
    top:10px;
    cursor: pointer;
    right: 10px;
    width: 30px;
    border: 1px solid #666;
    background-color: #f4f4f4;
    outline:none;
  }
  .box .lower {
    right: 10px;
  }

.black {
  background-color: #000;
  color: #fff;
}

</style>

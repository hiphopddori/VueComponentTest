<template>
     <div class="box" v-bind:style="{height: heightSize + 'vh', width:'91vw',display:display}">
        <button class="lower" v-on:click="lowerHeight"><v-icon>fa-window-minimize</v-icon> </button>
        <button class="raise" v-on:click="raiseHeight"><v-icon>fa-window-maximize</v-icon></button>
        <slot></slot>
    </div>

</template>

<script>
export default {
    name:'DMdiWindowPanel'
    
    ,data(){
         return{
            heightSize: 0
            ,display:''
         }
     }
     ,mounted(){
          //this.$children[2].height = this.heightSize + 'vh';
     }
     ,methods: {
        lowerHeight(){
            this.$parent.sort();
            //this.$children[2].height = this.heightSize + 'vh';
        },
        raiseHeight(){
            this.$parent.allHidden();
            this.display = '';
            this.heightSize =80;
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
  position: relative;
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
    right: 40px;
  }
  .box .light {
    position:absolute;
    top:10px;
    left:20px;
    padding: 3px 8px;
    background:none;
    border: none;
    outline: none;
    transition: 0.3s;
    cursor: pointer;
  }


.black {
  background-color: #000;
  color: #fff;
}

</style>

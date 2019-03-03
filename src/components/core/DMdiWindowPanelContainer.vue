<template>
    <div class="mdiPanels">
        <slot></slot>
    </div>
</template>

<script>
import DMdiWindowPanel from "./DMdiWindowPanel.vue";
export default {
    props:{
        mode:{
            type:String,
            default:'H'
        }
        ,topGap:{
            type:Number,
            default:1
        }
        ,leftGap:{
            type:Number,
            default:1
        }
        ,colCount:{
            type:Number,
            default:3
        }
    }
    ,data(){
        return{
            panels:[]
            ,height:0
            ,width:0
        };
    }
    ,created(){
        
    }
    ,components:{
        DMdiWindowPanel
    }
    ,mounted(){
        this.panels=this.$children;
        //this.panels=this.$slots.default;

        if (this.mode == "V"){
            this.width = parseInt(95 / this.panels.length) -8; 
            this.height = 80;
        }else if(this.mode == "H"){
            this.width = 80;
            this.height = parseInt(95 / this.panels.length) -8; 
        }else if(this.mode == "VH"){
            
        }
        
        this.sort();
    }
    ,methods:{
        allHidden(){
            this.panels.forEach(panel => {
                //panel.$data.heightSize = 0 ;
                panel.$data.display = 'none';
            });
        }
        ,sort(){
            
            let top = 0;
            let left = 0;
            let vi = this;

            this.panels.forEach(panel => {
                panel.$data.heightSize = this.height;
                panel.$data.widthSize = this.width;
                panel.$data.isMaximize = true;
                panel.$data.display = '';

                if (vi.mode == "V"){
                   panel.$data.left = left;
                   panel.$data.top = top;
                   left+=vi.width+1;
                }else if(vi.mode == "H"){
                   panel.$data.left = left;
                   panel.$data.top = top;
                   top+=vi.height+1;
                }else if(vi.mode == "VH"){

                }


            });
        }
    }
}
</script>

<style>
    .mdiPanels{width:100%;height:100%;position:relative}
</style>

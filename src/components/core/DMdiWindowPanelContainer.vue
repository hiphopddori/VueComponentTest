<template>
    <div class="mdiPanels">
        <slot></slot>
    </div>
</template>

<script>
import DMdiWindowPanel from "./DMdiWindowPanel.vue";
export default {
    data(){
        return{
            panels:[]
            ,height:40
        };
    }
    ,created(){
        
    }
    ,components:{
        DMdiWindowPanel
    }
    ,mounted(){
        this.panels=this.$children;
        this.height = parseInt(95 / this.panels.length) -8; 
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
            this.panels.forEach(panel => {
                panel.$data.heightSize = this.height;
                panel.$data.display = '';
            });
        }
    }
}
</script>

<style>
    .mdiPanels{width:100%;height:100%;position:relative}
</style>

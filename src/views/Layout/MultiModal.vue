<template>
    
        <div>
        <v-btn color="info"  >custom modal</v-btn>
        <v-btn color="info"  >changeMsg</v-btn>
        <modal name="example1"
                :width="300"
                :height="300"
                :draggable="true"
                :clickToClose="false"        
                >
            <b>테스트1</b>
        </modal>
        
         <modal name="example2"
                :width="300"
                :height="300"
                :draggable="true"        
                :clickToClose="false"        
                :overlayTransition="none"
                >
            <b>테스트2</b>
        </modal>
 
    </div>

</template>

<script>
// https://www.npmjs.com/package/vue-draggable-resizable
// https://github.com/mauricius/vue-draggable-resizable
export default {
    mounted(){
        this.$modal.show('example1');
        this.$modal.show('example2');
    }
}
</script>

<style>
    .v--modal-overlay {
        position: fixed !important;
        box-sizing: border-box;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.2);
        z-index: 999;
        opacity: 1;
    }
</style>

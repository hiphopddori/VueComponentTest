<template>
    <div>
        <v-btn color="info"  v-on:click="popModal">custom modal</v-btn>
        <modals-container />

    </div>
</template>


<script>
import popupModal1 from './popup/popupModal1.vue';

export default {
    data(){
        return{

        }
    }
    ,methods:{
        popModal(){
            this.$modal.show(popupModal1,{
                    msg : '다이얼로그 메세지',
                    dialogTitle:'커스텀 다이얼로그',
                    modal : this.$modal,
                    userEvent :this.userEvent
                    },
                    {
                        name: 'dynamic-modal',
                        width : '330px',
                        height : '185px',
                        draggable: true,
                        clickToClose:false,
            })
        }
        ,userEvent(){
            alert('userEvent');
        }
    }
    ,mounted(){
        
    }
}
</script>

<style>

</style>

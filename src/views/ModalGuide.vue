<template>
    <div>
        <v-btn color="info"  v-on:click="popModal">custom modal</v-btn>
        <v-btn color="info"  v-on:click="changeMsg">changeMsg</v-btn>
        <div>
            <div>1
                <div>
                    
                </div>  
            </div>
            <div>2</div>
            <div>3</div>
            
        </div>
        

    </div>
</template>


<script>
//import popupModal1 from './popup/popupModal1.vue';
const popupModal1 = () => import('./popup/popupModal1.vue');
export default {
    data(){
        return{
            dialogMsg:'다이얼로그 메세지'
        }
    }
    ,methods:{
        popModal(){
            this.$modal.show(popupModal1,{
                    msg : this.dialogMsg,
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
        ,changeMsg(){
            //this.dialogMsg = "변경 다이얼로그 메세지";
            const baseURI = '/test';
            this.$http.get(baseURI)
            .then((result) => {
                console.log(result)
                this.posts = result.data
            })
        }
    }
    ,mounted(){
        
    }
}
</script>

<style>
.flex-container {
  display: flex;
  flex-direction:column;
  flex-wrap: nowrap;
  background-color: DodgerBlue;
}
.flex-container > div {
  background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}

</style>

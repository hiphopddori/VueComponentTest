<template>
    <v-card>
    
        <v-card-title
          class="headline grey lighten-2"
        >
            {{dialogTitle}}
        </v-card-title>

        <v-card-text>
            <div>{{msg}}</div>
            <div>{{staticTest}}</div>
        </v-card-text>

        <v-card class="text-md-center mb-2"> 
            <v-btn color="success" @click="modalCall" >모달의 모달 호출</v-btn>
            <v-btn color="info" @click="$emit('close')" >닫 기</v-btn>    
        </v-card>

    </v-card>
</template>

<script>
const popupModal2 = () => import('./popupModal2');
export default {
    data:function(){
        return {
            count:0,
        }
  },props : [
      'msg',
      'dialogTitle',
      'userEvent',
  ],computed:{
      staticTest(){
          return "누적 count = " + this.count.toString();
      }
  }
  ,methods : {
      apply(){     
          //this.$emit('test');
          if (this.userEvent){
              this.userEvent();
          }
      },
      modalCall(){
          this.$modal.show(popupModal2,{
                    msg : this.dialogMsg,
                    dialogTitle:'모달의 모달',
                    modal : this.$modal,
                    },
                    {
                        name: 'dynamic-modal',
                        width : '550px',
                        height : '405px',
                        draggable: true,
                        clickToClose:false,
                    })
      }
  },mounted(){
      this.count++;
  }
}
</script>

<style>

</style>

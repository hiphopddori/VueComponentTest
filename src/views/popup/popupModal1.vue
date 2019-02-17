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
            <v-btn color="success" @click="apply" >부모 메소드 호출</v-btn>
            <v-btn color="info" @click="$emit('close')" >닫 기</v-btn>    
        </v-card>

    </v-card>
</template>

<script>
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
      }
  },mounted(){
      this.count++;
  }
}
</script>

<style>

</style>

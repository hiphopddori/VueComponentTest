<template>
    
    <div>
        <d-tabs>
            <d-tab name="vue siwper"> 
                <swiper :options="swiperOption" @touchStart="touchStart" @touchEnd="touchEnd">
                    <swiper-slide>Slide 1</swiper-slide>
                    <swiper-slide>Slide 2</swiper-slide>
                    <swiper-slide>Slide 3</swiper-slide>
                    <swiper-slide>Slide 4</swiper-slide>
                    <swiper-slide>Slide 5</swiper-slide>
                    <swiper-slide>Slide 6</swiper-slide>
                    <swiper-slide>Slide 7</swiper-slide>
                    <swiper-slide>Slide 8</swiper-slide>
                    <swiper-slide>Slide 9</swiper-slide>
                    <swiper-slide>Slide 10</swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>        
            </d-tab>
            <d-tab name="vue-datepicker" :selected="true" > 
                <h1>vue-datepicker</h1>
                <VueDatePicker :type="'time'" v-model="currentDate" :color="'#9f4fff'" format="HH:mm" />

            </d-tab>
            <d-tab name="Vue2 datepicker">
                <h1>Vue2 DateTimepicker</h1>
                <date-picker v-model="value9" lang="en" type="time" format="hh:mm" :minute-step="1" ></date-picker>
            </d-tab>
            <d-tab name="Tab3">
                <h1>Tab3 Contents</h1>
                {{getKeyValue(testObj,'testKey')}}
            </d-tab>
        </d-tabs>        
    </div>
</template>

<script>
import DTabs from "../components/core/DTabs.vue";
import DTab from "../components/core/DTab.vue";
import { VueDatePicker } from '@mathieustan/vue-datepicker';
import DatePicker from 'vue2-datepicker'

export default {
    data() {
        return {
            currentDate:'2019-08-16'
            ,testObj:null
            ,value9:null
            ,swiperOption: {
                slidesPerView: 'auto',
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },on: {
                    init() {
                        console.log('swiper initialized');
                    }/*,
                    touchStart(){
                        console.log("TEST1");
                    }
                    */
                },
            }
            
        }
    },
    components:{
        DTabs,DTab,VueDatePicker,DatePicker
    },
    mounted(){
        this.testObj = {testKey:'kic'};
    }
    ,methods:{
        getKeyValue(data,key){
            if (data != null && data.hasOwnProperty(key)){
                return data[key]
            }else{
                return 'tess';
            }
        },
        touchStart(){
            console.log("Touch Start");
        },
        touchEnd(){
            console.log("Touch End");
        }

    }
}
</script>

<style scoped>
  .swiper-slide {
    width: 80%;
  }
  .swiper-slide:nth-child(2n) {
    width: 60%;
  }
  .swiper-slide:nth-child(3n) {
    width: 40%;
  }
</style>

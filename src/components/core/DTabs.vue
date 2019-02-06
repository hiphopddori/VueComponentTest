<template>
    <div>
        <div class="tabs">
            <ul>
                <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive}" v-bind:key="tab.name"> 
                    <a :href="tab.href" @click="selectTab(tab)">{{tab.name}}</a>  
                </li>
            </ul>
        </div>  
        <div class="tabs-details">
            <slot></slot>
        </div>

    </div>    
</template>

<script>
import Dtab from "./DTab.vue";
export default {
    name:'DTabs'
    ,data(){
        return{
            tabs:[]
        };
    }
    ,created(){
        this.tabs=this.$children;
    }
    ,components:{
        Dtab
    }
    ,methods:{
        selectTab(selectedTab){
            this.tabs.forEach(tab =>{
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
}
</script>

<style>
.tabs ul {
    list-style:none;
    margin:0;
    padding:0;
}


.tabs ul{padding-top:10px;}                     /*  상단 여백 10px  */
.tabs ul li {
    display:inline;                         /*  세로나열을 가로나열로 변경 */
    border-left:1px solid #999;             /* 각 메뉴의 왼쪽에 "|" 표시(분류 표시) */
    font:bold 12px Dotum;                     /* 폰트 설정 - 12px의 돋움체 굵은 글씨로 표시 */
    padding:0 10px;                         /* 각 메뉴 간격 */
}


</style>

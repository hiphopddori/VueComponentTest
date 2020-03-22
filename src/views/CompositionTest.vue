<template>
  <div ref="root"> 
      <h3>{{title}}</h3>
      <div> count : {{count }} , double : {{double}} , object : {{ object.foo }}</div>
      <button @click="increment">증가</button>
  </div>
  
</template>

<script>

import { reactive ,ref,computed,onMounted,onUpdated,onUnmounted} from "@vue/composition-api";
const increase = ()=> {
    
    const count = ref(5)
    const double = computed(() => count.value * 2)
    
    const increment = () => {
      count.value++;
    }
    return {count,double,increment}; 
}

const axiosPromiseTest = ($http) =>{

    const getApi1=()=>{
        return $http.get('https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt');
    }
    const getApi2=()=>{
         return new Promise((resolve,reject) =>{
              setTimeout(() => {
                  resolve({data:{story:{name:'ddori'}}})
              }, 3000);
         });  
    }
    const getApi3=()=>{
        /*
        return $http.get('https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt').then((response)=>{
             return response;
        })
        */
       setTimeout(() => {
            return {data:{story:{name:'ddori3'}}}
        }, 3000);
    }
    const getApi4=()=>{
        return $http.get('https://api.storyblok.com/v1/cdn/datasources/?token=wANpEQEsMYGOwLxwXQ76Ggtt').then((response)=>{
             return response;
        })
    }
    
    const promiseTest=()=>{
         getApi1().then(response=>{
              console.log(`API1 : ${response.data.story.name}`);
              return getApi2();
         }).then(response=>{
              console.log(`API2 : ${response.data.story.name}`);
              return getApi3();
         }).then(response=>{
              console.log(`API3 : ${response.data.story.name}`);
              return getApi4();
         }).then(response=>{
              console.log(`API4 : ${response.data.datasources[0].id}`);
         })
    }

    const asyncAwaitTest= async ()=>{
        let response = [];
        response[0] = await getApi1();
        console.log(`API1 : ${response[0].data.story.name}`);
        response[1] = await getApi2();
        console.log(`API2 : ${response[1].data.story.name}`);
        response[2] = await getApi3();
        console.log(`API3 : ${response[2].data.story.name}`);
        response[3] = await getApi4();

        console.log(`API4 : ${response[3].data.datasources[0].id}`);
    }

    return{
        promiseTest,
        asyncAwaitTest
    }
}

export default {
  
  data(){
    return {
        title:'Composition API Test'
    }
  },
  onRenderTriggered(e) {
    debugger
    // inspect which dependency is causing the component to re-render
  }
  ,setup(props,context) {
    
    const root = ref(null);
    const {count,double,increment} = increase()
    const object = reactive({ foo: 'bar' })
    const {promiseTest,asyncAwaitTest} = axiosPromiseTest(context.root.$http)


    onMounted(() => {
      console.log('mounted!');

      // the DOM element will be assigned to the ref after initial render
      console.log(root.value); // <div/>

      increment();
      count.value++;
      object.foo = 'bar2';

      // axiosPromiseTest(context.root.$http).promiseTest();  //namespace add
      promiseTest()
      //asyncAwaitTest();

    })

    onUpdated(() => {
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!')
    })

    return {
      count,
      double,
      increment,
      object,
      root,
    }
  }
}
</script>
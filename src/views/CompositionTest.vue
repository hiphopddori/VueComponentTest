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
  ,setup() {
    
    const root = ref(null);
    const {count,double,increment} = increase()
    const object = reactive({ foo: 'bar' })


    onMounted(() => {
      console.log('mounted!');

      // the DOM element will be assigned to the ref after initial render
      console.log(root.value); // <div/>

      increment();
      count.value++;
      object.foo = 'bar2';
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
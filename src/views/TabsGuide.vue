<template>
    
    <div>
        <d-tabs>
            <d-tab name="Tab1" :selected="true" > 
                <h1>Tab1 Contents</h1>
            </d-tab>
            <d-tab name="Tab2">
                <h1>Tab2 Contents</h1>
            </d-tab>
            <d-tab name="Tab3">
                <h1>Tab3 Contents</h1>
            </d-tab>
        </d-tabs>        
    </div>
</template>

<script>
import DTabs from "../components/core/DTabs.vue";
import DTab from "../components/core/DTab.vue";

export default {

    components:{
        DTabs,DTab
    }
}
</script>

<style>

</style>

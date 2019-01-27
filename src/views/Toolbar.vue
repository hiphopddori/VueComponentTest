<template>
    <v-toolbar
        fixed
        flat
        app
        style="background: #eee;"
    >
      <div class="v-toolbar-title">
      <v-toolbar-title
        class="tertiary--text font-weight-light"
      >
        <v-btn
          v-if="responsive"
          class="default v-btn--simple"
          dark
          icon
        >
          <v-icon>mdi-view-list</v-icon>
        </v-btn>
        {{ title }}
      </v-toolbar-title>
    </div>
    </v-toolbar>
</template>

<script>
export default {
    data:()=>(
        {
            title:'smileQ'
            ,responsive: false,
        }
    ),
    watch: {
        '$route' (val) {
            this.title = val.name
        }
    }
}
</script>

<style>

</style>


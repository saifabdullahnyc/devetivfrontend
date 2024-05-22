<template>
    <!--  <div>
          <h4>DEVETIV</h4><i class="pi pi-spin pi-spinner" style="font-size: 1rem; color: crimson; transform: translateZ(0);
    " />
      </div> -->

    <router-view />
</template>

<script setup>
    //import HelloWorld from './components/HelloWorld.vue'
    import {RouterView, RouterLink} from 'vue-router'
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

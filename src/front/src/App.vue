<template>
  <CreateTrip />
  <Suspense>
    <TripTable />
  </Suspense>
</template>

<script>
import TripTable from './components/TripTable.vue'
import CreateTrip from './components/CreateTrip.vue'

export default {
  name: 'App',
  components: {
    TripTable,
    CreateTrip
  },
  data(){
    return{
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

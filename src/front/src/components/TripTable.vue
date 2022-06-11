<template>
  <div class="hello">
    <table>
      <tr v-for="data in tripData" :key="data.id"> 
        <td>{{data.trip_date}}</td>  
        <td>{{data.typTrip.type}}</td>
      </tr>  
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TripTable',
  data(){
    return{
      tripData: []
    }
  },
  async created(){
    const response = await axios.get('http://127.0.0.1:3306/trip',{
      headers: {
        "Access-Control-Allow-Origin": "http://127.0.0.1:3306",
        'Content-Type': 'application/json'
      }
    })

    this.tripData = response.data
    console.log(this.tripData)

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

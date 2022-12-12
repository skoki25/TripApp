<template>
  <div class="hello">
    <table class="table">
      <tr v-for="data in tripData" v-html='userParse(data)' :key="data.id"> 
      </tr>  
    </table>
  </div>
  <b-table></b-table>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TripTable',
  data(){
    return{
      tripData: [],
    }
  },
  methods:{
    userParse(data){
      var html = "<td>" + formatDate(data.trip_date) + "</td>"
      html += "<td>" + data.typTrip.type + "</td>"
      var users = data.users
      var totalTraveler = 0
      for(var i=1; i <= 3;i++){
        var user = users.filter(e => e.id === i)
        if (user.length > 0) {
          html += '<td>' +user[0].number_of_person+'</td>'
          totalTraveler += user[0].number_of_person
        }
        else {
          html +='<td>0</td>'
        }
      }
      html += "<td>" + data.tripPrice.gus_price * data.tripPrice.avarage_gus_on_km + "</td>"
      html += "<td>"+totalTraveler+"</td>"
      return html
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
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat('sk-SK', options).format(date);          
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

table,td,tr {
  border:1px solid
}

.tripDate {
  text-align:left;
}
</style>

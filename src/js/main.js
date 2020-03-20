
var app = new Vue({
  el: "#app",
  data: {
    message: 'Hello Vue.js',
    bpi: null,
    hasError: false,
    loading: true
  },
  methods: {
    clickHandler: function (event){
      this.message = this.message.split('').reverse().join('');
    }
  },
  mounted: function(){
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(function(response){
      console.log(response.data.bpi);
      this.bpi = response.data.bpi
    }.bind(this))
    .catch(function(error){
      console.log(error)
      this.hasError = true
    }.bind(this))
    .finally(function(){
      this.loading = false
    }.bind(this))
  },
  filters: {
    currencyDecimal (value) {
      return value.toFixed(2)
    }
  }
})
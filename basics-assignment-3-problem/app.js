const app = Vue.createApp({
  data() {
    return {
      result: 0
    }
  },
  computed: {
    resultOutput() {
      if (this.result < 37) return "Not there yet"
      else if (this.result === 37) return this.result
      return "Too much!"
    }
  },
  watch: {  
    // reset result after 5 seconds
    result() {
      console.log(this.result)
      setTimeout(() => { 
        this.result = 0;
      }, 5000);
    }
  },
  methods: {  
    add(num) {
      this.result += num
    }
  }
})

app.mount('#assignment')
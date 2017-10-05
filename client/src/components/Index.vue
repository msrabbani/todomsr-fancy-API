<template lang="html">
  <div>
    <headers/>
    <todo :dataTodos='dataTodos'/>
  </div>
</template>

<script>
import headers from './Header'
import todo from './Todoform'
import axios from 'axios'
export default {
  data () {
    return {
      dataTodos: []
    }
  },
  components: {
    headers,
    todo
  },
  methods: {
    getTodo () {
      axios.get('http://localhost:3003/todo/', {
        headers: {
          token: localStorage.getItem('token') // untuk mendapatkan authorisasi ketika getData users
        }
      })
      .then(dataTodo => {
        console.log('===', dataTodo.data)
        this.dataTodos = dataTodo.data
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    var token = localStorage.getItem('token')
    console.log('token nya nih ', token)
    if (!token || token === undefined) {
      this.$router.push('/')
    }
    this.getTodo()
  }
}
</script>

<style lang="css">
</style>

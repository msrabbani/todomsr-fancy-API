<template lang="html">
  <div>
    <headers/>
    <todos :dataTodos='dataTodos'/>
    <!-- <footers></footers> -->
  </div>
</template>

<script>
import headers from './Header'
import todos from './Todoform'
import footers from './Footer'
import axios from 'axios'
export default {
  data () {
    return {
      dataTodos: []
    }
  },
  components: {
    headers,
    todos,
    footers
  },
  methods: {
    getTodo () {
      axios.get('http://35.198.197.115/todo/', {
        headers: {
          token: localStorage.getItem('token') // untuk mendapatkan authorisasi ketika getData users
        }
      })
      .then(dataTodo => {
        // console.log('===', dataTodo.data)
        this.dataTodos = dataTodo.data
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    if (localStorage.token) {
      if (localStorage.token === 'undefined') {
        this.$router.push('/')
      } else {
        this.$router.push('/index')
      }
    } else {
      this.$router.push('/')
    }
    // var token = localStorage.getItem('token')
    // if (!token) {
    //   this.$router.push('/')
    // } else {
    //   this.$router.push('/index')
    // }
    this.getTodo()
  }
}
</script>

<style lang="css">
</style>

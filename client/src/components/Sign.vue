<template lang="html">
  <div class="">
  <div class="login-wrapper columns">
    <div class="column is-8 is-hidden-mobile hero-banner">
      <section class="hero is-fullheight is-dark">
        <div class="hero-body">
          <div class="container section">
            <div class="has-text-right">
              <h1 class="title is-1">Signin</h1> <br>
              <p class="title is-3">Secure User Account Signin</p>
            </div>
          </div>
        </div>
        <div class="hero-footer">
          <p class="has-text-centered">=msrabbani=</p>
        </div>
      </section>
    </div>
    <div class="column is-4">
      <section class="hero is-fullheight">
        <div class="hero-heading">
          <div class="section has-text-centered">
            <!-- <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" width="150px"> -->
          </div>
        </div>
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-8 is-offset-2">
                <h1 class="avatar has-text-centered section">
                  <img src="https://placehold.it/128x128">
                </h1>
                <div class="formSignIn">
                  <p class="control has-icon has-icon-right">
                    <input class="input email-input" type="text" v-model="formSignIn.username" placeholder="username">
                    <span class="icon user">
                      <i class="fa fa-user"></i>
                    </span>
                  </p>
                  <p class="control has-icon has-icon-right">
                    <input class="input password-input" type="password" v-model="formSignIn.password" placeholder="●●●●●●●">
                    <span class="icon user">
                      <i class="fa fa-lock"></i>
                    </span>
                  </p>
                  <p class="control login">
                    <button class="button is-success is-outlined is-large is-fullwidth" @click="signin()">Signin</button>
                  </p>
                </div>
                <div class="section forgot-password">
                  <p class="has-text-centered">
                    <a href="#">Forgot password</a>
                    <a href="#">Need help?</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>

</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      formSignIn: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signin () {
      axios.post('http://localhost:3003/signin', {
        username: this.formSignIn.username,
        password: this.formSignIn.password
      })
      .then(response => {
        localStorage.setItem('token', response.data.auth)
        this.$router.push('/index')
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    // console.log(localStorage.token)
    if (localStorage.token) {
      if (localStorage.token === 'undefined') {
        this.$router.push('/')
      } else {
        this.$router.push('/index')
      }
    } else {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
html,body {
  height: 100%;
  padding: 0;
  margin: 0;
}

.email-input,
.password-input {
  border-radius: 40px;
  font-size: 20px;
  padding-left: 15px;
  color: #95A5A6;
}

.icon.user,
.icon.password {
  margin: 5px 10px 0 0;
}

.avatar img {
  border-radius: 100px;
  padding: 5px;
  border: 1px solid #dbdbdb;
}

.forgot-password a {
  color: #95A5A6;
  font-weight: bold;
  padding-right: 20px;
}

.login {
  padding-top: 20px;
}

.login button {
  border-radius: 40px;
  font-weight: bold;
}

.hero-body .container {
  margin-top: -100px;
}

.hero.is-dark .section {
  background-color: transparent;
}

.login-wrapper {
  margin: -0.75rem;
  overflow-y: hidden;
}

.hero-banner .hero {
  background: url('https://unsplash.it/2000/1000');
  background-position: center;
  background-size: cover;
  background-blend-mode: screen;
}

.hero-banner .title {
  display: inline-block;
  background-color: rgba(0,0,0, 0.6);
  padding: 5px;
}
</style>

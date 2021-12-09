<template>
  <div>
    <div id="google-signin-btn"></div>
    <button v-show="user.Ue" @click="signOut">구글 로그아웃</button>
    <p>{{ user }}</p>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  date() {
    return {}
  },
  mounted() {
    window.gapi.signin2.render('google-signin-btn', {
      onsuccess: this.onSignIn
    })
  },
  methods: {
    onSignIn(googleUser) {
      const profile = googleUser.getBasicProfile()
      console.log('ID: ' + profile.getId())
      console.log('Full Name: ' + profile.getName())
      console.log('Given Name: ' + profile.getGivenName())
      console.log('Family Name:' + profile.getFamilyName())
      console.log('Image URL: ' + profile.getImageUrl())
      console.log('Email:' + profile.getEmail())

      console.log(profile)
      this.$store.commit('user', profile)
      console.log(this.user)

      const idToken = googleUser.getAuthResponse().id_token
      console.log('ID Token', idToken)
    },

    signOut() {
      window.gapi.auth2.getAuthInstance().disconnect()
      this.$store.commit('user', {})
      this.$router.push({ path: '/googlelogin' })
    }
  },
  name: '',
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  unmounted() {}
}
</script>

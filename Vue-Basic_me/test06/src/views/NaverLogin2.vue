<template>
  <div>
    <div v-show="!user.email" id="naverIdLogin"></div>
    <button v-show="user.email" @click="logout">로그아웃</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "",
  components: {},
  data() {
    return {
      naverLogin: null,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  setup() {},
  created() {},
  mounted() {
    this.naverLogin = new window.naver.LoginWithNaverId({
      clientId: "K828PfBa1EClyvCQBbTW", //개발자센터에 등록된 ClientID
      callbackUrl: "http://localhost:8080/naverlogin2", //개발자센터에 등록한 callback url
      isPopup: false,
      loginButton: { color: "green", type: 3, height: 60 },
    });
    this.naverLogin.init();

        //함수 선언식 function을 안쓰는 이유는 function 안에 this는 scope가 바뀌지 않아서(다른 component를 쓸 수 없음) function안에로 제한되서 Arrow Funciton을 쓴다.
    this.naverLogin.getLoginStatus((status) => {
      if (status) {
        console.log(status);
        console.log(this.naverLogin.user);
        this.$store.commit("user", this.naverLogin.user);
      }
    });
  },
  unmounted() {},
  methods: {
    logout() {
      const accessToken = this.naverLogin.accessToken.accessToken;
       const url ="/oauth2.0/token?grant_type=delete&client_id=K828PfBa1EClyvCQBbTW&client_secret=aHHZZKUFkQ&access_token="+ accessToken +"&service_provider=NAVER";

      axios.get(url).then((res) => {
        console.log(res);
        this.$store.commit("user", {});
        this.$router.push({ path: "/naverlogin2" });
      });
    },
  },
};
</script>
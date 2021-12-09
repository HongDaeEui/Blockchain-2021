<template>
    <div>{{ user.email?"로그인 성공!": "로그인 후 사용하세요"}}
        <a v-show="!user.email" id="custom-login-btn" @click="kakaoLogin">
            <img
                src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
                width="222"/>
        </a>
        <button v-show="user.email" @click="kakaoLogout">카카오로그아웃</button>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            sampleData: ""
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        }
            
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        kakaoLogin(){
            Kakao.Auth.login({
            scope: "profile_nickname, account_email, gender, age_range",
            success: this.getKakaoAccount,
            fail: function(error) {
                console.log(error);
            },
            });

        },
        
        getKakaoAccount() {
            Kakao.API.request({
                url: '/v2/user/me',
            success: (res) => {
                const kakaoAccount = res.kakao_account;
                console.log(kakaoAccount);

                this.$store.commit("user", kakaoAccount)
            }

            });

        },

        kakaoLogout(){
            if (!window.Kakao.Auth.getAccessToken()) {
            console.log('Not logged in.');
            return;
            }
            window.Kakao.Auth.logout( (res) => {
            console.log(Kakao.Auth.getAccessToken());
            console.log(res);
            this.$store.commit("user", {});
            });

        },
    },
};
</script>
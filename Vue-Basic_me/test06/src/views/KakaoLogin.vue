<template>
<!-- [카카오 개발자 페이지]
1. 앱 등록
2. 플랫폼: web
3. 도메인
4. 활성화
5. Redirect URL
6 동의항목 설정

[VSC]
1.index.html - kakao.js 연결
2.main.js - 카카오 자바스크립트 키 설정
3.로그인.vue 단에 로그인 html, computed, 함수 구현 -->

    <div>{{ user.email?"로그인 성공!": "로그인 후 사용하세요."}}
        <a v-show="!user.email" id="custom-login-btn" @click="kakaoLogin()">
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
        return {sampleData: ""};
    },
    computed: {
        user() {
            return this.$store1.state.user;
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        kakaoLogin() {
            window
                .Kakao
                .Auth
                .login({
                    //scope는 카카오톡에서 가져올 동의항목들을 받게 해준다.
                    scope: "profile_nickname,account_email,gender",
                    success: this.getKakaoAccount,
                    fail: function (error) {
                        console.log(error);
                    }
                });
        },
        getKakaoAccount() {
            window
                .Kakao.API.request({
                    url: '/v2/user/me',
                    success: (res) => {
                        const kakaoAccount = res.kakao_account;
                        console.log(kakaoAccount);

                        this.$store1.commit("user", kakaoAccount)
                    }
                });
        },
        kakaoLogout() {
            if (!window.Kakao.Auth.getAccessToken()) {
                console.log('Not logged in.');
                return;
            }
            window.Kakao.Auth.logout( (res) => {
                    console.log(Kakao.Auth.getAccessToken());
                    console.log(res);
                    this.$store1.commit("user", {});
                });

        },
    },
};
</script>
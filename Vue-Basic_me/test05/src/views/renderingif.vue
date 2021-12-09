<template>
    <div>
  <!--       <h1 v-if="type=='A'">A</h1>
        <h1 v-else-if="type=='B'">B</h1>
        <h1 v-else>C</h1> -->
        <button v-if="userRole=='Admin'">생성</button>
        <button>조회</button>
         <!-- 실무에서는 이런식으로 접속자 주체별 구현기능 다르게 할 때 씀 -->
        <button v-show="userRole=='Admin'">삭제</button>
        <!-- show도 if랑 비슷하나 큰 차이가 있다. show는 만들어져는 있는데 style로 안보이게 해놓은 것, if는 요소 자체가 만들어지지 않음. -->
        <!-- 돔트리를 건드리지 않고, 가렸다 보였다하는 것이기 때문에 빈번하게 하는 요소의 경우 비용이 훨씬 적게 든다. --> 
        <!-- v-show는 조건을 == (참), != (거짓)으로 잡아서 if - else 구문처럼 사용한다. -->
    </div> 
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            type: "B",
            userRole: "User",

        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>
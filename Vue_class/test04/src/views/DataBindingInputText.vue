<template>
    <div>
        <input type="text" v-model="txt1" />
        <!-- v-model로 양방향 바인딩이 됨, 사용자가 입력한 순간 실시간으로 data()에 들어감, data()값도 실시간으로 인풋에 들어감 -->
        <button @click="changeValue()">값 변경</button>
        <input type="number" v-model.number="num1" />
        <!-- 숫자만 들어감 -->
        <!-- 자동으로 숫자형으로 바꿔줌 -->
        <input type="text" v-model.number="num1" />
        <!-- v-model을 쓰면 다 양방향 처리 가능 -->
        
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            txt1: "",
            num1: 0,
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        changeValue(){
            var tx2 = "버튼실행";
            console.log("tx2");
            //뷰에서 제공하는 data binding과 상관이 없음
            console.log("버튼실행");
            this.txt1 = "South Korea";
            //data() 안에 정의된 얘만 쓸 수 있음, this로 접근
        }
    },
    //함수 만들어주는 부분
};
</script>
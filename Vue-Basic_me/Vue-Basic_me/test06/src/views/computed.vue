<template>
    <div>
        <h1>Hello, {{ firstName }} {{lastName}} </h1>
        <h1>Hello, {{ firstName }} {{lastName}} </h1>
        <h1>Hello, {{ firstName }} {{lastName}} </h1>
        <h1>Hello, {{ firstName }} {{lastName}} </h1>
        <h1>Hello, {{ firstName }} {{lastName}} </h1>
        풀네임 만들기 위해서 이렇게 하는 것은 불필요한 작업
        <h1>Hello, {{ fullName }} </h1>
        <input type="text" v-model="firstName" />
        <input type="text" v-model="lastName" />
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            firstName: "",
            lastName: "",
        };
    },
    //기존에 없는 새로운 데이터 방식 만들어 준다. 함수에 만들어주고 이 함수가 데이터 역할을 한다.
    //실제적으로 많이 사용되고, 사용자 정보 관리하는데에 쓰인다.
    computed: {
        fullName() {
            return this.firstName + " " + this.lastName;
        },
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>
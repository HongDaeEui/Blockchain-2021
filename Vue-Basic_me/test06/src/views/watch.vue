<template>
    <div>
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
            firstName: "Hong",
            lastName: "DaeEui",
            fullName: "",
        };
    },
    //변경이 일어났는지 안 일어났는지 보는 것, 실제로 변경이 일어나는 순간에만 생성이 됨, 계속 주시하기 때문에 메모리 용량이 커져서 필요한 용도에만 쓰는 것이 좋다.
    watch: {
          firstName() {
            return this.fullName = this.firstName + " " + this.lastName;
        },
          lastName() {
            return this.fullName = this.firstName + " " + this.lastName;
        },
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>
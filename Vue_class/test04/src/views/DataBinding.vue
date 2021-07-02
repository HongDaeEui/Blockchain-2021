<template>
    <div>
        <div>
            <h1>Hello {{title1}}</h1>
        </div>
        <div>
            <h1>Hello {{title2}}</h1>
            <!-- 중괄호 두 개 써야함 -->
        </div>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            title1: "World",
            title2:"Day",
            //전역변수 선언
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>
<template>
    <!-- div style="color: red; font-size: 30px">인라인 스타일 바인딩</div -->
    <div v-bind:style="styleObject">인라인 스타일 바인딩</div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            styleObject: {
                color: "red",
                fontSize: "30px",}
        };
        // 오브젝트 형태로 Inline style을 만들어 v-bind로 사용할 수 있음
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>
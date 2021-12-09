<template>
    <div class="container" v-bind:class="[activeClass, errorClass]">
        <!-- 배열 형태로 여러 클래스를 사용할 수 있다. -->

        Class Binding
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            activeClass: "active",
            errorClass: "text-red",
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>
<style scoped>

.container {
    width: 100%;
    height: 200px;
}
.active {
    background-color: yellow;
    font-weight: bold;
}
.text-red{
    color:red;
}
</style>
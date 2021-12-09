<template>
    <div>
        <pagetitle :title="title" :title2="title2" />
    </div>
</template>
<script>
import pagetitle from '../components/pagetitle.vue';
// 컴포넌트의 pagetitle을 가져온다.
export default {
    name: "",
    components: {pagetitle},
    // 가져온 컴포넌트를 쓸려면 꼭 여기다 넣어줘야 한다.
    data() {
        return {
            title: "부모 컴포넌트에서 전달한 제목",
            title2: "부제목 입니다.",
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>

<template>
    <div>
        <textarea v-model="message"></textarea>
        <!-- v-model로 양방향 연결 -->
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            message: "여러 줄을 입력할 수 있는 textarea 입니다."
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>
<template>
    <div>
        <div> {{htmlString}} </div>
        <div v-html="htmlString"></div>
        <!-- html로 동작하면 좋겠다 할 떄 넣어줌 -->
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            htmlString: "<p style='color:red;'>빨간색 글자.</p>",
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>
<template>
    <div>
        <button @click="myFunction" ref="btn">클릭</button>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            sampleData: ""
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        myFunction() {
            console.log("부모 컴포넌트에서 직접 발생시킨 이벤트");
        }
    }
}
</script>
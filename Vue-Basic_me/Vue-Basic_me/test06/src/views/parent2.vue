<template>
    <div>
        <!-- 되게 중요한 개념 -->
        <child2 @send-message="sendMessage" />
    </div>
</template>
<script>
import child2 from "../components/child2.vue"
export default {
    name: "",
    components: { child2 },
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
        sendMessage(data) {
            console.log(data);
            
        }
        
    }
}
</script>
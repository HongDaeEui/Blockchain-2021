<template>
    <div>
        <!-- 데이터만 바뀌는 것이 아니라 UI도 같이 바꿔줄 때 슬릇을 사용함. -->
        <modal-layout>
        <template v-slot:header>
            <h1>모달 팝업 타이틀</h1>
        </template>
        <template v-slot:main>
            <p>모달 콘텐츠 1</p>
            <p>모달 콘텐츠 2</p>
            <p>모달 콘텐츠 3</p>
        </template>
        <template v-slot:footer>
            <button>닫기</button>
        </template>
        </modal-layout>
    </div>
</template>
<script>
import modallayout from '../components/slotmodallayout';
export default {
    name: "",
    components: { "modal-layout": modallayout },
    data() {
        return {
            sampleData: ""
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
};
</script>
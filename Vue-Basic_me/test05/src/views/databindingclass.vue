<template>
    <div class="container" v-bind:class="{active: inActive, 'text-red': hasError}">
        <!-- 기존 클래스에 추가로 바인딩할 클래스를 선언해서 쓸 수 있음, 여기서 true일 경우 active 클래스가 활성화된다. -->
        <input type="text" v-model="txt1" :class="{ 'border-red': isEmpty}" @blur="checkEmpty">
        <!-- 클래스에 바인딩하는 경우는 실무에서 보통 이런식으로 클래스에 대한 이벤트 디자인을 줄 때 쓰고, 많이 쓰지는 않음 -->
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            inActive: true,
            hasError: false,
            txt1: "",
            isEmpty: false,
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        checkEmpty() {
            if(this.txt1 == "") {
                this.isEmpty = true;
            } else {
                this.isEmpty = false;
            }
        }
    }
}
</script>
<style scoped>
/* scoped를 넣었을 때는 작성 파일 안에서만 먹히고, 뺴면은 전체에서 CSS가 먹힌다. */
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

.border-red {
    border:3px solid red;
}
</style>
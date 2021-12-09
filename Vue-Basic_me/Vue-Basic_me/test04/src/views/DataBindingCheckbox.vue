<template>
    <div>
        <label><input type="checkbox" v-bind:value="seoul" v-model="cities">서울</label>
        <!-- <label><input type="checkbox" //콜론만 써줘도 인정 :value="seoul" v-model="cities">서울</label> -->
      <!-- 사용자는 클릭시 checked라는 상태를 바꿀 수 있음, v-bind는 사용자가 바꾸지 못하지만 개발자가 바꿀 수 있는 단방향으로 가게해 줌 -->
        <label><input type="checkbox" value="064" v-model="cities">제주</label>
        <label><input type="checkbox" value="21" v-model="cities">부산</label>
        <!-- value값이 바뀌지 않음, 체크박스는 v-molde 자체가 value가 아닌 체크된 상태이고, 체크했을 때의 value값을 직접 넣어줌 -->
        <br />
        <div>선택한지역: {{cities}}</div>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            cities: [],
            seoul: "03",
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>
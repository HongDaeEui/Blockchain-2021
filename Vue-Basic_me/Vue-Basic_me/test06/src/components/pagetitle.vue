<template>
  <h1 class="page-title">
    {{ title }} (<small>{{ title2 }}</small
    >)
  </h1>
</template>
<script>
export default {
  name: "",
  components: {},
  props: {
    title: {
      type: String,
      default: "페이지 제목",
    },
        // props는 부모에서 전달받아 값을 쓸 수 있게 해줌, 타입과 기본값을 설정  
    // 실무에서 만들어서 씀, 예를들면 여러 페이지의 제목의 표준을 맞추기 위해 사용.
    title2: {
      type: String,
      default: "부제목",
    },
  },
};
</script>
<style scoped>
.page-title {
  border-left: 4px solid red;
  padding-left: 5px;
  text-align: left;
}
</style>
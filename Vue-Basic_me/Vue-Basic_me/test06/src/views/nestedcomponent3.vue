<template>
  <div>
    <childcomponent :num="7" :isSelected="isSelected" :arr="arr" />
            <!-- 이 경우 문자로 인식 , 숫자로 전달하고 싶으면 :를 넣어 줌-->
  </div>
</template>
<script>
import childcomponent from '../components/childcomponent.vue';
// 컴포넌트의 pagetitle을 가져온다.
export default {
  name: "",
  components: { childcomponent },
  data() {
    return {
      num1: 5,
      isSelected: true,
      arr: [1, 2, 3, 4],
        // 가져온 컴포넌트를 쓸려면 꼭 여기다 넣어줘야 한다.
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
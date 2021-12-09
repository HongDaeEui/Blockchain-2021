<template>
  <div>
    <datagrid2 :header="header" :body="body" />
  </div>
</template>
<script>
import datagrid2 from "../components/datagrid2.vue";
export default {
  name: "",
  components: { datagrid2 },
  data() {
    return {
      header: [
        { title: "이름", key: "name" },
        { title: "연락처", key: "tel" },
        { title: "이메일", key: "email" },
      ],
      body: [
        {
          name: "유재석",
          tel: "010-2333-0000",
          email: "ryu@gmail.com",
          addr: "서울시",
        },
        {
          name: "김종국",
          tel: "010-0000-0000",
          email: "kim@gmail.com",
          addr: "서울시",
        },
        {
          name: "지석진",
          tel: "010-0000-0000",
          email: "ji@gmail.com",
          addr: "서울시",
        },
      ],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
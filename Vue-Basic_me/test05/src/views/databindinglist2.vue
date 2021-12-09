<template>
  <div>
    <select v-model="selectedGender">
      <option value="">전체</option>
      <option value="male">남자</option>
      <option value="female">여자</option>
    </select>
    <button @click="getUserList">조회</button>
    <table class="userTable">
      <thead>
        <tr>
          <td>이름</td>
          <td>나이</td>
          <td>성별</td>
        </tr>
      </thead>
      <tbody>
        <tr :key="user._id" v-for="user in userList">
          <!-- 행의 key값과 행의 각 컬럼들의 값들을 정해주고, for문을 돌린다. -->
          <td>{{ user.name }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.gender }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
//axios 사용하기

export default {
  name: "",
  components: {},
  data() {
    return {
      url: "https://7ea11585-6ca5-4d63-960c-0c79d6d01de2.mock.pstmn.io/getUserList",
      //나중에 실무에서 서버 개발자가 데이터 url을 알려주고 프론트엔드 개발자는 그 url을 갖다 쓴다.
      userList: [],
    };
  },
  setup() {},
  created() {},
  mounted() {
    // this.getUserList();
  },
  // data()를 읽은 다음에 mounted()가 실행된다.
  unmounted() {},
  methods: {
    async getUserList() {
      var userList = (await axios.get(this.url)).data.data;
      // console.log(this.userList)
      // console.log(this.userList[0].gender)
      if (this.selectedGender == "") {
        this.userList = userList;
      } else {
        this.userList = userList.filter((u) => u.gender == this.selectedGender);

        // var newUserList = [];
        // for(var user of userList) {
        //     if(user.gender == this.selectedGender) {
        //         newUserList.push(user);
        //     }
        // }
        // this.userList = newUserList;
      }
    },
    //여러가지가 담겨있기에 .data를 해줘야 원하는 데이터만 뽑아옴. userList에는 배열안에 data: []가 있어서 다시 한번 data로 접근해줌.
  },
};
</script>
<style scoped>
.userTable {
  width: 50%;
  margin: 0 auto;
  align-content: center;
}

table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>

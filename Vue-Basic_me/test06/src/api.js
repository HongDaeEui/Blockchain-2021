// 믹스인에 만든 함수를 모든 컴포넌트에 호출에서 쓸 수 있음. 이 때 가장 먼저 실행 된다.
// methods 뿐만 아니라 mounted 등의 단계에서 다 쓸 수 있다. 믹스인으로 가져온 함수는 앞에 $를 붙이는
// 암묵적인 룰이 있다.

import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default {
  mounted() {
    console.log("믹스인 mounted");
  },
  methods: {
    async $callAPI(url, method, data) {
      return (
        await axios({
          method: method,
          url: url,
          data: data,
        }).catch((e) => {
          console.log(e);
        })
      ).data;
    },
  },
};

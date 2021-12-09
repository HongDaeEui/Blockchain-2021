  import {
      createStore
  } from "vuex";

  import persistedstate from "vuex-persistedstate";

  const store = createStore({
      //뷰 컴포넌트의 data()의 기능과 일치, state()에서는 모든 컴포넌트에 접근 가능
      state() {
          return {
              count: 0,
              cart: []
          };
      },
      //mutations안의 함수를 통해서만 state()의 인자들을 관리할 수 있다
      mutations: {
          //   increment(state) {
          //       state.count++;
          //   },
          addCart(state, data) {
              state.cart.push(data);
              state.count++;

          }
      },
      //유지되어야할 키를 지정해줌,
      //store는 바로 반영이 안되는 경우가 있어 vsc를 다시 실행해줘야 함.
      plugins: [
          persistedstate({
              paths: ["cart"]
          })
      ]
  })

  export default store;
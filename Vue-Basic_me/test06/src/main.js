import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ApiMixin from "./api";
<<<<<<< HEAD
import api from "./api.js";

createApp(App).use(router).mixin(ApiMixin).mixin(api).mount("#app");
=======
import store from "./store/store";
import store1 from "./store/store1";

createApp(App).use(router).use(store).use(store1).mixin(ApiMixin).mount("#app");

//자바스크립트와 달리 뷰는 전역 객체인 window로 접근을 바로 못하기 떄문에 window.으로 접근해줌.

window.Kakao.init('10a3dd86038c12f0ae194ffb01760b09');
window.Kakao.isInitialized();
>>>>>>> 75798d74412c42f398d71392711855af2ae213e2

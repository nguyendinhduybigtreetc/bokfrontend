import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import EN from "./locale/en.json";
import VI from "./locale/vi.json";
import ZH from "./locale/zh.json";
import App from "./App.vue";

// import "~/styles/element/index.scss";

// import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import "~/styles/index.scss";
import "uno.css";

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";

const i18n = createI18n({
    locale: 'en',
    messages: {
        'en': EN,
        'vi': VI,
        'zh': ZH
    }
})
const app = createApp(App);
// app.use(ElementPlus);
app.use(i18n);
app.mount("#app");


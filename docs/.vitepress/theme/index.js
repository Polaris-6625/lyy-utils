import Theme from "vitepress/theme";
import { ElementPlusContainer } from "@vitepress-demo-preview/component";
import "@vitepress-demo-preview/component/dist/style.css";
import ElementPlus from "element-plus";
import "./style.scss";

export default {
  ...Theme,
  enhanceApp({ app }) {
    //  注册组件
    app.component("demo-preview", ElementPlusContainer);
    app.use(ElementPlus);
  },
};
import { componentPreview, containerPreview } from "@vitepress-demo-preview/plugin";
import { mdPlugin } from "./plugins";

export default {
  theme: {
    light: 'vitesse-light',
    dark: 'vitesse-dark'
  },
  lineNumbers: true,
  config(md) {
    md.use(componentPreview)
    md.use(containerPreview)
    mdPlugin(md)
  }
}
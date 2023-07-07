// 注册自定义组件（aipage-editor渲染器需要）
// @ts-ignore
import { registerRendererByType } from 'vue3-amis-widget';
// @ts-ignore
import VueUniArea from '@/components/uecharts.vue'

registerRendererByType(VueUniArea, {
  type: 'uni-area-chart',
  framework: 'vue3'
});
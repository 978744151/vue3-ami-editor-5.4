import { createApp, onMounted, h, ref, defineComponent } from 'vue' //必须有
import { render as renderAmis, render as renderSchema } from 'amis'
import { applyReactInVue, applyPureReactInVue } from 'veaury'
import ReactDOM from 'react-dom'
import VueUniArea from '@/components/uecharts.vue'
import { createVue3Component } from 'vue3-amis-widget'
const UniArea = createVue3Component(VueUniArea)
export default UniArea
// defineComponent({
//   setup(props, ctx) {
//     const renderBox = ref('renderBox')
//     const UniArea: any = createVue3Component(VueUniArea)
//     return {
//       renderBox,
//       UniArea
//     }
//   },
//   render() {
//     return <div ref="renderBox">{h(this.UniArea)}</div>
//   }
// })

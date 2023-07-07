import { createApp, onMounted, ref, defineComponent } from 'vue' //必须有
import { render as renderAmis, render as renderSchema } from 'amis'
import { applyReactInVue, applyPureReactInVue } from 'veaury'
import ReactDOM from 'react-dom'
import uecharts from '@/components/uecharts.vue'

console.log(ReactDOM)
export default defineComponent({
  components: {
    uecharts
  },
  setup(props, ctx) {
    const renderBox = ref('renderBox')
    console.log(renderBox)
    onMounted(() => {
      const schema = {
        type: 'form',
        mode: 'inline',
        title: '',
        wrapWithPanel: false,
        body: [
          {
            type: 'plain',
            text: '页面标题',
            className: 'page-name'
          },
          {
            type: 'switch',
            option: '预览',
            name: 'preview',
            onChange: function (v: any) {
              // setPreview(v)
            }
          },
          {
            type: 'switch',
            option: '移动端',
            name: 'mobile',
            onChange: function (v: any) {
              // setMobile(v)
            }
          },
          {
            type: 'button',
            label: '保存',
            level: 'primary',
            onClick: function () {
              // onSave()
            }
          },
          {
            type: 'button',
            label: '退出',
            level: 'danger',
            onClick: function () {
              if (window.confirm('确定退出?')) {
                window.close()
              }
            }
          }
        ]
      }
      const env = {
        // confirm: (msg:any) => amisAlert(msg, '系统提示')
        // 其他配置实现...
      }
      console.log(renderBox.value)
      ReactDOM.render(
        renderSchema(
          schema,
          {
            theme: 'antd'
          },
          env
        ),
        renderBox.value
      )
    })
    return {
      renderBox
    }
  },
  render() {
    return (
      <div>
        <a href="/editor">editor</a>
        <uecharts />
        <div class="jqp-amis-editor-header" ref="renderBox"></div>
      </div>
    )
  }
})

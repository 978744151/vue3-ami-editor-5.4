<template>
  <div class="jqp-amis-editor">
    <div class="jqp-amis-editor-header" ref="renderBox"></div>
    <AmisEditor
      :className="className"
      id="editorName"
      :value="schema"
      @change="onChange"
      theme="antd"
      @preview="hanldePreview"
      :preview="isPreview"
      :isMobile="isMobile"
      @onChange="hanldeChange"
    />
  </div>
  <Shortcut />
</template>
<script setup>
import { createApp, onMounted, ref } from 'vue' //必须有
import { render as renderAmis, render as renderSchema } from 'amis'
import { applyReactInVue, applyPureReactInVue } from 'veaury'
import ReactDOM from 'react-dom'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all'
import 'amis/lib/themes/default.css'
import 'amis/lib/helper.css'
import 'amis/sdk/iconfont.css'
import 'amis-editor-core/lib/style.css'
import 'amis-ui/lib/themes/antd.css'
import { Editor, ShortcutKey } from 'amis-editor'
const AmisEditor = applyPureReactInVue(Editor)
const Shortcut = applyPureReactInVue(ShortcutKey)
const className = 'jqp-amis-editor-body'
const renderBox = ref('renderBox')
const isPreview = ref(false)
const isMobile = ref(false)
const schema = ref({})
const headerSchema = ref({})
const onChange = () => {}
const hanldePreview = (e) => {
  console.log(e)
  isPreview.value = e
}
const hanldeChange = (e) => {
  console.log(e)
  schema.value = e
}
const setMobile = (e) => {
  isMobile.value = e
}
console.log(renderAmis)
onMounted(() => {
  headerSchema.value = {
    type: 'form',
    mode: 'inline',
    title: '',
    wrapWithPanel: false,
    body: [
      {
        type: 'plain',
        text: '风云低代码平台',
        className: 'page-name'
      },
      {
        type: 'switch',
        option: '预览',
        name: 'preview',
        onChange: function (v) {
          hanldePreview(v)
        }
      },
      {
        type: 'switch',
        option: '移动端',
        name: 'mobile',
        onChange: function (v) {
          setMobile(v)
        }
      },
      {
        type: 'button',
        label: '保存',
        level: 'primary',
        onClick: function () {
          onSave()
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
    confirm: (msg) => amisAlert(msg, '系统提示')
    // 其他配置实现...
  }
  ReactDOM.render(
    renderSchema(
      headerSchema.value,
      {
        theme: 'antd'
      },
      env
    ),
    renderBox.value
  )
})
</script>

<style lang="scss">
@import '@/assets/style.scss';
.about {
  height: 100%;
}

/* 解决 amis-editor icon 图标过大 */
.editor-right-panel .editorPanel-tabs .editorPanel-tabs-header > li > a .editor-tab-icon > svg {
  font-size: 16px !important;
  width: 16px;
  height: auto;
  margin-bottom: 0 !important;
  color: #151b26;
}
.jqp-amis-editor,
.jqp-amis-editor-body {
  height: calc(100% - 20px) !important;
  * {
    box-sizing: border-box;
  }
}
.jqp-amis-editor-header {
  padding: 10px;
  padding-bottom: 0px;
  border-bottom: 1px solid #ddd;
}
.page-name {
  font-size: 20px;
  font-weight: bold;
}
</style>

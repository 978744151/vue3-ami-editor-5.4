<template>
  <div class="about">
    <AmisEditor id="editorName" :value="schema" @change="onChange" />
  </div>
</template>

<script setup lang="js">
import { createApp } from 'vue'
import "amis/lib/themes/default.css";
import "amis/lib/helper.css";
import "amis/sdk/iconfont.css";
import "amis-editor-core/lib/style.css";
import "amis-ui/lib/themes/cxd.css";
import {applyReactInVue, applyPureReactInVue} from 'veaury'
import { Editor } from "amis-editor";
const AmisEditor = applyPureReactInVue(Editor)
const schema = {}
const onChange = () =>{}
</script>
<style>
@media (min-width: 1024px) {
  .about {
  }
}
</style>

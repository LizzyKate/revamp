<template>
  <div>
    <component :is="contentSettings.name"></component>
  </div>
</template>
<script>
import socialEditorVue from '../Social/social.editor.vue'
import buttonEditorVue from '../Button/button.editor.vue'
import imageEditorVue from '../Image/image.editor.vue'
import textEditorVue from '../Text/text.editor.vue'
import spacerEditorVue from '../Spacer/spacer.editor.vue'

export default {
  components: {
    textEditorVue,
    imageEditorVue,
    buttonEditorVue,
    socialEditorVue,
    spacerEditorVue,
  },
  computed: {
    contentSettings() {
      return this.$store.state.element.currentSideBar
    },
  },
}
</script>
<style></style>

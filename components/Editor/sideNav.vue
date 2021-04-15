<template>
  <section class="relative">
    <div class="flex justify-between items-center space-x-2">
      <div>
        <button
          class="__button tracking-wider py-2 px-4 text-sm font-body font-semibold focus:outline-none"
          :class="
            currentContent === 'settings'
              ? 'bg-bg-100 text-white'
              : 'bg-button-100 text-bg-100'
          "
          @click="selectColumn('settings')"
        >
          SETTINGS
        </button>
      </div>
      <div class="ml-4">
        <button
          class="__button tracking-wider py-2 px-4 text-sm font-body font-semibold focus:outline-none"
          :class="
            currentContent === 'section' || currentContent === 'sectionSettings'
              ? 'bg-bg-100 text-white'
              : 'bg-button-100 text-bg-100'
          "
          @click="selectColumn('section')"
        >
          SECTION
        </button>
      </div>
      <div v-if="canShow" class="ml-4">
        <button
          class="__button tracking-wider py-2 px-4 text-sm font-body font-semibold focus:outline-none"
          :class="
            currentContent === 'content'
              ? 'bg-bg-100 text-white'
              : 'bg-button-100 text-bg-100'
          "
          @click="selectColumn('content')"
        >
          CONTENT
        </button>
      </div>
    </div>
    <div
      class="border border-b-0 border-l-o border-r-0 border-border-100 w-full my-3 border-opacity-50"
    ></div>

    <div v-if="currentContent === 'content'">
      <content-vue />
    </div>
    <div v-if="currentContent === 'section'">
      <structure-vue />
    </div>
    <div v-if="currentContent === 'sectionSettings'">
      <columns-editor-vue />
    </div>

    <div v-if="currentContent === 'settings'">
      <setting-vue />
    </div>

    <div class="fixed bottom-0 bg-white">
      <div class="flex items-center space-x-8">
        <div class="w-full">
          <p class="text-sm mb-0 font-body font-semibold text-text-100">
            Hide content on:
          </p>
        </div>
        <div class="flex space-x-4 items-center">
          <button
            class="__button bg-bg-400 tracking-widest py-2 px-3 text-xs text-text-400 font-body font-semibold focus:outline-none"
          >
            DESKTOP
          </button>
          <button
            class="__button text-text-500 tracking-widest bg-bg-500 py-2 px-3 text-xs font-body font-semibold focus:outline-none"
          >
            MOBILE
          </button>
        </div>
      </div>
      <div class="flex items-center space-x-2 mt-2 mb-4">
        <button class="font-body text-xs text-text-200 focus:outline-none">
          Need some <span class="font-semibold text-text-100">help</span>
        </button>
        <div>
          <img src="/image/help.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import structureVue from '../columns/structure.vue'
import columnsEditorVue from '../columns/columns.editor.vue'
import contentVue from './content.vue'
import settingVue from './setting.vue'

export default {
  components: {
    contentVue,
    structureVue,
    columnsEditorVue,
    settingVue,
  },
  data() {
    return {}
  },
  computed: {
    currentContent() {
      return this.$store.state.element.content
    },
    canShow() {
      return true
    },
  },
  methods: {
    selectColumn(content) {
      this.$store.commit('element/setColumn', content)
    },
  },
}
</script>
<style></style>

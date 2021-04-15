<template>
  <section class="">
    <draggable
      v-if="elements"
      class="grid content-center grid-cols-3 gap-4 mt-6 px-5"
      :group="{ name: 'people', pull: 'clone', put: false }"
      :list="list1"
      :move="moveEvent"
      @end="handleDragEnd"
      @drop="handleDrop($event, 'drop')"
      @dragend="handleDrop($event, 'dragEnd')"
      @change="logger($event)"
    >
      <div v-for="(element, i) in list1" :key="i">
        <div
          class="bg-border-300 rounded-lg cursor-pointer flex items-center space-x-1 text-center py-4"
        >
          <div class="w-1/5">
            <i class="ri-more-2-line cursor-move"></i>
          </div>
          <div class="bg-bg-700 rounded-md w-1/2">
            <i
              :class="element.font"
              class="text-2xl text-bg-600 rounded-full"
            ></i>
          </div>
        </div>
        <p
          class="text-center font-body text-text-100 text-xs font-semibold mt-2"
        >
          {{ element.text }}
        </p>
      </div>
    </draggable>
    <div v-if="elementSettings">
      <element-settings-vue />
    </div>
  </section>
</template>
<script>
import draggable from 'vuedraggable'
import {
  buttonProps,
  // columnProps,
  textProps,
  socialProps,
  imageProps,
  spacerProps,
} from '../../data/elements'
import elementSettingsVue from './elementSettings.vue'

export default {
  components: {
    elementSettingsVue,
    draggable,
  },
  data() {
    return {
      list1: [
        // {
        //   font: 'ri-layout-line',
        //   text: 'Structure',
        //   ...columnProps,
        // },
        {
          font: 'ri-file-text-line',
          text: 'Text',
          ...textProps,
        },
        {
          font: 'ri-image-fill',
          text: 'Image',
          ...imageProps,
        },
        {
          font: 'ri-space',
          text: 'Button',
          ...buttonProps,
        },
        {
          font: 'ri-space',
          text: 'Spacer',
          ...spacerProps,
        },
        {
          font: 'ri-share-line',
          text: 'Social',
          ...socialProps,
        },
      ],
      payload: {},
    }
  },
  computed: {
    contentSettings() {
      return this.$store.state.element.currentSideBar
    },
    elements() {
      return this.$store.state.element.elements
    },
    elementSettings() {
      return this.$store.state.element.elementSettings
    },
  },
  methods: {
    logger(event) {
      console.log(event, 'EVENT')
    },
    handleDragEnd(e, drop) {
      console.log(e)

      if (this.payload.type === 'Photo') {
        this.payload.type = 'Image'
      } else if (this.payload.type === 'Content') {
        this.payload.type = 'Text'
      }

      // if the vuex element is the first and if the row is the first check if the values are undefined if not give it a 0 value
      if (
        this.$store.state.element.column.length < this.payload.outerIndex ||
        0
      ) {
        this.payload.outerIndex = 0
      }

      if (
        this.$store.state.element.column[this.contentSettings.innerIndex || 0]
          .list.length < this.payload.innerIndex ||
        0
      ) {
        this.payload.innerIndex = 0
      }

      if (!this.payload.innerIndex) {
        this.payload.innerIndex = 0
      }

      if (!this.payload.outerIndex) {
        this.payload.outerIndex = 0
      }

      if (!this.payload.type) {
        this.payload.type = this.list1[e.oldIndex].name
      }

      if (!this.payload.others) {
        this.payload.others = { ...this.list1[e.oldIndex] }
      }

      console.log(this.payload)

      if (this.payload.type === 'Spacer') {
        this.$store.commit('element/AddRows', {
          amount: 1,
          index: this.payload.outerIndex,
          element: { ...this.payload.others },
        })
      }

      this.$store.commit('element/ReplaceElement', this.payload)

      this.$store.commit('element/displayElements', false)
      this.$store.commit('element/displayElementSettings', true)
      this.$store.commit('element/displaySideBar', {
        innerIndex: this.payload.innerIndex || 0,
        outerIndex: this.payload.outerIndex || 0,
        type: this.payload.type,
      })
      this.payload = {}
    },
    moveEvent(event, originalEvent) {
      this.payload = {
        type: event.draggedContext.element.name,
        outerIndex: event.relatedContext.component.$attrs.outter || 0,
        innerIndex: event.relatedContext.index || 0,
        others: { ...event.draggedContext.element },
      }
      console.log(this.payload)
      return false
    },
  },
}
</script>
<style></style>

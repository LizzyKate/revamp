<template>
  <div
    v-if="showDesign"
    class="shadow-xl w-3/5 my-12 mx-auto bg-content-100 min-h-screen"
  >
    <div
      class="mx-auto"
      :style="{
        width: generalSettings.width + '%',
        backgroundColor: generalSettings.backgroundColor,
        backgroundImage: `url(${generalSettings.backgroundImage})`,
        borderRadius: `${generalSettings.borderRadius.topLeft || 0}px ${
          generalSettings.borderRadius.topRight || 0
        }px ${generalSettings.borderRadius.bottomRight || 0}px ${
          generalSettings.borderRadius.bottomLeft || 0
        }px`,
        borderTop: `${generalSettings.border.top}px ${generalSettings.borderStyle} ${generalSettings.borderColor}`,
        borderLeft: `${generalSettings.border.left}px ${generalSettings.borderStyle} ${generalSettings.borderColor}`,
        borderRight: `${generalSettings.border.right}px ${generalSettings.borderStyle} ${generalSettings.borderColor}`,
        borderBottom: `${generalSettings.border.bottom}px ${generalSettings.borderStyle} ${generalSettings.borderColor}`,
        padding: `${generalSettings.padding.top || 0}px ${
          generalSettings.padding.right || 0
        }px ${generalSettings.padding.bottom || 0}px ${
          generalSettings.padding.left || 0
        }px`,
      }"
    >
      <div>
        <div
          v-for="(column, i) in container"
          :key="i"
          :class="`mt-12 height w-full flex items-center  ${
            column.list.length > 0 ? '' : ' '
          }`"
        >
          <div class="w-full relative">
            <div ref="observe" class="w-full relative">
              <div
                :id="'draggable' + Math.random()"
                class="dragArea list-group w-full flex space-x-4 justify-around items-start"
                :outter="i"
                :style="{
                  width: column.properties.width + '%',
                  opacity: column.properties.opacity,
                  backgroundColor: column.properties.backgroundColor,
                  backgroundImage: `url(${column.properties.backgroundImage})`,
                  padding: `${column.properties.padding.top || 0}px ${
                    column.properties.padding.right || 0
                  }px ${column.properties.padding.bottom || 0}px ${
                    column.properties.padding.left || 0
                  }px`,
                  margin: `${column.properties.margin.top || 0}px ${
                    column.properties.margin.right || 0
                  }px ${column.properties.margin.bottom || 0}px ${
                    column.properties.margin.left || 0
                  }px`,
                  borderRadius: `${
                    column.properties.borderRadius.topLeft || 0
                  }px ${column.properties.borderRadius.topRight || 0}px ${
                    column.properties.borderRadius.bottomRight || 0
                  }px ${column.properties.borderRadius.bottomLeft || 0}px`,
                  borderTop: `${column.properties.border.top}px ${column.properties.borderStyle} ${column.properties.borderColor}`,
                  borderLeft: `${column.properties.border.left}px ${column.properties.borderStyle} ${column.properties.borderColor}`,
                  borderRight: `${column.properties.border.right}px ${column.properties.borderStyle} ${column.properties.borderColor}`,
                  borderBottom: `${column.properties.border.bottom}px ${column.properties.borderStyle} ${column.properties.borderColor}`,
                }"
                :list="column.list"
                group="people"
                :move="onMoveCallback"
                @change="logger($event, i)"
                @drop="checkElement"
              >
                <div
                  v-for="(element, f) in column.list"
                  :key="f"
                  ref="content"
                  :outter="i"
                  class="cursor-pointer w-full relative"
                >
                  <div class="">
                    <component :is="element.name" :props="{ i, f }" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from '~/components/Button/button.view'
import Photo from '~/components/Image/image.view.vue'
import Social from '~/components/Social/social.view.vue'
import Content from '~/components/Text/text.view.vue'
import Spacer from '~/components/Spacer/spacer.view.vue'

export default {
  components: {
    Button,
    Photo,
    Social,
    Content,
    Spacer,
  },

  data() {
    return {
      open: false,
      more: [false],
      displaySettings: [false],
      moreSettings: true,
      showDesign: false,
    }
  },
  computed: {
    container: {
      // return JSON.parse(JSON.stringify(this.$store.state.element.column))
      get() {
        return this.$store.state.element.column
      },
      set(value) {
        this.$store.commit('element/switchColumn', value)
      },
    },

    currentEditingIndex() {
      return this.$store.state.element.currentSideBar.outerIndex
    },
    currentInnerIndex() {
      return this.$store.state.element.currentSideBar.innerIndex
    },
    generalSettings() {
      return this.$store.state.element.container
    },
  },
  watch: {
    '$store.state.element.column': {
      deep: true,
      // immediate: true,
      handler() {
        //  bug displays on the screen each time you drag a structure so remove from the DOM
        this.$nextTick(() => {
          const spacer = document.querySelectorAll('.__space #structure')
          spacer.forEach((e) => {
            e.remove()
          })
        })
      },
    },
    currentEditingIndex: {
      deep: true,
      handler() {
        if (this.$store.state.element.column[this.currentEditingIndex]) {
          console.log(this.$refs.observe[this.currentEditingIndex])
          this.$refs.observe.forEach((e, i) => {
            e.classList.remove('__active')
            document
              .querySelectorAll('[handler="control"]')
              [i].classList.add('hidden')
            this.more[i] = false
            document
              .querySelectorAll('[handler="section"]')
              [i].classList.add('hidden')
          })
          this.$refs.observe[this.currentEditingIndex].classList.add('__active')
          document
            .querySelectorAll('[handler="control"]')
            [this.currentEditingIndex].classList.remove('hidden')
          this.more[this.currentEditingIndex] = true
          document
            .querySelectorAll('[handler="section"]')
            [this.currentEditingIndex].classList.remove('hidden')
        }
      },
    },
  },
  mounted() {
    const items = localStorage.getItem(this.$route.params.id.toString())
    console.log(items, 'mabinoo')
    if (items) {
      console.log(items)
      this.$store.commit('element/switchColumn', JSON.parse(items))
    }
    //  if item is undefined just continue but if item
    // exist parse it and send it to vuex
    this.showDesign = true
  },
  methods: {
    logger(event, i) {
      const spacer = document.querySelectorAll('.__spacer #structure')
      console.log(spacer, 'spacer')

      if (event.added) {
        const indexofNewColumn = event.added.newIndex + 1
        if (
          JSON.stringify(this.container[i].list[indexofNewColumn]) ===
          JSON.stringify({})
        ) {
          this.container[i].list.splice(indexofNewColumn, 1)
        }
        console.log(event, 'child', i)
      } else {
        return false
      }
    },
    checkElement(event) {
      console.log(event, 'dropp event')
    },
    log(evt, i) {
      console.log(evt)
      // if (i === 'parent') {
      //   if (evt.moved) {
      //     const { newIndex, oldIndex } = evt.moved
      //     this.$store.commit('element/moveColumnToNewPosition', {
      //       newIndex,
      //       oldIndex,
      //     })
      //   }
      // }
      // moveToNewPositionS
    },

    onMoveCallback(evt, originalEvent) {
      // evt.to.classList.toggle('__cursor')
      // console.log(evt.to.id, evt.from.id)
      console.log(evt, 'mabinoooo')

      let x = true
      evt.relatedContext.list.forEach((e) => {
        if (e.name === 'Spacer') {
          x = false
        }
      })

      if (!x) {
        return false
      }
      if (evt.to.id !== evt.from.id) {
        console.log('not the same div')

        if (evt.to.children.length > 3) {
          console.log('I am greater')
          return !(evt.to.children.length > 3)
        }
      }

      // return false; — for cancel
    },
    addClass() {
      this.$refs.content.classList.add('__line')
    },
    AddElement(type, outerIndex, innerIndex) {
      const payload = {
        type,
        outerIndex,
        innerIndex,
      }
      this.$store.commit('element/AddElement', payload)
      this.$store.commit('element/displayElementSettings', true)
      this.$store.commit('element/displayElements', false)
    },
    displayContent() {
      this.$store.commit('element/displayElementSettings', false)
      this.$store.commit('element/displayElements', true)
    },
    deleteElement(outerIndex, innerIndex) {
      const payload = {
        outerIndex,
        innerIndex,
      }
      this.$store.commit('element/deleteElement', payload)
    },
    deleteSection(outerIndex) {
      const payload = {
        outerIndex,
      }
      this.$store.commit('element/deleteSection', payload)
    },
    duplicateSection(outerIndex) {
      const payload = {
        outerIndex,
      }
      this.$store.commit('element/duplicateSection', payload)
    },
    duplicateColumn(outerIndex, innerIndex) {
      const payload = {
        outerIndex,
        innerIndex,
      }
      this.$store.commit('element/duplicateColumn', payload)
    },
    moreProps(e, i) {
      // this.open = true
      console.log(this.more, i)
      this.more[i] = true
    },
    openSettings(i) {
      this.displaySettings = true
      this.moreSettings = false
    },
  },
}
</script>
<style></style>

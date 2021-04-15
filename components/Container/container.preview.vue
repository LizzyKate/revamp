<template>
  <section>
    <div class="__space">
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
        <draggable
          v-model="container"
          group="346fweey3"
          @change="log($event, 'PARENT')"
        >
          <div
            v-for="(column, i) in container"
            :key="i"
            :class="`mt-12 height w-full flex items-center  ${
              column.list.length > 0 ? '' : ' '
            }`"
          >
            <div class="w-full relative">
              <div ref="observe" class="w-full relative">
                <!-- <div
                  v-if="column.list.length === 0"
                  class="flex justify-center items-center border-border-400 border-2 border-dashed"
                  style="min-height: 100px"
                >
                  <span
                    class="text-sm font-body font-semibold text-text-100 w-full text-center flex items-center justify-center"
                  >
                    Drag and Drop Content here
                  </span>
                </div> -->
                <div
                  class="absolute __section bg-border-400 py-1 px-4 tracking-wider hidden"
                  handler="section"
                >
                  <p class="text-sm font-body">Section</p>
                </div>
                <!-- <div
                  class="absolute __more bg-border-400 px-2 cursor-pointer hidden"
                  @click="moreProps(e, i)"
                >
                  <i class="ri-more-line text-white text-lg"></i>
                </div> -->
                <div
                  handler="control"
                  class="absolute __set bg-border-400 hidden"
                >
                  <div class="flex justify-around items-center py-1 px-2">
                    <button class="focus:outline-none /x-2 cursor-move">
                      <i class="ri-drag-move-fill text-white text-lg"></i>
                    </button>
                    <button
                      class="mx-2 cursor-pointer focus:outline-none"
                      @click="deleteSection(i)"
                    >
                      <i class="ri-delete-bin-line text-white"></i>
                    </button>
                    <button
                      class="cursor-pointer focus:outline-none"
                      @click="duplicateSection(i)"
                    >
                      <i class="ri-file-copy-line text-white"></i>
                    </button>
                  </div>
                </div>

                <draggable
                  :id="'draggable' + Math.random()"
                  class="dragArea list-group w-full flex space-x-4 justify-around items-start"
                  :class="
                    column.properties.position === 'center'
                      ? 'justify-center'
                      : column.properties.position === 'right'
                      ? 'justify-end'
                      : 'justify-start'
                  "
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
                    :class="`
                      ${
                        f === currentInnerIndex && i === currentEditingIndex
                          ? '__line'
                          : ''
                      } ${
                      element.name
                        ? ''
                        : 'border-2  border-dashed border-border-400 '
                    }
                    `"
                  >
                    <div
                      v-if="!element.name"
                      class="flex flex-col items-center justify-center border-border-400 border-dashed rounded-2xl px-6 py-6"
                      @click="displayContent()"
                    >
                      <diV>
                        <p
                          class="text-sm font-body font-semibold text-text-100 text-center"
                        >
                          Drag and drop a content here
                        </p>
                      </diV>
                      <div class="mt-2">
                        <p class="font-body text-text-200 text-xs">Or</p>
                      </div>
                      <div class="mt-1">
                        <p class="text-xs font-body text-text-200">
                          click to quickly add:
                        </p>
                      </div>
                      <div
                        class="grid grid-cols-2 gap-4 justify-items-center content-center mt-4"
                      >
                        <div
                          class="cursor-pointer w-8"
                          @click="AddElement('TEXT', i, f)"
                        >
                          <div class="bg-bg-700 rounded-md w-full text-center">
                            <i class="ri-file-text-line text-bg-600"></i>
                          </div>

                          <p
                            class="font-body text-xs mt-1 text-text-100 text-center"
                          >
                            Text
                          </p>
                        </div>
                        <div
                          class="cursor-pointer w-8"
                          @click="AddElement('IMAGE', i, f)"
                        >
                          <div class="bg-bg-700 rounded-md w-full text-center">
                            <i class="ri-image-fill text-bg-600"></i>
                          </div>
                          <p
                            class="font-body text-xs mt-1 text-text-100 text-center"
                          >
                            Image
                          </p>
                        </div>
                        <div
                          class="cursor-pointer w-8"
                          @click="AddElement('BUTTON', i, f)"
                        >
                          <div class="bg-bg-700 rounded-md w-full text-center">
                            <i class="ri-space text-bg-600"></i>
                          </div>
                          <p
                            class="font-body text-xs mt-1 text-text-100 text-center"
                          >
                            Button
                          </p>
                        </div>
                        <div
                          class="cursor-pointer w-8"
                          @click="AddElement('SOCIAL', i, f)"
                        >
                          <div class="bg-bg-700 rounded-md w-full text-center">
                            <i class="ri-share-line text-bg-600"></i>
                          </div>
                          <p
                            class="font-body text-xs mt-1 text-center text-text-100"
                          >
                            Social
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      v-if="element.name"
                      :class="
                        f === currentInnerIndex && i === currentEditingIndex
                          ? 'inline'
                          : 'hidden'
                      "
                      class="absolute py-1 text-center __content tracking-wider bg-bg-600"
                    >
                      <p class="text-xs">{{ element.name }}</p>
                    </div>
                    <!-- <div
                      v-show="moreSettings"
                      v-if="element.name"
                      class="absolute __more bg-bg-600 px-2 cursor-pointer"
                      @click="openSettings()"
                    >
                      <i class="ri-more-line text-white text-lg"></i>
                    </div> -->

                    <div
                      v-if="element.name"
                      class="absolute __setter bg-bg-600 flex justify-around items-center"
                      :class="
                        f === currentInnerIndex && i === currentEditingIndex
                          ? 'flex'
                          : 'hidden'
                      "
                    >
                      <button
                        id="button"
                        class="darker px-2 cursor-move py-1 rounded-md"
                      >
                        <i class="ri-drag-move-fill text-white text-xs"></i>
                      </button>
                      <button
                        id="button"
                        class="darker mx-3 py-1 px-2 rounded-md cursor-pointer"
                        @click="deleteElement(i, f)"
                      >
                        <i class="ri-delete-bin-line text-white text-xs"></i>
                      </button>
                      <button
                        id="button"
                        class="darker py-1 px-2 rounded-md cursor-pointer text-xs"
                        @click="duplicateColumn(i, f)"
                      >
                        <i class="ri-file-copy-line text-white"></i>
                      </button>
                    </div>
                    <notifications group="foo" />
                    <div class="">
                      <component :is="element.name" :props="{ i, f }" />
                    </div>
                  </div>
                </draggable>
              </div>
            </div>
          </div>
        </draggable>
      </div>
    </div>
  </section>
</template>

<script>
import draggable from 'vuedraggable'
import Button from '../Button/button.view.vue'
import Photo from '../Image/image.view.vue'
import Social from '../Social/social.view.vue'
import Content from '../Text/text.view.vue'
import Spacer from '../Spacer/spacer.view.vue'

let idGlobal = 8
export default {
  name: 'CustomClone',
  display: 'Custom Clone',
  order: 3,
  components: {
    draggable,
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
        // if (this.container.length === 1) {
        //   this.$refs.observe[this.currentEditingIndex].classList.add('__active')
        //   document
        //     .querySelectorAll('[handler="control"]')
        //     [this.currentEditingIndex].classList.remove('hidden')
        //   this.more[this.currentEditingIndex] = true
        //   document
        //     .querySelectorAll('[handler="section"]')
        //     [this.currentEditingIndex].classList.remove('hidden')
        // }
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
      console.log(this.container)
      this.container = JSON.parse(items)
    }

    //  if item is undefined just continue but if item
    // exist parse it and send it to vuex

    if (this.container.length === 1 && !items) {
      // this.$refs.observe[this.currentEditingIndex].classList.add('__active')
      const x = document.querySelectorAll('[handler="control"]')
      const y = document.querySelectorAll('[handler="section"]')

      if (x) {
        x[this.currentEditingIndex || 0].classList.remove('hidden')
        this.more[this.currentEditingIndex || 0] = true
      }

      if (y) {
        y[this.currentEditingIndex || 0].classList.remove('hidden')
      }
    }
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
    cloneDog({ id }) {
      return {
        id: idGlobal++,
        name: `cat ${id}`,
      }
    },
    onMoveCallback(evt, originalEvent) {
      // evt.to.classList.toggle('__cursor')
      // console.log(evt.to.id, evt.from.id)
      console.log(evt, 'mabinoooo')

      if (evt.dragged.textContent.includes('Spacer')) {
        return false
      }

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
          const z = !(evt.to.children.length > 3)
          if (z === false) {
            this.$notify({
              group: 'foo',
              title: 'Important message',
              text: 'Hello user! This is a notification!',
            })
          }
          return z
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
    // handleSectionClick(outerIndex) {
    //   const payload = {
    //     outerIndex,
    //   }
    //   this.$store.commit('element/displaySectionSettings', payload)
    // },
  },
}
</script>
<style></style>

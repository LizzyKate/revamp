<template>
  <section class="h-full">
    <section class="flex space-x-2 items-center">
      <button
        class="focus:outline-none inline-flex items-center space-x-2 cursor-pointer"
        @click="selectColumn()"
      >
        <i class="ri-arrow-left-s-line"></i>

        <p class="text-base font-body text-text-100">Back</p>
      </button>
    </section>
    <section
      class="my-4 flex justify-between items-center bg-content-100 rounded-md p-2 cursor-pointer"
      @click="displayTextSettings()"
    >
      <div>
        <p class="text-base font-body text-text-100">Text Settings</p>
      </div>
      <div>
        <button :class="text ? 'hidden' : 'inline'" class="focus:outline-none">
          <i class="ri-arrow-drop-right-line text-text-100 text-2xl"></i>
        </button>
        <button :class="text ? 'inline' : 'hidden'" class="focus:outline-none">
          <i class="ri-arrow-drop-down-line text-text-100 text-2xl"></i>
        </button>
      </div>
    </section>
    <section v-if="text" class="">
      <div>
        <div
          v-quill:myQuillEditor="editorOption"
          class="quill-editor mt-4"
          :content="content"
          @change="onEditorChange($event)"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)"
        ></div>
        <div class="mt-8 flex items-center justify-between">
          <div>
            <p class="text-sm font-body font-semibold text-text-100">
              Align Text:
            </p>
          </div>
          <div class="flex items-center space-x-4">
            <div class="cursor-pointer" @click="space('left')">
              <i
                class="ri-align-left"
                :class="container.position === 'left' ? 'text-bg-600' : ''"
              ></i>
            </div>
            <div class="cursor-pointer" @click="space('center')">
              <i
                class="ri-align-center"
                :class="container.position === 'center' ? 'text-bg-600' : ''"
              ></i>
            </div>
            <div class="cursor-pointer" @click="space('right')">
              <i
                class="ri-align-right"
                :class="container.position === 'right' ? 'text-bg-600' : ''"
              ></i>
            </div>
          </div>
        </div>
        <div class="flex flex-col mt-8">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-body font-semibold text-text-100">Width</p>
            </div>
          </div>
          <div class="flex item-center space-x-4">
            <input
              id=""
              v-model="container.width"
              type="range"
              name=""
              min="0"
              max="100"
              step="0.1"
              class="w-full cursor-pointer"
            />
            <div>
              <div>
                <p class="text-text-100 text-xs font-body font-semibold">100</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col mt-8">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-body font-semibold text-text-100">
                Opacity
              </p>
            </div>
          </div>
          <div class="flex item-center space-x-4">
            <input
              id=""
              v-model="container.opacity"
              type="range"
              name=""
              min="0"
              max="1"
              step="0.1"
              class="w-full"
            />
            <div>
              <div>
                <p class="text-text-100 text-xs font-body font-semibold">1</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col mt-8">
          <div>
            <p class="text-sm font-body font-semibold text-text-100">
              Text colour
            </p>
            <p class="mt-4 text-xs font-body text-text-100 font-semibold">
              HEX
            </p>
          </div>
          <div class="picker mt-2">
            <input
              v-model="container.textColor"
              class="focus:outline-none border-2 border-text-100 border-opacity-50 bg-bg-300 border-l-0 rounded"
              type="color"
            />
            <input
              v-model="container.textColor"
              type="text"
              class="focus:outline-none"
              autocomplete="off"
              spellcheck="false"
            />
          </div>
        </div>
      </div>

      {{ container.id }}
      <div>
        <div class="mt-8 flex space-x-20 items-center">
          <div class="flex flex-col">
            <p class="text-xs font-body text-text-100 font-semibold">
              LETTER SPACING
            </p>
            <div class="mt-4">
              <input
                :value="container.letterSpacing"
                type="number"
                class="border-2 cursor-pointer border-text-100 border-opacity-50 bg-bg-300 rounded-2xl w-20 text-sm font-semibold font-body text-text-100 p-2 focus:outline-none placeholder-text-100"
                @change="lineSpacing"
              />
            </div>
          </div>
          <div class="flex flex-col">
            <p class="text-xs font-body text-text-100 font-semibold">
              LINE HEIGHT
            </p>
            <div class="mt-4">
              <input
                :value="container.lineHeight"
                @change="lineHeight"
                type="number"
                class="border-2 cursor-pointer border-text-100 border-opacity-50 bg-bg-300 rounded-2xl w-20 text-sm font-semibold font-body text-text-100 p-2 focus:outline-none placeholder-text-100"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col mt-8">
          <div>
            <p class="text-sm font-body font-semibold text-text-100">Margin</p>
          </div>
          <div class="grid grid-cols-2 gap-x-12 w-full items-center">
            <div class="flex flex-col">
              <div>
                <p class="mt-4 text-xs font-body text-text-100 font-semibold">
                  Top
                </p>
              </div>
              <div class="flex space-x-4 items-center mt-2">
                <input
                  v-model="container.margin.top"
                  type="number"
                  class="border-2 cursor-pointer border-text-100 border-opacity-50 bg-bg-300 rounded-2xl p-2 w-20 text-sm font-semibold font-body text-text-100 focus:outline-none placeholder-text-100"
                />
              </div>
            </div>
            <div class="flex flex-col">
              <div>
                <p class="mt-4 text-xs font-body text-text-100 font-semibold">
                  Left
                </p>
              </div>
              <div class="flex space-x-4 items-center mt-2">
                <input
                  v-model="container.margin.left"
                  type="number"
                  class="border-2 cursor-pointer border-text-100 border-opacity-50 bg-bg-300 rounded-2xl p-2 w-20 text-sm font-semibold font-body text-text-100 focus:outline-none placeholder-text-100"
                />
              </div>
            </div>
            <div class="flex flex-col">
              <div>
                <p class="mt-8 text-xs font-body text-text-100 font-semibold">
                  Bottom
                </p>
              </div>
              <div class="flex space-x-4 items-center mt-2">
                <input
                  v-model="container.margin.bottom"
                  type="number"
                  class="border-2 cursor-pointer border-text-100 border-opacity-50 bg-bg-300 rounded-2xl p-2 w-20 text-sm font-semibold font-body text-text-100 focus:outline-none placeholder-text-100"
                />
              </div>
            </div>
            <div class="flex flex-col">
              <div>
                <p class="mt-8 text-xs font-body text-text-100 font-semibold">
                  Right
                </p>
              </div>
              <div class="flex space-x-4 items-center mt-2">
                <input
                  v-model="container.margin.right"
                  type="number"
                  class="border-2 cursor-pointer border-text-100 border-opacity-50 bg-bg-300 rounded-2xl p-2 w-20 text-sm font-semibold font-body text-text-100 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col mt-8">
          <div>
            <p class="text-sm font-body font-semibold text-text-100">Padding</p>
          </div>
          <div class="grid grid-cols-2 gap-x-12 w-full items-center">
            <div class="flex flex-col">
              <div>
                <p class="mt-4 text-xs font-body text-text-100 font-semibold">
                  Top
                </p>
              </div>
              <div class="flex space-x-4 items-center mt-2">
                <input
                  v-model="container.padding.top"
                  type="number"
                  class="border-2 cursor-pointer border-text-100 border-opacity-50 bg-bg-300 rounded-2xl p-2 w-20 text-sm font-semibold font-body text-text-100 focus:outline-none placeholder-text-100"
                />
              </div>
            </div>
            <div class="flex flex-col">
              <div>
                <p class="mt-4 text-xs font-body text-text-100 font-semibold">
                  Left
                </p>
              </div>
              <div class="flex space-x-4 items-center mt-2">
                <input
                  v-model="container.padding.left"
                  type="number"
                  class="border-2 cursor-pointer border-text-100 border-opacity-50 bg-bg-300 rounded-2xl p-2 w-20 text-sm font-semibold font-body text-text-100 focus:outline-none placeholder-text-100"
                />
              </div>
            </div>
            <div class="flex flex-col">
              <div>
                <p class="mt-8 text-xs font-body text-text-100 font-semibold">
                  Bottom
                </p>
              </div>
              <div class="flex space-x-4 items-center mt-2">
                <input
                  v-model="container.padding.bottom"
                  type="number"
                  class="border-2 cursor-pointer border-text-100 border-opacity-50 bg-bg-300 rounded-2xl p-2 w-20 text-sm font-semibold font-body text-text-100 focus:outline-none placeholder-text-100"
                />
              </div>
            </div>
            <div class="flex flex-col">
              <div>
                <p class="mt-8 text-xs font-body text-text-100 font-semibold">
                  Right
                </p>
              </div>
              <div class="flex space-x-4 items-center mt-2">
                <input
                  v-model="container.padding.right"
                  type="number"
                  class="border-2 cursor-pointer border-text-100 border-opacity-50 bg-bg-300 rounded-2xl p-2 w-20 text-sm font-semibold font-body text-text-100 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="mt-10">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-body font-semibold text-text-100">Border</p>
          </div>
          <div>
            <div v-if="toggle" class="cursor-pointer" @click="switched()">
              <i class="ri-toggle-fill text-content-200 text-3xl"></i>
            </div>
            <div v-else class="cursor-pointer" @click="switched()">
              <i class="ri-toggle-line text-3xl"></i>
            </div>
          </div>
        </div>
        <section :class="toggle ? 'inline' : 'hidden'">
          <div class="grid grid-cols-2 gap-x-12 w-full items-center">
            <div class="flex flex-col">
              <div>
                <p class="mt-4 text-xs font-body text-text-100 font-semibold">
                  Top
                </p>
              </div>
              <div class="flex space-x-4 items-center mt-2">
                <input
                  v-model="container.border.top"
                  type="number"
                  class="border-2 cursor-pointer border-text-100 border-opacity-50 bg-bg-300 rounded-2xl p-2 w-20 text-sm font-semibold font-body text-text-100 focus:outline-none placeholder-text-100"
                />
              </div>
            </div>
            <div class="flex flex-col">
              <div>
                <p class="mt-4 text-xs font-body text-text-100 font-semibold">
                  Left
                </p>
              </div>
              <div class="flex space-x-4 items-center mt-2">
                <input
                  v-model="container.border.left"
                  type="number"
                  class="border-2 cursor-pointer border-text-100 border-opacity-50 bg-bg-300 rounded-2xl p-2 w-20 text-sm font-semibold font-body text-text-100 focus:outline-none placeholder-text-100"
                />
              </div>
            </div>
            <div class="flex flex-col">
              <div>
                <p class="mt-8 text-xs font-body text-text-100 font-semibold">
                  Bottom
                </p>
              </div>
              <div class="flex space-x-4 items-center mt-2">
                <input
                  v-model="container.border.bottom"
                  type="number"
                  class="border-2 cursor-pointer border-text-100 border-opacity-50 bg-bg-300 rounded-2xl p-2 w-20 text-sm font-semibold font-body text-text-100 focus:outline-none placeholder-text-100"
                />
              </div>
            </div>
            <div class="flex flex-col">
              <div>
                <p class="mt-8 text-xs font-body text-text-100 font-semibold">
                  Right
                </p>
              </div>
              <div class="flex space-x-4 items-center mt-2">
                <input
                  v-model="container.border.right"
                  type="number"
                  class="border-2 cursor-pointer border-text-100 border-opacity-50 bg-bg-300 rounded-2xl p-2 w-20 text-sm font-semibold font-body text-text-100 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div class="flex flex-col mt-12">
            <div>
              <p class="text-sm font-body font-semibold text-text-100">
                Border Radius
              </p>
            </div>
            <div class="grid grid-cols-2 gap-x-12 w-full items-center">
              <div class="flex flex-col">
                <div>
                  <p class="mt-4 text-xs font-body text-text-100 font-semibold">
                    Top-Left
                  </p>
                </div>
                <div class="flex space-x-4 items-center mt-2">
                  <input
                    v-model="container.borderRadius.topLeft"
                    type="number"
                    class="border-2 cursor-pointer border-text-100 border-opacity-50 bg-bg-300 rounded-2xl py-3 w-20 text-sm font-semibold font-body text-text-100 px-4 focus:outline-none placeholder-text-100"
                  />
                </div>
              </div>
              <div class="flex flex-col">
                <div>
                  <p class="mt-4 text-xs font-body text-text-100 font-semibold">
                    Top-Right
                  </p>
                </div>
                <div class="flex space-x-4 items-center mt-2">
                  <input
                    v-model="container.borderRadius.topRight"
                    type="number"
                    class="border-2 cursor-pointer border-text-100 border-opacity-50 bg-bg-300 rounded-2xl py-3 w-20 text-sm font-semibold font-body text-text-100 px-4 focus:outline-none placeholder-text-100"
                  />
                </div>
              </div>
              <div class="flex flex-col">
                <div>
                  <p class="mt-8 text-xs font-body text-text-100 font-semibold">
                    Bottom-Left
                  </p>
                </div>
                <div class="flex space-x-4 items-center mt-2">
                  <input
                    v-model="container.borderRadius.bottomLeft"
                    type="number"
                    class="border-2 cursor-pointer border-text-100 border-opacity-50 bg-bg-300 rounded-2xl py-3 w-20 text-sm font-semibold font-body text-text-100 px-4 focus:outline-none placeholder-text-100"
                  />
                </div>
              </div>
              <div class="flex flex-col">
                <div>
                  <p class="mt-8 text-xs font-body text-text-100 font-semibold">
                    Bottom-Right
                  </p>
                </div>
                <div class="flex space-x-4 items-center mt-2">
                  <input
                    v-model="container.borderRadius.bottomRight"
                    type="number"
                    class="border-2 cursor-pointer border-text-100 border-opacity-50 bg-bg-300 rounded-2xl py-3 w-20 text-sm font-semibold font-body text-text-100 px-4 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col mt-12">
            <div>
              <p class="text-sm font-body font-semibold text-text-100">
                Border colour
              </p>
              <p class="mt-4 text-xs font-body text-text-100 font-semibold">
                HEX
              </p>
            </div>
            <div class="picker mt-2">
              <input
                v-model="container.borderColor"
                class="focus:outline-none border-2 border-text-100 border-opacity-50 bg-bg-300 border-l-0 rounded"
                type="color"
              />
              <input
                v-model="container.borderColor"
                type="text"
                class="focus:outline-none"
                autocomplete="off"
                spellcheck="false"
              />
            </div>
          </div>
          <div class="mt-12 flex flex-col">
            <div>
              <p class="text-sm font-body font-semibold text-text-100">
                Border type
              </p>
            </div>
            <form class="mt-2">
              <div class="flex items-center justify-between">
                <div class="inline-flex items-center">
                  <input
                    v-model="container.borderStyle"
                    type="radio"
                    name="borderStyle"
                    class="cursor-pointer"
                    value="solid"
                  />
                  <label
                    class="ml-2 font-body text-sm font-semibold text-text-100"
                    >Solid</label
                  >
                </div>
                <div class="inline-flex items-center">
                  <input
                    v-model="container.borderStyle"
                    value="dashed"
                    name="borderStyle"
                    type="radio"
                    class="cursor-pointer"
                  />
                  <label
                    class="ml-2 font-body text-sm font-semibold text-text-100"
                    >Dashed</label
                  >
                </div>
                <div class="inline-flex items-center">
                  <input
                    v-model="container.borderStyle"
                    value="dotted"
                    name="borderStyle"
                    type="radio"
                    class="cursor-pointer"
                  />
                  <label
                    class="ml-2 font-body text-sm font-semibold text-text-100"
                    >Dotted</label
                  >
                </div>
              </div>
            </form>
          </div>
        </section>
      </section>
    </section>
  </section>
</template>
<script>
// not working
export default {
  data() {
    return {
      text: false,
      toggle: false,
      content: '',
      editorOption: {
        // some quill options
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ header: 1 }, { header: 2 }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ direction: 'rtl' }],
            // [{ size: ['small', false, 'large', 'huge'] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
          ],
        },
      },

      // eslint-disable-next-line no-new-object
      container: {
        ...JSON.parse(
          JSON.stringify(
            this.$store.state.element.column[
              this.$store.state.element.currentSideBar.outerIndex || 0
            ].list[this.$store.state.element.currentSideBar.innerIndex]
          )
        ),
      },
    }
  },

  computed: {
    currentEditingIndex() {
      return this.$store.state.element.currentSideBar.outerIndex
    },
    currentEditingInnerIndex() {
      return this.$store.state.element.column[this.currentEditingIndex].list[
        this.$store.state.element.currentSideBar.innerIndex || 0
      ]
    },
  },
  watch: {
    currentEditingInnerIndex: {
      deep: true,
      handler() {
        this.content = this.$store.state.element.column[
          this.currentEditingIndex
        ].list[this.$store.state.element.currentSideBar.innerIndex].content
      },
    },
    container: {
      deep: true,
      handler() {
        this.$store.commit('element/editElement', {
          property: this.container,
          outterIndex: this.$store.state.element.currentSideBar.outerIndex || 0,
          innerIndex: this.$store.state.element.currentSideBar.innerIndex || 0,
        })
      },
    },
    currentEditingIndex: {
      deep: true,
      handler() {
        this.container = JSON.parse(
          JSON.stringify(
            this.$store.state.element.column[this.currentEditingIndex].list[
              this.$store.state.element.currentSideBar.innerIndex
            ]
          )
        )
      },
    },
  },
  mounted() {
    console.log('app init, my quill insrance object is:', this)
    // setTimeout(() => {
    this.content = this.container.content
    // }, 3000)
  },
  methods: {
    selectColumn() {
      this.$store.commit('element/displayElements', true)
      this.$store.commit('element/displayElementSettings', false)
    },
    space(align) {
      console.log(align)
      this.container = {
        ...this.container,
        position: align,
        margin: { right: 0, left: 0, top: 0, bottom: 0 },
      }
    },
    switched() {
      this.toggle = !this.toggle
    },
    displayTextSettings() {
      this.text = !this.text
    },
    onEditorBlur(editor) {
      console.log('editor blur!', editor)
    },
    onEditorFocus(editor) {
      console.log('editor focus!', editor)
    },
    onEditorReady(editor) {
      console.log('editor ready!', editor)
    },
    onEditorChange({ editor, html, text }) {
      console.log('editor change!', editor, html, text)
      this.container.content = html
    },
    lineSpacing(event) {
      console.log(this.container.id)
      document.querySelectorAll('[section=text]').forEach((e, i) => {
        if (e.id === this.container.id.toString()) {
          console.log(e.id)
          e.style.letterSpacing = event.target.value + 'px'
        }
      })
      this.container = { ...this.container, letterSpacing: event.target.value }
    },
    lineHeight(event) {
      console.log(this.container.id)
      document.querySelectorAll('[section=text]').forEach((e, i) => {
        if (e.id === this.container.id.toString()) {
          console.log(e.id)
          e.style.lineHeight = event.target.value + 'px'
        }
      })
      this.container = { ...this.container, lineHeight: event.target.value }
    },
  },
}
</script>
<style>
.ql-toolbar.ql-snow {
  /* grid-template-columns: repeat(2, minmax(0, 1fr)) !important; */
  display: flex !important;
  /* grid-gap: 1rem; */
  flex-wrap: wrap;
}
.ql-toolbar.ql-snow .ql-formats {
  margin: 5px;
}
.ql-align-center {
  text-align: center !important;
}
.ql-align-left {
  text-align: left !important;
}
.ql-align-right {
  text-align: right !important;
}
.ql-align-justify {
  text-align: justify !important;
}
h1 {
  font-size: 25px;
}

h2 {
  font-size: 20px;
}

h3 {
  font-size: 15px;
}

h4 {
  font-size: 13px;
}

h5 {
  font-size: 10px;
}

h6 {
  font-size: 8px;
}
ul {
  list-style-type: circle;
  padding: 30px;
}
ol {
  list-style-type: decimal;
  padding: 30px;
}
.ql-editor .ql-size-small {
  font-size: 0.75em !important;
}
.ql-editor .ql-size-large {
  font-size: 1.5em !important;
}
.ql-editor .ql-size-huge {
  font-size: 2.5em !important;
}
.ql-editor .ql-direction-rtl {
  direction: rtl;
  text-align: inherit;
}
.ql-editor .ql-align-center {
  text-align: center;
}
.ql-editor .ql-align-justify {
  text-align: justify;
}
.ql-editor .ql-align-right {
  text-align: right;
}
</style>

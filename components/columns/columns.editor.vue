<template>
  <section class="h-full">
    <section class="flex space-x-2 items-center">
      <button
        class="focus:outline-none inline-flex items-center space-x-2 cursor-pointer"
        @click="selectColumn('section')"
      >
        <i class="ri-arrow-left-s-line"></i>

        <p class="text-base font-body text-text-100">Back</p>
      </button>
    </section>
    <section
      class="mt-4 flex justify-between items-center bg-content-100 rounded-md p-2 cursor-pointer"
      @click="displayProperties()"
    >
      <div>
        <p class="text-base font-body text-text-100">Section Properties</p>
      </div>
      <div>
        <button
          :class="properties ? 'hidden' : 'inline'"
          class="focus:outline-none"
        >
          <i class="ri-arrow-drop-right-line text-text-100 text-2xl"></i>
        </button>
        <button
          :class="properties ? 'inline' : 'hidden'"
          class="focus:outline-none"
        >
          <i class="ri-arrow-drop-down-line text-text-100 text-2xl"></i>
        </button>
      </div>
    </section>
    <section
      v-if="Object.keys(container).length > 1 && properties"
      class="mt-4"
    >
      <section class="mt-4">
        <div class="flex flex-col">
          <div>
            <p class="text-sm font-body font-semibold text-text-100">
              Background colour
            </p>
            <p class="mt-4 text-xs font-body text-text-100 font-semibold">
              HEX
            </p>
          </div>
          <div class="picker mt-2">
            <input
              v-model="container.backgroundColor"
              class="focus:outline-none border-2 border-text-100 border-opacity-50 bg-bg-300 border-l-0 rounded"
              type="color"
            />
            <input
              v-model="container.backgroundColor"
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
              Background Image
            </p>
          </div>
          <div class="mt-3">
            <label
              class="w-full flex space-x-6 items-center p-4 rounded-lg border border-border-100 cursor-pointer border-dashed"
            >
              <img src="/image/Group 253.png" class="w-12" alt="" />
              <span class="text-sm font-body text-semibold text-text-100"
                >Drag and drop or click to upload an image</span
              >
              <input type="file" class="hidden" @change="newImage" />
            </label>
          </div>
        </div>
        <div class="mt-12 flex flex-col">
          <div>
            <p class="text-sm font-body font-semibold text-text-100">
              Background Repeat
            </p>
          </div>

          <div class="flex items-center justify-between">
            <div class="inline-flex items-center">
              <input
                v-model="container.backgroundRepeat"
                type="radio"
                name="backgroundrepeat"
                class="cursor-pointer"
                value="repeat"
              />
              <label class="ml-2 font-body text-sm font-semibold text-text-100"
                >Repeat</label
              >
            </div>
            <div class="inline-flex items-center">
              <input
                v-model="container.backgroundRepeat"
                value="no-repeat"
                name="backgroundrepeat"
                type="radio"
                class="cursor-pointer"
              />
              <label class="ml-2 font-body text-sm font-semibold text-text-100"
                >No-repeat</label
              >
            </div>
          </div>
        </div>
        <div class="mt-12 flex flex-col">
          <div>
            <p class="text-sm font-body font-semibold text-text-100">
              Background Size
            </p>
          </div>

          <div class="flex items-center justify-between">
            <div class="inline-flex items-center">
              <input
                v-model="container.backgroundSize"
                type="radio"
                name="backgroundSize"
                class="cursor-pointer"
                value="contain"
              />
              <label class="ml-2 font-body text-sm font-semibold text-text-100"
                >Contain</label
              >
            </div>
            <div class="inline-flex items-center">
              <input
                v-model="container.backgroundSize"
                value="cover"
                name="backgroundSize"
                type="radio"
                class="cursor-pointer"
              />
              <label class="ml-2 font-body text-sm font-semibold text-text-100"
                >Cover</label
              >
            </div>
            <div class="inline-flex items-center">
              <input
                v-model="container.backgroundSize"
                value="auto"
                name="backgroundSize"
                type="radio"
                class="cursor-pointer"
              />
              <label class="ml-2 font-body text-sm font-semibold text-text-100"
                >Auto</label
              >
            </div>
          </div>
        </div>
        <div class="mt-12 flex flex-col">
          <div>
            <p class="text-sm font-body font-semibold text-text-100">
              Background Position
            </p>
          </div>

          <div class="flex items-center justify-between">
            <div class="inline-flex items-center">
              <input
                v-model="container.backgroundPosition"
                type="radio"
                name="backgroundPosition"
                class="cursor-pointer"
                value="left"
              />
              <label class="ml-2 font-body text-sm font-semibold text-text-100"
                >Left</label
              >
            </div>
            <div class="inline-flex items-center">
              <input
                v-model="container.backgroundPosition"
                value="center"
                name="backgroundPosition"
                type="radio"
                class="cursor-pointer"
              />
              <label class="ml-2 font-body text-sm font-semibold text-text-100"
                >Center</label
              >
            </div>
            <div class="inline-flex items-center">
              <input
                v-model="container.backgroundPosition"
                value="right"
                name="backgroundPosition"
                type="radio"
                class="cursor-pointer"
              />
              <label class="ml-2 font-body text-sm font-semibold text-text-100"
                >Right</label
              >
            </div>
          </div>
        </div>
        <div class="flex flex-col mt-12">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-body font-semibold text-text-100">Width</p>
            </div>
          </div>
          <div class="flex items-center space-x-4">
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
        <div class="flex flex-col mt-12">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-body font-semibold text-text-100">
                Height
              </p>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <input
              id=""
              v-model="container.height"
              type="range"
              name=""
              min="0"
              max="500"
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
        <div class="flex flex-col mt-12">
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
        <div class="mt-12 flex items-center justify-between">
          <div>
            <p class="text-sm font-body font-semibold text-text-100">
              Align Section:
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
      </section>

      <section class="mt-12">
        <div class="flex flex-col mt-12">
          <div>
            <p class="text-sm font-body font-semibold text-text-100">Margin</p>
          </div>
          <div class="grid grid-cols-2 gap-x-6 w-full items-center">
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
        <div class="flex flex-col mt-12">
          <div>
            <p class="text-sm font-body font-semibold text-text-100">Padding</p>
          </div>
          <div class="grid grid-cols-2 gap-x-6 w-full items-center">
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
      </section>

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
export default {
  data() {
    return {
      toggle: false,
      container: {
        ...JSON.parse(
          JSON.stringify(
            this.$store.state.element.column[
              this.$store.state.element.currentSideBar.outerIndex || 0
            ].properties
          )
        ),
      },
      section: false,
      properties: false,
    }
  },
  computed: {
    currentEditingIndex() {
      return this.$store.state.element.currentSideBar.outerIndex
    },
    currentContent() {
      return this.$store.state.element.content
    },
  },
  watch: {
    container: {
      deep: true,
      handler() {
        this.$store.commit('element/editComponent', {
          property: this.container,
          outerIndex: this.$store.state.element.currentSideBar.outerIndex || 0,
        })
      },
    },
    currentEditingIndex: {
      deep: true,
      handler() {
        this.container = JSON.parse(
          JSON.stringify(
            this.$store.state.element.column[this.currentEditingIndex]
              .properties
          )
        )
      },
    },
  },
  methods: {
    newImage() {
      this.container.backgroundImage =
        'https://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg'
    },

    displaySection() {
      this.section = !this.section
      if (this.section) {
        this.properties = false
      }
    },
    displayProperties() {
      this.properties = !this.properties
      if (this.properties) {
        this.section = false
      }
    },
    switched() {
      this.toggle = !this.toggle
    },
    selectColumn(content) {
      this.$store.commit('element/setColumn', content)
    },
    space(align) {
      this.container.position = align
    },
  },
}
</script>
<style></style>

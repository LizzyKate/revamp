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
      class="my-4 flex justify-between items-center bg-content-100 rounded-md p-2"
      @click="displaySocialSettings()"
    >
      <div>
        <p class="text-base font-body text-text-100">Social Settings</p>
      </div>
      <div>
        <button
          :class="social ? 'hidden' : 'inline'"
          class="focus:outline-none"
        >
          <i class="ri-arrow-drop-right-line text-text-100 text-2xl"></i>
        </button>
        <button
          :class="social ? 'inline' : 'hidden'"
          class="focus:outline-none"
        >
          <i class="ri-arrow-drop-down-line text-text-100 text-2xl"></i>
        </button>
      </div>
    </section>
    <section v-if="social" class="">
      <div
        class="bg-border-300 px-6 py-5 w-full mt-4 rounded-2xl flex flex-col"
      >
        <div class="grid-cols-5 gap-x-4 gap-y-6 grid">
          <div
            v-for="(icon, i) in Allicons"
            :key="i + 'j'"
            @click="addIcon(icon)"
          >
            <i
              :class="icon.icon"
              :style="icon.color"
              class="cursor-pointer"
            ></i>
          </div>
        </div>
      </div>

      <!-- {{ link.icons }} -->
      <div v-for="(icon, a) in link.icons" :key="a + 'v'" class="mt-12">
        <div class="flex justify-between items-center">
          <p class="text-sm font-body font-semibold text-text-100">Link</p>
          <button
            class="text-sm font-body font-semibold text-text-100 focus:outline-none"
            @click="deleteIcon(a)"
          >
            Delete
          </button>
        </div>
        <div class="relative">
          <input
            v-model="icon.link"
            type="text"
            class="mt-2 border-2 border-text-100 border-opacity-50 bg-bg-300 rounded-2xl p-2 w-full text-sm font-semibold font-body text-text-300 placeholder:text-text-300 focus:outline-none"
            placeholder="Enter URL Link"
          />
          <div class="absolute __icon">
            <i :class="icon.icon"></i>
          </div>
        </div>
        <p class="text-sm font-body font-semibold text-text-100 mt-8">Colour</p>
        <div class="picker mt-2 relative">
          <input
            v-model="icon.color"
            class="focus:outline-none border-2 border-text-100 border-opacity-50 bg-bg-300 border-l-0 rounded"
            type="color"
          />
          <input
            v-model="icon.color"
            type="text"
            class="focus:outline-none"
            autocomplete="off"
            spellcheck="false"
          />
          <div class="absolute __remix">
            <i :class="icon.icon" :style="{ color: icon.color }"></i>
          </div>
        </div>
      </div>

      <section>
        <!-- <div class="mt-4 flex flex-col">
          <div>
            <p class="text-sm font-body font-semibold text-text-100">
              Social Icon
            </p>
            <p class="mt-4 text-xs font-body text-text-100 font-semibold">
              Icon type
            </p>
          </div>
          <div class="mt-2 flex justify-between items-center">
            <select
              class="border-2 border-text-100 border-opacity-50 bg-bg-300 rounded-2xl p-2 w-32 text-sm font-semibold font-body text-text-100 focus:outline-none"
            >
              <option class="">Circle</option>
              <option class="">Square</option>
            </select>
            <div>
              <button
                class="__button bg-bg-600 p-2 rounded-md text-xs text-white font-body font-semibold focus:outline-none"
              >
                Add Icon
              </button>
            </div>
          </div>
        </div> -->
        <div class="mt-12 flex flex-col">
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

        <div class="mt-12 flex items-center justify-between">
          <div>
            <p class="text-xs font-body font-semibold text-text-100">Size:</p>
          </div>

          <div class="">
            <input
              v-model="container.size"
              type="number"
              class="border-2 border-text-100 border-opacity-50 bg-bg-300 rounded-2xl p-2 w-24 text-sm font-semibold font-body text-text-100 focus:outline-none"
            />
          </div>
        </div>

        <div class="mt-12 flex items-center justify-between">
          <div>
            <p class="text-sm font-body font-semibold text-text-100">
              Align Social:
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

      <section>
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
                  class="border-2 cursor-pointer border-text-100 border-opacity-50 bg-bg-300 rounded-2xl p-2 w-20 text-sm font-semibold font-body text-text-100 p-2 focus:outline-none placeholder-text-100"
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
      <section class="mt-12">
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
  props: {
    props: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      social: false,
      toggle: false,

      Allicons: [
        {
          name: 'facebook',
          icon: 'ri-facebook-line',
          link: '',
          color: '',
        },
        {
          name: 'facebook',
          icon: 'ri-facebook-circle-line',
          link: '',
          color: '',
        },
        {
          name: 'facebook',
          icon: 'ri-facebook-box-line',
          link: '',
          color: '',
        },
        {
          name: 'facebook',
          icon: 'ri-facebook-fill',
          link: '',
          color: '',
        },
        {
          name: 'facebook',
          icon: 'ri-facebook-circle-fill',
          link: '',
          color: '',
        },
        {
          name: 'facebook',
          icon: 'ri-facebook-box-fill',
          link: '',
          color: '',
        },
        {
          name: 'twitter',
          icon: 'ri-twitter-line',
          link: '',
          color: '',
        },
        {
          name: 'twitter',
          icon: 'ri-twitter-fill',
          link: '',
          color: '',
        },
        {
          name: 'linkedin',
          icon: 'ri-linkedin-line',
          link: '',
          color: '',
        },
        {
          name: 'linkedin',
          icon: 'ri-linkedin-box-line',
          link: '',
          color: '',
        },
        {
          name: 'linkedin',
          icon: 'ri-linkedin-fill',
          link: 'fab fa-slack',
        },
        {
          name: 'linkedin',
          icon: 'ri-linkedin-box-fill',
          link: '',
          color: '',
        },
        {
          name: 'instagram',
          icon: 'ri-instagram-line',
          link: '',
          color: '',
        },
        {
          name: 'instagram',
          icon: 'ri-instagram-fill',
          link: '',
          color: '',
        },
        {
          name: 'youtube',
          icon: 'ri-youtube-line',
          link: '',
          color: '',
        },
        {
          name: 'youtube',
          icon: 'ri-youtube-fill',
          link: '',
          color: '',
        },
        {
          name: 'slack',
          icon: 'ri-slack-line',
          link: '',
          color: '',
        },
        {
          name: 'slack',
          icon: 'ri-slack-fill',
          link: '',
          color: '',
        },
        {
          name: 'telegram',
          icon: 'ri-telegram-line',
          link: '',
          color: '',
        },
        {
          name: 'telegram',
          icon: 'ri-telegram-fill',
          link: '',
          color: '',
        },
        {
          name: 'whatsapp',
          icon: 'ri-whatsapp-line',
          link: '',
          color: '',
        },
        {
          name: 'whatsapp',
          icon: 'ri-whatsapp-fill',
          link: '',
          color: '',
        },
      ],
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
      return this.$store.state.element.currentSideBar.innerIndex
    },
    link() {
      return this.$store.state.element.column[
        this.$store.state.element.currentSideBar.outerIndex
      ].list[this.$store.state.element.currentSideBar.innerIndex]
    },
  },
  watch: {
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
              this.currentEditingInnerIndex
            ]
          )
        )
      },
    },
    currentEditingInnerIndex: {
      deep: true,
      handler() {
        this.container = JSON.parse(
          JSON.stringify(
            this.$store.state.element.column[this.currentEditingIndex].list[
              this.currentEditingInnerIndex
            ]
          )
        )
      },
    },
    // link: {
    //   handler() {
    //     this.container = JSON.parse(
    //       JSON.stringify(
    //         this.$store.state.element.column[this.currentEditingIndex].list[
    //           this.currentEditingInnerIndex
    //         ]
    //       )
    //     )
    //   },
    // },
  },
  methods: {
    selectColumn() {
      this.$store.commit('element/displayElements', true)
      this.$store.commit('element/displayElementSettings', false)
    },
    space(align) {
      this.container.position = align
    },
    addIcon(icon) {
      let itExist = false
      this.container.icons.forEach((e, i) => {
        console.log(e, icon)
        if (e.icon === icon.icon) {
          itExist = true
        }
      })
      if (!itExist) {
        this.$store.commit('element/addIcon', {
          innerIndex: this.currentEditingInnerIndex,
          outerIndex: this.currentEditingIndex,
          icon,
        })
      }
      this.container = JSON.parse(
        JSON.stringify(
          this.$store.state.element.column[this.currentEditingIndex].list[
            this.currentEditingInnerIndex
          ]
        )
      )
    },
    displaySocialSettings() {
      this.social = !this.social
    },
    switched() {
      this.toggle = !this.toggle
    },
    deleteIcon(i) {
      if (this.container.icons.length > 1) {
        this.$store.commit('element/deleteIcon', {
          innerIndex: this.currentEditingInnerIndex,
          outerIndex: this.currentEditingIndex,
          index: i,
        })
      }
      this.container = JSON.parse(
        JSON.stringify(
          this.$store.state.element.column[this.currentEditingIndex].list[
            this.currentEditingInnerIndex
          ]
        )
      )
    },
  },
}
</script>
<style></style>

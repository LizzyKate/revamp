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
      @click="displaySpacerSettings()"
    >
      <div>
        <p class="text-base font-body text-text-100">Spacer Settings</p>
      </div>
      <div>
        <button
          :class="spacer ? 'hidden' : 'inline'"
          class="focus:outline-none"
        >
          <i class="ri-arrow-drop-right-line text-text-100 text-2xl"></i>
        </button>
        <button
          :class="spacer ? 'inline' : 'hidden'"
          class="focus:outline-none"
        >
          <i class="ri-arrow-drop-down-line text-text-100 text-2xl"></i>
        </button>
      </div>
    </section>
    <section v-if="spacer" class="mt-4">
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
        <!-- <div class="mt-12 flex items-center justify-between">
          <div>
            <p class="text-sm font-body font-semibold text-text-100">
              Align Space:
            </p>
          </div>
          <div class="flex items-center space-x-4">
            <div class="cursor-pointer">
              <i class="ri-align-left"></i>
            </div>
            <div class="cursor-pointer">
              <i class="ri-align-center"></i>
            </div>
            <div class="cursor-pointer">
              <i class="ri-align-right"></i>
            </div>
          </div>
        </div> -->
      </section>

      <section class="mt-12">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-body font-semibold text-text-100">Line</p>
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
          <div class="mt-4 flex items-center justify-between">
            <div>
              <p class="text-xs font-body font-semibold text-text-100">
                Line Size
              </p>
            </div>

            <div class="flex flex-col">
              <div class="flex items-start">
                <input
                  v-model="container.border"
                  type="number"
                  class="border-2 border-text-100 border-opacity-50 bg-bg-300 rounded-2xl p-2 w-24 text-sm font-semibold font-body text-text-100 focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div class="flex flex-col mt-8">
            <div>
              <p class="text-sm font-body font-semibold text-text-100">
                Line colour
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

          <div class="mt-8 flex items-center justify-between">
            <div class="inline-flex items-center">
              <input
                v-model="container.borderStyle"
                type="radio"
                name="borderStyle"
                class="cursor-pointer"
                value="solid"
              />
              <label class="ml-2 font-body text-sm font-semibold text-text-100"
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
              <label class="ml-2 font-body text-sm font-semibold text-text-100"
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
              <label class="ml-2 font-body text-sm font-semibold text-text-100"
                >Dotted</label
              >
            </div>
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
      spacer: false,
      toggle: false,
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
  },
  watch: {
    container: {
      deep: true,
      immediate: true,
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
      immediate: true,
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
  methods: {
    displaySpacerSettings() {
      this.spacer = !this.spacer
    },
    selectColumn() {
      this.$store.commit('element/displayElements', true)
      this.$store.commit('element/displayElementSettings', false)
    },
    switched() {
      this.toggle = !this.toggle
    },
  },
}
</script>
<style></style>

<template>
  <section v-if="Object.keys(container || {}).length" class="h-full">
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
      @click="displayImageSettings()"
    >
      <div>
        <p class="text-base font-body text-text-100">Image Settings</p>
      </div>
      <div>
        <button :class="image ? 'hidden' : 'inline'" class="focus:outline-none">
          <i class="ri-arrow-drop-right-line text-text-100 text-2xl"></i>
        </button>
        <button :class="image ? 'inline' : 'hidden'" class="focus:outline-none">
          <i class="ri-arrow-drop-down-line text-text-100 text-2xl"></i>
        </button>
      </div>
    </section>
    <section v-if="image" class="">
      <section>
        <div v-cloak class="mt-4 flex flex-col" @drop.prevent="addFile">
          <div>
            <p class="text-sm font-body font-semibold text-text-100">
              Upload Image
            </p>
          </div>
          <div class="mt-3">
            <label
              class="w-full flex space-x-6 items-center p-2 rounded-lg border border-border-100 cursor-pointer border-dashed"
            >
              <img src="/image/Group 253.png" class="w-8" alt="" />
              <span class="text-xs font-body text-semibold text-text-100"
                >Drag and drop or click to upload an image</span
              >
              <input type="file" class="hidden" @change="newImage()" />
            </label>
          </div>
        </div>
        <div class="mt-8 flex flex-col">
          <div>
            <p class="text-xs font-body font-semibold text-text-100">
              IMAGE URL
            </p>
          </div>
          <input
            v-model="container.image"
            class="mt-2 border-2 border-text-100 border-opacity-50 bg-bg-300 rounded-2xl py-2 w-full text-sm font-semibold font-body text-text-100 px-5"
          />
          <p class=""></p>
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
                Height
              </p>
            </div>
          </div>
          <div class="flex item-center space-x-4">
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
        <div class="mt-8 flex items-center justify-between">
          <div>
            <p class="text-sm font-body font-semibold text-text-100">
              Align Image:
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

      <!-- <div class="flex justify-between items-center mt-8">
      <div class="flex items-center space-x-4">
        <div class="border border-border-100 rounded-md px-4">
          <img src="/image/fly.png" class="mx-auto" alt="" />
        </div>
        <div class="flex flex-col">
          <p class="text-xs font-semibold font-body text-text-100">
            astronaut.jpg
          </p>
          <p class="text-xs font-body text-text-200">0.8mb</p>
        </div>
      </div>
    </div> -->
      <section class="mt-12">
        <div class="flex flex-col">
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
                  class="border-2 cursor-pointer border-text-100 border-opacity-50 bg-bg-300 rounded-2xl py-3 w-20 text-sm font-semibold font-body text-text-100 px-4 focus:outline-none placeholder-text-100"
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
                  class="border-2 cursor-pointer border-text-100 border-opacity-50 bg-bg-300 rounded-2xl py-3 w-20 text-sm font-semibold font-body text-text-100 px-4 focus:outline-none placeholder-text-100"
                />
              </div>
            </div>
            <div class="flex flex-col">
              <div>
                <p class="mt-4 text-xs font-body text-text-100 font-semibold">
                  Bottom
                </p>
              </div>
              <div class="flex space-x-4 items-center mt-2">
                <input
                  v-model="container.margin.bottom"
                  type="number"
                  class="border-2 cursor-pointer border-text-100 border-opacity-50 bg-bg-300 rounded-2xl py-3 w-20 text-sm font-semibold font-body text-text-100 px-4 focus:outline-none placeholder-text-100"
                />
              </div>
            </div>
            <div class="flex flex-col">
              <div>
                <p class="mt-4 text-xs font-body text-text-100 font-semibold">
                  Right
                </p>
              </div>
              <div class="flex space-x-4 items-center mt-2">
                <input
                  v-model="container.margin.right"
                  type="number"
                  class="border-2 cursor-pointer border-text-100 border-opacity-50 bg-bg-300 rounded-2xl py-3 w-20 text-sm font-semibold font-body text-text-100 px-4 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col mt-10">
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
                  class="border-2 cursor-pointer border-text-100 border-opacity-50 bg-bg-300 rounded-2xl py-3 w-20 text-sm font-semibold font-body text-text-100 px-4 focus:outline-none placeholder-text-100"
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
                  class="border-2 cursor-pointer border-text-100 border-opacity-50 bg-bg-300 rounded-2xl py-3 w-20 text-sm font-semibold font-body text-text-100 px-4 focus:outline-none placeholder-text-100"
                />
              </div>
            </div>
            <div class="flex flex-col">
              <div>
                <p class="mt-4 text-xs font-body text-text-100 font-semibold">
                  Bottom
                </p>
              </div>
              <div class="flex space-x-4 items-center mt-2">
                <input
                  v-model="container.padding.bottom"
                  type="number"
                  class="border-2 cursor-pointer border-text-100 border-opacity-50 bg-bg-300 rounded-2xl py-3 w-20 text-sm font-semibold font-body text-text-100 px-4 focus:outline-none placeholder-text-100"
                />
              </div>
            </div>
            <div class="flex flex-col">
              <div>
                <p class="mt-4 text-xs font-body text-text-100 font-semibold">
                  Right
                </p>
              </div>
              <div class="flex space-x-4 items-center mt-2">
                <input
                  v-model="container.padding.right"
                  type="number"
                  class="border-2 cursor-pointer border-text-100 border-opacity-50 bg-bg-300 rounded-2xl py-3 w-20 text-sm font-semibold font-body text-text-100 px-4 focus:outline-none"
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

      <!-- <div class="mt-16">
      <h6 class="font-body font-semibold text-lg text-text-100">Actions</h6>
    </div>
    <div
      class="border border-b-0 border-l-o border-r-0 border-border-100 w-full mt-4 border-opacity-50"
    ></div>
    <div class="mt-8 flex flex-col">
      <div>
        <p class="text-xs font-body font-semibold text-text-100">Action Type</p>
      </div>
      <select
        class="mt-2 border-2 border-text-100 border-opacity-50 bg-bg-300 rounded-2xl py-3 w-full text-sm font-semibold font-body text-text-100 px-5 focus:outline-none"
      >
        <option class="">Opens website</option>
        <option class="">Select an email</option>
        <option class="">Call phone number</option>
        <option class="">Send a sms</option>
      </select>
    </div>
    website
    <div class="mt-4 flex flex-col">
      <div>
        <p class="text-xs font-body font-semibold text-text-100">Website URL</p>
      </div>
      <input
        type="url"
        class="mt-2 border-2 border-text-100 border-opacity-50 bg-bg-300 rounded-2xl py-3 w-full text-sm font-semibold font-body text-text-300 placeholder:text-text-300 px-5 focus:outline-none"
        placeholder="Enter website URL"
        required
      />
    </div>

    email
    <div class="mt-4 flex flex-col">
      <div>
        <p class="text-xs font-body font-semibold text-text-100">MAIL TO</p>
      </div>
      <input
        type="email"
        class="mt-2 border-2 border-text-100 border-opacity-50 bg-bg-300 rounded-2xl py-3 w-full text-sm font-semibold font-body text-text-300 placeholder:text-text-300 px-5 focus:outline-none"
        placeholder="hello@engage.so"
        required
      />
      <div class="mt-6">
        <p class="text-xs font-body font-semibold text-text-100">Subject</p>
      </div>
      <input
        type="text"
        class="mt-2 border-2 border-text-100 border-opacity-50 bg-bg-300 rounded-2xl py-3 w-full text-sm font-semibold font-body text-text-300 placeholder:text-text-300 px-5 focus:outline-none"
        placeholder="Enter a title here"
        required
      />
      <div class="mt-6">
        <p class="text-xs font-body font-semibold text-text-100">
          MESSAGE BODY
        </p>
      </div>
      <input
        type="text"
        class="mt-2 border-2 border-text-100 border-opacity-50 bg-bg-300 rounded-2xl py-3 w-full text-sm font-semibold font-body text-text-300 placeholder:text-text-300 px-5 focus:outline-none"
        placeholder="Enter your message here"
        required
      />
    </div>

    phone number
    <div class="mt-4 flex flex-col">
      <div>
        <p class="text-xs font-body font-semibold text-text-100">
          SENDER'S NUMBER
        </p>
      </div>
      <input
        type="tel"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        class="mt-2 border-2 border-text-100 border-opacity-50 bg-bg-300 rounded-2xl py-3 w-full text-sm font-semibold font-body text-text-300 placeholder:text-text-300 px-5 focus:outline-none"
        placeholder="08134345433"
        required
      />
    </div> -->
    </section>
  </section>
</template>
<script>
export default {
  data() {
    return {
      image: false,
      files: [],
      toggle: false,

      // eslint-disable-next-line no-new-object
      container: {
        ...JSON.parse(
          JSON.stringify(
            this.$store.state.element.column[
              this.$store.state.element.currentSideBar.outerIndex || 0
            ].list[this.$store.state.element.currentSideBar.innerIndex || 0]
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
    space(align) {
      this.container.position = align
    },
    switched() {
      this.toggle = !this.toggle
    },
    newImage() {
      this.container.image =
        'https://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg'

      console.log('I clicked')
    },
    addFile(e) {
      const files = e.dataTransfer.files
      ;[...files].forEach((file) => {
        this.files.push(file)
        console.log(this.files, 'lizzy')
      })
    },
    displayImageSettings() {
      this.image = !this.image
    },
    selectColumn() {
      this.$store.commit('element/displayElements', true)
      this.$store.commit('element/displayElementSettings', false)
    },
  },
}
</script>
<style></style>

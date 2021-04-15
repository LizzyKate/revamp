<template>
  <section class="h-full">
    <div class="flex flex-col">
      <div>
        <p class="text-sm font-body font-semibold text-text-100">
          Background colour
        </p>
        <p class="mt-4 text-xs font-body text-text-100 font-semibold">HEX</p>
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
      <div class="mt-4">
        <label
          class="w-full flex space-x-6 items-center p-4 rounded-lg border border-border-100 cursor-pointer border-dashed"
        >
          <img src="/image/Group 253.png" class="w-12" alt="" />
          <span class="text-sm font-body text-semibold text-text-100"
            >Drag and drop or click to upload an image</span
          >
          <input type="file" @change="uploadFile" class="hidden" />
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
          <p class="text-sm font-body font-semibold text-text-100">
            Email Width
          </p>
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

          <div class="flex items-center justify-between">
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
        </div>
      </section>
    </section>
  </section>
</template>
<script>
// import S3 from '../../data/awsconfig'
export default {
  components: {},
  data() {
    return {
      toggle: false,
      file: {},
    }
  },
  computed: {
    baseURL() {
      return 'https://elizabeths-bucket-123435.s3-us-west-2.amazonaws.com'
    },
    newFileName() {
      return Math.random().toString().slice(2)
    },
    url() {
      return `${this.baseURL}/${this.newFileName}`
    },
    container() {
      return this.$store.state.element.container
    },
  },
  methods: {
    switched() {
      this.toggle = !this.toggle
    },
    uploadFile(event) {
      debugger

      // const file = event.target.files[0]

      // S3.S3Client.uploadFile(file, this.newFileName).finally(() => {
      //   this.isLoading = false
      //   const fileExtension = file.type.split('/')[1]
      //   console.log(`${this.url}.${fileExtension}`)
      // })
    },
  },
}
</script>
<style></style>

<template>
  <section class="bg-white">
    <nav
      class="flex justify-between items-center border-2 border-100 px-5 py-4"
    >
      <div class="flex items-center">
        <button
          class="border-border-200 border-2 flex items-center justify-center py-2 rounded-xl px-4 focus:outline-none"
        >
          <img src="/image/arrow.png" alt="" />
          <p class="ml-3 font-semibold font-body text-text-100">Go back</p>
        </button>
        <div class="ml-6 cursor-pointer">
          <img src="/image/image 5.png" alt="" />
        </div>
      </div>
      <button
        class="border-border-200 border-2 rounded-xl flex items-center justify-center py-2 px-4 focus:outline-none"
      >
        <img src="/image/library.png" alt="" />
        <p class="font-semibold ml-3 text-xs font-body text-text-100">
          Template Library
        </p>
      </button>
      <div class="flex items-center">
        <button
          class="border-border-200 border-2 rounded-xl py-2 px-3 focus:outline-none"
        >
          <img src="/image/undo.png" alt="" />
        </button>
        <button
          class="border-border-200 border-2 rounded-xl py-2 px-3 ml-2 focus:outline-none"
        >
          <img src="/image/redo.png" alt="" />
        </button>
      </div>
      <div class="flex items-center">
        <button
          class="border-border-200 border-2 rounded-xl flex items-center justify-center py-2 px-4 focus:outline-none"
          @click="$router.push('/Preview/' + $route.params.id)"
        >
          <img src="/image/library.png" alt="" />
          <p class="font-semibold ml-2 text-xs font-body text-text-100">Test</p>
        </button>
        <div
          class="border-border-200 border-2 rounded-xl py-2 px-3 ml-2 cursor-pointer"
        >
          <img src="/image/edit.png" alt="" />
        </div>
        <div
          class="border-border-200 border-2 rounded-xl py-2 px-3 ml-2 cursor-pointer"
        >
          <img src="/image/copy.png" alt="" />
        </div>
      </div>
      <div class="flex items-center space-x-8">
        <button class="focus:outline-none" @click="save()">
          <img src="/image/upload.png" class="cursor-pointer" alt="" />
        </button>
        <div v-if="onSaved" class="ml-2">
          <p class="text-xs font-body font-semibold text-text-200">
            Draft saved
          </p>
        </div>
        <div class="ml-3">
          <button
            class="py-2 px-4 bg-bg-100 text-white font-body text-sm text-semibold rounded-xl focus:outline-none"
          >
            Export
          </button>
        </div>
      </div>
    </nav>
  </section>
</template>
<script>
export default {
  data() {
    return {
      onSaved: false,
    }
  },
  methods: {
    save() {
      // check if the item is in local storage
      // if the item is there remove it
      // create a new one else create a new one

      if (localStorage.getItem(this.$route.params.id)) {
        localStorage.removeItem(this.$route.params.id)
      }
      localStorage.setItem(
        this.$route.params.id,
        JSON.stringify(this.$store.state.element.column)
      )
      this.onSaved = true
    },
  },
}
</script>
<style></style>

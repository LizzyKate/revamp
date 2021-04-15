<template>
  <section class="min-h-screen __pad">
    <!-- <div class="w-full ">
      <p class="font-body font-semibold text-sm text-text-200 text-center">
        Drag structure to add columns to this area
      </p>
    </div>

    <div
      class="border-2 border-dashed border-border-200 border-b-0 justify-center pt-12 pb-64 relative hidden __space"
    >
      <div class="absolute">
        <img src="/image/Group 196.png" alt="" />
      </div>
      <div
        class="border-2 border-dashed border-border-400 text-text-200 px-56 text-lg font-semibold font-body rounded-2xl py-5 __margin"
      >
        You can release it here
      </div>
    </div> -->
    <container-preview-vue class="" />
  </section>
</template>
<script>
import containerPreviewVue from '../Container/container.preview.vue'

export default {
  components: {
    containerPreviewVue,
  },
}
</script>
<style></style>

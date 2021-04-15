<template>
  <div class="relative lg:inline hidden">
    <nav-vue class="fixed w-full __nav z-50" />
    <div class="flex min-h-screen">
      <aside
        class="__width max-h-screen w-2/5 overflow-y-scroll overflow-x-hidden sticky top-0 px-5"
      >
        <side-nav-vue class="__pad" />
      </aside>
      <div class="w-full bg-content-100">
        <main-vue class="" />
      </div>
    </div>
  </div>
</template>
<script>
import mainVue from '~/components/Editor/main.vue'
import sideNavVue from '~/components/Editor/sideNav.vue'
import navVue from '~/components/General/nav.vue'

export default {
  components: {
    mainVue,
    sideNavVue,
    navVue,
  },
}
</script>
<style scoped>
.__width {
  max-width: 340px;
  max-height: 85vh;
}
.__top {
  top: 115px;
}
.__pad {
  padding-top: 6.5rem;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: white;
}
::-webkit-scrollbar-thumb {
  background: #f1f1f1;
}
</style>

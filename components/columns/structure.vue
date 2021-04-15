<template>
  <section class="px-3">
    <section class="">
      <button
        class="focus:outline-none inline-flex w-full bg-content-100 rounded-md p-2 justify-between items-center cursor-pointer"
        @click="selectColumn('sectionSettings')"
      >
        <p class="text-sm font-body text-text-100">Settings</p>
        <i class="ri-arrow-right-line"></i>
      </button>
    </section>
    <!-- When column is dragged -->
    <draggable
      :group="{ name: '346fweey3', pull: 'clone', put: false }"
      :clone="CustomClone"
      @move="moveEvent"
      @end="handleDragEnd"
      @drop="handleDrop($event, 'drop')"
      @dragend="handleDrop($event, 'dragEnd')"
    >
      <div v-for="(col, i) in columns" id="structure" :key="i" class="mt-4">
        <div class="bg-border-300 rounded-lg mx-auto p-2">
          <div class="flex items-center">
            <i class="ri-more-2-line cursor-move handle"></i>
            <div
              class="space-x-2 flex items-center justify-center cursor-pointer w-4/5 mx-auto"
            >
              <img
                v-for="(c, a) in col.imgageUrl"
                :key="a"
                :style="{ width: `${100 / col.imgageUrl.length}%` }"
                src="/image/Group 207.png"
                class="h-4 mx-auto"
                alt=""
              />
            </div>
          </div>
        </div>
        <p class="font-body text-text-100 text-xs font-light text-center mt-2">
          {{ col.name }}
        </p>
      </div>
    </draggable>
  </section>
</template>
<script>
import draggable from 'vuedraggable'
import { columnProps } from '../../data/elements'
export default {
  components: {
    draggable,
  },
  data() {
    return {
      columns: [
        {
          name: '1 Column',
          imgageUrl: ['/image/Group 207.png'],
          list: [],
          properties: { ...columnProps },
        },
        {
          name: '2 Column',
          imgageUrl: ['/image/Group 207.png', '/image/Group 207.png'],
          list: [],
          properties: { ...columnProps },
        },
        {
          name: '3 Column',
          imgageUrl: [
            '/image/Group 207.png',
            '/image/Group 207.png',
            '/image/Group 207.png',
          ],
          list: [],
          properties: { ...columnProps },
        },
        {
          name: '4 Column',
          imgageUrl: [
            '/image/Group 207.png',
            '/image/Group 207.png',
            '/image/Group 207.png',
            '/image/Group 207.png',
          ],
          list: [],
          properties: { ...columnProps },
        },
      ],
    }
  },
  methods: {
    CustomClone({ id }) {
      return {
        ...this.columns[id],
      }
    },
    handleDragEnd($event, index) {
      console.log($event, 'event drag end')
      this.addSection($event.oldIndex + 1, $event.newIndex)
      return false
    },
    moveEvent(event) {
      return false
      // console.log(event.draggedContext)
    },
    addSection(amount, newIndex) {
      // amount is the number of columns in a section
      // index is the index in the new column

      this.$store.commit('element/AddRows', { amount, index: newIndex })
    },
    selectColumn(content) {
      this.$store.commit('element/setColumn', content)
    },
  },
}
</script>
<style></style>

<template>
  <div
    class=""
    :style="{
      textAlign: cssProperties.position,
      margin: `${cssProperties.margin.top || 0}px ${
        cssProperties.margin.right || 0
      }px ${cssProperties.margin.bottom || 0}px ${
        cssProperties.margin.left || 0
      }px`,
      borderRadius: `${cssProperties.borderRadius.topLeft || 0}px ${
        cssProperties.borderRadius.topRight || 0
      }px ${cssProperties.borderRadius.bottomRight || 0}px ${
        cssProperties.borderRadius.bottomLeft || 0
      }px`,

      borderTop: `${cssProperties.border.top}px ${cssProperties.borderStyle} ${cssProperties.borderColor}`,
      borderLeft: `${cssProperties.border.left}px ${cssProperties.borderStyle} ${cssProperties.borderColor}`,
      borderRight: `${cssProperties.border.right}px ${cssProperties.borderStyle} ${cssProperties.borderColor}`,
      borderBottom: `${cssProperties.border.bottom}px ${cssProperties.borderStyle} ${cssProperties.borderColor}`,
      padding: `${cssProperties.padding.top || 0}px ${
        cssProperties.padding.right || 0
      }px ${cssProperties.padding.bottom || 0}px ${
        cssProperties.padding.left || 0
      }px`,
    }"
    @click="handleClick"
  >
    <!-- <img src="/image/jump.png" alt="" /> -->
    <img
      :src="cssProperties.image"
      :style="{
        width: cssProperties.width + '%',
        height: cssProperties.height + '%',
        opacity: cssProperties.opacity,
      }"
      class="inline-block"
      alt=""
    />
  </div>
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
    return {}
  },
  computed: {
    cssProperties() {
      return this.$store.state.element.column[this.props.i].list[this.props.f]
    },
  },
  methods: {
    handleClick() {
      this.$store.commit('element/setColumn', 'content')
      this.$store.commit('element/displaySideBar', {
        innerIndex: this.props.f,
        outerIndex: this.props.i,
        type: 'Image',
      })
      this.$store.commit('element/displayElementSettings', true)
      this.$store.commit('element/displayElements', false)
    },
  },
}
</script>
<style></style>

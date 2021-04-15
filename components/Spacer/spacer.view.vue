<template>
  <section @click="handleClick">
    <div
      :style="{
        backgroundColor: cssProperties.backgroundColor,
        width: cssProperties.width + '%',
        height: cssProperties.height + 'px',
        border: `${cssProperties.border}px ${cssProperties.borderStyle} ${cssProperties.borderColor}`,
      }"
    >
      {{ cssProperties.height }}
    </div>
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
        type: 'Spacer',
      })
      this.$store.commit('element/displayElementSettings', true)
      this.$store.commit('element/displayElements', false)
    },
  },
}
</script>
<style></style>

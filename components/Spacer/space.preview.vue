<template>
  <section>
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
}
</script>
<style></style>

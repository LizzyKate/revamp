<template>
  <!-- add it here  -->
  <section
    :id="cssProperties.id"
    class="flex"
    section="text"
    :class="
      cssProperties.position === 'center'
        ? 'justify-center'
        : cssProperties.position === 'right'
        ? 'justify-end'
        : 'justify-start'
    "
    @click="handleClick"
  >
    <div
      :style="{
        backgroundColor: cssProperties.textColor,
        letterSpacing: cssProperties.letterSpacing + 'px',
        lineHeight: cssProperties.lineHeight + 'px',
        width: cssProperties.width + '%',
        opacity: cssProperties.opacity,
        borderRadius: `${cssProperties.borderRadius.topLeft || 0}px ${
          cssProperties.borderRadius.topRight || 0
        }px ${cssProperties.borderRadius.bottomRight || 0}px ${
          cssProperties.borderRadius.bottomLeft || 0
        }px`,
        margin: `${cssProperties.margin.top || 0}px ${
          cssProperties.margin.right || 0
        }px ${cssProperties.margin.bottom || 0}px ${
          cssProperties.margin.left || 0
        }px`,
        padding: `${cssProperties.padding.top || 0}px ${
          cssProperties.padding.right || 0
        }px ${cssProperties.padding.bottom || 0}px ${
          cssProperties.padding.left || 0
        }px`,
        borderTop: `${cssProperties.border.top}px ${cssProperties.borderStyle} ${cssProperties.borderColor}`,
        borderLeft: `${cssProperties.border.left}px ${cssProperties.borderStyle} ${cssProperties.borderColor}`,
        borderRight: `${cssProperties.border.right}px ${cssProperties.borderStyle} ${cssProperties.borderColor}`,
        borderBottom: `${cssProperties.border.bottom}px ${cssProperties.borderStyle} ${cssProperties.borderColor}`,
      }"
    >
      <!-- :id="f + '_' + i + 'text'" -->
      <div
        :id="props.f + '_' + props.i + 'text'"
        :style="cssProperties.letterSpacing + 'px'"
        style="word-break: break-all"
        v-html="cssProperties.content"
      ></div>
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
  computed: {
    cssProperties() {
      return this.$store.state.element.column[this.props.i].list[this.props.f]
    },
  },
  mounted() {
    document.querySelectorAll('#add span').forEach((e, i) => {
      e.style.letterSpacing = this.cssProperties.letterSpacing + 'px'
    })
  },
  methods: {
    handleClick() {
      this.$store.commit('element/setColumn', 'content')
      this.$store.commit('element/displaySideBar', {
        innerIndex: this.props.f,
        outerIndex: this.props.i,
        type: 'Text',
      })
      this.$store.commit('element/displayElementSettings', true)
      this.$store.commit('element/displayElements', false)
    },
    change() {},
  },
}
</script>
<style></style>

<template>
  <div
    class="text-center"
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
    <button
      class="py-2 px-5 font-body text-sm text-semibold rounded-xl focus:outline-none cursor-move"
      :style="{
        border: `${cssProperties.border}px ${cssProperties.borderStyle} ${cssProperties.borderColor}`,
        width: cssProperties.width + '%',
        backgroundColor: cssProperties.buttonColor,
        color: cssProperties.textColor,
        borderRadius: cssProperties.borderRadius + 'px',
        padding: `${cssProperties.padding.top || 0}px ${
          cssProperties.padding.right || 0
        }px ${cssProperties.padding.bottom || 0}px ${
          cssProperties.padding.left || 0
        }px`,
        opacity: cssProperties.opacity,
      }"
    >
      {{ cssProperties.content }}
    </button>
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
        type: 'Button',
      })
      this.$store.commit('element/displayElements', false)
      this.$store.commit('element/displayElementSettings', true)
    },
  },
}
</script>
<style></style>

export { default as Heart } from '../..\\components\\Heart.vue'
export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as Post } from '../..\\components\\Post.vue'
export { default as SearchBar } from '../..\\components\\SearchBar.vue'
export { default as TenPosts } from '../..\\components\\TenPosts.vue'
export { default as TopBar } from '../..\\components\\TopBar.vue'
export { default as Tutorial } from '../..\\components\\Tutorial.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}

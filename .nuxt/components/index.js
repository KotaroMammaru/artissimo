export { default as TopBar } from '../..\\components\\TopBar.vue'
export { default as PostFollowButton } from '../..\\components\\post\\FollowButton.vue'
export { default as PostHeart } from '../..\\components\\post\\Heart.vue'
export { default as Post } from '../..\\components\\post\\Post.vue'
export { default as PostUserIcon } from '../..\\components\\post\\UserIcon.vue'
export { default as SearchBar } from '../..\\components\\search\\SearchBar.vue'
export { default as SearchTenPosts } from '../..\\components\\search\\TenPosts.vue'
export { default as ReactionCard } from '../..\\components\\reaction\\Card.vue'

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

<template>
  <render :render="render"></render>
</template>
<script>
export default {
  name: "Render",
  props: { render: Function },
  components: {
    render: {
      functional: true,
      props: {
        render: Function
      },
      render: (h, ctx) => ctx.props.render(h)
    }
  }
};
</script>
<style lang="scss">
</style>
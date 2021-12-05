import { computed, defineComponent, reactive } from "vue";


const PrivateComponent = defineComponent({
  setup(props, { attrs }) {
    return () => {
      const sub = attrs.sub as { msg: string };
      return (
        <>
          { sub && sub.msg ? <p>{sub.msg}</p> : <h1>noting</h1>}
        </>)
    }
  }
});

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      formData: {
        input: ""
      }
    }
  },
  setup(props, ctx) {
    const { attrs, slots, emit } = ctx;
    /* data */
    const state = reactive({ count: 1, msg: "state" });
    /* computed */
    const doubleCount = computed(() => state.count * 2);  /* methods */
    /* methods */
    const handleClick = () => state.count++;

    /* render */
    return () => {
      const
        Main = slots.default as any,
        Sub = slots.sub as any,
        pContent = `click count: ${state.count} computed: ${doubleCount.value}`,
        mainArgs = { msg: `main's value`, count: state.count };

      return (
        <>
          <h1>Vue 3.0 with JSX</h1>
          <input v-model={state.count} type="number" />
          <Main args={mainArgs} />
          <Sub args={`sub's value`} count={state.count} />
          <button onClick={handleClick}>click</button>
          <p>{props.msg}</p>
          <p>{pContent}</p>
          <PrivateComponent {...attrs} />
        </>
      );
    };
  }
});

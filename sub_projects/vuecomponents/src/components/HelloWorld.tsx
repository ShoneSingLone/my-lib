import { computed, defineComponent, reactive } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String
  },
  setup(props) {
    /* data */
    const state = reactive({ count: 1 });
    /* computed */
    const doubleCount = computed(() => state.count * 2);
    /* methods */
    const handleClick = () => state.count++;

    /* render */
    return () => {
      return (
        <h1 onClick={handleClick}>
          {props.msg}
          {`click count: ${state.count} computed: ${doubleCount.value}`}
        </h1>
      );
    };
  }
});

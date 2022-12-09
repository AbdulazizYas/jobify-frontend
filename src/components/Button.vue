<template>
  <button :class="{primary: variant == 'primary', secondary: variant == 'secondary', outlined}">
      <slot>{{variant}}</slot>
    </button>
</template>

<script>
import { toRefs } from '@vue/reactivity'
export default {
  props: ["variant","outlined"],
  name: "Button",
  setup(props){
    const {variant, outlined} = toRefs(props);
  }
}
</script>

<style scoped>
button{
  background: none;
  border: none;
  border-radius: 30px;
  cursor: pointer;

}

button.primary {
  background-color: #3DA9FC;
  color: white;
  font-weight: bold;
  border: 2px solid #3DA9FC;
  padding: 10px 20px;
}
button.primary.outlined {
  background-color: white;
  color: #3DA9FC;
}

</style>
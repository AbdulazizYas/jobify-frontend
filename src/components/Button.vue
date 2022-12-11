<template>
  <button @click="onClick" :class="{primary: variant == 'primary', secondary: variant == 'secondary', dark: variant == 'dark', outlined}">
      <slot>{{variant}}</slot>
    </button>
</template>

<script>
import { toRefs } from '@vue/reactivity'
export default {
  props: ["variant","outlined","onClick"],
  name: "Button",
  setup(props){
    const {variant, outlined, onClick} = toRefs(props);
  }
}
</script>

<style scoped>
button{
  background: none;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  padding: 10px 20px;
  font-weight: bold;
  border-width: 2px;
  border-style: solid;
  box-shadow: 0px 4px 18px -1px rgba(23, 97, 154, 0.2);
  transition: opacity .2s ease-in-out,box-shadow .2s ease-in-out,transform .2s ease-in-out;
}
button:hover{
  opacity: .8;
  box-shadow: 0px 8px 30px -1px rgba(23, 97, 154, 0.2);
  transform: translateY(-3px);
}

button.primary {
  background-color: #3DA9FC;
  color: white;
  border-color: #3DA9FC;
}
button.primary.outlined {
  background-color: white;
  color: #3DA9FC;
}

button.dark {
  background-color: #094067;
  color: white;
  border-color: #094067;
}
button.dark.outlined {
  background-color: white;
  color: #094067;
}

</style>
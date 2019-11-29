<template>
  <div>
    <slot>
      <div name="right">
        成都
      </div>
    </slot>
  </div>
</template>

<script>
import { NavBar } from "vant";
export default {
  components: {
    [NavBar.name]: NavBar
  }
};
</script>
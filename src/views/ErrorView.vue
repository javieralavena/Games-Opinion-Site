<template>
  <div class="error">
    <Error></Error>
  </div>
</template>

<script>
// @ is an alias to /src
import Error from '@/components/Error.vue'

export default {
  name: 'ErrorView',
  components: {
    Error
  }
}
</script>
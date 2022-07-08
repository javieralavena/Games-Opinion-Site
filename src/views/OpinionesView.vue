<template>
  <div class="opinion">
    <Opiniones></Opiniones>
  </div>
</template>

<script>
// @ is an alias to /src
import Opiniones from '@/components/Opiniones.vue'

export default {
  name: 'OpinionesView',
  components: {
    Opiniones
  }
}
</script>
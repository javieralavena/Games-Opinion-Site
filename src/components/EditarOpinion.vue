<template>
    <div>
        <header>
            <h1>Editando la opinion de: {{ opiniones[EditarOpinion.id].game }}</h1>
        </header>
        <form class="mx-5">
            <label><strong>Nombre:</strong></label>
            <input required type="text" v-model="EditarOpinion.user" class="form-control"
                :placeholder="opiniones[EditarOpinion.id].user"
                :class="{ error: !hasNombre && EditarOpinion.formSend }">
            <div v-if="!hasNombre && EditarOpinion.formSend" class="errorText">
                Campo requerido
            </div>
            <br>
            <strong>Opinion:</strong>
            <textarea required type="text" v-model="EditarOpinion.opinion" cols="60" rows="4" class="form-control"
                :placeholder="opiniones[EditarOpinion.id].opinion"
                :class="{ error: !hasOpinion && EditarOpinion.formSend }"></textarea>
            <div v-if="!hasOpinion && EditarOpinion.formSend" class="errorText">
                Campo requerido
            </div>
            <br>
            <router-link :to="{ path: '/administracion' }"><button class="btn btn-primary">Regresar</button>
            </router-link>
            <button class="btn btn-info mx-3" @click.prevent="editarOpinion(EditarOpinion)">Guardar</button>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'component-editaropinion',
    // props: {},
    data: function () {
        return {

            EditarOpinion: {
                user: '',
                opinion: '',
                id: this.$route.params.id,
                formSend: false
            }
        }
    },
    computed: {
        ...mapState(['opiniones']),
        hasNombre() {
            if (this.EditarOpinion.user !== '') return true
            return false
        },
        hasOpinion() {
            if (this.EditarOpinion.opinion !== '') return true
            return false
        }
    },
    methods: {
        ...mapActions(['editaropinion']),
        editarOpinion(EditarOpinion) {

            this.EditarOpinion.formSend = true
            let valid = true

            if (!this.hasNombre) {
                valid = false
            }

            if (!this.hasOpinion) {
                valid = false
            }

            if (valid) {

                this.EditarOpinion.game = this.opiniones[EditarOpinion.id].game
                this.editaropinion(EditarOpinion)
                this.EditarOpinion.formSend = false
            }
        },
        //
        // -- UI Modification
        // -- Data fetching
        // -- Data handling and transformations
        // -- Validations and Error handling
        // -- Other functions
        // -- Vuex mappings
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
h1 {
    color: black;
    text-align: center;
    margin: 50px 0px;
}

.error {
    border: 1px solid red;
}

.errorText {
    color: red;
}
</style>
<template>
    <div>
        <div>
            <h1>Lista de Juegos Disponibles</h1>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-4" v-for="(game, index) in games" :key="index">
                    <div class="card mb-5 mx-auto" style="width: 18rem;">
                        <img :src="game.background_image" class="card-img-top" :alt="game.name">
                        <div class="card-body" style="height:70px;">
                            <h5 class="card-title">{{ game.name }}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Rating: {{ game.rating }}</li>
                            <li class="list-group-item">Released: {{ game.released }}</li>
                            <li class="list-group-item">Updated: {{ game.updated }}</li>
                        </ul>
                        <div class="card-body">
                            <!-- Button trigger modal -->
                            <div class="position-relative" style="height:50px;">
                                <button @click="seleccionarJuego(game)" type="button"
                                    class="btn btn-primary position-absolute top-50 start-50 translate-middle"
                                    data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Opinar
                                </button>
                            </div>

                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Escribe tu opinion para el
                                                juego: {{ juegoSeleccionado.name }}</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <label>Nombre:</label>
                                            <br>
                                            <input v-model="opinionJuego.nombre" type="text" style="width:100%;"
                                                class="form-control" placeholder="Evan You"
                                                :class="{ error: !hasNombre && opinionJuego.formSend }">
                                            <div v-if="!hasNombre && opinionJuego.formSend" class="errorText">
                                                Campo requerido
                                            </div>
                                            <br>
                                            <label>Opiniones:</label>
                                            <br>
                                            <textarea v-model="opinionJuego.opinion" cols="60" rows="4"
                                                class="form-control"
                                                placeholder="Tu opinion debe ir aquí..."
                                                :class="{ error: !hasOpinion && opinionJuego.formSend }"></textarea>
                                                <div v-if="!hasOpinion && opinionJuego.formSend" class="errorText">
                                                Campo requerido
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Cerrar</button>
                                            <button @click="guardarOpinion(opinionJuego)" type="button"
                                                class="btn btn-primary">Guardar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'component-home',
    // props: {},
    data: function () {
        return {

            juegoSeleccionado: "",

            opinionJuego: {
                nombre: "",
                opinion: "",
                nombreGame: "",
                formSend: false
            }
        }
    },
    computed: {
        ...mapState(['games']),
        hasNombre() {
            if (this.opinionJuego.nombre !== '') return true
            return false
        },
        hasOpinion() {
            if (this.opinionJuego.opinion !== '') return true
            return false
        }
    },
    methods: {
        ...mapActions(['guardaropinion']),
        guardarOpinion(opinionJuego) {

            this.opinionJuego.formSend = true
            let valid = true

            if (!this.hasNombre) {
                valid = false
            }

            if (!this.hasOpinion) {
                valid = false
            }

            if (valid) {

                this.opinionJuego.nombreGame = this.juegoSeleccionado.name
                this.guardaropinion(opinionJuego)
                this.cleanForm()
                this.opinionJuego.formSend = false
            }
        },
        cleanForm() {
            this.opinionJuego.nombre = ""
            this.opinionJuego.opinion = ""
        },
        seleccionarJuego(game) {
            this.juegoSeleccionado = game
        }


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
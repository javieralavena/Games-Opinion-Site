<template>
    <div>
        <div>
            <h1>Administrando la Lista de Opiniones </h1>
        </div>

        <div v-if="opiniones.length == 0">
            <div class="alert alert-danger mx-5" role="alert">
                No existen opiniones por administrar.
            </div>
        </div>
        <div v-else class="mx-5">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Persona</th>
                        <th scope="col">Juego</th>
                        <th scope="col">Opinion</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(opinion, index) in opiniones" :key="index">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ opinion.user }}</td>
                        <td>{{ opinion.game }}</td>
                        <td>{{ opinion.opinion }}</td>
                        <td style="width:100px;">
                            <button class="btn btn-danger" @click="eliminarOpinion(index)">Eliminar</button>
                        </td>
                        <td style="width:80px;">
                            <router-link :to="{ name: 'editaropinion', params: { id: `${index}` } }"><button
                                    class="btn btn-info">Editar</button></router-link>
                            <router-view></router-view>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'component-administracion',
    // props: {},
    data: function () {
        return {}
    },
    computed: {
        ...mapState(['opiniones']),

    },
    methods: {
        ...mapActions(['eliminaropinion']),
        eliminarOpinion(index) {

            let resp = confirm('¿Estas seguro de borrar la opinion?')

            if (resp) {
                this.eliminaropinion(index)
            }
        }

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
</style>
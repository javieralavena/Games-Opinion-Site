<template>
    <div>
        <div>
            <h1>Lista de Opiniones</h1>
        </div>

        <div v-if="opiniones.length == 0">
            <div class="alert alert-danger mx-5" role="alert">
                No existen opiniones por mostrar.
            </div>
        </div>

        <div v-else>
            <div class="accordion mx-5 "  id="accordionExample">
                <div class="accordion-item" v-for="(opinion, index) in opiniones" :key="index">
                    <h2 class="accordion-header" :id="`heading${index}`">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            :data-bs-target="`#collapse${index}`" aria-expanded="true" :aria-controls="`collapse${index}`">
                            Opinion creada por: {{opinion.user}}. Para el juego: {{opinion.game}}
                        </button>
                    </h2>
                    <div :id="`collapse${index}`" class="accordion-collapse collapse show" :aria-labelledby="`heading${index}`"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>Opinion:</strong> {{opinion.opinion}}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'component-opiniones',
    // props: {},
    data: function () {
        return {}
    },
    computed: {
        ...mapState(['opiniones'])
    },
    methods: {
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
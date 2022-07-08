import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeadset, faHouseChimney, faComments, faUsersGear} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHeadset, faHouseChimney, faComments, faUsersGear)

Vue.component('font-awesome-icon', FontAwesomeIcon)
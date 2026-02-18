// root/src/types/SpotType.ts

/**
 * @typedef { Object } SpotType
 * @property { "Sport-Platz" | "Sport-Anlage" } type
 */

import { PropType } from 'vue'

export default {
    props: {
        placeType: {
            type: Object,
            required: True
        }
    }
}


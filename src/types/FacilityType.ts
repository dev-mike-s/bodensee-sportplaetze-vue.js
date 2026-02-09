import type { PropType } from 'vue'

interface FacilityType {
    type: "Sport-Platz" | "Sport-Anlage"
}

/**
 * Facility-Type is an object, with the properties:
 *
 * - type as string: "Sport-Platz" | "Sport-Anlage"
 */
export default {
    props: {
        placeType: {
            type: Object as PropType<FacilityType>,
            required: true
        }
    }
}
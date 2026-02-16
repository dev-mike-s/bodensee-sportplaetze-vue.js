import type { PropType } from 'vue'
import type FacilityType from "@/types/FacilityType";

// location is the same as Facility, it means the geographical point.
// usually there is one facility and many different sport places.

interface Location {
    id: number
    street: string
    city: string
    zipcode: string
    officialFacility: string
    facilities: string[]
}
export default {
    props: {
        location: {
            // provide more specific type to `Object`
            type: Object as PropType<Location>,
            required: true
        }
    }
}
// root/src/types/Spot.ts

/**
 * @typedef { Object } Spot
 * @property { number } spotId
 * @property { number | null } parentId
 * @property { number } addressId
 * @property { string } spotName
 * @property { string } slug
 * @property { boolean } isActive
 */
export default {
    props: {
        spot: {
            type: /** @type {import('vue').PropType<Spot>} */ (Object),
            required: true
        }
    }
}
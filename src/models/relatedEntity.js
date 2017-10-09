class RelatedEntity {
    constructor(name, type, geometry) {
        this.name = name;
        this.type = type;
        this.geometry = geometry;
    }
    toJSON() {
        return {
            name: this.name,
            type: this.type,
            geometry: this.geometry.toJSON()
        }
    }
}

const RelatedEntityType = Object.freeze({
    building: 'building'
});

export { RelatedEntity, RelatedEntityType };
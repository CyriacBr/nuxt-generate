export interface EntityField {
    name: string;
    type: string;
}

export interface Store {
    entityFields: EntityField[];
}
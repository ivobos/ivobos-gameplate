import * as uuidV1 from "uuid/v1";


var entities = {};

export function create() {
    var entity = {};
    entity.uuid = uuidV1();
    entities[entity.uuid] = entity;
}


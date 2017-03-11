import * as xxhashjs from 'xxhashjs';

const SEED = 0xAB0B;

export function hash(data) {
    return xxhashjs.h32( data, SEED ).toString(16);
}
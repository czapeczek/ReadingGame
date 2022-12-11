import { writable } from 'svelte/store';

export const results = writable({
    "bad": 0,
    "good": 0
});

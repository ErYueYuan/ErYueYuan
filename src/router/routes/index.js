import vid from './vid';
import earth from "./earth";
let rotues = [
    vid,
    earth
]
let routeList = [];
for (let routeListKey in rotues) {
    for (let routeListKeyKey in rotues[routeListKey]) {
        routeList.push(rotues[routeListKey][routeListKeyKey])
    }
}
export default routeList
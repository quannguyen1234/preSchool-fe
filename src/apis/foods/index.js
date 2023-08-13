import apis from "../config";

export function getListCooking() {
    return apis.get('/recipies');
}
export function getDetailFood(id) {
    return apis.get(`/recipies/${id}`)
}
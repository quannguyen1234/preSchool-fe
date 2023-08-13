import apis from "../config";

export function login(data) {
    return apis.post("/account-management/login", data)
}

export function createAccount(data) {
    return apis.post("/account-management/users", data)
}
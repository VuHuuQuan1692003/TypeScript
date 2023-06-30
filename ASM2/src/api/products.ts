import instance from ".";
import { IProduct, updateForm, AddProductForm } from "../models";

export const getAll = () => {
    const uri = "/products"
    return instance.get(uri)
}
export const deleteProducts = (id: string) => {
    return instance.delete(`/products/${id}`)
}

export const getById = (id: string) => {
    const uri = "/products/" + id
    return instance.get(uri)
}
export const update = (id: string, body: updateForm) => {
    const uri = "/products/" + id
    return instance.put(uri, body)
}
export const create = (data: AddProductForm) => {
    const uri = "/products"
    return instance.post(uri, data)
}
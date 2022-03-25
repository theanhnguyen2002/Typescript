import instance from "./instance";
import { ProductTye } from "../types/product";

export const list = () => {
    const url = "/products";
    return instance.get(url);
}
export const remove = (id: number) => {
    const url = `/product/${id}`;
    return instance.delete(url);
}
export const read = (id: string | undefined) => {
    const url = `/product/${id}`;
    return instance.get(url);
}
export const add = (product: ProductTye) => {
    const url = "/products";
    return instance.post(url, product);
}
export const update = (product: ProductTye) => {
    const url = "/products/${product.id}";
    return instance.put(url, product);
}
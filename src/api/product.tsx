import instance from "./instance";
import { IProduct } from "../types/product";

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
export const add = (product: IProduct) => {
    const url = "/products";
    return instance.post(url, product);
}
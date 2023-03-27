const sinhvien: { name: string, grade: number, hometown: string, age: number } = {
    name: "Tài",
    grade: 5,
    age: 20,
    hometown: "Thái Bình",
}

const sinhvien2: { name: string, grade: number, hometown: string, age: number } = {
    name: "Thanh",
    grade: 5,
    age: 20,
    hometown: "Nam Định",
}

// const book: {authors: {id: number, name: string, slug: string}[], book_cover?: string, categories: {id: number, name: string, is_leaf: boolean}}
interface IBook {
    authors: Author[],
    book_cover?: string,
    categories: { id: number, name: string, is_leaf: boolean },
    description: string,
    images: Image[],
    current_seller: current_seller[],
    list_price: number,
    name: string,
    original_price: number,
    quantity_sold: quantity_sold[],
    rating_average: number,
    short_description: string,
    specifications: specifications[],
    id: number

}

interface Author {
    id: number,
    name: string,
    slug: string
}
interface current_seller {
    id: number,
    sku: string,
    name: string,
    link: string,
    logo: string,
    price: number,
    product_id: string,
    store_id: string,
    is_best_store: boolean,


}
interface Image {
    base_url: string,
    is_gallery: boolean,
    label: string,
    large_url: string,
    small_url: string,
    thumbnail_url: string
}
interface quantity_sold {
    text: string,
    value: number
}
interface specifications {
    name: string,
    attributes: [
        {
            code: string
            nam: string,
            value: string
        }
    ]
}
type user = {
    id: number,
    userName: string,
    passWord: string,
    email: string
}
type admin = user & {
    is_admin: boolean,

}

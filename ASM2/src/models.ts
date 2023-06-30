import * as Yup from 'yup';
export interface IProduct {
    id: number,
    name: string,
    price: number,
    original_price: number,
    description: string,
    images: {
        [x: string]: string | undefined; base_url: string
    }[],
    brand: {
        id: number,
        name: string,
        slug: string
    },
    specifications: ISpecification[]
}

export interface ISpecification {
    name: string,
    attributes: {
        code: string,
        name: string,
        value: string
    }
}

export const signupSchema = Yup.object({
    firstName: Yup.string().required('Truong du lieu bat buoc'),
    lastName: Yup.string().required('Truong du lieu bat buoc'),
    email: Yup.string().email('Email sai dinh dang').required('Truong du lieu bat buoc'),
    password: Yup.string().min(6).required('Truong du lieu bat buoc'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Mat khau khong khop")

})
export type SignUpForm = Yup.InferType<typeof signupSchema>

export const signinSchema = Yup.object({
    email: Yup.string().email('Email sai dinh dang').required('Truong du lieu bat buoc'),
    password: Yup.string().min(6).required('Truong du lieu bat buoc')
})
export type SignInForm = Yup.InferType<typeof signinSchema>

export const updateSchema = Yup.object({
    name: Yup.string().required('Truong du lieu bat buoc'),
    price: Yup.number().required('Truong du lieu bat buoc'),
    original_price: Yup.number().required('Truong du lieu bat buoc'),
    description: Yup.string().min(10, "Toi thieu 10 ki tu").required('Truong du lieu bat buoc'),

})
export type updateForm = Yup.InferType<typeof updateSchema>

export const AddProductSchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    price: Yup.number().required("Trường dữ liệu bắt buộc"),
    original_price: Yup.number().required("Trường dữ liệu bắt buộc"),
    images: Yup.string(),
    description: Yup.string()
})
export type AddProductForm = Yup.InferType<typeof AddProductSchema>
export interface IUser {
    _id?: number | string,
    firstName?: string,
    lastName?: string,
    email: string,
    password: string,
    confirmPassword?: string,
    role?: string,
}
import { useParams } from 'react-router-dom'
import { getById, update } from '../api/products';
import { useEffect, useState } from 'react';
import { IProduct, updateForm, updateSchema } from '../models';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";






const Update = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<updateForm>({
        resolver: yupResolver(updateSchema),
        defaultValues: async () => {
            if (id) {
                return await fetchProductById(id)
            }
        }
    })

    const { id } = useParams()


    const navigate = useNavigate()

    const onSubmit = async (data: updateForm) => {
        try {
            if (id) {
                const response = await update(id, data)
                console.log(response);
            }

            navigate('/admin')

        } catch (error) {
            console.log(error);

        }

    }
    const fetchProductById = async (id: string) => {
        const { data } = await getById(id)
        // console.log(data);
        return data

    }

    useEffect(() => {
        if (id) {
            fetchProductById(id)
        }
    }, [])

    return <> <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">


                <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <form action="" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="name">Tên</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                {...register("name")}
                            // value={product.name}

                            />
                            <p className="text-red-600 text-[10px]">{errors.name && errors.name.message} </p>

                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="email">Giá</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    {...register("original_price")}
                                // value={product.original_price}
                                />
                                <p className="text-red-600 text-[10px]">{errors.original_price && errors.original_price.message} </p>

                            </div>

                            <div>
                                <label htmlFor="phone">Giá khuyến mãi</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    {...register("price")}
                                // value={product.price}

                                />
                                <p className="text-red-600 text-[10px]">{errors.price && errors.price.message} </p>

                            </div>
                        </div>



                        <div>
                            <label htmlFor="message">Mô tả</label>

                            <textarea
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"

                                rows={8}
                                {...register("description")}

                            // value={product.description}
                            >

                            </textarea>
                            <p className="text-red-600 text-[10px]">{errors.description && errors.description.message} </p>

                        </div>

                        <div className="mt-4">
                            <button
                                type="submit"
                                className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>

}
export default Update
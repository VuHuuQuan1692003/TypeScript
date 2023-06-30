import { useEffect, useState } from "react"
import { deleteProducts, getAll } from "../api/products"
import { IProduct } from "../models"
import { Link, useNavigate } from 'react-router-dom'
const DashBoard = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState<IProduct[]>([])
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    const fetchProducts = async () => {
        const { data } = await getAll()
        setProducts(data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const removeProduct = (id: string) => {
        console.log(id);
        deleteProducts(id);


    }
    return <>
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                <thead>
                    <tr>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Tên sản phẩm
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Giá
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Giá khuyến mãi
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Hình ảnh
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Thao tác
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {
                        products.map((item) => <tr key={item.id}>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {item.name}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700"> {VND.format(item.price)}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700"> {VND.format(item.original_price)}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700"><img src={item.images?.[0].small_url} alt="" /></td>
                            <td className="space-x-2 ">
                                <Link to={`/admin/product/${item.id}`}>
                                    <button className="bg-red-600 rounded-[6px] text-[#ffffff] p-1">Sửa</button>
                                </Link>
                                <button
                                    onClick={() => {
                                        if (window.confirm('Bạn có muốn xóa không?')) {
                                            removeProduct(`${item.id}`)
                                            location.reload()

                                        }
                                    }}


                                    className="bg-red-600 rounded-[6px] text-[#ffffff] p-1">Xóa</button>
                            </td>
                        </tr>)
                    }



                </tbody>
            </table>
        </div>


    </>
}

export default DashBoard
import { Link } from 'react-router-dom'
import { IProduct } from "../models";

type Props = {
    data: IProduct
}
const Product = ({ data }: Props) => {


    return <Link to={`/product/${data.id}`} className="block w-[229px]">
        <img
            alt="Art"
            src={data.images?.[0].base_url}
            className="h-64 w-full object-cover sm:h-80 lg:h-96"
        />

        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            {data.name}
        </h3>


    </Link>
}

export default Product
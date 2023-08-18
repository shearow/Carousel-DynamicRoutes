import { useEffect, useState } from "react"

export const useFetchProducts = () => {
    const [products, setProducts] = useState(null);
    const [errors, setErrors] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const callFetchProducts = async () => {
        setIsLoading(true);

        try{
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();

            if(!res.ok) throw {status: res.status};
            setProducts(data);
        }catch(err){
            setErrors("Ha ocurrido un error. Error" + err.status);
        }finally{
            setIsLoading(false);
        }
    }

    useEffect(() => {
        callFetchProducts();
    }, []);

    return {
        ...products,
        products,
        errors,
        isLoading
    }
}
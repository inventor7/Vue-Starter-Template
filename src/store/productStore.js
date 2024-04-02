import { defineStore } from 'pinia'
import axios from "../assets/lib/axios";


export const useProductStore = defineStore('product', () => {

    // loading and error handling
    const loading = ref(false)
    const error = ref(null)


    //data

    const products = ref([])
    const currentPage = ref(1)
    const itemsPerPage = ref(10)

    // methods

    // fetch products
    const fetchProducts = async () => {
        loading.value = true
        const res = await axios.get('/api/products', {
            params: {
                page: currentPage.value,
                itemsPerPage: itemsPerPage.value
            },
        })
        console.log(res.data)
        loading.value = false
        products.value = [...products.value, ...res.data.data]
        currentPage.value++


        return res


    }


    const findProductById = (productId) => {
        return products.find(product => product.id === productId)
    }




    return {

        //data
        products,
        loading,
        error,


        //methods
        findProductById,
        fetchProducts

    }
})
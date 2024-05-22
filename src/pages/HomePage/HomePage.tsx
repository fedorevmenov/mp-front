import { PageWrapper } from "App.styled"
import { Helmet } from "react-helmet"
import { ProductGroup, ProductGroupContainer } from "./styled"
import ProductDetailsPage from "pages/ProductDetailsPage/ProductDetailsPage"
import { dummyProducts } from "pages/dummyProducts"
import ProductCard from "blocks/ProductCard"
import { I_UniRes } from "types"
import { get } from "helpers/request"
import { useEffect, useState } from "react"
import { useAppSelector } from "store"
import { selectFavorites } from "features/Favorites/selectors"




const HomePage: React.FC = () => {


    const idsInFavorites = useAppSelector(selectFavorites)

    // const [products, setProducts] = useState<any[]>()

    // useEffect(() => {
    //     get('/products')
    //         .then((res: I_UniRes) => setProducts(res.data))
    // }, [])


    // if (!products) return <p>Loading</p>
    return <>

        <Helmet>
            <title>Главная страница Marketplace</title>
        </Helmet>

        <PageWrapper>
            <ProductGroup>
                <h2>Recomended Products</h2>
                <ProductGroupContainer>
                    {dummyProducts.map((p) => (
                        <ProductCard
                            {...p}
                            key={p.id}
                            isLiked={idsInFavorites.includes(p.id)}
                        />
                    ))}
                </ProductGroupContainer>
            </ProductGroup>
        </PageWrapper>



    </>
}

export default HomePage
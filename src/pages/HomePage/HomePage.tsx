import { PageWrapper } from "App.styled"
import { Helmet } from "react-helmet"
import { ProductGroup, ProductGroupContainer } from "./styled"
import ProductDetailsPage from "pages/ProductDetailsPage/ProductDetailsPage"
import { dummyProducts } from "pages/dummyProducts"
import ProductCard from "blocks/ProductCard"




const HomePage: React.FC = () => {
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
                        //isLiked = {idsInFavorites.includes(p.id)}
                        />
                    ))}
                </ProductGroupContainer>
            </ProductGroup>
        </PageWrapper>



    </>
}

export default HomePage
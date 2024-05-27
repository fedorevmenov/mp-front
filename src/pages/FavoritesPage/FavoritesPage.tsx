import { selectFavorites } from "features/Favorites/selectors"
import { Helmet } from "react-helmet"
import { useSelector } from "react-redux"
import { ProductGroupContainer } from "./styled"
import { dummyProducts } from "pages/dummyProducts"
import ProductCard from "blocks/ProductCard"
import { PageWrapper } from "App.styled"
import { useAppSelector } from "store"






const FavoritesPage: React.FC = () => {
    const idsInFavorites = useAppSelector(selectFavorites)

    return <>
        <Helmet>
            <title>
                Home page markertplace
            </title>
        </Helmet>
        <PageWrapper>
            <h2>Favorites</h2>

            {idsInFavorites.length ? (
                <ProductGroupContainer>
                    {dummyProducts
                        .filter((p) => idsInFavorites.includes(p.id))
                        .map((p) =>
                            <ProductCard
                                {...p}
                                key={p.id}
                                isLiked={false}
                                hideLikes={true}


                            />
                        )
                    }
                </ProductGroupContainer>
            ) : (
                <p>NOte favorites</p>
            )


            }
        </PageWrapper>

    </>
}


export default FavoritesPage
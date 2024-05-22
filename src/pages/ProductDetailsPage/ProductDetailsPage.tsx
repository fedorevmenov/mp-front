import { useState, useCallback, useMemo, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'store'
import { get } from 'helpers/request'
import { addToFavorites, removeFromFavorites } from 'features/Favorites/reducer'
import { selectFavorites } from 'features/Favorites/selectors'
import { ReactComponent as HeartEmpty } from './img/heart-empty.svg'
import { ReactComponent as HeartFilled } from './img/heart-filled.svg'
import { PageWrapper } from 'App.styled'
import {
    Wrapper,
    LikeWrapper,
    ImagesWrapper,
    Image,
    InfoWrapper,
    PriceWrapper,
    PriceRegular,
    PriceRegularWhenDiscounted,
    PriceDiscounted,
} from './styled'
import type { I_UniRes } from 'types'
// import { dummyProducts } from 'pages/dummyProducts'
import { useDispatch, useSelector } from 'react-redux'
import { I_ProductDetails } from 'pages/types'
import { dummyProducts } from 'pages/dummyProducts'


const dummy: I_ProductDetails[] = [
    {
        id: 1,
        slug: 'netbook-digme-eve-15c419',
        image: '//avatars.mds.yandex.net/get-marketcms/1534436/img-ff1fb56d-5400-4926-9bd8-6531eaa47cb0.png/optimize',
        price: 11295,
        priceDiscounted: 10433,
        title: 'Ноутбук DIGMA EVE 15C419',
        description: 'Диагональ 15.6" Модель DIGMA EVE 15C419 (1920x1080, Intel Celeron 1.1 ГГц',
    },

    {
        id: 2,
        image: 'https://avatars.mds.yandex.net/get-mpic/4509881/img_id7012582578963718904.jpeg/x248_trim',
        price: 3000,
        priceDiscounted: 2500,
        title: 'Комод IKEA МАЛЬМ',
        description: '2 ящика , размер: 40х48 см , цвет: белый',
    }
]



const ProductDetailsPage: React.FC = () => {

    const { idOrSlug } = useParams();
    const dispatch = useAppDispatch()
    // console.log(idOrSlug)

    const [productDetails, setProductDetails] = useState<I_ProductDetails>()

    // useEffect(() => {
    //     get(`/products/${params.idOrSlug}`)
    //         .then((res: I_UniRes) => setProductDetails(res.data))
    // }, [params.idOrSlug])

    // let ProductsArray = dummy.find((elem) => {
    //     return elem === "idOrSlug"
    // })

    useEffect(() => {
        if (idOrSlug !== undefined) {
            const found = dummy.find((p) => {
                [String(p.id), p.slug].includes(idOrSlug)
                console.log("params", idOrSlug)
            })
            if (found) { setProductDetails(found) } else {
                console.log('pizdec')
            }
        }
        else {
            console.log("nu pizdec")
        }






    }, [idOrSlug])


    const idsInFavorites = useAppSelector(selectFavorites)

    const isLiked = useMemo(
        () => idsInFavorites.includes(productDetails?.id!),
        [idsInFavorites, productDetails]
    )

    const handleFavorites = useCallback((e: React.MouseEvent<HTMLElement>) => {
        const { productId } = e.currentTarget.dataset

        dispatch(
            !idsInFavorites.includes(+productId!)
                ? addToFavorites(+productId!)
                : removeFromFavorites(+productId!)
        )
    }, [dispatch, idsInFavorites])


    if (!productDetails) return null

    const { id, image, title, description, price, priceDiscounted } = productDetails


    return <>
        <Helmet>
            <title>Главная - MW Marketplace111</title>
        </Helmet>

        <PageWrapper>
            <Wrapper>
                <ImagesWrapper>
                    <Image src={image} />

                    <LikeWrapper
                        data-product-id={id}
                        onClick={handleFavorites}
                    >
                        {isLiked ? <HeartFilled /> : <HeartEmpty />}
                    </LikeWrapper>
                </ImagesWrapper>

                <InfoWrapper>
                    <h1>{title}</h1>

                    <PriceWrapper>
                        {Number.isInteger(priceDiscounted) ? <>
                            <PriceDiscounted>{priceDiscounted} ₽</PriceDiscounted>
                            <PriceRegularWhenDiscounted>{price} ₽</PriceRegularWhenDiscounted>
                        </> : (
                            <PriceRegular>{price} ₽</PriceRegular>
                        )}
                    </PriceWrapper>

                    <p>{description}</p>
                </InfoWrapper>
            </Wrapper>
        </PageWrapper>
    </>
}

export default ProductDetailsPage
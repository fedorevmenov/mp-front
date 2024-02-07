import { PageWrapper } from "App.styled"
import { Helmet } from "react-helmet"



const HomePage: React.FC = () => {
    return <>

        <Helmet>
            <title>Главная страница Marketplace</title>
        </Helmet>

        <PageWrapper>
            <h1>Home Page</h1>
        </PageWrapper>



    </>
}

export default HomePage
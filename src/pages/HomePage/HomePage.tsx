import { Helmet } from "react-helmet"

import { TestDiv } from './styled'

const HomePage: React.FC = () => {
    return <>

        <Helmet>
            <title>Главная страница Marketplace</title>
        </Helmet>

        <TestDiv />


        <h1>Home Page</h1>
    </>
}

export default HomePage
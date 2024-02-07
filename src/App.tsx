import AccountSettings from "pages/AccountSettings/AccountSettings"
import HomePage from "pages/HomePage"
import { Suspense } from "react"
import PublicRoutes from "routes/PublicRoutes"
import PrivateRoutes from "routes/PrivateRoutes"
import Header from "features/Header/Header"
import { AppStyle, Footer } from "App.styled"


export const App = () => {
    return <>
        <AppStyle />
        <Header />
        <Suspense fallback={'loading'}>

            <PublicRoutes />
            {/* <PrivateRoutes /> */}
        </Suspense>
        <Footer>
            <div>Marketplace-2024</div>
        </Footer>
    </>
}

export default App
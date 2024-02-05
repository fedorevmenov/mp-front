import AccountSettings from "pages/AccountSettings/AccountSettings"
import HomePage from "pages/HomePage"
import { Suspense } from "react"
import PublicRoutes from "routes/PublicRoutes"
import PrivateRoutes from "routes/PrivateRoutes"


export const App = () => {
    return (
        <Suspense fallback={'loading'}>

            <PublicRoutes />
            {/* <PrivateRoutes /> */}
        </Suspense>

    )
}

export default App
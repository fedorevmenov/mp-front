

// App paths


export const pathsPublic: { [k: string]: string } = {
    home: '/',
    productDetails: '/product/:idOrSlug'
}


export const pathsPrivaye: { [k: string]: string } = {
    accountSettings: '/account-settings',
}


export const paths: { [k: string]: string } = Object.assign({}, pathsPublic, pathsPrivaye)


export const checkPathMatch = (
    pathname: string,
    paths: { [k: string]: string },
) => {
    let isMatch = false

    const allPaths = Object.keys(paths).map((k) => paths[k])
    const pathFirstSelection = pathname.split('/')[1]


    allPaths.forEach((p) => {
        if (p.slice(1) === pathFirstSelection) isMatch = true
    })
    return isMatch
}
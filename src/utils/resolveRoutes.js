const resolveRoutes = (route) => {
    if (route.length <= 3) {
        let validRoute = route === '/' 
        ? route 
        : '/:id'

        return `/${route}`
    }
}

export default resolveRoutes
export const getDataByPathParams = (pathParams, destinations) => {
    const urlParams = pathParams.split('/')
    const pathFiltered = destinations.filter((data) => data[urlParams[2]].toLowerCase() === urlParams[3])

    return pathFiltered
}

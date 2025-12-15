export const getDataByQueryParams = (queryParams, destinations) => {
    const { country, continent, is_open_to_public } = queryParams

    if (continent) {
        destinations = destinations.filter(data =>
            data.continent.toLowerCase() === continent
        )
    }

    if (country) {
        destinations = destinations.filter(data =>
            data.country.toLowerCase() === country
        )
    }

    if (is_open_to_public) {
        destinations = destinations.filter(data =>
            data.is_open_to_public === JSON.parse(is_open_to_public)
        )
    }

    return destinations
}

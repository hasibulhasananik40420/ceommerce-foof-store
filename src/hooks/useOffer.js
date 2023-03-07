import { useEffect, useState } from "react"

const useOffer = () => {
    const [offers, setOffers] = useState([])
    useEffect(() => {
        fetch('https://ecommerce-food-store-server.vercel.app/alloffers')
            .then(res => res.json())
            .then(data => {
                setOffers(data)
            })
    }, [])

    return [offers]
}

export default useOffer
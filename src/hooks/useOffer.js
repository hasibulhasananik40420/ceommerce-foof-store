import { useEffect, useState } from "react"

const useOffer = () => {
    const [offers, setOffers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/alloffers')
            .then(res => res.json())
            .then(data => {
                setOffers(data)
            })
    }, [])

    return [offers]
}

export default useOffer
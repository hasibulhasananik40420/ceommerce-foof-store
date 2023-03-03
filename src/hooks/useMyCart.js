import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../Firebase/Firebase.init"

const useMyCart = (email) => {
    // const [user] = useAuthState(auth)
    // const email = user?.user?.email
    const [myCart, setMyCart] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/myallcart/${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setMyCart(data)
            })
    }, [email, myCart])

    return [myCart]
}

export default useMyCart
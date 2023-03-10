import { useAuthState } from "react-firebase-hooks/auth"
import { Navigate, useLocation } from "react-router-dom"
import Loading from "../component/Loading/Loading"
import auth from "../Firebase/Firebase.init"
import useAdmin from "../hooks/useAdmin"

const PrivateAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const [admin, adminLoading] = useAdmin(user)
    const location = useLocation()

    if (loading || adminLoading) {
        return <Loading />
    }

    if (!user || !admin) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

    return children
}

export default PrivateAdmin
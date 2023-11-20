import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCurrentToken } from "../redux/userSlice"

const RequireAuth = () => {
    const token = useSelector(selectCurrentToken)
    const location = useLocation()

    return (
        token
            ? <Navigate to="/" state={{ from: location }} replace />
            : <Navigate to="/login" state={{ from: location }} replace />
    )
}
export default RequireAuth
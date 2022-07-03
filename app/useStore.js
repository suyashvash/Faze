import { useSelector } from "react-redux";
import { selectAuthToken, selectLoggedIN } from "../features/userSlice";


export function AuthToken() { return useSelector(selectAuthToken); }
export function LoggedIn() { return useSelector(selectLoggedIN) }


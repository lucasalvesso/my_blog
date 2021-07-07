import Head from "next/head";
import pageStyle from "../../components/pageStyle";
import Login from '../api/login'
import axios from "axios";
export default function Index() {
    const loginUser = async event => {
        event.preventDefault()

        const url = `http://localhost:3009/user/login`

        await axios.post(url, {
            email: event.target.email.value,
            password: event.target.password.value
        }).then(async (val) => {
            const userInfo = {id: val.data.id, idToken: val.data.token}
            localStorage.setItem('userLogged', JSON.stringify(userInfo));
        }).catch((e) => {
            alert(e)
        })
    }

    return (
        <form onSubmit={loginUser}>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" autoComplete="email" required />
            <label htmlFor="password">Password</label>
            <input id="password" type="text" autoComplete="password" required />
            <button type="submit">Register</button>
        </form>
    )
}

import axios from "axios";

export default async function Login(req, res) {

    const url = `http://localhost:3009/user/login`

    await axios.post(url, {
        body: {
            "password": "1234",
            "email": "lucas@namee.com"
        }
    }).then((val) => {
        res.json(val)
    })
}
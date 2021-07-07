import axios from "axios";

export default async function Validatetoken(loc) {

    const url = `http://localhost:3009/info`
    const options = {
        url,
        headers: {
            authorization: 'lalalalalla'
        }
    }
    await axios.post(url, {}, {
        headers: {
            authorization: 'lalalalalla'
        }
    }).then((val) => {
        return true
    }).catch((e) => {
        alert('Você precisa logar!')
    })
}
import Link from 'next/link';
import axios from "axios";

export default async function Register() {

    const url = `http://172.22.0.107:3009/info`

    await axios.get(url).then((val) => {
        console.log(val.data)
    })
    return <h1>OI</h1>
}
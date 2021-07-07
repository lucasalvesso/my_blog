import Validatetoken from "../api/validatetoken";
const validToken = Validatetoken();
export default function Post() {
    if (validToken) {
        return <h1>First Post on my page</h1>
    } else {
        return <h1>NAO LOGADO</h1>
    }
}
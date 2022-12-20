// import helpers from "../@utils/helpers"

function authHeader() {
    // const token = helpers.getTokenName()
    const accessToken = localStorage.getItem('token')
    if (accessToken) {
        //axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return { Authorization: 'Bearer ' + accessToken };
    } else {
        return {};
    }
}

export default authHeader
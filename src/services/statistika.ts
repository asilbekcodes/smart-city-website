import api from "../api/api"


export const getStatistika = async () => {
    const res = await api.get('/ui/statistika')
    return res.data
}
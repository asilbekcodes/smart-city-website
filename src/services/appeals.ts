import api from "../api/api"


export const createAppeals = async (data: string) => {
    const res = await api.post('/sectors/appeals', data)
    return res.data 
}
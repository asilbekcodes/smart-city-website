import api from "../api/api"


export const createAppeals = async (data: string) => {
    const res = await api.post('/sectors/appeals', data)
    return res.data 
}


export const getSectors = async () => {
    const res = await api.get('/ui/sectors')
    return res.data
}


export const getCompanies = async () => {
    const res = await api.get('/ui/companies')
    return res.data
}
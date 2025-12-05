import api from "../api/api"

export interface createAppeals {
    fullName: string,
    email?: string,
    phone?: string,
    message: string,
    type: string,
    sector: string,
    company: string,
    location: {
        district: string,
        address: string
    }
}


export const createAppeals = async (data: createAppeals) => {
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
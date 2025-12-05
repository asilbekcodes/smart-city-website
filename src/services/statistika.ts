import api from "../api/api"


export const getStatistika = async () => {
    const res = await api.get('/ui/statistika')
    return res.data
}


export const getNotifications = async () => {
    const res = await api.get('/notifications')
    return res.data
}
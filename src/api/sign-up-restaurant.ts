import { api } from '@/lib/axios'

export interface signUpRestaurantBody {
    email: string
    restaurantName: string
    managerName: string
    phone: string
}

export async function signUpRestaurant({ email, restaurantName, managerName, phone }: signUpRestaurantBody) {
    await api.post('/restaurants', { email, restaurantName, managerName, phone })
}
import { api } from "@/lib/axios";


interface GetOrdersResponse {
    orderId: string;
    createdAt: Date | null;
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
    customerName: string;
    total: number;
}

export async function getOrders() {
    const response = await api.get('/orders')

    return response.data as GetOrdersResponse
}
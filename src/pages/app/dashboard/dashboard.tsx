import { Helmet } from "react-helmet-async"
import { MonthRevenueCard } from "./month-revenue-card"
import { MonthOrdersAmount } from "./month-orders-amount"
import { DayOrdersAmountCard } from "./day-orders-amount-card"
import { MonthCanceledOrdersAmount } from "./month-canceled-orders-amount-card"
import { ResultGraph } from "./result-graph"
import { PopularProductsGraph } from "./popular-products-graph"

export function Dashboard() {
    return (
        <>
            <Helmet title="Dashboard" />
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

                <div className="grid grid-cols-4 gap-4">
                    <MonthRevenueCard />
                    <MonthOrdersAmount />
                    <DayOrdersAmountCard />
                    <MonthCanceledOrdersAmount />
                </div>
                <div className="grid grid-cols-9 gap-4">
                    <ResultGraph />
                    <PopularProductsGraph />
                </div>
            </div>
        </>
    )
}
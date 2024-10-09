import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Line, Bar, BarChart } from 'recharts'
import colors from 'tailwindcss/colors'

const data = [
    { product: 'Moda da casa', amount: 35 },
    { product: 'Carne seca', amount: 43 },
    { product: 'Portuguesa', amount: 38 },
    { product: 'Pepperoni', amount: 52 },
    { product: 'Baiana', amount: 30 },
]

export function PopularProductsGraph() {

    return (
        <Card className="col-span-3">
            <CardHeader className="pb-8">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-medium">Pizzas + Populares</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <BarChart data={data} style={{ fontSize: 12 }}>
                        <XAxis
                            dataKey="product"
                            axisLine={false}
                            tickLine={false}
                            dy={16}
                        />

                        <YAxis
                            stroke="#888"
                            axisLine={false}
                            tickLine={false}
                            width={80}
                        />
                        <Bar stroke={colors.violet['500']} strokeWidth={2} dataKey="amount" />
                        <CartesianGrid vertical={false} className="stroke-muted" />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )

}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Line } from 'recharts'
import colors from 'tailwindcss/colors'

const data = [
    { date: '10/10', revenue: 1080 },
    { date: '11/10', revenue: 1100 },
    { date: '12/10', revenue: 1400 },
    { date: '13/10', revenue: 1250 },
    { date: '14/10', revenue: 1545 },
    { date: '15/10', revenue: 2550 },
    { date: '16/10', revenue: 2145 },
]

export function ResultGraph() {
    return (
        <Card className="col-span-6">
            <CardHeader className="flex-row items-center justify-between pb-8">
                <div className="space-y-1">
                    <CardTitle className="text-base font-medium">Receita do período</CardTitle>
                    <CardDescription>Receita diária no período</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <LineChart data={data} style={{ fontSize: 12 }}>
                        <XAxis
                            dataKey="date"
                            axisLine={false}
                            tickLine={false}
                            dy={16}

                        />

                        <YAxis
                            stroke="#888"
                            axisLine={false}
                            tickLine={false}
                            width={80}
                            tickFormatter={(value: number) =>
                                value.toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                })
                            }
                        />
                        <Line type="linear" stroke={colors.violet['500']} strokeWidth={2} dataKey="revenue" />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}
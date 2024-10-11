import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
import { Button } from "./ui/button"

export interface PaginationProps {
    pageIndex: number
    totalCount: number
    perPage: number
    onPageChange: (pageIndex: number) => Promise<void> | void
}

export function Pagination({ pageIndex, perPage, totalCount, onPageChange }: PaginationProps) {
    const pages = Math.ceil(totalCount / perPage) || 1

    return (
        <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
                Total de {totalCount} item(s)
            </span>

            <div className="flex items-center gap-6 lg:gap-8">
                <div className="flex text-sm font-medium">
                    Página {pageIndex + 1} de {pages}
                </div>
                <div className="flex items-center gap-2">

                    <Button variant="outline" onClick={() => onPageChange(0)} className="h-8 w-8 p-0" disabled={pageIndex === 0}>
                        <ChevronsLeft className="h-4 w-4">
                            <span className="sr-only">Primeira página</span>
                        </ChevronsLeft>
                    </Button>

                    <Button variant="outline" onClick={() => onPageChange(pageIndex - 1)} className="h-8 w-8 p-0" disabled={pageIndex === 0}>
                        <ChevronLeft className="h-4 w-4">
                            <span className="sr-only">Página anterior</span>
                        </ChevronLeft>
                    </Button>

                    <Button variant="outline" onClick={() => onPageChange(pageIndex + 1)} className="h-8 w-8 p-0" disabled={pages <= pageIndex + 1}>
                        <ChevronRight className="h-4 w-4">
                            <span className="sr-only">Próxima página</span>
                        </ChevronRight>
                    </Button>

                    <Button variant="outline" onClick={() => onPageChange(pages - 1)} className="h-8 w-8 p-0" disabled={pages <= pageIndex + 1}>
                        <ChevronsRight className="h-4 w-4">
                            <span className="sr-only">Última página</span>
                        </ChevronsRight>
                    </Button>
                </div>
            </div>
        </div>
    )
}
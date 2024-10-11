import { Building, ChevronDown, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuLabel,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator
} from "./ui/dropdown-menu";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api-requisitions/get-profile";
import { getManagedRestaurant } from "@/api-requisitions/get-managed-restaurant";
import { Skeleton } from "./ui/skeleton";
import { Dialog } from "./ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { StoreProfileDialog } from "./edit-profile";
import { signOut } from "@/api-requisitions/sign-out";
import { useNavigate } from "react-router-dom";


export function AccountMenu() {
    const navigate = useNavigate()

    const { data: profile, isLoading: isLoadingProfile } = useQuery({
        queryKey: ['profile'],
        queryFn: getProfile,
        staleTime: Infinity
    })

    const { data: managedRestaurant, isLoading: isLoadingManagedRestaurant } = useQuery({
        queryKey: ['managed-restaurant'],
        queryFn: getManagedRestaurant,
        staleTime: Infinity
    })

    const { mutateAsync: signOutFn, isPending: isSignOut } = useMutation({
        mutationFn: signOut,
        onSuccess: () => {
            navigate('/sign-in', { replace: true })
        }
    })

    return (
        <Dialog>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2 select-none">
                        {isLoadingManagedRestaurant ? (
                            <Skeleton className="h-4 w-40" />
                        ) : managedRestaurant?.name}

                        <ChevronDown className="w-4 h-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel className="flex flex-col">
                        <span>{profile?.name}</span>
                        <span className="text-xs font-normal text-muted-foreground">{profile?.email}</span>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DialogTrigger asChild>
                        <DropdownMenuItem>
                            <Building className="w-4 h-4 mr-2" />
                            <span>Perfil da loja</span>
                        </DropdownMenuItem>
                    </DialogTrigger>
                    <DropdownMenuItem asChild className="text-red-500 dark:text-rose-400" disabled={isSignOut}>
                        <button className="w-full" onClick={() => signOutFn()}>
                            <LogOut className="w-4 h-4 mr-2" />
                            <span>Sair</span>
                        </button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <StoreProfileDialog />
        </Dialog>
    )
}
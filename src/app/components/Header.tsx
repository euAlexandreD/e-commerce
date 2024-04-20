"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {Sheet ,SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { HomeIcon, ListOrderedIcon, LogInIcon, LogOutIcon, MenuIcon, PercentCircleIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {

    const {status, data} = useSession()

    const hendleLoginClick = async () => {
        await signIn()
    }

    const hendleLogoutClick = async () => {
        await signOut()
    }

    return (
        <Card className="flex items-center justify-between p-[1.875]">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline">
                        <MenuIcon/>
                    </Button>
                </SheetTrigger>

                <SheetContent side="left">
                    <SheetHeader className="text-left text-lg font-semibold mb-2">Menu</SheetHeader>
                    {status === "authenticated" ? <p>{data?.user?.name}</p> : <p>Visitante</p>}

                        {status === 'authenticated' && (
                            <div className="flex items-center gap2">
                            <Avatar>
                                <AvatarFallback>
                                    {data.user?.name?.[0].toUpperCase()};
                                </AvatarFallback>

                                {data?.user?.image && (
                                    <AvatarImage src={data?.user?.image}/>
                                )}
                            </Avatar>



                            </div>

                        )}
                        <div className="mt-2 flex-col gap-2">
 
                            {status === "unauthenticated" && (
                                 <Button onClick={hendleLoginClick}variant="outline" className="w-full justify-start text-left mt-2">
                                 <LogInIcon size={16} className="mr-2"/>
                                 Fazer Login
                             </Button>
                            )}

                            {status === "authenticated" && (
                                <Button onClick={hendleLogoutClick}variant="outline" className="w-full justify-start text-left mt-2">
                                <LogOutIcon size={16} className="mr-2"/>
                                Fazer logout
                            </Button>
                            )}
                           
                            <Button variant="outline" className="w-full justify-start text-left mt-2">
                                <PercentIcon size={16} className="mr-2"/>
                                Ofertas
                            </Button>

                            <Button variant="outline" className="w-full justify-start text-left mt-2">
                                <ListOrderedIcon size={16} className="mr-2"/>
                                Catalogo
                            </Button>

                            <Button variant="outline" className="w-full justify-start text-left mt-2">
                                <HomeIcon size={16} className="mr-2"/>
                                Inicio
                            </Button>

                        </div>
                </SheetContent>
            </Sheet>

            <h1 className="font-semibold text-lg"><span className="text-primary">Circuit</span> Corner</h1>

            <Button size="icon" variant="outline">
                <ShoppingCartIcon/>
            </Button>
        </Card>
    );
}

export default Header;
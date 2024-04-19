import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {Sheet ,SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { HomeIcon, ListOrderedIcon, LogInIcon, MenuIcon, PercentCircleIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";

const Header = () => {
    return (
        <Card className="flex items-center justify-between p-[1.875]">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline">
                        <MenuIcon/>
                    </Button>
                </SheetTrigger>

                <SheetContent side="left">
                    <SheetHeader className="text-left text-lg font-semibold">Menu</SheetHeader>
                        <div className="mt-2 flex-col gap-2">

                            <Button variant="outline" className="w-full justify-start text-left mt-2">
                                <LogInIcon size={16} className="mr-2"/>
                                Fazer Login
                            </Button>

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
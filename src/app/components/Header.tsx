import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {Sheet ,SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon, ShoppingCartIcon } from "lucide-react";

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
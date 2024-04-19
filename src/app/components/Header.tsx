import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MenuSquareIcon, ShoppingCartIcon } from "lucide-react";

const Header = () => {
    return (
        <Card className="flex items-center justify-between p-[1.875]">
            <Button size="icon" variant="outline">
                <MenuSquareIcon/>
            </Button>

            <h1 className="font-semibold text-lg"><span className="text-primary">Circuit</span> Corner</h1>

            <Button size="icon" variant="outline">
                <ShoppingCartIcon/>
            </Button>
        </Card>
    )
}

export default Header;
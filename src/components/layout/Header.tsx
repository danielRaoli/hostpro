import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Server, Globe, HardDrive } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">HostPro</span>
          </div>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Hospedagem</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="flex items-center gap-3">
                      <HardDrive className="h-5 w-5 text-blue-600" />
                      <div>
                        <NavigationMenuLink asChild>
                          <a href="#" className="text-sm font-medium">
                            Hospedagem Compartilhada
                          </a>
                        </NavigationMenuLink>
                        <p className="text-sm text-muted-foreground">
                          Ideal para sites pequenos e médios
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Server className="h-5 w-5 text-blue-600" />
                      <div>
                        <NavigationMenuLink asChild>
                          <a href="#" className="text-sm font-medium">
                            Hospedagem WordPress
                          </a>
                        </NavigationMenuLink>
                        <p className="text-sm text-muted-foreground">
                          Otimizada para WordPress
                        </p>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Servidores</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="flex items-center gap-3">
                      <Server className="h-5 w-5 text-blue-600" />
                      <div>
                        <NavigationMenuLink asChild>
                          <a href="#" className="text-sm font-medium">
                            VPS
                          </a>
                        </NavigationMenuLink>
                        <p className="text-sm text-muted-foreground">
                          Servidor Virtual Privado
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Server className="h-5 w-5 text-blue-600" />
                      <div>
                        <NavigationMenuLink asChild>
                          <a href="#" className="text-sm font-medium">
                            Servidor Dedicado
                          </a>
                        </NavigationMenuLink>
                        <p className="text-sm text-muted-foreground">
                          Recursos exclusivos para seu projeto
                        </p>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Domínios</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-blue-600" />
                      <div>
                        <NavigationMenuLink asChild>
                          <a href="#" className="text-sm font-medium">
                            Registro de Domínio
                          </a>
                        </NavigationMenuLink>
                        <p className="text-sm text-muted-foreground">
                          Registre seu domínio personalizado
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-blue-600" />
                      <div>
                        <NavigationMenuLink asChild>
                          <a href="#" className="text-sm font-medium">
                            Transferência de Domínio
                          </a>
                        </NavigationMenuLink>
                        <p className="text-sm text-muted-foreground">
                          Transfira seu domínio para nós
                        </p>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;

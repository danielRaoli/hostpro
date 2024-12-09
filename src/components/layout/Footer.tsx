import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Youtube, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">HostPro</span>
            </div>
            <p className="text-gray-400">
              Sua parceira em hospedagem de sites e serviços web
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400">Hospedagem</a></li>
              <li><a href="#" className="hover:text-blue-400">Servidores VPS</a></li>
              <li><a href="#" className="hover:text-blue-400">Servidores Dedicados</a></li>
              <li><a href="#" className="hover:text-blue-400">Domínios</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400">Sobre nós</a></li>
              <li><a href="#" className="hover:text-blue-400">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400">Carreiras</a></li>
              <li><a href="#" className="hover:text-blue-400">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Receba novidades e promoções exclusivas
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="bg-gray-800 border-gray-700"
              />
              <Button>Assinar</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 HostPro. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
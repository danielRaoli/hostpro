import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20 px-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold text-blue-900 mb-6">
              Hospedagem de Sites Confiável e Segura
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comece seu projeto online com a melhor infraestrutura e suporte
              24/7
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Rocket className="mr-2 h-5 w-5" />
              Começar Agora
            </Button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              alt="Data Center"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

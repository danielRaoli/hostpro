import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const Cta = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Comece seu projeto online hoje mesmo
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Junte-se a milhares de clientes satisfeitos e experimente a melhor hospedagem do mercado
        </p>
        <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
          <Rocket className="mr-2 h-5 w-5" />
          Começar Agora
        </Button>
      </div>
    </section>
  );
};

export default Cta;
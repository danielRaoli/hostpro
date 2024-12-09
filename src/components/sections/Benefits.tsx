import { Shield, Zap, Headphones, Server } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Segurança Máxima",
    description: "Proteção contra DDoS e backup diário dos seus dados",
  },
  {
    icon: Zap,
    title: "Alta Performance",
    description: "Servidores SSD com tecnologia de ponta",
  },
  {
    icon: Headphones,
    title: "Suporte 24/7",
    description: "Equipe especializada disponível 24 horas por dia",
  },
  {
    icon: Server,
    title: "99.9% Uptime",
    description: "Garantia de disponibilidade da sua aplicação",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Por que escolher a HostPro?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <benefit.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
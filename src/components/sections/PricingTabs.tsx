import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingTabs = () => {
  type Period = "monthly" | "annual";

  const plans: Record<
    Period,
    { name: string; price: string; features: string[] }[]
  > = {
    monthly: [
      {
        name: "Básico",
        price: "R$ 19,90",
        features: ["1 Site", "10GB SSD", "SSL Grátis", "Backup Diário"],
      },
      {
        name: "Profissional",
        price: "R$ 39,90",
        features: ["5 Sites", "50GB SSD", "SSL Grátis", "Backup Diário", "CDN"],
      },
      {
        name: "Empresarial",
        price: "R$ 79,90",
        features: [
          "10 Sites",
          "100GB SSD",
          "SSL Grátis",
          "Backup Diário",
          "CDN",
          "IP Dedicado",
        ],
      },
    ],
    annual: [
      {
        name: "Básico",
        price: "R$ 191,00",
        features: ["1 Site", "10GB SSD", "SSL Grátis", "Backup Diário"],
      },
      {
        name: "Profissional",
        price: "R$ 383,00",
        features: ["5 Sites", "50GB SSD", "SSL Grátis", "Backup Diário", "CDN"],
      },
      {
        name: "Empresarial",
        price: "R$ 767,00",
        features: [
          "10 Sites",
          "100GB SSD",
          "SSL Grátis",
          "Backup Diário",
          "CDN",
          "IP Dedicado",
        ],
      },
    ],
  };

  return (
    <section className="py-20 bg-white px-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Planos e Preços
        </h2>
        <Tabs defaultValue="monthly" className="w-full">
          <TabsList className="grid w-[400px] grid-cols-2 mx-auto mb-8">
            <TabsTrigger value="monthly">Mensal</TabsTrigger>
            <TabsTrigger value="annual">Anual</TabsTrigger>
          </TabsList>

          {(["monthly", "annual"] as Period[]).map((period) => (
            <TabsContent key={period} value={period}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans[period].map((plan) => (
                  <Card key={plan.name} className="flex flex-col">
                    <CardHeader>
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription>
                        <span className="text-3xl font-bold text-blue-600">
                          {plan.price}
                        </span>
                        /{period === "monthly" ? "mês" : "ano"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-4">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <Check className="h-5 w-5 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Contratar</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default PricingTabs;

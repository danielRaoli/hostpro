import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual é o tempo de ativação do serviço?",
    answer: "A ativação é instantânea após a confirmação do pagamento.",
  },
  {
    question: "Vocês oferecem garantia de uptime?",
    answer: "Sim, garantimos 99.9% de uptime para todos os nossos serviços.",
  },
  {
    question: "Como funciona o suporte técnico?",
    answer: "Nosso suporte técnico está disponível 24/7 via chat, e-mail e telefone.",
  },
  {
    question: "Posso mudar de plano depois?",
    answer: "Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento.",
  },
  {
    question: "Vocês fazem migração gratuita?",
    answer: "Sim, oferecemos migração gratuita para todos os novos clientes.",
  },
];

const Faq = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Perguntas Frequentes</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-blue-600 rounded-lg border-none"
              >
                <AccordionTrigger className="text-white px-6 hover:no-underline hover:bg-blue-700 rounded-t-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white px-6 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
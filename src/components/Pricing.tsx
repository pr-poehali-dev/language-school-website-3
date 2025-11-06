import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Pricing = () => {
  const pricing = [
    {
      name: "Стандарт",
      price: "8 500",
      period: "месяц",
      features: [
        "Групповые занятия 2 раза в неделю",
        "8 занятий по 90 минут",
        "Учебные материалы",
        "Доступ к онлайн-платформе"
      ],
      popular: false
    },
    {
      name: "Премиум",
      price: "15 900",
      period: "месяц",
      features: [
        "Индивидуальные занятия 2 раза в неделю",
        "8 занятий по 60 минут",
        "Персональная программа",
        "Все материалы включены",
        "Гибкое расписание"
      ],
      popular: true
    },
    {
      name: "Интенсив",
      price: "24 000",
      period: "месяц",
      features: [
        "Индивидуальные занятия 3 раза в неделю",
        "12 занятий по 90 минут",
        "Ускоренная программа",
        "Разговорные клубы",
        "Круглосуточная поддержка"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <Badge variant="outline" className="rounded-full">Тарифы</Badge>
          <h2 className="text-3xl md:text-5xl font-bold">Цены и тарифы</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий формат обучения
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricing.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="rounded-full">Популярный</Badge>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground"> ₽/{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full rounded-full" variant={plan.popular ? "default" : "outline"}>
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <Badge variant="outline" className="rounded-full">Контакты</Badge>
          <h2 className="text-3xl md:text-5xl font-bold">Свяжитесь с нами</h2>
          <p className="text-lg text-muted-foreground">
            Ответим на все ваши вопросы и поможем выбрать подходящий курс
          </p>
        </div>
        <Card className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Адрес</div>
                  <div className="text-sm text-muted-foreground">г. Москва, ул. Пушкина, д. 10</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Телефон</div>
                  <div className="text-sm text-muted-foreground">+7 (495) 123-45-67</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <div className="text-sm text-muted-foreground">info@linguaschool.ru</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Режим работы</div>
                  <div className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 21:00<br />Сб-Вс: 10:00 - 18:00</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full px-4 py-3 rounded-lg border bg-background"
              />
              <input
                type="tel"
                placeholder="Телефон"
                className="w-full px-4 py-3 rounded-lg border bg-background"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg border bg-background"
              />
              <textarea
                placeholder="Ваше сообщение"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border bg-background resize-none"
              />
              <Button className="w-full rounded-full" size="lg">
                Отправить сообщение
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;

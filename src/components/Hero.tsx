import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-accent/30 to-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Badge className="rounded-full">Более 500 выпускников</Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Изучайте языки <span className="text-primary">с удовольствием</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Современные методики, опытные преподаватели и дружелюбная атмосфера помогут вам достичь ваших целей в изучении иностранных языков
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full">
                <Icon name="BookOpen" className="mr-2 h-5 w-5" />
                Выбрать курс
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                Консультация
              </Button>
            </div>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground">Средний рейтинг</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">12</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Успешных студентов</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden animate-scale-in shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/2f64ef4d-b12d-4f8e-a871-6183ff992ac0/files/ab41ea14-6732-41eb-a299-34c042c73c9c.jpg" 
                alt="Языковое обучение" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

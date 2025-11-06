import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Programs = () => {
  const programs = [
    {
      language: "Английский",
      icon: "Globe",
      levels: "A1-C2",
      formats: ["Групповые", "Индивидуальные", "Онлайн"],
      duration: "3-9 месяцев"
    },
    {
      language: "Немецкий",
      icon: "Lightbulb",
      levels: "A1-C1",
      formats: ["Групповые", "Индивидуальные"],
      duration: "4-12 месяцев"
    },
    {
      language: "Французский",
      icon: "Heart",
      levels: "A1-C1",
      formats: ["Групповые", "Онлайн"],
      duration: "4-10 месяцев"
    },
    {
      language: "Испанский",
      icon: "Sun",
      levels: "A1-B2",
      formats: ["Групповые", "Индивидуальные"],
      duration: "3-8 месяцев"
    }
  ];

  return (
    <section id="programs" className="py-20">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <Badge variant="outline" className="rounded-full">Наши программы</Badge>
          <h2 className="text-3xl md:text-5xl font-bold">Языковые программы</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите язык и формат обучения, который подходит именно вам
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={program.icon as any} className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{program.language}</CardTitle>
                <CardDescription>Уровни: {program.levels}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm font-medium mb-2">Форматы:</div>
                  <div className="flex flex-wrap gap-2">
                    {program.formats.map((format, i) => (
                      <Badge key={i} variant="secondary">{format}</Badge>
                    ))}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Длительность: {program.duration}
                </div>
                <Button className="w-full rounded-full">Подробнее</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Schedule = () => {
  const schedule = [
    {
      language: "Английский A1",
      startDate: "15 ноября",
      format: "Групповой",
      time: "18:00-19:30",
      spots: 3,
      teacher: "Анна Петрова"
    },
    {
      language: "Английский B2",
      startDate: "20 ноября",
      format: "Групповой",
      time: "19:45-21:15",
      spots: 5,
      teacher: "Анна Петрова"
    },
    {
      language: "Немецкий A2",
      startDate: "18 ноября",
      format: "Групповой",
      time: "17:00-18:30",
      spots: 2,
      teacher: "Дмитрий Соколов"
    },
    {
      language: "Французский A1",
      startDate: "22 ноября",
      format: "Групповой",
      time: "18:30-20:00",
      spots: 4,
      teacher: "Мария Иванова"
    }
  ];

  return (
    <section id="schedule" className="py-20 bg-accent/20">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <Badge variant="outline" className="rounded-full">Набор групп</Badge>
          <h2 className="text-3xl md:text-5xl font-bold">Расписание и набор</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ближайшие группы, которые начинают обучение
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {schedule.map((group, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{group.language}</CardTitle>
                    <CardDescription className="mt-1">Преподаватель: {group.teacher}</CardDescription>
                  </div>
                  <Badge variant={group.spots <= 3 ? "destructive" : "secondary"}>
                    {group.spots} {group.spots === 1 ? 'место' : 'места'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Calendar" className="h-4 w-4 text-muted-foreground" />
                  <span>Старт: {group.startDate}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Clock" className="h-4 w-4 text-muted-foreground" />
                  <span>{group.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Users" className="h-4 w-4 text-muted-foreground" />
                  <span>{group.format}</span>
                </div>
                <Button className="w-full rounded-full mt-4">Записаться</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;

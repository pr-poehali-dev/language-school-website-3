import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Teachers = () => {
  const teachers = [
    {
      name: "Анна Петрова",
      photo: "https://cdn.poehali.dev/projects/2f64ef4d-b12d-4f8e-a871-6183ff992ac0/files/2815b54a-f58e-4ac0-93bb-f48313fc9d20.jpg",
      language: "Английский",
      experience: "12 лет",
      education: "МГУ, филологический факультет",
      certificates: ["CELTA", "TESOL"],
      rating: 4.9
    },
    {
      name: "Дмитрий Соколов",
      photo: "https://cdn.poehali.dev/projects/2f64ef4d-b12d-4f8e-a871-6183ff992ac0/files/2815b54a-f58e-4ac0-93bb-f48313fc9d20.jpg",
      language: "Немецкий",
      experience: "8 лет",
      education: "СПбГУ, германистика",
      certificates: ["Goethe-Zertifikat C2"],
      rating: 4.8
    },
    {
      name: "Мария Иванова",
      photo: "https://cdn.poehali.dev/projects/2f64ef4d-b12d-4f8e-a871-6183ff992ac0/files/2815b54a-f58e-4ac0-93bb-f48313fc9d20.jpg",
      language: "Французский",
      experience: "10 лет",
      education: "МГЛУ, французский язык",
      certificates: ["DALF C2", "FLE"],
      rating: 5.0
    }
  ];

  return (
    <section id="teachers" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <Badge variant="outline" className="rounded-full">Команда</Badge>
          <h2 className="text-3xl md:text-5xl font-bold">Наши преподаватели</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Опытные специалисты с международными сертификатами
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Avatar className="h-48 w-48">
                  <AvatarImage src={teacher.photo} />
                  <AvatarFallback className="text-4xl">{teacher.name[0]}</AvatarFallback>
                </Avatar>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{teacher.name}</CardTitle>
                  <div className="flex items-center gap-1">
                    <Icon name="Star" className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-bold">{teacher.rating}</span>
                  </div>
                </div>
                <CardDescription className="text-base font-medium">{teacher.language}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="Briefcase" className="h-4 w-4 text-muted-foreground mt-1" />
                  <span className="text-sm">Опыт: {teacher.experience}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="GraduationCap" className="h-4 w-4 text-muted-foreground mt-1" />
                  <span className="text-sm">{teacher.education}</span>
                </div>
                <div>
                  <div className="text-sm font-medium mb-2">Сертификаты:</div>
                  <div className="flex flex-wrap gap-2">
                    {teacher.certificates.map((cert, i) => (
                      <Badge key={i} variant="outline">{cert}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;

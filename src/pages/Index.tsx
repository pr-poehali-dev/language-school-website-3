import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("all");

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

  const reviews = [
    {
      name: "Елена К.",
      rating: 5,
      text: "Потрясающая школа! За полгода вышла с уровня A1 на B1. Преподаватели очень внимательные, материалы современные и интересные.",
      date: "2 дня назад"
    },
    {
      name: "Алексей М.",
      rating: 5,
      text: "Занимаюсь немецким уже год. Отличная атмосфера, удобное расписание, результат превзошел ожидания!",
      date: "неделю назад"
    },
    {
      name: "Ольга Т.",
      rating: 4,
      text: "Хорошая школа с профессиональными преподавателями. Единственный минус - иногда хочется больше разговорной практики.",
      date: "2 недели назад"
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="GraduationCap" className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">LinguaSchool</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#programs" className="text-sm font-medium hover:text-primary transition-colors">Программы</a>
            <a href="#teachers" className="text-sm font-medium hover:text-primary transition-colors">Преподаватели</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Цены</a>
            <a href="#schedule" className="text-sm font-medium hover:text-primary transition-colors">Расписание</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
          </nav>
          <Button className="rounded-full">Записаться</Button>
        </div>
      </header>

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

      <section id="reviews" className="py-20">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="outline" className="rounded-full">Отзывы</Badge>
            <h2 className="text-3xl md:text-5xl font-bold">Что говорят наши студенты</h2>
            <div className="flex items-center justify-center gap-2 text-lg">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} name="Star" className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="font-bold">4.9</span>
              <span className="text-muted-foreground">из 5 на основе 156 отзывов</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icon
                          key={star}
                          name="Star"
                          className={`h-4 w-4 ${star <= review.rating ? 'fill-primary text-primary' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

      <footer className="py-12 bg-foreground/5 border-t">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="GraduationCap" className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">LinguaSchool</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Языковая школа с 12-летним опытом работы
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Программы</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Английский язык</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Немецкий язык</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Французский язык</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Испанский язык</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">О школе</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Наша команда</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Методика</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Лицензии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>г. Москва, ул. Пушкина, д. 10</li>
                <li>+7 (495) 123-45-67</li>
                <li>info@linguaschool.ru</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 LinguaSchool. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
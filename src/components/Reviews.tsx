import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Reviews = () => {
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
  );
};

export default Reviews;

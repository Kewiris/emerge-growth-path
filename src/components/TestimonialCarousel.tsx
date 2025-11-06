import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    company: "Cargill",
    subtitle: "Makes Chocolate and stuff",
    quote: "Amer is awesome!",
    rating: 5,
  },
  {
    company: "UNICEF",
    subtitle: "Non-profit",
    quote: "Amer is fantastic - we saved all the children.",
    rating: 5,
  },
  {
    company: "Shilpa Shethy",
    subtitle: "CEO, Founder",
    quote: "Holisticly pursue market-more that synerg through innovative paradi. Enthusia productivate media.",
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  return (
    <section className="bg-navy py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <p className="text-primary text-sm font-semibold mb-2 uppercase tracking-wider">
            Testimonials
          </p>
          <h2 className="text-4xl font-bold text-navy-foreground mb-8">
            Read reviews<br />
            From our <span className="text-primary">clients</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="text-center">
            <p className="text-5xl font-bold text-navy-foreground">
              1372<span className="text-primary">+</span>
            </p>
            <p className="text-navy-foreground/70">Happy Clients</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-navy-foreground">
              100<span className="text-primary">%</span>
            </p>
            <p className="text-navy-foreground/70">Satisfaction Rate</p>
          </div>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="p-8 bg-background">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-muted mb-4"></div>
                    <h3 className="font-bold text-lg">{testimonial.company}</h3>
                    <p className="text-primary text-sm">{testimonial.subtitle}</p>
                  </div>
                  <p className="text-muted-foreground mb-6">{testimonial.quote}</p>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import heroImage from "@/assets/hero-collaboration.jpg";
import carouselLeadership from "@/assets/carousel-leadership.jpg";
import carouselTeambuilding from "@/assets/carousel-teambuilding.jpg";
import carouselStrategy from "@/assets/carousel-strategy.jpg";
import carouselWorkshop from "@/assets/carousel-workshop.jpg";
import carouselPlanning from "@/assets/carousel-planning.jpg";
import { useNavigate } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
const Home = () => {
  const navigate = useNavigate();
  const carouselImages = [{
    src: carouselLeadership,
    alt: "Leadership Training"
  }, {
    src: carouselTeambuilding,
    alt: "Team Building"
  }, {
    src: carouselStrategy,
    alt: "Strategy Workshop"
  }, {
    src: carouselWorkshop,
    alt: "Professional Workshop"
  }, {
    src: carouselPlanning,
    alt: "Strategic Planning Session"
  }];
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url(${heroImage})`
        }}>
            <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/70"></div>
          </div>
          
          <div className="relative container mx-auto px-6 text-center text-navy-foreground z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Enabling People to Work 
Together Better<br />
              <span className="text-primary">Together Worse</span>
            </h1>
            <p className="text-xl mb-8 text-navy-foreground/90 max-w-2xl mx-auto">
              E-merge is passionate about "How people work", and is dedicated to enabling people to work together better.
            </p>
            <Button size="lg" onClick={() => navigate('/about')}>
              Learn More About Us
            </Button>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                About <span className="text-primary">e-merge</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                E-merge is passionate about "How people work", and is dedicated to enabling people to work together better.
              </p>
              <p className="text-lg font-semibold mb-8">
                We have been <span className="text-primary italic">working globally</span> since 2002
              </p>
              <p className="text-muted-foreground">
                We incorporate a network of 20+ senior facilitators, trainers and certified coaches located around the world serving global organisations in the private, public and non-profit sectors.
              </p>
            </div>
          </div>
        </section>

        {/* Image Carousel */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Work in <span className="text-primary">Action</span>
            </h2>
            <Carousel className="w-full max-w-5xl mx-auto" plugins={[Autoplay({
            delay: 4000,
            stopOnInteraction: true
          })]} opts={{
            loop: true
          }}>
              <CarouselContent>
                {carouselImages.map((image, index) => <CarouselItem key={index}>
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                    </div>
                  </CarouselItem>)}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Home;
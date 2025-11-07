import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { Button } from "@/components/ui/button";
import { Lightbulb, Users, DollarSign, Network } from "lucide-react";
import experientialLearning from "@/assets/experiential-learning.png";
import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: DollarSign,
      title: "Facilitation",
      description: "We provide expert facilitation to your key meetings, talks, panel discussions, and large events.",
    },
    {
      icon: Network,
      title: "Training",
      description: "Improve your capabilities by participating in functional training programmes and strategy workshops.",
    },
    {
      icon: Users,
      title: "Team Building",
      description: "Increase team cohesiveness through coaching and learning expeditions and professional skills programmes.",
    },
    {
      icon: Lightbulb,
      title: "Leadership and Management",
      description: "Benefit from professional and executive coaching alongside experiential learning.",
    },
  ];

  const whatWeDo = [
    "Transformational experiential learning",
    "Multi-country leadership, talent development, change management, and professional skills programmes",
    "Functional training programmes",
    "Strategy, innovation, and teambuilding workshops",
    "Expert facilitation of key meetings, and large events",
    "Team coaching - especially senior teams and teams with challenges",
    "Learning expeditions - connecting with counterparts in other companies and industries",
    "Professional and executive coaching",
    "360 reports & psychometrics (HBDI, MBTI, Firo-B, CliftonStrengths, EQ, Team snapshot, etc)",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-hero-gradient py-20 text-navy-foreground">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-6">
              About <span className="text-navy-foreground">e-merge</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              E-merge is passionate about "How people work", and is dedicated to enabling people to work together better.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">
                We have been <span className="text-primary italic">working globally</span> since 2002
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                We incorporate a network of 20+ senior facilitators, trainers and certified coaches located around the world serving global organisations in the private, public and non-profit sectors.
              </p>
              
              <h3 className="text-3xl font-bold mb-8">What we do:</h3>
              <div className="space-y-4 mb-8">
                {whatWeDo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>

              <Button size="lg" onClick={() => navigate('/services')}>
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-12">
              <div>
                <p className="text-primary text-sm font-semibold mb-2 uppercase tracking-wider">
                  Services
                </p>
                <h2 className="text-4xl font-bold">
                  Explore Our<br />
                  <span className="text-primary">Consulting</span> Services
                </h2>
              </div>
              <Button size="lg" onClick={() => navigate('/services')}>
                All Services <span className="ml-2">+</span>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} link="/services" />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialCarousel />

        {/* Philosophy Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary text-sm font-semibold mb-2 uppercase tracking-wider">
                  Our Philosophy
                </p>
                <h2 className="text-4xl font-bold mb-6">
                  Teaching Adults To<br />
                  Learn - <span className="text-primary">Andragogy</span>
                </h2>
                <p className="text-muted-foreground mb-6">The seven principles of andragogy</p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Adults must want to learn",
                    "Adults will learn only what they feel they need to learn",
                    "Adults learn by doing",
                    "Adult learning focuses on problem solving",
                    "Experience affects adult learning & unlearning",
                    "Adults learn best in an informal situation",
                    "Adults want guidance and consideration as equal partners in the process",
                  ].map((principle, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>

                <Button onClick={() => navigate('/blog')}>
                  Read our blog <span className="ml-2">+</span>
                </Button>
              </div>

              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full border-4 border-primary/20 rounded-lg"></div>
                <img
                  src={experientialLearning}
                  alt="Experiential Learning Cycle"
                  className="relative rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 text-center">
            <p className="text-primary text-sm font-semibold mb-2 uppercase tracking-wider">
              Our Team
            </p>
            <h2 className="text-4xl font-bold mb-12">
              Meet With Our <span className="text-primary">Expert Team</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-muted rounded-lg aspect-[3/4] flex items-center justify-center">
                  <p className="text-muted-foreground">Team Member {i}</p>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team of 20+ senior facilitators, trainers and certified coaches bring decades of combined experience in organizational development and experiential learning.
            </p>
          </div>
        </section>

        {/* Client List */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-12">
              Trusted by <span className="text-primary">Global Organizations</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {["Cargill", "UNICEF", "Company 3", "Company 4", "Company 5", "Company 6", "Company 7", "Company 8"].map((client, i) => (
                <div key={i} className="bg-secondary rounded-lg p-8 flex items-center justify-center h-32">
                  <p className="text-muted-foreground font-semibold">{client}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

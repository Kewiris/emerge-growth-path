import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import serviceLeadership from "@/assets/service-leadership.jpg";
import serviceStrategy from "@/assets/service-strategy.jpg";
import serviceFacilitation from "@/assets/service-facilitation.jpg";
import serviceDevelopment from "@/assets/service-development.jpg";

const Services = () => {
  const services = [
    {
      title: "Leadership & Management",
      image: serviceLeadership,
      what: "Professional and executive coaching combined with experiential learning programs designed to develop effective leaders at all levels of your organization.",
      why: "Strong leadership is the foundation of organizational success. Our programs help leaders develop the skills, mindset, and confidence needed to inspire teams and drive results.",
      how: "Through one-on-one coaching, group workshops, and real-world leadership challenges, we help participants develop authentic leadership styles and practical management capabilities.",
      examples: "Executive coaching for C-suite leaders, emerging leader development programs, management skills workshops, 360-degree feedback and development planning.",
    },
    {
      title: "Strategy & Innovation",
      image: serviceStrategy,
      what: "Strategic planning sessions, innovation workshops, and sustainability programs that help organizations clarify their direction and develop actionable plans.",
      why: "In rapidly changing business environments, organizations need clear strategies and innovative thinking to stay competitive and relevant.",
      how: "We facilitate collaborative strategy sessions that engage stakeholders, surface creative solutions, and build commitment to strategic initiatives through participatory planning methods.",
      examples: "Annual strategic planning retreats, innovation design thinking workshops, sustainability strategy development, scenario planning sessions.",
    },
    {
      title: "Facilitation",
      image: serviceFacilitation,
      what: "Expert facilitation for key meetings, large conferences, panel discussions, town halls, and other important organizational gatherings.",
      why: "Well-facilitated meetings ensure all voices are heard, decisions are made efficiently, and participants leave aligned and energized rather than drained.",
      how: "Our experienced facilitators use proven techniques to create inclusive environments, manage group dynamics, and guide groups toward productive outcomes.",
      examples: "Annual leadership conferences, board retreats, cross-functional alignment sessions, large-scale employee town halls, merger integration meetings.",
    },
    {
      title: "Development & Training",
      image: serviceDevelopment,
      what: "Functional training programs, professional skills development, talent development initiatives, and learning expeditions that build organizational capability.",
      why: "Continuous learning and skill development are essential for organizational agility and employee engagement in today's knowledge economy.",
      how: "We design and deliver engaging, experiential learning programs that combine adult learning principles with practical application and peer learning.",
      examples: "Cross-functional training programs, professional skills workshops (communication, collaboration, problem-solving), learning expeditions to other companies, talent development programs.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-hero-gradient py-20 text-navy-foreground">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive consulting services designed to enable your people to work together better
            </p>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-xl w-full"
                    />
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <h2 className="text-4xl font-bold mb-8">
                      <span className="text-primary">{index + 1}.</span> {service.title}
                    </h2>
                    
                    <div className="space-y-6">
                      <Card className="p-6 border-l-4 border-l-primary">
                        <h3 className="text-xl font-bold mb-3 text-primary">What</h3>
                        <p className="text-muted-foreground">{service.what}</p>
                      </Card>

                      <Card className="p-6 border-l-4 border-l-primary">
                        <h3 className="text-xl font-bold mb-3 text-primary">Why</h3>
                        <p className="text-muted-foreground">{service.why}</p>
                      </Card>

                      <Card className="p-6 border-l-4 border-l-primary">
                        <h3 className="text-xl font-bold mb-3 text-primary">How</h3>
                        <p className="text-muted-foreground">{service.how}</p>
                      </Card>

                      <Card className="p-6 border-l-4 border-l-primary">
                        <h3 className="text-xl font-bold mb-3 text-primary">Examples</h3>
                        <p className="text-muted-foreground">{service.examples}</p>
                      </Card>
                    </div>
                  </div>
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

export default Services;

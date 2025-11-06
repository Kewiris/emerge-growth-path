import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Power of Experiential Learning in Modern Organizations",
      excerpt: "Discover how hands-on, experience-based learning approaches are transforming how adults learn and develop in corporate settings.",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    },
    {
      title: "Seven Principles of Andragogy Every Leader Should Know",
      excerpt: "Adult learning is fundamentally different from how children learn. Understanding these principles can revolutionize your training programs.",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=400&fit=crop",
    },
    {
      title: "Building High-Performing Teams Through Coaching",
      excerpt: "Learn how professional team coaching can unlock potential and drive breakthrough performance in senior leadership teams.",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
    },
    {
      title: "Strategic Facilitation: Making Your Meetings Matter",
      excerpt: "Expert facilitation transforms ordinary meetings into powerful forums for alignment, decision-making, and innovation.",
      date: "February 28, 2024",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-hero-gradient py-20 text-navy-foreground">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Insights, perspectives, and practical guidance on organizational development and experiential learning
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {blogPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-primary font-semibold mb-2">{post.date}</p>
                    <h3 className="text-2xl font-bold mb-3">{post.title}</h3>
                    <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                    <Button variant="outline">
                      Read More <span className="ml-2">→</span>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Stay <span className="text-primary">Updated</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest insights on organizational development and experiential learning.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
              />
              <Button size="lg">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;

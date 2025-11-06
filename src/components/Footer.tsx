import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="mb-8 text-navy-foreground/80">
              Ready to transform how your people work together? Contact us to discuss your needs.
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-navy-foreground/80">info@e-merge.com</p>
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-navy-foreground/80">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-navy-foreground/10 border-navy-foreground/20 text-navy-foreground placeholder:text-navy-foreground/50"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-navy-foreground/10 border-navy-foreground/20 text-navy-foreground placeholder:text-navy-foreground/50"
              />
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="bg-navy-foreground/10 border-navy-foreground/20 text-navy-foreground placeholder:text-navy-foreground/50"
              />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-foreground/20 text-center text-sm text-navy-foreground/60">
          <p>&copy; {new Date().getFullYear()} E-merge Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

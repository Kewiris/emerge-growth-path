import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

const ServiceCard = ({ icon: Icon, title, description, link }: ServiceCardProps) => {
  return (
    <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 border-border/50 group">
      <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="w-12 h-1 bg-primary mx-auto mb-4"></div>
      <p className="text-muted-foreground mb-6">{description}</p>
      {link && (
        <Button variant="ghost" className="text-primary hover:text-primary group-hover:underline">
          Read More <span className="ml-2">+</span>
        </Button>
      )}
    </Card>
  );
};

export default ServiceCard;

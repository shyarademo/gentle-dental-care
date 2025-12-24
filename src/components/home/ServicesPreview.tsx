import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

export function ServicesPreview() {
  const featuredServices = services.slice(0, 4);

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        <SectionHeader
          badge="Our Services"
          title="Comprehensive Dental Care"
          subtitle="From routine cleanings to advanced cosmetic procedures, we offer a full range of dental services tailored to your needs."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service, index) => (
            <Link
              key={service.id}
              to="/services"
              className="group glass-card rounded-2xl p-6 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {service.shortDescription}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg" className="rounded-full gap-2">
            <Link to="/services">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

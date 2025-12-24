import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { services } from "@/data/services";
import { Check } from "lucide-react";

export default function Services() {
  return (
    <Layout>
      <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Comprehensive Dental Care
            </h1>
            <p className="text-lg text-muted-foreground">
              From preventive care to advanced cosmetic procedures, we offer a full range of services.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="glass-card rounded-3xl p-8 md:p-10">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold mb-2">{service.title}</h2>
                    <p className="text-muted-foreground text-sm mb-4">{service.duration}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">{service.fullDescription}</p>
                    <p className="text-sm"><strong>Who is this for?</strong> {service.whoIsItFor}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

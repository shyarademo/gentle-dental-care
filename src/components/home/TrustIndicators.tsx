import { ShieldCheck, Award, Heart, GraduationCap } from "lucide-react";

const trustItems = [
  {
    icon: GraduationCap,
    title: "Board Certified",
    description: "Graduated top of class from UCLA School of Dentistry"
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized by the American Dental Association"
  },
  {
    icon: ShieldCheck,
    title: "Advanced Training",
    description: "Continuously updated with latest techniques"
  },
  {
    icon: Heart,
    title: "Patient-First",
    description: "Dedicated to comfort and personalized care"
  }
];

export function TrustIndicators() {
  return (
    <section className="py-12 border-y border-border bg-card">
      <div className="container-wide">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className="flex items-start gap-4 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

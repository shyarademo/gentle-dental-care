import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { GraduationCap, Award, Heart, Users } from "lucide-react";

const timeline = [
  { year: "2005", title: "UCLA School of Dentistry", description: "Graduated with honors, Doctor of Dental Surgery" },
  { year: "2008", title: "Advanced Cosmetic Training", description: "Completed fellowship in aesthetic dentistry" },
  { year: "2010", title: "Private Practice", description: "Opened premier dental clinic in Beverly Hills" },
  { year: "2015", title: "FAGD Certification", description: "Achieved Fellowship in the Academy of General Dentistry" },
  { year: "2020", title: "Digital Dentistry Pioneer", description: "Implemented cutting-edge 3D imaging technology" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Dr. Mitchell
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Dedicated to Creating Beautiful, Healthy Smiles
            </h1>
            <p className="text-lg text-muted-foreground">
              With over 15 years of experience and a passion for excellence, Dr. Sarah Mitchell 
              combines artistry with advanced dental science to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-tight">
          <SectionHeader badge="Journey" title="Professional Timeline" />
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={item.year} className={`flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="flex-1 text-right hidden md:block">
                    {i % 2 === 0 && (
                      <div className="glass-card p-6 rounded-2xl inline-block text-left">
                        <span className="text-primary font-semibold">{item.year}</span>
                        <h3 className="font-display text-lg font-semibold mt-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="w-4 h-4 rounded-full bg-primary shrink-0 hidden md:block" />
                  <div className="flex-1 hidden md:block">
                    {i % 2 !== 0 && (
                      <div className="glass-card p-6 rounded-2xl inline-block">
                        <span className="text-primary font-semibold">{item.year}</span>
                        <h3 className="font-display text-lg font-semibold mt-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="glass-card p-6 rounded-2xl md:hidden w-full">
                    <span className="text-primary font-semibold">{item.year}</span>
                    <h3 className="font-display text-lg font-semibold mt-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeader badge="Philosophy" title="Our Core Values" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Patient Comfort", desc: "Your comfort and wellbeing are our top priorities." },
              { icon: Award, title: "Excellence", desc: "Committed to the highest standards of dental care." },
              { icon: GraduationCap, title: "Education", desc: "Continuously learning the latest techniques." },
              { icon: Users, title: "Relationships", desc: "Building lasting connections with our patients." },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6 rounded-2xl text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

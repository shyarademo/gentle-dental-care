import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Award, Clock, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-secondary/5 blur-3xl animate-float animation-delay-300" />
      </div>

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)] py-16 lg:py-24">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Star className="w-4 h-4 fill-primary" />
              <span>Beverly Hills' Trusted Dental Practice</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-tight mb-6 animate-fade-in-up">
              Your Smile,{" "}
              <span className="gradient-text">Our Passion</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-up animation-delay-100">
              Experience world-class dental care with Dr. Sarah Mitchell. 
              Over 15 years of expertise in cosmetic and family dentistry, 
              dedicated to creating beautiful, healthy smiles.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 animate-fade-in-up animation-delay-200">
              <Button asChild size="lg" className="rounded-full px-8 gap-2">
                <Link to="/contact">
                  Book Your Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/reviews">Read Patient Reviews</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 animate-fade-in-up animation-delay-300">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-primary mb-1">
                  <Clock className="w-5 h-5" />
                  <span className="font-display text-2xl font-bold">15+</span>
                </div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-primary mb-1">
                  <Users className="w-5 h-5" />
                  <span className="font-display text-2xl font-bold">5,000+</span>
                </div>
                <p className="text-sm text-muted-foreground">Happy Patients</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-primary mb-1">
                  <Award className="w-5 h-5" />
                  <span className="font-display text-2xl font-bold">20+</span>
                </div>
                <p className="text-sm text-muted-foreground">Awards Won</p>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative hidden lg:block animate-fade-in animation-delay-200">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 shadow-card">
              {/* Placeholder for dentist image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-5xl font-bold text-primary">SM</span>
                  </div>
                  <p className="text-muted-foreground">Dr. Sarah Mitchell</p>
                  <p className="text-sm text-muted-foreground/70">DDS, FAGD</p>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute bottom-8 left-4 right-4 glass-card rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center text-xs font-medium text-primary"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-3 h-3 fill-warning text-warning" />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">500+ verified reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

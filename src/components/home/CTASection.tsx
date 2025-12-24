import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding" style={{ background: "var(--gradient-primary)" }}>
      <div className="container-tight text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 animate-fade-in-up">
          Ready to Transform Your Smile?
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-100">
          Book your consultation today and take the first step towards the confident, 
          beautiful smile you've always wanted.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-200">
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 gap-2 bg-white text-primary hover:bg-white/90"
          >
            <Link to="/contact">
              Book Appointment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-8 gap-2 border-white/30 text-white hover:bg-white/10"
          >
            <a href="tel:+1234567890">
              <Phone className="w-4 h-4" />
              Call (123) 456-7890
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

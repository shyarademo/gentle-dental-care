import { Layout } from "@/components/layout/Layout";
import { MapPin, Clock, Phone, Mail, ShieldCheck, CreditCard } from "lucide-react";

export default function Clinic() {
  return (
    <Layout>
      <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-wide text-center">
          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4">Our Clinic</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit our modern, state-of-the-art facility designed for your comfort.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="rounded-3xl overflow-hidden h-[400px] bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.0!2d-118.4!3d34.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBeverly%20Hills!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
              />
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">123 Dental Care Avenue, Suite 100<br />Beverly Hills, CA 90210</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Working Hours</h3>
                    <div className="text-muted-foreground text-sm space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 3:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Contact</h3>
                    <p className="text-muted-foreground">(123) 456-7890</p>
                    <p className="text-muted-foreground">info@drmitchell.com</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <CreditCard className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Payment Options</h3>
                    <p className="text-muted-foreground text-sm">We accept all major credit cards, dental insurance, and offer flexible payment plans.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Dr. Mitchell" },
  { href: "/services", label: "Our Services" },
  { href: "/reviews", label: "Patient Reviews" },
  { href: "/contact", label: "Book Appointment" },
];

const services = [
  "Cosmetic Dentistry",
  "Teeth Whitening",
  "Dental Implants",
  "Invisalign",
  "Root Canal Treatment",
  "Dental Crowns",
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background/90">
      {/* Main Footer */}
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <span className="text-xl font-display font-bold text-primary-foreground">D</span>
                </div>
                <div>
                  <span className="font-display text-lg font-semibold text-background">
                    Dr. Sarah Mitchell
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Providing exceptional dental care with a gentle touch. Your smile is our passion, 
              and your comfort is our priority.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold text-background mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-semibold text-background mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold text-background mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-background/70 text-sm">
                  123 Dental Care Avenue<br />
                  Suite 100, Beverly Hills<br />
                  CA 90210
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-background/70 hover:text-primary text-sm transition-colors"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="mailto:info@drmitchell.com"
                  className="text-background/70 hover:text-primary text-sm transition-colors"
                >
                  info@drmitchell.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-background/70 text-sm">
                  Mon - Fri: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 3:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm text-center md:text-left">
              © {currentYear} Dr. Sarah Mitchell Dental Clinic. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="text-background/60 hover:text-primary text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-background/60 hover:text-primary text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/admin"
                className="text-background/60 hover:text-primary text-sm transition-colors"
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

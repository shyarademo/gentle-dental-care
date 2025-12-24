import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { services } from "@/data/services";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", date: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Request Sent!", description: "We'll contact you within 24 hours to confirm your appointment." });
    setFormData({ name: "", email: "", phone: "", service: "", date: "", message: "" });
  };

  return (
    <Layout>
      <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-wide text-center">
          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4">Book an Appointment</h1>
          <p className="text-lg text-muted-foreground">We respond within 24 hours</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="glass-card p-8 rounded-3xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder="Your Name *" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    <Input type="email" placeholder="Email *" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input type="tel" placeholder="Phone Number *" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                    <Input type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                  </div>
                  <Select value={formData.service} onValueChange={v => setFormData({...formData, service: v})}>
                    <SelectTrigger><SelectValue placeholder="Service of Interest" /></SelectTrigger>
                    <SelectContent>{services.map(s => <SelectItem key={s.id} value={s.id}>{s.title}</SelectItem>)}</SelectContent>
                  </Select>
                  <Textarea placeholder="Additional Message..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={4} />
                  <Button type="submit" size="lg" className="w-full">Request Appointment</Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {[
                { icon: Phone, title: "Phone", content: "(123) 456-7890", href: "tel:+1234567890" },
                { icon: Mail, title: "Email", content: "info@drmitchell.com", href: "mailto:info@drmitchell.com" },
                { icon: MapPin, title: "Address", content: "123 Dental Care Avenue\nBeverly Hills, CA 90210" },
                { icon: Clock, title: "Hours", content: "Mon-Fri: 8AM-6PM\nSat: 9AM-3PM" },
              ].map(item => (
                <div key={item.title} className="glass-card p-6 rounded-2xl flex items-start gap-4">
                  <item.icon className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-muted-foreground hover:text-primary">{item.content}</a>
                    ) : (
                      <p className="text-muted-foreground whitespace-pre-line">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

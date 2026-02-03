"use client";

import { motion } from "framer-motion";
import { 
  QrCode, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Github,
  ExternalLink,
  Calendar,
  Users,
  Shield,
  FileText
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "Case Studies", href: "/case-studies" },
  ];

  const productLinks = [
    { name: "Features", href: "/features" },
    { name: "Demo", href: "/demo" },
    { name: "API Docs", href: "/docs" },
    { name: "Integrations", href: "/integrations" },
  ];

  const resourceLinks = [
    { name: "Blog", href: "/blog" },
    { name: "Help Center", href: "/help" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "Community", href: "/community" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  const contactInfo = [
    { icon: Mail, text: "support@studrex.com", href: "mailto:support@studrex.com" },
    { icon: Phone, text: "+91 9876543XXX", href: "tel:+919876543210" },
    { icon: MapPin, text: "RBU University ", href: "#" },
  ];

  const quickFeatures = [
    { icon: QrCode, text: "QR Verification" },
    { icon: Calendar, text: "Event Management" },
    { icon: Users, text: "Team Handling" },
    { icon: Shield, text: "Fraud Prevention" },
    { icon: FileText, text: "Excel Sync" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border/40 bg-gradient-to-b from-background via-background/95 to-background/90">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

        {/* Top Section */}
        <div className="grid p-8 gap-12 lg:grid-cols-12">
          {/* Brand & Description */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <Link href="/" className="group inline-flex items-center gap-3">
                <div className="size-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <QrCode className="size-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    StudReX
                  </h2>
                  <p className="text-sm text-muted-foreground">QR Event Management</p>
                </div>
              </Link>
            </div>
            
            <p className="mb-6 text-muted-foreground">
              Simplify college event management with our QR-powered verification system. 
              Handle registrations, verifications, and team management in one platform.
            </p>

            

            {/* Social Links */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-foreground">Connect With Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      aria-label={social.label}
                      className="group rounded-xl border border-border/30 bg-background/50 p-2.5 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:shadow-md"
                    >
                      <Icon className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Company
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <ExternalLink className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Product
              </h3>
              <ul className="space-y-3">
                {productLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <ExternalLink className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Resources
              </h3>
              <ul className="space-y-3">
                {resourceLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <ExternalLink className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Contact
              </h3>
              <ul className="space-y-3">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.li
                      key={info.text}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <a
                        href={info.href}
                        className="group flex items-start gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Icon className="mt-0.5 size-4 text-primary/70" />
                        <span>{info.text}</span>
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </div>
        

        
       

        
      </div>
    </footer>
  );
}
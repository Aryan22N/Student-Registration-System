"use client";

import { motion } from "framer-motion";
import { 
  QrCode, 
  Users, 
  CheckCircle, 
  Shield, 
  FileSpreadsheet, 
  RefreshCw,
  UserPlus,
  Edit,
  Download,
  Eye,
  Clock,
  Server,
  LucideIcon
} from "lucide-react";

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  index 
}: { 
  icon: LucideIcon; 
  title: string; 
  description: string; 
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="rounded-2xl border border-border/40 bg-background/50 p-6 backdrop-blur-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
  >
    <div className="flex items-start gap-4">
      <div className="rounded-xl bg-primary/10 p-3">
        <Icon className="size-6 text-primary" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  </motion.div>
);

export default function FeaturesSection() {
  const organizerFeatures = [
    {
      icon: QrCode,
      title: "One QR Per Event",
      description: "Generate a single QR code that handles verification, on-spot registration, and team modifications for your entire event."
    },
    {
      icon: FileSpreadsheet,
      title: "Google Sheets Sync",
      description: "Automatically sync all registrations with Google Sheets. Real-time updates with every verification and change."
    },
    {
      icon: Eye,
      title: "Live Dashboard",
      description: "Monitor total registrations, verified teams, on-spot entries, and replacement history in real-time."
    },
    {
      icon: Download,
      title: "Export & Backup",
      description: "One-click export to Excel with full audit trail including replacement logs and verification timestamps."
    }
  ];

  const participantFeatures = [
    {
      icon: Users,
      title: "Smart Team Management",
      description: "Handle team replacements, optional members, and on-spot additions without deleting any data."
    },
    {
      icon: RefreshCw,
      title: "Member Replacement",
      description: "Replace absent members instantly. Old member marked REPLACED, new member ACTIVE. Team preserved."
    },
    {
      icon: UserPlus,
      title: "On-Spot Registration",
      description: "Participants without pre-registration can register instantly by scanning the same event QR."
    },
    {
      icon: Edit,
      title: "Flexible Team Editing",
      description: "Edit team details anytime. Status resets to NOT VERIFIED for re-verification to prevent fraud."
    }
  ];

  const systemFeatures = [
    {
      icon: Shield,
      title: "Fraud Prevention",
      description: "One verification per team, status checks, time-stamped logs, and admin-only modifications."
    },
    {
      icon: CheckCircle,
      title: "Validation Rules",
      description: "Enforce minimum team size, optional slot limits, and prevent duplicate verifications automatically."
    },
    {
      icon: Clock,
      title: "Real-time Verification",
      description: "Instant status updates. Scan QR → See status → Verify → Excel + Database updated immediately."
    },
    {
      icon: Server,
      title: "Dual Storage",
      description: "Database for real-time operations + Google Sheets for official records. Always in sync."
    }
  ];


  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Everything You Need for <span className="text-primary">Seamless Event Management</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Built specifically for college events with all real-world scenarios covered
        </p>
      </motion.div>

      {/* Organizer Features */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="size-2 rounded-full bg-primary" />
          <h3 className="text-2xl font-bold"> For Organizers</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {organizerFeatures.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>

      {/* Participant Features */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="size-2 rounded-full bg-primary" />
          <h3 className="text-2xl font-bold"> For Participants</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {participantFeatures.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>

      {/* System Features */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="size-2 rounded-full bg-primary" />
          <h3 className="text-2xl font-bold"> System Features</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {systemFeatures.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>

    

      {/* Workflow Summary */}
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mt-24 text-center px-4"
>
  <h3 className="mb-4 text-3xl font-bold tracking-tight">
     Complete Event Workflow
  </h3>
  <p className="mb-12 text-muted-foreground max-w-2xl mx-auto">
    From event creation to real-time verification — everything flows smoothly in one system.
  </p>

  <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
    {[
      {
        step: "1",
        title: "Create Event",
        desc: "Set team rules and generate secure QR codes",
      },
      {
        step: "2",
        title: "Registration",
        desc: "Google Forms → Sheets → Auto-synced Database",
      },
      {
        step: "3",
        title: "Verification Day",
        desc: "Scan QR, handle edge cases, sync instantly",
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="group relative rounded-2xl border bg-background/60 backdrop-blur-md p-6 shadow-sm hover:shadow-lg transition-all"
      >
        <div className="mb-4 flex justify-center">
          <div className="size-12 rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center text-white font-bold shadow-md">
            {item.step}
          </div>
        </div>

        <h4 className="mb-2 text-lg font-semibold">
          {item.title}
        </h4>
        <p className="text-sm text-muted-foreground">
          {item.desc}
        </p>

        {/* Glow effect */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 to-transparent" />
      </motion.div>
    ))}
  </div>
</motion.div>

    </section>
  );
}
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/constants";
import { Mail, Facebook, CheckCircle, Send } from "lucide-react";

function ContactForm({
  label,
  email,
  variant,
}: {
  label: string;
  email: string;
  variant: "left" | "right";
}) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async () => {
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitted(true);
  };

  const animation = variant === "left" ? slideInLeft : slideInRight;

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 bg-warm-white rounded-2xl border border-sand/50 text-center"
      >
        <CheckCircle size={48} className="mx-auto text-sage mb-4" />
        <h3 className="font-serif text-xl text-charcoal mb-2">
          Message Sent!
        </h3>
        <p className="text-warm-gray text-sm">
          Thank you for reaching out. We&apos;ll get back to you as soon as
          possible.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={animation}
      className="p-8 bg-warm-white rounded-2xl border border-sand/50"
    >
      <h3 className="font-serif text-2xl text-charcoal mb-2">{label}</h3>
      <a
        href={`mailto:${email}`}
        className="text-sm text-terracotta hover:text-terracotta-light transition-colors mb-6 inline-block"
      >
        {email}
      </a>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
        <div>
          <input
            {...register("name")}
            placeholder="Full Name"
            className="w-full px-4 py-3 bg-cream border border-sand/50 rounded-xl text-charcoal placeholder:text-warm-stone/60 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage/30 transition-colors text-sm"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-terracotta">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 bg-cream border border-sand/50 rounded-xl text-charcoal placeholder:text-warm-stone/60 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage/30 transition-colors text-sm"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-terracotta">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Your Message"
            className="w-full px-4 py-3 bg-cream border border-sand/50 rounded-xl text-charcoal placeholder:text-warm-stone/60 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage/30 transition-colors text-sm resize-none"
          />
          {errors.message && (
            <p className="mt-1 text-xs text-terracotta">
              {errors.message.message}
            </p>
          )}
        </div>
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            {...register("consent")}
            type="checkbox"
            className="mt-0.5 w-4 h-4 rounded border-sand text-sage focus:ring-sage/30"
          />
          <span className="text-xs text-warm-gray leading-relaxed">
            I consent to receive email updates and information from {label}
          </span>
        </label>
        {errors.consent && (
          <p className="text-xs text-terracotta">{errors.consent.message}</p>
        )}

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-sage hover:bg-deep-forest text-white font-medium rounded-xl transition-colors disabled:opacity-60"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <Send size={16} />
              Send Message
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
}

export function ContactSection() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        title="Get In Touch"
        subtitle="We'd love to hear from you. Reach out to CVIA or WIN below."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <ContactForm
          label="CVIA"
          email={siteConfig.emails.cvia}
          variant="left"
        />
        <ContactForm
          label="WIN"
          email={siteConfig.emails.win}
          variant="right"
        />
      </div>

      {/* Social links */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mt-16 text-center"
      >
        <p className="text-warm-gray text-sm mb-4">
          Follow us on social media
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href={siteConfig.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-warm-white border border-sand/50 hover:border-sage/30 hover:bg-sage/5 flex items-center justify-center text-warm-gray hover:text-sage transition-all"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a
            href={`mailto:${siteConfig.emails.cvia}`}
            className="w-12 h-12 rounded-full bg-warm-white border border-sand/50 hover:border-sage/30 hover:bg-sage/5 flex items-center justify-center text-warm-gray hover:text-sage transition-all"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

const FloatingContactBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const contacts = [
    {
      icon: Phone,
      label: "Call Us",
      value: "9594160436",
      href: "tel:9594160436",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat Now",
      href: "https://wa.me/919594160436",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "Send Email",
      href: "mailto:work.vaibhavraut@gmail.com",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <motion.div
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6, type: "spring" }}
    >
      {contacts.map((contact, index) => (
        <motion.a
          key={index}
          href={contact.href}
          target={contact.href.startsWith("http") ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="group relative"
          onHoverStart={() => setIsExpanded(true)}
          onHoverEnd={() => setIsExpanded(false)}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Tooltip */}
          <motion.div
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card border border-border rounded-lg px-4 py-2 shadow-xl whitespace-nowrap pointer-events-none"
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-sm font-semibold">{contact.label}</p>
            <p className="text-xs text-muted-foreground">{contact.value}</p>
          </motion.div>

          {/* Button */}
          <motion.div
            className={`w-14 h-14 rounded-full bg-gradient-to-br ${contact.color} shadow-lg flex items-center justify-center text-white relative overflow-hidden`}
            whileHover={{ boxShadow: "0 0 30px rgba(255,215,0,0.5)" }}
          >
            {/* Ripple effect */}
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-full"
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: [0, 2], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <contact.icon className="w-6 h-6 relative z-10" />
          </motion.div>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default FloatingContactBar;
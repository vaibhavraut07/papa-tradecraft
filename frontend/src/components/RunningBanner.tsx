import { AlertTriangle, Phone } from "lucide-react";
import { motion } from "framer-motion";

const RunningBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-yellow-600/90 backdrop-blur-sm border-b-2 border-yellow-500">
      <motion.div
        className="py-2 px-4"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-3 text-sm md:text-base text-white font-semibold flex-wrap">
            <AlertTriangle className="w-5 h-5 flex-shrink-0" />
            <span>
              <span className="font-bold">Beware of Imposters & Fraudulent Groups</span> posing as{" "}
              <span className="italic">PAPA4 Empowering Traders & Financial Services LLP</span> offering stock market tips.
            </span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Stay connected and help keep our Mentorship Programs secure.</span>
            <span className="hidden lg:inline">•</span>
            <span className="hidden lg:inline flex items-center gap-1">
              <Phone size={16} />
              For official updates, call us directly.
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RunningBanner;


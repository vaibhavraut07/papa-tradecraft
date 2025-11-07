import { AlertCircle, Mail } from "lucide-react";

const Disclaimer = () => {
  return (
    <div className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start space-x-3 mb-4">
            <AlertCircle className="text-yellow-500 mt-1 flex-shrink-0" size={24} />
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">Investments in securities markets are subject to market risks.</span> Read all documents carefully before investing.
              </p>
              <p>
                <span className="font-semibold text-foreground">PAPA4 Empowering Traders & Financial Services LLP (since 2025)</span> acts as a financial intermediary only and does{" "}
                <span className="font-semibold">not</span> provide tips, advisory, or portfolio management services.
              </p>
              <p>
                All educational content (including social media) is for{" "}
                <span className="font-semibold">informational purposes only</span> and not investment advice.
              </p>
              <p>
                The firm is <span className="font-semibold">not liable</span> for trading or investment decisions based on such material.
              </p>
              <p className="pt-2">
                Report misuse or fake representation at{" "}
                <a href="mailto:support@papatrading.in" className="text-primary hover:underline font-semibold">
                  support@papatrading.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;


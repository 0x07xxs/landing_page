import { useEffect } from 'react';

const Calendly = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A192F] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="calendly-inline-widget rounded-lg overflow-hidden shadow-xl bg-white/5"
          data-url="https://calendly.com/carlos27villegas/ai-consultation?hide_event_type_details=1&hide_gdpr_banner=1"
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>
    </div>
  );
};

export default Calendly; 
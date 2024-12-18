import { BackgroundAnimation } from './BackgroundAnimation';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { HeaderTitle } from './HeaderTitle';

export const Header = () => {
  return (
    <header className="relative min-h-[600px] bg-[#0A192F] overflow-hidden">
      <BackgroundAnimation />
      
      {/* Navigation Bar */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <Logo />
            <Navigation />
          </div>
        </div>
      </div>

      {/* Header Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <HeaderTitle />
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A192F] to-transparent z-[1]" />
    </header>
  );
};
// Industries page icons — sourced from lucide-react so they match a real,
// professionally-designed icon set instead of hand-drawn paths.
import { Home, Scale, Stethoscope, Wrench, UtensilsCrossed, Car, ShoppingBag, Briefcase } from 'lucide-react';

const iconProps = { className: 'ind-icon', strokeWidth: 1.8, 'aria-hidden': true };

export const INDUSTRY_ICONS = {
  'Real estate': () => <Home {...iconProps} />,
  'Legal services': () => <Scale {...iconProps} />,
  'Healthcare & dental': () => <Stethoscope {...iconProps} />,
  'Home services': () => <Wrench {...iconProps} />,
  'Restaurants': () => <UtensilsCrossed {...iconProps} />,
  'Automotive': () => <Car {...iconProps} />,
  'E-commerce & retail': () => <ShoppingBag {...iconProps} />,
  'Professional services': () => <Briefcase {...iconProps} />,
};

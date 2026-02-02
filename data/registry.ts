import { SplitText } from '../components/lib/SplitText';
import { SpotlightCard } from '../components/lib/SpotlightCard';
import { TiltedCard } from '../components/lib/TiltedCard';
import { Button } from '../components/lib/Button';
import { Input } from '../components/lib/Input';
import { Badge } from '../components/lib/Badge';
import { Card } from '../components/lib/Card';
import { Tabs } from '../components/lib/Tabs';
import { Accordion } from '../components/lib/Accordion';
import { GlowingCard } from '../components/lib/GlowingCard';
import { AnimatedGradient } from '../components/lib/AnimatedGradient';
import { ShimmerButton } from '../components/lib/ShimmerButton';
import { ParallaxCard } from '../components/lib/ParallaxCard';
import { TypewriterText } from '../components/lib/TypewriterText';
import { Modal } from '../components/lib/Modal';
import { Tooltip } from '../components/lib/Tooltip';
import { Progress } from '../components/lib/Progress';
import { ModernSaaS } from '../components/lib/ModernSaaS';
import { GandomDashboard } from '../components/lib/GandomDashboard';
import { SaaspoLanding } from '../components/lib/SaaspoLanding';
import { DecryptedText } from '../components/lib/DecryptedText';
import { GradientText } from '../components/lib/GradientText';
import { GlassCard } from '../components/lib/GlassCard';
import { Dock } from '../components/lib/Dock';
import { StarBorder } from '../components/lib/StarBorder';
import { PropertyShowcaseCard } from '../components/lib/PropertyShowcaseCard';
import { ModernCreativeDashboard } from '../components/lib/ModernCreativeDashboard';
import { Artoo3D } from '../components/lib/Artoo3D';
import { NebulaPortfolio } from '../components/lib/NebulaPortfolio';
import { NebulaSwirl } from '../components/lib/NebulaSwirl';
import { ChainFundHero } from '../components/lib/ChainFundHero';
import { NixtNodeHero } from '../components/lib/NixtNodeHero';
import { PayonHero } from '../components/lib/PayonHero';
import { UnlimiHero } from '../components/lib/UnlimiHero';
import { NebulaHero } from '../components/lib/NebulaHero';
import { RoobertHero } from '../components/lib/RoobertHero';
import { Home, User, Settings, Mail } from 'lucide-react';
import { ComponentDoc } from '../types';
import GandomDashboardCode from '../components/lib/GandomDashboard.tsx?raw';
import SaaspoLandingCode from '../components/lib/SaaspoLanding.tsx?raw';
import Artoo3DCode from '../components/lib/Artoo3D.tsx?raw';
import NebulaPortfolioCode from '../components/lib/NebulaPortfolio.tsx?raw';
import NebulaSwirlCode from '../components/lib/NebulaSwirl.tsx?raw';
import ChainFundHeroCode from '../components/lib/ChainFundHero.tsx?raw';
import NixtNodeHeroCode from '../components/lib/NixtNodeHero.tsx?raw';
import PayonHeroCode from '../components/lib/PayonHero.tsx?raw';
import UnlimiHeroCode from '../components/lib/UnlimiHero.tsx?raw';
import NebulaHeroCode from '../components/lib/NebulaHero.tsx?raw';
import RoobertHeroCode from '../components/lib/RoobertHero.tsx?raw';
import ModernCreativeDashboardCode from '../components/lib/ModernCreativeDashboard.tsx?raw';
import { SpotifyDashboard } from '../components/lib/SpotifyDashboard';
import SpotifyDashboardCode from '../components/lib/SpotifyDashboard.tsx?raw';
import { DecksIntro } from '../components/lib/DecksIntro';
import DecksIntroCode from '../components/lib/DecksIntro.tsx?raw';
import { Avatar, AvatarGroup } from '../components/lib/Avatar';
import { Switch } from '../components/lib/Switch';
import { Skeleton, SkeletonText, SkeletonCard } from '../components/lib/Skeleton';
import { Divider } from '../components/lib/Divider';
import { Alert } from '../components/lib/Alert';
import { Select } from '../components/lib/Select';

export const COMPONENT_REGISTRY: ComponentDoc[] = [
  {
    slug: 'decks-intro',
    name: 'Decks Intro',
    description: 'An AI-powered business model generation onboarding page with interactive forms and 3D visual elements.',
    category: 'Templates',
    component: DecksIntro,
    props: [],
    code: DecksIntroCode,
    prompt: "Create a modern onboarding page for an AI business model generator. The design should feature a dark theme with a clean, centered layout. Include a progress indicator for steps like 'Name', 'Description', and 'Features'. On the left, place a dynamic form for user input. On the right, display a 3D-style visual or placeholder image representing the 'Deck' being generated. Use smooth transitions between steps and a high-contrast 'Generate' button."
  },
  {
    slug: 'spotify-dashboard',
    name: 'Spotify Dashboard',
    description: 'A dark-themed music streaming dashboard clone with sidebar, sticky header, and playlist grid.',
    category: 'Templates',
    component: SpotifyDashboard,
    props: [],
    code: SpotifyDashboardCode,
    prompt: "Design a music streaming dashboard clone inspired by Spotify. The layout should be dark mode by default (using Zinc/Black colors). Include a fixed sidebar navigation with links like 'Home', 'Search', 'Library'. The main content area should have a gradient background that fades into black, displaying a 'Good Morning' greeting and a grid of recently played playlists. Below that, show 'Made For You' sections with album art cards. The header should be sticky and change opacity on scroll."
  },
  {
    slug: 'roobert-hero',
    name: 'Roobert Design Hero',
    description: 'A minimalist, browser-window style hero section with a clean prompt interface and grid layout.',
    category: 'Templates',
    component: RoobertHero,
    props: [],
    code: RoobertHeroCode,
    prompt: "Create a minimalist hero section for a design tool. The centerpiece should be a large, mock browser window container with a clean, white background and subtle drop shadow. Inside the window, place a prominent input field labeled 'Describe your design...' to simulate an AI prompt interface. Surround the input with a grid of colorful, abstract design elements or 'suggested' templates. The overall background should be a light gray with a dot pattern."
  },
  {
    slug: 'nebula-hero',
    name: 'Nebula Protocol Landing',
    description: 'A high-performance blockchain protocol landing page with bento grids, code snippets, and dark mode aesthetics.',
    category: 'Templates',
    component: NebulaHero,
    props: [],
    code: NebulaHeroCode,
    prompt: "Design a high-tech landing page for a blockchain protocol named 'Nebula'. Use a deep black background with star/space textures. The hero section should feature large, glowing typography saying 'Scale your protocol'. Below the text, include a 'Bento Grid' style layout showcasing features like 'High Performance', 'Security', and 'API Integration'. One of the grid items should be a code block showing how to initialize the SDK. Use purple and cyan gradients for accents."
  },
  {
    slug: 'unlimi-hero',
    name: 'Unlimi Streaming Dashboard',
    description: 'A Netflix-style streaming dashboard with a sidebar, hero banner, and horizontal scrolling lists.',
    category: 'Templates',
    component: UnlimiHero,
    props: [],
    code: UnlimiHeroCode,
    prompt: "Create a video streaming platform dashboard similar to Netflix. The UI should be immersive and dark. Feature a large 'Hero' banner at the top displaying a featured movie with a 'Watch Now' button and title overlay. Below the hero, implement horizontal scrolling lists (carousels) for categories like 'Trending Now', 'New Releases', and 'Action Movies'. Include a collapsible sidebar on the left with navigation icons."
  },
  {
    slug: 'payon-hero',
    name: 'Payon Fintech Hero',
    description: 'A modern fintech landing page with a cosmic planet background effect and 3D card interactions.',
    category: 'Templates',
    component: PayonHero,
    props: [],
    code: PayonHeroCode,
    prompt: "Design a landing page for a fintech startup called 'Payon'. The aesthetic should be futuristic and 'cosmic', using deep blues and purples. In the hero section, place a 3D-rendered planet or globe in the center background. Overlaid on this, display a floating credit card that tilts on mouse hover. The main headline should be bold and centered: 'The Future of Payments'. Include 'Get Started' and 'Contact Sales' buttons with glassmorphism effects."
  },
  {
    slug: 'nixt-node',
    name: 'NixtNode Web3 Hero',
    description: 'A premium Web3 infrastructure landing page with curved SVG backgrounds, stat cards, and smooth animations.',
    category: 'Templates',
    component: NixtNodeHero,
    props: [],
    code: NixtNodeHeroCode,
    prompt: "Build a premium landing page for a Web3 infrastructure provider. Use a sleek, dark theme with neon green accents. The hero section should feature a curved, wave-like SVG background separator at the bottom. Display key statistics (e.g., '99.9% Uptime', '10k+ Nodes') in floating cards that have a slight parallax effect. The typography should be modern and monospaced for technical terms."
  },
  {
    slug: 'chain-fund',
    name: 'ChainFund Crypto Hero',
    description: 'A high-tech crypto landing page hero section with 3D floating elements, glowing beams, and glassmorphism.',
    category: 'Templates',
    component: ChainFundHero,
    props: [],
    code: ChainFundHeroCode,
    prompt: "Create a hero section for a crypto investment platform. The background should be a dark gradient with animated, glowing vertical beams or 'data streams'. In the foreground, place a large, glassmorphic card displaying a mock crypto portfolio chart. Surrounding the chart, have small 3D coins or tokens floating. The headline 'Invest in the Future' should have a gradient text fill."
  },
  {
    slug: 'nebula-portfolio',
    name: 'Nebula Portfolio',
    description: 'A dark, cinematic portfolio landing page with a custom swirling nebula particle animation.',
    category: 'Templates',
    component: NebulaPortfolio,
    props: [],
    code: NebulaPortfolioCode,
    prompt: "Design a personal portfolio landing page for a creative developer. The background should be a full-screen HTML5 canvas animation of swirling nebula particles (purple and blue). The text content should be minimal and centered: 'Hi, I create digital experiences'. Include a floating navigation bar at the bottom or top with links to 'Work', 'About', and 'Contact'. The overall vibe should be cinematic and mysterious."
  },
  {
    slug: 'nebula-swirl',
    name: 'Nebula Swirl',
    description: 'A canvas-based particle animation creating a glowing, smooth swirl effect.',
    category: 'Backgrounds',
    component: NebulaSwirl,
    props: [
      { name: 'className', type: 'string', description: 'Additional CSS classes for custom styling.' },
    ],
    code: NebulaSwirlCode,
    prompt: "Create a React component that renders an HTML5 Canvas. Implement a particle system where thousands of small, glowing particles move in a fluid, swirling motion. The motion should be driven by Perlin noise or a flow field algorithm. The colors should shift slowly between deep blue, purple, and pink. Ensure the animation is performant using requestAnimationFrame."
  },
  {
    slug: 'artoo-3d',
    name: 'Artoo 3D',
    description: 'A futuristic 3D art showcase landing page with a unique sidebar, interactive hero, and events footer.',
    category: 'Templates',
    component: Artoo3D,
    props: [],
    code: Artoo3DCode,
    prompt: "Design a futuristic 'cyberpunk' style art showcase page. The layout should feature a fixed, wide sidebar on the left containing navigation and a 'featured artist' profile. The main content area should display a large, interactive 3D model (or placeholder) of a robot or character. At the bottom, include a scrolling ticker or list of upcoming 'Art Events'. Use a color palette of black, neon yellow, and stark white."
  },
  {
    slug: 'saaspo-landing',
    name: 'Saaspo Landing',
    description: 'A vibrant, high-contrast dark mode landing page with interactive cards and filtering.',
    category: 'Templates',
    component: SaaspoLanding,
    props: [],
    code: SaaspoLandingCode,
    prompt: "Create a landing page for a SaaS inspiration gallery. The theme should be dark with vibrant green accents. The hero section needs a large headline 'The best SaaS Web Design Inspiration'. Below it, implement a tabbed filter system (e.g., 'Landing', 'Pricing', 'About'). The main content is a grid of 'Browser Window' cards, each displaying a screenshot of a different SaaS website. The cards should have a subtle hover lift effect."
  },
  {
    slug: 'modern-saas',
    name: 'SaaS Landing',
    description: 'A complete modern SaaS landing page template with Hero, Features, Pricing, and FAQ sections.',
    category: 'Templates',
    component: ModernSaaS,
    props: [],
    code: `import { ModernSaaS } from './ModernSaaS';

export function Example() {
  return (
    <div className="w-full">
      <ModernSaaS />
    </div>
  );
}`,
    prompt: "Build a comprehensive landing page for a modern SaaS product. It should include the following sections stacked vertically: 1. A clean Hero with headline, subheadline, and two CTA buttons. 2. A 'Trusted By' logo strip. 3. A 'Features' section with alternating text-and-image layouts. 4. A 'Pricing' section with 3 cards (Basic, Pro, Enterprise), highlighting the Pro tier. 5. An FAQ accordion section. 6. A simple footer. Use a white/gray clean aesthetic."
  },
  {
    slug: 'gandom-dashboard',
    name: 'Gandom Dashboard',
    description: 'A dark-themed, data-rich dashboard template with charts, activity feeds, and stats.',
    category: 'Templates',
    component: GandomDashboard,
    props: [],
    code: GandomDashboardCode,
    prompt: "Design a data-heavy analytics dashboard in dark mode. The layout should be a 3-column grid. Column 1: A vertical navigation menu. Column 2 (wide): Main charts (line chart for revenue, bar chart for users) and a 'Recent Orders' table. Column 3 (narrow): An 'Activity Feed' showing recent user actions and a 'System Status' card. Use a dark gray background with card elements being slightly lighter."
  },
  {
    slug: 'modern-creative-dashboard',
    name: 'Modern Creative Dashboard',
    description: 'A light-themed, creative project management dashboard with animated charts, team collaboration, and time tracking.',
    category: 'Templates',
    component: ModernCreativeDashboard,
    props: [],
    code: ModernCreativeDashboardCode,
    prompt: "Create a bright, airy project management dashboard. Use a light background with soft shadows. The dashboard should feature a 'Project Overview' section with a circular progress chart. Include a 'Team Members' section showing avatars of online users. Add a 'Tasks' list where items can be checked off. Use pastel colors for tags and accents."
  },
  {
    slug: 'decrypted-text',
    name: 'Decrypted Text',
    description: 'Text that reveals itself by deciphering random characters, Matrix-style.',
    category: 'Text Animations',
    component: DecryptedText,
    props: [
      { name: 'text', type: 'string', description: 'The text to reveal.' },
      { name: 'speed', type: 'number', default: '50', description: 'Speed of character switching in ms.' },
      { name: 'maxIterations', type: 'number', default: '10', description: 'Maximum number of iterations before the correct character is revealed.' },
      { name: 'sequential', type: 'boolean', default: 'false', description: 'If true, reveals characters one by one instead of all at once.' },
      { name: 'revealDirection', type: '"start" | "end" | "center"', default: 'start', description: 'Direction of the reveal animation.' },
      { name: 'useOriginalCharsOnly', type: 'boolean', default: 'false', description: 'If true, only uses characters from the original text for scrambling.' },
      { name: 'characters', type: 'string', description: 'Custom set of characters to use for scrambling.' },
      { name: 'animateOn', type: '"view" | "hover"', default: 'hover', description: 'When to trigger the animation.' },
      { name: 'className', type: 'string', description: 'Additional CSS classes.' },
      { name: 'parentClassName', type: 'string', description: 'Class names for the container span.' },
    ],
    code: `import { DecryptedText } from './DecryptedText';

export function Example() {
  return (
    <DecryptedText 
      text="ACCESS GRANTED" 
      animateOn="view" 
      className="text-4xl font-bold text-green-500"
    />
  );
}`,
    prompt: "Create a 'Decrypted Text' effect component. The component should accept a string of text. When rendered or hovered, the text should appear scrambled with random characters (like Matrix code). Over a set duration, the random characters should cycle rapidly and then 'lock in' to the correct character one by one, revealing the final message."
  },
  {
    slug: 'gradient-text',
    name: 'Gradient Text',
    description: 'Text with an animated flowing gradient background.',
    category: 'Text Animations',
    component: GradientText,
    props: [
      { name: 'children', type: 'ReactNode', description: 'Content to render inside the text component.' },
      { name: 'colors', type: 'string[]', default: "['#FF0B55', '#FFDEDE', '#CF0F47', '#FF0B55']", description: 'Array of colors for the gradient.' },
      { name: 'animationSpeed', type: 'number', default: '3', description: 'Speed of the animation in seconds.' },
      { name: 'showBorder', type: 'boolean', default: 'false', description: 'Whether to show a border around the text.' },
      { name: 'className', type: 'string', description: 'Additional CSS classes.' },
    ],
    code: `import { GradientText } from './GradientText';

export function Example() {
  return (
    <GradientText 
      colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']} 
      className="text-5xl font-bold"
    >
      Flowing Colors
    </GradientText>
  );
}`,
    prompt: "Create a text component where the text color is a continuous, moving gradient. The gradient should be applied using 'background-clip: text'. Allow the user to pass in an array of colors. The background position should animate infinitely to create a flowing effect."
  },
  {
    slug: 'glass-card',
    name: 'Glass Card',
    description: 'A card component with a premium frosted glass effect and noise texture.',
    category: 'UI Components',
    component: GlassCard,
    props: [
      { name: 'children', type: 'ReactNode', description: 'Content of the card.' },
      { name: 'opacity', type: 'number', default: '0.1', description: 'Opacity of the glass background (0-1).' },
      { name: 'blur', type: 'number', default: '10', description: 'Blur amount in pixels.' },
      { name: 'border', type: 'boolean', default: 'true', description: 'Whether to show a subtle border.' },
      { name: 'className', type: 'string', description: 'Additional CSS classes.' },
    ],
    code: `import { GlassCard } from './GlassCard';

export function Example() {
  return (
    <GlassCard className="p-8 max-w-sm text-white">
      <h3 className="text-xl font-bold mb-2">Glassmorphism</h3>
      <p className="text-white/70">A beautiful frosted glass effect with noise texture.</p>
    </GlassCard>
  );
}`,
    prompt: "Design a 'Glassmorphism' card component. The card should have a semi-transparent background with a backdrop-blur effect. To make it look premium, overlay a subtle SVG noise texture on top. Add a thin, semi-transparent white border to define the edges."
  },
  {
    slug: 'dock',
    name: 'Dock',
    description: 'An Apple-style interactive dock with magnification effect.',
    category: '3D & Interactive',
    component: Dock,
    props: [
      { name: 'items', type: '{ icon: ReactNode, label: string, onClick?: () => void }[]', description: 'Array of items to display in the dock.' },
      { name: 'className', type: 'string', description: 'Additional CSS classes.' },
    ],
    code: `import { Dock } from './Dock';
import { Home, User, Settings, Mail } from 'lucide-react';

export function Example() {
  const items = [
    { icon: <Home />, label: 'Home' },
    { icon: <User />, label: 'Profile' },
    { icon: <Mail />, label: 'Messages' },
    { icon: <Settings />, label: 'Settings' },
  ];
  
  return <Dock items={items} />;
}`,
    prompt: "Create a macOS-style Dock component. It should be a horizontal container of icons at the bottom of the screen. When the user hovers over an icon, it should scale up significantly. Crucially, the neighboring icons should also scale up slightly, creating a smooth 'magnification wave' effect across the dock. Use Framer Motion for the physics-based scaling."
  },
  {
    slug: 'star-border',
    name: 'Star Border',
    description: 'A container with a rotating star-like gradient border effect.',
    category: 'UI Components',
    component: StarBorder,
    props: [
      { name: 'children', type: 'ReactNode', description: 'Content to be wrapped by the border.' },
      { name: 'color', type: 'string', default: 'white', description: 'Color of the star tail.' },
      { name: 'speed', type: 'string', default: '6s', description: 'Animation duration (e.g., "6s").' },
      { name: 'as', type: 'ElementType', default: 'button', description: 'Polymorphic component to render as (e.g., "div", "button").' },
      { name: 'className', type: 'string', description: 'Additional CSS classes.' },
    ],
    code: `import { StarBorder } from './StarBorder';

export function Example() {
  return (
    <StarBorder color="cyan" speed="4s">
      <div className="px-8 py-4 text-white">
        Start Generating
      </div>
    </StarBorder>
  );
}`,
    prompt: "Create a button or container with a 'Star Border' effect. The border should look like a small, glowing star or comet tail is tracing the perimeter of the element. This can be achieved by using two layered elements and a conic-gradient mask that rotates continuously."
  },
  {
    slug: 'split-text',
    name: 'Split Text',
    description: 'A text animation component that splits text into words or characters and animates them in sequence.',
    category: 'Text Animations',
    component: SplitText,
    props: [
      { name: 'text', type: 'string', description: 'The text to animate.' },
      { name: 'delay', type: 'number', default: '0.05', description: 'Delay between each word animation in seconds.' },
      { name: 'className', type: 'string', description: 'Additional CSS classes.' },
    ],
    code: `import { SplitText } from './SplitText';

export function Example() {
  return (
    <SplitText 
      text="Hello, Creative Developer!" 
      className="text-4xl font-bold text-white text-center" 
      delay={0.1} 
    />
  );
}`,
    prompt: "Build a 'Split Text' component that takes a string prop. It should split the string into individual words or characters, wrapping each in a span. Then, using an animation library, animate each span into view (e.g., fade in and slide up) with a staggered delay, creating a cascading entrance effect."
  },
  {
    slug: 'spotlight-card',
    name: 'Spotlight Card',
    description: 'A card component that reveals a radial gradient spotlight effect following the mouse cursor.',
    category: 'UI Components',
    component: SpotlightCard,
    props: [
      { name: 'children', type: 'ReactNode', description: 'Content of the card.' },
      { name: 'spotlightColor', type: 'string', default: 'rgba(255,255,255,0.15)', description: 'Color of the spotlight effect.' },
      { name: 'className', type: 'string', description: 'Additional CSS classes.' },
    ],
    code: `import { SpotlightCard } from './SpotlightCard';

export function Example() {
  return (
    <SpotlightCard className="p-8 max-w-sm mx-auto">
      <h3 className="text-xl font-bold text-white mb-2">Spotlight Effect</h3>
      <p className="text-gray-400">
        Move your mouse over this card to see the spotlight reveal the background.
      </p>
    </SpotlightCard>
  );
}`,
    prompt: "Create a 'Spotlight Card'. The card has a dark background. When the mouse moves over it, a radial gradient circle (the spotlight) should follow the cursor position, illuminating the underlying texture or border. This is typically done by updating CSS variables for mouse X and Y coordinates on mouse move."
  },
  {
    slug: 'tilted-card',
    name: 'Tilted Card',
    description: 'An interactive 3D card that tilts based on mouse position using Framer Motion.',
    category: '3D & Interactive',
    component: TiltedCard,
    props: [
      { name: 'children', type: 'ReactNode', description: 'Content of the card.' },
      { name: 'rotateAmplitude', type: 'number', default: '15', description: 'Maximum rotation angle in degrees.' },
      { name: 'scaleOnHover', type: 'number', default: '1.05', description: 'Scale factor when hovering.' },
      { name: 'className', type: 'string', description: 'Additional CSS classes.' },
    ],
    code: `import { TiltedCard } from './TiltedCard';

export function Example() {
  return (
    <div className="h-[300px] w-[300px] mx-auto perspective-1000">
      <TiltedCard className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 flex flex-col justify-end shadow-2xl">
        <h3 className="text-2xl font-bold text-white">3D Interaction</h3>
        <p className="text-white/80 mt-2">Hover to tilt me!</p>
      </TiltedCard>
    </div>
  );
}`,
    prompt: "Implement a 3D Tilted Card. When the user hovers over the card, it should rotate in 3D space based on the mouse position relative to the center of the card. (e.g., mouse top-left -> card tilts top-left). Add a glare effect that moves opposite to the tilt for realism. Reset to flat state on mouse leave."
  },
  {
    slug: 'button',
    name: 'Button',
    description: 'A versatile button component with multiple variants, sizes, and loading states.',
    category: 'UI Components',
    component: Button,
    props: [
      { name: 'children', type: 'ReactNode', description: 'Button content.' },
      { name: 'variant', type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"', default: 'default', description: 'Visual style variant.' },
      { name: 'size', type: '"default" | "sm" | "lg" | "icon"', default: 'default', description: 'Button size.' },
      { name: 'isLoading', type: 'boolean', default: 'false', description: 'Shows loading spinner.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the button.' },
      { name: 'className', type: 'string', description: 'Additional CSS classes.' },
      { name: 'onClick', type: '() => void', description: 'Click handler.' },
    ],
    code: `// Installation: Copy the Button component to your project
// Dependencies: framer-motion, lucide-react, tailwind-merge

import { Button } from './components/lib/Button';

export function Example() {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Variants */}
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      
      {/* Sizes */}
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      
      {/* States */}
      <Button isLoading>Loading</Button>
      <Button disabled>Disabled</Button>
      
      {/* With onClick */}
      <Button onClick={() => alert('Clicked!')}>
        Click Me
      </Button>
    </div>
  );
}

// Usage in forms
function FormExample() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Button type="submit">Submit</Button>
    </form>
  );
}`,
    prompt: "Create a production-ready React Button component using Tailwind and Framer Motion. It should support variants (primary, secondary, outline, ghost), sizes (sm, md, lg), and a loading state which replaces the text with a spinner. The button should have a subtle scale-down animation on click."
  },
  {
    slug: 'input',
    name: 'Input',
    description: 'A styled input field with label, error states, and icon support.',
    category: 'UI Components',
    component: Input,
    props: [
      { name: 'label', type: 'string', description: 'Input label text.' },
      { name: 'error', type: 'string', description: 'Error message to display.' },
      { name: 'icon', type: 'ReactNode', description: 'Icon to display on the left.' },
      { name: 'type', type: 'string', default: 'text', description: 'Input type (text, email, password, etc.).' },
      { name: 'placeholder', type: 'string', description: 'Placeholder text.' },
      { name: 'value', type: 'string | number', description: 'Input value.' },
      { name: 'onChange', type: '(e: ChangeEvent) => void', description: 'Change handler.' },
      { name: 'disabled', type: 'boolean', description: 'Whether the input is disabled.' },
      { name: 'className', type: 'string', description: 'Additional CSS classes.' },
    ],
    code: `// Installation: Copy the Input component to your project
// Dependencies: lucide-react, tailwind-merge

import { Input } from './components/lib/Input';
import { Mail, Lock, User, Search } from 'lucide-react';
import { useState } from 'react';

export function Example() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  return (
    <div className="space-y-4 max-w-md">
      {/* Basic Input */}
      <Input 
        label="Email" 
        type="email"
        placeholder="Enter your email"
        icon={<Mail className="h-4 w-4" />}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      
      {/* Password Input */}
      <Input 
        label="Password" 
        type="password"
        placeholder="Enter your password"
        icon={<Lock className="h-4 w-4" />}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      {/* Input with Error */}
      <Input 
        label="Username" 
        placeholder="Choose a username"
        icon={<User className="h-4 w-4" />}
        error={error || undefined}
      />
      
      {/* Search Input */}
      <Input 
        placeholder="Search..."
        icon={<Search className="h-4 w-4" />}
      />
      
      {/* Disabled Input */}
      <Input 
        label="Disabled" 
        placeholder="Cannot edit"
        disabled
      />
    </div>
  );
}

// Form validation example
function FormExample() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('Please enter a valid email');
    } else {
      setError('');
      // Submit form
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input 
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={error}
      />
    </form>
  );
}`,
    prompt: "Design a reusable Input component. It should allow an optional label above and an error message below. Include support for a leading icon (e.g., a search icon or email icon inside the input on the left). The border should highlight (ring) when focused."
  },
  {
    slug: 'badge',
    name: 'Badge',
    description: 'Small status indicators with multiple color variants.',
    category: 'UI Components',
    component: Badge,
    props: [
      { name: 'children', type: 'ReactNode', description: 'Badge content.' },
      { name: 'variant', type: '"default" | "secondary" | "success" | "warning" | "destructive" | "outline"', default: 'default', description: 'Badge color variant.' },
      { name: 'className', type: 'string', description: 'Additional CSS classes.' },
    ],
    code: `import { Badge } from './Badge';

export function Example() {
  return (
    <div className="flex gap-2">
      <Badge>Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="destructive">Error</Badge>
    </div>
  );
}`,
    prompt: "Create a simple Badge component. It is a small, pill-shaped inline element used for status tags. It needs to accept a 'variant' prop to change its background and text color (e.g., green for success, red for error, gray for neutral)."
  },
  {
    slug: 'card',
    name: 'Card',
    description: 'A flexible card container with header, content, and footer sections.',
    category: 'UI Components',
    component: Card,
    props: [
      { name: 'children', type: 'ReactNode', description: 'Card content.' },
      { name: 'hover', type: 'boolean', default: 'false', description: 'Enable hover animation.' },
      { name: 'className', type: 'string', description: 'Additional CSS classes.' },
    ],
    code: `import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './Card';

export function Example() {
  return (
    <Card hover>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-secondary">Your content here</p>
      </CardContent>
    </Card>
  );
}`,
    prompt: "Build a composable Card component set (Card, CardHeader, CardTitle, CardContent). The main Card should have a clean white background with a subtle shadow and rounded corners. Add an optional 'hover' prop that slightly lifts the card when hovered."
  },
  {
    slug: 'tabs',
    name: 'Tabs',
    description: 'Animated tab navigation with smooth transitions.',
    category: 'UI Components',
    component: Tabs,
    props: [
      { name: 'tabs', type: 'Tab[]', description: 'Array of tab objects with id, label, and content.' },
      { name: 'defaultTab', type: 'string', description: 'ID of the default active tab.' },
      { name: 'className', type: 'string', description: 'Additional CSS classes.' },
    ],
    code: `import { Tabs } from './Tabs';

export function Example() {
  const tabs = [
    { id: 'tab1', label: 'Overview', content: <div>Overview content</div> },
    { id: 'tab2', label: 'Details', content: <div>Details content</div> },
  ];
  
  return <Tabs tabs={tabs} />;
}`,
    prompt: "Create an animated Tabs component using Framer Motion. The tabs should be a horizontal list of buttons. When a tab is selected, a background pill (indicator) should slide smoothly from the previously selected tab to the new one (layout animation)."
  },
  {
    slug: 'accordion',
    name: 'Accordion',
    description: 'Collapsible content sections with smooth animations.',
    category: 'UI Components',
    component: Accordion,
    props: [
      { name: 'items', type: 'AccordionItem[]', description: 'Array of accordion items with id, title, and content.' },
      { name: 'allowMultiple', type: 'boolean', default: 'false', description: 'Allow multiple items to be open at once.' },
      { name: 'className', type: 'string', description: 'Additional CSS classes.' },
    ],
    code: `import { Accordion } from './Accordion';

export function Example() {
  const items = [
    { id: '1', title: 'Section 1', content: 'Content for section 1' },
    { id: '2', title: 'Section 2', content: 'Content for section 2' },
  ];
  
  return <Accordion items={items} />;
}`,
    prompt: "Build an Accordion component. It takes a list of items (title and content). Clicking a title should expand its corresponding content with a smooth height animation. Allow an option to toggle whether multiple sections can be open simultaneously."
  },
  {
    slug: 'glowing-card',
    name: 'Glowing Card',
    description: 'A card with an animated glow effect on hover.',
    category: '3D & Interactive',
    component: GlowingCard,
    props: [
      { name: 'children', type: 'ReactNode', description: 'Card content.' },
      { name: 'glowColor', type: 'string', default: '#8b5cf6', description: 'Color of the glow effect.' },
      { name: 'className', type: 'string', description: 'Additional CSS classes.' },
    ],
    code: `import { GlowingCard } from './GlowingCard';

export function Example() {
  return (
    <GlowingCard glowColor="#8b5cf6">
      <h3 className="text-xl font-bold text-white">Glowing Effect</h3>
      <p className="text-secondary mt-2">Hover to see the glow</p>
    </GlowingCard>
  );
}`,
    prompt: "Create a 'Glowing Card'. The card has a dark border. On hover, the border should glow intensely with a specific color, and a soft light should appear to emanate from behind the card. Use CSS box-shadow transitions for the glow."
  },
  {
    slug: 'animated-gradient',
    name: 'Animated Gradient',
    description: 'A container with continuously animating gradient background.',
    category: '3D & Interactive',
    component: AnimatedGradient,
    props: [
      { name: 'children', type: 'ReactNode', description: 'Content to render over the gradient.' },
      { name: 'colors', type: 'string[]', default: "['#8b5cf6', '#3b82f6', '#ec4899']", description: 'Array of gradient colors.' },
      { name: 'speed', type: 'number', default: '5', description: 'Animation speed in seconds.' },
      { name: 'blur', type: 'string', default: 'blur(100px)', description: 'Blur amount for the gradient.' },
      { name: 'className', type: 'string', description: 'Additional CSS classes.' },
    ],
    code: `import { AnimatedGradient } from './AnimatedGradient';

export function Example() {
  return (
    <AnimatedGradient className="p-8">
      <h3 className="text-2xl font-bold text-white">Animated Background</h3>
      <p className="text-white/80 mt-2">Watch the gradient flow</p>
    </AnimatedGradient>
  );
}`,
    prompt: "Create a container with an 'Animated Gradient' background. It should use 3-4 distinct colors that slowly blend and move around the container in a fluid, blob-like motion. This is often achieved by animating the background-position of a large gradient or moving absolute-positioned colored divs with a blur filter."
  },
  {
    slug: 'shimmer-button',
    name: 'Shimmer Button',
    description: 'A button with an animated shimmer effect.',
    category: '3D & Interactive',
    component: ShimmerButton,
    props: [
      { name: 'children', type: 'ReactNode', description: 'Button content.' },
      { name: 'shimmerColor', type: 'string', default: 'rgba(255, 255, 255, 0.3)', description: 'Color of the shimmer effect.' },
      { name: 'className', type: 'string', description: 'Additional CSS classes.' },
      { name: 'onClick', type: '() => void', description: 'Click handler.' },
    ],
    code: `import { ShimmerButton } from './ShimmerButton';

export function Example() {
  return (
    <ShimmerButton>
      Click me!
    </ShimmerButton>
  );
}`,
    prompt: "Design a 'Shimmer Button'. The button should have a dark background. Periodically (or on hover), a beam of light (shimmer) should travel diagonally across the button surface, suggesting a metallic or glass texture. Use an overflow-hidden container and a transforming pseudo-element for the beam."
  },
  {
    slug: 'parallax-card',
    name: 'Parallax Card',
    description: 'A 3D card with parallax effect based on mouse movement.',
    category: '3D & Interactive',
    component: ParallaxCard,
    props: [
      { name: 'children', type: 'ReactNode', description: 'Content of the card.' },
      { name: 'intensity', type: 'number', default: '20', description: 'Intensity of the parallax effect.' },
      { name: 'className', type: 'string', description: 'Additional CSS classes.' },
    ],
    code: `import { ParallaxCard } from './ParallaxCard';

export function Example() {
  return (
    <ParallaxCard intensity={15}>
      <h3 className="text-xl font-bold text-white">Parallax Effect</h3>
      <p className="text-secondary mt-2">Move your mouse over me</p>
    </ParallaxCard>
  );
}`,
    prompt: "Create a Parallax Card component. The card should contain multiple layers (e.g., background, text, floating icon). When the mouse moves over the card, the layers should move slightly in the direction of the mouse but at different speeds, creating a depth perception effect."
  },
  {
    slug: 'typewriter-text',
    name: 'Typewriter Text',
    description: 'Text that types out character by character with a cursor.',
    category: 'Text Animations',
    component: TypewriterText,
    props: [
      { name: 'text', type: 'string', description: 'The text to type out.' },
      { name: 'speed', type: 'number', default: '50', description: 'Typing speed in milliseconds.' },
      { name: 'cursor', type: 'boolean', default: 'true', description: 'Show typing cursor.' },
      { name: 'onComplete', type: '() => void', description: 'Callback when typing finishes.' },
      { name: 'className', type: 'string', description: 'Additional CSS classes.' },
    ],
    code: `import { TypewriterText } from './TypewriterText';

export function Example() {
  return (
    <TypewriterText 
      text="Hello, I'm a typewriter effect!" 
      speed={50}
      className="text-2xl font-bold text-white"
    />
  );
}`,
    prompt: "Build a 'Typewriter' effect component. It accepts a string and reveals it one character at a time with a consistent delay. A blinking cursor should be present at the end of the text while typing. Once finished, the cursor can optionally persist or disappear."
  },
  {
    slug: 'modal',
    name: 'Modal',
    description: 'A modal dialog with backdrop blur and smooth animations.',
    category: 'UI Components',
    component: Modal,
    props: [
      { name: 'isOpen', type: 'boolean', description: 'Controls modal visibility.' },
      { name: 'onClose', type: '() => void', description: 'Callback when modal closes.' },
      { name: 'title', type: 'string', description: 'Modal title.' },
      { name: 'children', type: 'ReactNode', description: 'Modal content.' },
      { name: 'size', type: '"sm" | "md" | "lg" | "xl"', default: 'md', description: 'Modal size.' },
      { name: 'showCloseButton', type: 'boolean', default: 'true', description: 'Whether to show the close button.' },
      { name: 'align', type: '"center" | "top"', default: 'center', description: 'Vertical alignment of the modal.' },
      { name: 'className', type: 'string', description: 'Additional CSS classes.' },
    ],
    code: `import { Modal } from './Modal';
import { useState } from 'react';

export function Example() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Example Modal">
        <p>This is the modal content.</p>
      </Modal>
    </>
  );
}`,
    prompt: "Create a reusable Modal component. It should render in a Portal to break out of the DOM hierarchy. When active, display a dark, blurred backdrop behind the modal window. The modal window itself should fade in and scale up slightly (pop-in animation)."
  },
  {
    slug: 'tooltip',
    name: 'Tooltip',
    description: 'A tooltip that appears on hover with smooth animations.',
    category: 'UI Components',
    component: Tooltip,
    props: [
      { name: 'content', type: 'ReactNode', description: 'Tooltip content.' },
      { name: 'children', type: 'ReactNode', description: 'Element to trigger the tooltip.' },
      { name: 'position', type: '"top" | "bottom" | "left" | "right"', default: 'top', description: 'Tooltip position.' },
      { name: 'className', type: 'string', description: 'Additional CSS classes.' },
    ],
    code: `import { Tooltip } from './Tooltip';

export function Example() {
  return (
    <Tooltip content="This is a tooltip" position="top">
      <button>Hover me</button>
    </Tooltip>
  );
}`,
    prompt: "Implement a Tooltip component. It wraps a child element. When that child is hovered, a small floating text bubble should appear near it (top, bottom, left, or right). The appearance should be animated (e.g., slight fade and slide)."
  },
  {
    slug: 'progress',
    name: 'Progress',
    description: 'An animated progress bar with multiple variants.',
    category: 'UI Components',
    component: Progress,
    props: [
      { name: 'value', type: 'number', description: 'Current progress value (0-100).' },
      { name: 'max', type: 'number', default: '100', description: 'Maximum value.' },
      { name: 'variant', type: '"default" | "success" | "warning" | "danger"', default: 'default', description: 'Color variant.' },
      { name: 'showLabel', type: 'boolean', default: 'false', description: 'Show percentage label.' },
      { name: 'animated', type: 'boolean', default: 'true', description: 'Whether to animate the progress bar width.' },
      { name: 'className', type: 'string', description: 'Additional CSS classes.' },
    ],
    code: `import { Progress } from './Progress';

export function Example() {
  return (
    <div className="space-y-4">
      <Progress value={75} showLabel />
      <Progress value={50} variant="success" />
      <Progress value={25} variant="warning" />
    </div>
  );
}`,
    prompt: "Create a linear Progress Bar component. It takes a 'value' (0-100) and renders a bar filled to that percentage. The filling action should be animated. Allow for color variants (e.g., success green, error red)."
  },
  {
    slug: 'property-showcase-card',
    name: 'Property Showcase Card',
    description: 'A beautiful card component for showcasing properties, accommodations, or travel destinations with image, ratings, and booking functionality.',
    category: 'UI Components',
    component: PropertyShowcaseCard,
    props: [
      { name: 'title', type: 'string', description: 'Property title or name.' },
      { name: 'description', type: 'string', description: 'Property description.' },
      { name: 'image', type: 'string', description: 'Property image URL.' },
      { name: 'rating', type: 'number', default: '4.5', description: 'Property rating (0-5).' },
      { name: 'duration', type: 'string', default: '3 Night Stay', description: 'Stay duration or location info.' },
      { name: 'isFavorite', type: 'boolean', default: 'false', description: 'Whether property is favorited.' },
      { name: 'onFavoriteClick', type: '() => void', description: 'Callback when favorite button is clicked.' },
      { name: 'onReserveClick', type: '() => void', description: 'Callback when reserve button is clicked.' },
      { name: 'className', type: 'string', description: 'Additional CSS classes.' },
    ],
    code: `// Installation: Copy the PropertyShowcaseCard component to your project
// Dependencies: framer-motion, lucide-react, tailwind-merge

import { PropertyShowcaseCard } from './components/lib/PropertyShowcaseCard';
import { useState } from 'react';

export function Example() {
  const [favorites, setFavorites] = useState<string[]>([]);

  const properties = [
    {
      id: '1',
      title: 'Santorini Villa',
      description: 'Luxury villa overlooking the Aegean Sea, offering breathtaking sunset views and infinity pool for ultimate relaxation.',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
      rating: 4.9,
      duration: '3 Night Stay',
    },
    {
      id: '2',
      title: 'Swiss Chalet',
      description: 'Cozy wooden chalet nestled in the Swiss Alps, offering a warm fireplace, scenic mountain views, and direct access to ski slopes.',
      image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800&q=80',
      rating: 4.7,
      duration: '4 Night Stay',
    },
  ];

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {properties.map((property) => (
        <PropertyShowcaseCard
          key={property.id}
          title={property.title}
          description={property.description}
          image={property.image}
          rating={property.rating}
          duration={property.duration}
          isFavorite={favorites.includes(property.id)}
          onFavoriteClick={() => toggleFavorite(property.id)}
          onReserveClick={() => alert(\`Reserving \${property.title}\`)}
        />
      ))}
    </div>
  );
}

// Single card example
export function SingleCardExample() {
  return (
    <PropertyShowcaseCard
      title="Mountain Retreat"
      description="Escape to this peaceful mountain retreat with stunning views and modern amenities."
      image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
      rating={4.8}
      duration="Weekend Getaway"
      onReserveClick={() => console.log('Reserve clicked')}
    />
  );
}`,
    prompt: "Design a 'Property Card' for a travel or real estate site. The card should feature a large, high-quality image at the top. Overlaid on the image, include a 'favorite' heart button. Below the image, display the title, a star rating, and a brief description. At the bottom, have a primary action button for 'Reserve' or 'View Details'."
  },
  {
    slug: 'avatar',
    name: 'Avatar',
    description: 'A versatile avatar component for displaying user profile pictures with automatic fallback to initials. Supports multiple sizes, shapes, online status indicators, and grouping for team displays.',
    category: 'UI Components',
    component: Avatar,
    props: [
      { name: 'src', type: 'string', description: 'URL of the avatar image. Falls back to initials if loading fails.' },
      { name: 'alt', type: 'string', default: 'Avatar', description: 'Alt text for the image, also used to generate fallback initials.' },
      { name: 'fallback', type: 'string', description: 'Custom fallback text (max 2 characters). Overrides auto-generated initials.' },
      { name: 'size', type: '"xs" | "sm" | "md" | "lg" | "xl"', default: 'md', description: 'Avatar size. Options range from extra small (24px) to extra large (64px).' },
      { name: 'variant', type: '"circle" | "rounded" | "square"', default: 'circle', description: 'Shape variant of the avatar.' },
      { name: 'status', type: '"online" | "offline" | "away" | "busy"', description: 'Status indicator shown as a colored dot on the avatar.' },
      { name: 'border', type: 'boolean', default: 'false', description: 'Whether to show a ring border around the avatar.' },
      { name: 'className', type: 'string', description: 'Additional CSS classes for custom styling.' },
    ],
    code: `// Installation: Copy the Avatar component to your project
// Dependencies: tailwind-merge

import { Avatar, AvatarGroup } from './components/lib/Avatar';

export function Example() {
  return (
    <div className="space-y-8">
      {/* Basic Avatars */}
      <div className="flex items-center gap-4">
        <Avatar 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" 
          alt="John Doe"
        />
        <Avatar alt="Jane Smith" /> {/* Falls back to initials "JS" */}
        <Avatar fallback="AI" /> {/* Custom fallback */}
      </div>
      
      {/* Sizes */}
      <div className="flex items-end gap-4">
        <Avatar size="xs" alt="User" />
        <Avatar size="sm" alt="User" />
        <Avatar size="md" alt="User" />
        <Avatar size="lg" alt="User" />
        <Avatar size="xl" alt="User" />
      </div>
      
      {/* With Status Indicators */}
      <div className="flex items-center gap-4">
        <Avatar alt="Online User" status="online" />
        <Avatar alt="Busy User" status="busy" />
        <Avatar alt="Away User" status="away" />
        <Avatar alt="Offline User" status="offline" />
      </div>
      
      {/* Variants */}
      <div className="flex items-center gap-4">
        <Avatar variant="circle" alt="Circle" />
        <Avatar variant="rounded" alt="Rounded" />
        <Avatar variant="square" alt="Square" />
      </div>
      
      {/* Avatar Group */}
      <AvatarGroup max={4}>
        <Avatar alt="User 1" />
        <Avatar alt="User 2" />
        <Avatar alt="User 3" />
        <Avatar alt="User 4" />
        <Avatar alt="User 5" />
        <Avatar alt="User 6" />
      </AvatarGroup>
    </div>
  );
}`,
    prompt: "Create an Avatar component. It should display an image if valid, or fallback to user initials (derived from 'alt' text) on a colored background. Support different sizes (sm, md, lg) and shapes (circle, square). Also, allow an optional 'online' status dot to be positioned on the corner of the avatar."
  },
  {
    slug: 'switch',
    name: 'Switch',
    description: 'An animated toggle switch component for binary settings. Features smooth spring animations, multiple sizes, and optional label with description text. Perfect for settings panels and preference toggles.',
    category: 'UI Components',
    component: Switch,
    props: [
      { name: 'checked', type: 'boolean', default: 'false', description: 'Whether the switch is in the on position.' },
      { name: 'onChange', type: '(checked: boolean) => void', description: 'Callback fired when the switch state changes.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Whether the switch is disabled and non-interactive.' },
      { name: 'size', type: '"sm" | "md" | "lg"', default: 'md', description: 'Size variant of the switch.' },
      { name: 'label', type: 'string', description: 'Label text displayed next to the switch.' },
      { name: 'description', type: 'string', description: 'Description text displayed below the label.' },
      { name: 'className', type: 'string', description: 'Additional CSS classes for custom styling.' },
    ],
    code: `// Installation: Copy the Switch component to your project
// Dependencies: framer-motion, tailwind-merge

import { Switch } from './components/lib/Switch';
import { useState } from 'react';

export function Example() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);

  return (
    <div className="space-y-6 max-w-md">
      {/* Basic Switch */}
      <Switch 
        checked={notifications} 
        onChange={setNotifications} 
      />
      
      {/* With Label */}
      <Switch 
        checked={darkMode} 
        onChange={setDarkMode}
        label="Dark Mode"
      />
      
      {/* With Label and Description */}
      <Switch 
        checked={autoSave} 
        onChange={setAutoSave}
        label="Auto-save"
        description="Automatically save your work every 5 minutes"
      />
      
      {/* Different Sizes */}
      <div className="flex items-center gap-6">
        <Switch size="sm" checked={true} onChange={() => {}} />
        <Switch size="md" checked={true} onChange={() => {}} />
        <Switch size="lg" checked={true} onChange={() => {}} />
      </div>
      
      {/* Disabled State */}
      <Switch 
        checked={true} 
        disabled 
        label="Disabled Switch"
        description="This setting cannot be changed"
      />
    </div>
  );
}`,
    prompt: "Build an interactive Toggle Switch. It should have a 'pill' track and a circular thumb. Clicking the switch toggles the state, moving the thumb from left to right and changing the track color (e.g., gray to green). Use a spring animation for the thumb movement to make it feel tactile."
  },
  {
    slug: 'skeleton',
    name: 'Skeleton',
    description: 'Loading placeholder components that mimic the shape of content while data is being fetched. Includes pulse and wave animations, multiple shape variants, and preset compositions for common UI patterns like cards and text blocks.',
    category: 'UI Components',
    component: Skeleton,
    props: [
      { name: 'variant', type: '"text" | "circular" | "rectangular" | "rounded"', default: 'text', description: 'Shape variant of the skeleton.' },
      { name: 'width', type: 'string | number', description: 'Width of the skeleton. Numbers are treated as pixels.' },
      { name: 'height', type: 'string | number', description: 'Height of the skeleton. Numbers are treated as pixels.' },
      { name: 'animation', type: '"pulse" | "wave" | "none"', default: 'pulse', description: 'Animation style for the loading effect.' },
      { name: 'className', type: 'string', description: 'Additional CSS classes for custom styling.' },
    ],
    code: `// Installation: Copy the Skeleton component to your project
// Dependencies: tailwind-merge

import { Skeleton, SkeletonText, SkeletonCard } from './components/lib/Skeleton';

export function Example() {
  return (
    <div className="space-y-8">
      {/* Basic Skeletons */}
      <div className="space-y-2">
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="60%" />
      </div>
      
      {/* Shape Variants */}
      <div className="flex items-center gap-4">
        <Skeleton variant="circular" width={48} height={48} />
        <Skeleton variant="rounded" width={100} height={48} />
        <Skeleton variant="rectangular" width={100} height={48} />
      </div>
      
      {/* User Profile Skeleton */}
      <div className="flex items-center gap-4">
        <Skeleton variant="circular" width={56} height={56} />
        <div className="space-y-2 flex-1">
          <Skeleton variant="text" width="40%" height={20} />
          <Skeleton variant="text" width="60%" height={16} />
        </div>
      </div>
      
      {/* SkeletonText Preset */}
      <SkeletonText lines={4} />
      
      {/* SkeletonCard Preset */}
      <div className="grid grid-cols-2 gap-4 max-w-2xl">
        <SkeletonCard />
        <SkeletonCard hasImage={false} />
      </div>
      
      {/* Animation Variants */}
      <div className="space-y-4">
        <Skeleton animation="pulse" width="100%" height={24} />
        <Skeleton animation="wave" width="100%" height={24} />
        <Skeleton animation="none" width="100%" height={24} />
      </div>
    </div>
  );
}`,
    prompt: "Create a Skeleton Loader component. It is a gray placeholder box used to indicate loading states. Add a 'pulse' animation (opacity fades in and out) or a 'shimmer' wave effect (moving gradient) to suggest activity. Support 'circle' variant for avatars and 'rectangle' for text/images."
  },
  {
    slug: 'divider',
    name: 'Divider',
    description: 'A flexible separator component for visually dividing content sections. Supports horizontal and vertical orientations, multiple line styles (solid, dashed, dotted, gradient), and optional labels with configurable positioning.',
    category: 'UI Components',
    component: Divider,
    props: [
      { name: 'orientation', type: '"horizontal" | "vertical"', default: 'horizontal', description: 'Direction of the divider.' },
      { name: 'variant', type: '"solid" | "dashed" | "dotted" | "gradient"', default: 'solid', description: 'Line style variant.' },
      { name: 'label', type: 'ReactNode', description: 'Optional label to display in the middle of the divider.' },
      { name: 'labelPosition', type: '"left" | "center" | "right"', default: 'center', description: 'Position of the label along the divider.' },
      { name: 'className', type: 'string', description: 'Additional CSS classes for custom styling.' },
    ],
    code: `// Installation: Copy the Divider component to your project
// Dependencies: tailwind-merge

import { Divider } from './components/lib/Divider';

export function Example() {
  return (
    <div className="space-y-8 max-w-md">
      {/* Basic Horizontal Dividers */}
      <div className="space-y-6">
        <Divider />
        <Divider variant="dashed" />
        <Divider variant="dotted" />
        <Divider variant="gradient" />
      </div>
      
      {/* With Labels */}
      <Divider label="Or continue with" />
      <Divider label="Section" labelPosition="left" />
      <Divider label="End" labelPosition="right" />
      
      {/* Vertical Divider */}
      <div className="flex items-center gap-4 h-12">
        <span className="text-white">Left</span>
        <Divider orientation="vertical" />
        <span className="text-white">Middle</span>
        <Divider orientation="vertical" variant="gradient" />
        <span className="text-white">Right</span>
      </div>
      
      {/* In a Form Layout */}
      <div className="space-y-4">
        <button className="w-full py-2 px-4 bg-primary text-white rounded-lg">
          Continue with Email
        </button>
        <Divider label="or" />
        <button className="w-full py-2 px-4 bg-surface text-white border border-border rounded-lg">
          Continue with Google
        </button>
      </div>
    </div>
  );
}`,
    prompt: "Create a flexible Divider component. It acts as a line separator. Support both horizontal and vertical orientations. Allow an optional text label to be placed in the center (or left/right) of the line, interrupting the border with a gap."
  },
  {
    slug: 'alert',
    name: 'Alert',
    description: 'Contextual notification banners for displaying important messages to users. Includes four semantic variants (info, success, warning, error), optional titles, dismissible functionality with smooth animations, and customizable icons.',
    category: 'UI Components',
    component: Alert,
    props: [
      { name: 'variant', type: '"info" | "success" | "warning" | "error"', default: 'info', description: 'Semantic color variant of the alert.' },
      { name: 'title', type: 'string', description: 'Bold heading text for the alert.' },
      { name: 'children', type: 'ReactNode', description: 'Main content/message of the alert.' },
      { name: 'icon', type: 'ReactNode', description: 'Custom icon to override the default variant icon.' },
      { name: 'dismissible', type: 'boolean', default: 'false', description: 'Whether to show a close button to dismiss the alert.' },
      { name: 'onDismiss', type: '() => void', description: 'Callback fired when the alert is dismissed.' },
      { name: 'className', type: 'string', description: 'Additional CSS classes for custom styling.' },
    ],
    code: `// Installation: Copy the Alert component to your project
// Dependencies: framer-motion, lucide-react, tailwind-merge

import { Alert } from './components/lib/Alert';
import { Rocket } from 'lucide-react';

export function Example() {
  return (
    <div className="space-y-4 max-w-lg">
      {/* Info Alert */}
      <Alert variant="info" title="Did you know?">
        You can customize your dashboard layout in the settings panel.
      </Alert>
      
      {/* Success Alert */}
      <Alert variant="success" title="Payment Successful">
        Your payment of $99.00 has been processed successfully.
      </Alert>
      
      {/* Warning Alert */}
      <Alert variant="warning" title="Storage Almost Full">
        You've used 90% of your storage. Consider upgrading your plan.
      </Alert>
      
      {/* Error Alert */}
      <Alert variant="error" title="Upload Failed">
        There was an error uploading your file. Please try again.
      </Alert>
      
      {/* Dismissible Alert */}
      <Alert 
        variant="info" 
        title="Welcome!"
        dismissible
        onDismiss={() => console.log('Alert dismissed')}
      >
        Click the X button to dismiss this alert.
      </Alert>
      
      {/* Simple Alert (no title) */}
      <Alert variant="success">
        Your changes have been saved automatically.
      </Alert>
      
      {/* Custom Icon */}
      <Alert 
        variant="info" 
        icon={<Rocket className="h-5 w-5" />}
        title="New Feature"
      >
        Check out our latest features in the what's new section.
      </Alert>
    </div>
  );
}`,
    prompt: "Design an Alert banner component. It is used to show success, warning, or error messages. The component should have a colored background (light tint) and a left border or icon matching the severity color. If 'dismissible' is true, show an 'X' button to remove the alert."
  },
  {
    slug: 'select',
    name: 'Select',
    description: 'A fully-featured dropdown select component with keyboard navigation, search filtering, and smooth animations. Supports single selection, custom option icons, disabled options, and error states. Perfect for forms and settings.',
    category: 'UI Components',
    component: Select,
    props: [
      { name: 'options', type: '{ value: string, label: string, disabled?: boolean, icon?: ReactNode }[]', description: 'Array of selectable options.' },
      { name: 'value', type: 'string', description: 'Currently selected value.' },
      { name: 'onChange', type: '(value: string) => void', description: 'Callback fired when selection changes.' },
      { name: 'placeholder', type: 'string', default: 'Select an option', description: 'Placeholder text when no option is selected.' },
      { name: 'label', type: 'string', description: 'Label text displayed above the select.' },
      { name: 'error', type: 'string', description: 'Error message displayed below the select.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Whether the select is disabled.' },
      { name: 'searchable', type: 'boolean', default: 'false', description: 'Whether to show a search input to filter options.' },
      { name: 'className', type: 'string', description: 'Additional CSS classes for custom styling.' },
    ],
    code: `// Installation: Copy the Select component to your project
// Dependencies: framer-motion, lucide-react, tailwind-merge

import { Select } from './components/lib/Select';
import { useState } from 'react';
import { Globe, Moon, Sun, Monitor } from 'lucide-react';

export function Example() {
  const [country, setCountry] = useState('');
  const [theme, setTheme] = useState('system');

  const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'jp', label: 'Japan' },
    { value: 'kr', label: 'South Korea', disabled: true },
  ];

  const themeOptions = [
    { value: 'light', label: 'Light', icon: <Sun className="h-4 w-4" /> },
    { value: 'dark', label: 'Dark', icon: <Moon className="h-4 w-4" /> },
    { value: 'system', label: 'System', icon: <Monitor className="h-4 w-4" /> },
  ];

  return (
    <div className="space-y-6 max-w-sm">
      {/* Basic Select */}
      <Select
        label="Country"
        options={countryOptions}
        value={country}
        onChange={setCountry}
        placeholder="Select your country"
      />
      
      {/* Searchable Select */}
      <Select
        label="Country (Searchable)"
        options={countryOptions}
        value={country}
        onChange={setCountry}
        placeholder="Search countries..."
        searchable
      />
      
      {/* Select with Icons */}
      <Select
        label="Theme"
        options={themeOptions}
        value={theme}
        onChange={setTheme}
      />
      
      {/* Select with Error */}
      <Select
        label="Required Field"
        options={countryOptions}
        value=""
        onChange={() => {}}
        error="Please select an option"
      />
      
      {/* Disabled Select */}
      <Select
        label="Disabled"
        options={countryOptions}
        value="us"
        disabled
      />
    </div>
  );
}`,
    prompt: "Create a custom Select (Dropdown) component. It should look like a standard button but open a floating menu of options on click. The menu should fade in and slide down. Support 'searchable' mode where the button turns into a text input to filter the options list."
  }
];

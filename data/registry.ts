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
import { Home, User, Settings, Mail } from 'lucide-react';
import { ComponentDoc } from '../types';
import GandomDashboardCode from '../components/lib/GandomDashboard.tsx?raw';
import SaaspoLandingCode from '../components/lib/SaaspoLanding.tsx?raw';

export const COMPONENT_REGISTRY: ComponentDoc[] = [
  {
    slug: 'saaspo-landing',
    name: 'Saaspo Landing',
    description: 'A vibrant, high-contrast dark mode landing page with interactive cards and filtering.',
    category: 'Templates',
    component: SaaspoLanding,
    props: [],
    code: SaaspoLandingCode
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
}`
  },
  {
    slug: 'gandom-dashboard',
    name: 'Gandom Dashboard',
    description: 'A dark-themed, data-rich dashboard template with charts, activity feeds, and stats.',
    category: 'Templates',
    component: GandomDashboard,
    props: [],
    code: GandomDashboardCode
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
      { name: 'animateOn', type: '"view" | "hover"', default: 'hover', description: 'When to trigger the animation.' },
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
}`
  },
  {
    slug: 'gradient-text',
    name: 'Gradient Text',
    description: 'Text with an animated flowing gradient background.',
    category: 'Text Animations',
    component: GradientText,
    props: [
      { name: 'colors', type: 'string[]', description: 'Array of colors for the gradient.' },
      { name: 'animationSpeed', type: 'number', default: '3', description: 'Speed of the animation in seconds.' },
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
}`
  },
  {
    slug: 'glass-card',
    name: 'Glass Card',
    description: 'A card component with a premium frosted glass effect and noise texture.',
    category: 'UI Components',
    component: GlassCard,
    props: [
      { name: 'opacity', type: 'number', default: '0.1', description: 'Opacity of the glass background.' },
      { name: 'blur', type: 'number', default: '10', description: 'Blur amount in pixels.' },
    ],
    code: `import { GlassCard } from './GlassCard';

export function Example() {
  return (
    <GlassCard className="p-8 max-w-sm text-white">
      <h3 className="text-xl font-bold mb-2">Glassmorphism</h3>
      <p className="text-white/70">A beautiful frosted glass effect with noise texture.</p>
    </GlassCard>
  );
}`
  },
  {
    slug: 'dock',
    name: 'Dock',
    description: 'An Apple-style interactive dock with magnification effect.',
    category: '3D & Interactive',
    component: Dock,
    props: [
      { name: 'items', type: 'Array', description: 'Array of items with icon and label.' },
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
}`
  },
  {
    slug: 'star-border',
    name: 'Star Border',
    description: 'A container with a rotating star-like gradient border effect.',
    category: 'UI Components',
    component: StarBorder,
    props: [
      { name: 'color', type: 'string', default: 'white', description: 'Color of the star tail.' },
      { name: 'speed', type: 'string', default: '6s', description: 'Animation duration.' },
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
}`
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
}`
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
}`
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
}`
  },
  {
    slug: 'button',
    name: 'Button',
    description: 'A versatile button component with multiple variants, sizes, and loading states.',
    category: 'UI Components',
    component: Button,
    props: [
      { name: 'variant', type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"', default: 'default', description: 'Visual style variant.' },
      { name: 'size', type: '"default" | "sm" | "lg" | "icon"', default: 'default', description: 'Button size.' },
      { name: 'isLoading', type: 'boolean', description: 'Shows loading spinner.' },
      { name: 'disabled', type: 'boolean', description: 'Disables the button.' },
      { name: 'children', type: 'ReactNode', description: 'Button content.' },
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
}`
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
}`
  },
  {
    slug: 'badge',
    name: 'Badge',
    description: 'Small status indicators with multiple color variants.',
    category: 'UI Components',
    component: Badge,
    props: [
      { name: 'variant', type: '"default" | "secondary" | "success" | "warning" | "destructive" | "outline"', default: 'default', description: 'Badge color variant.' },
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
}`
  },
  {
    slug: 'card',
    name: 'Card',
    description: 'A flexible card container with header, content, and footer sections.',
    category: 'UI Components',
    component: Card,
    props: [
      { name: 'hover', type: 'boolean', default: 'false', description: 'Enable hover animation.' },
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
}`
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
    ],
    code: `import { Tabs } from './Tabs';

export function Example() {
  const tabs = [
    { id: 'tab1', label: 'Overview', content: <div>Overview content</div> },
    { id: 'tab2', label: 'Details', content: <div>Details content</div> },
  ];
  
  return <Tabs tabs={tabs} />;
}`
  },
  {
    slug: 'accordion',
    name: 'Accordion',
    description: 'Collapsible content sections with smooth animations.',
    category: 'UI Components',
    component: Accordion,
    props: [
      { name: 'items', type: 'AccordionItem[]', description: 'Array of accordion items.' },
      { name: 'allowMultiple', type: 'boolean', default: 'false', description: 'Allow multiple items to be open.' },
    ],
    code: `import { Accordion } from './Accordion';

export function Example() {
  const items = [
    { id: '1', title: 'Section 1', content: 'Content for section 1' },
    { id: '2', title: 'Section 2', content: 'Content for section 2' },
  ];
  
  return <Accordion items={items} />;
}`
  },
  {
    slug: 'glowing-card',
    name: 'Glowing Card',
    description: 'A card with an animated glow effect on hover.',
    category: '3D & Interactive',
    component: GlowingCard,
    props: [
      { name: 'glowColor', type: 'string', default: '#8b5cf6', description: 'Color of the glow effect.' },
    ],
    code: `import { GlowingCard } from './GlowingCard';

export function Example() {
  return (
    <GlowingCard glowColor="#8b5cf6">
      <h3 className="text-xl font-bold text-white">Glowing Effect</h3>
      <p className="text-secondary mt-2">Hover to see the glow</p>
    </GlowingCard>
  );
}`
  },
  {
    slug: 'animated-gradient',
    name: 'Animated Gradient',
    description: 'A container with continuously animating gradient background.',
    category: '3D & Interactive',
    component: AnimatedGradient,
    props: [
      { name: 'colors', type: 'string[]', default: "['#8b5cf6', '#3b82f6', '#ec4899']", description: 'Array of gradient colors.' },
    ],
    code: `import { AnimatedGradient } from './AnimatedGradient';

export function Example() {
  return (
    <AnimatedGradient className="p-8">
      <h3 className="text-2xl font-bold text-white">Animated Background</h3>
      <p className="text-white/80 mt-2">Watch the gradient flow</p>
    </AnimatedGradient>
  );
}`
  },
  {
    slug: 'shimmer-button',
    name: 'Shimmer Button',
    description: 'A button with an animated shimmer effect.',
    category: '3D & Interactive',
    component: ShimmerButton,
    props: [
      { name: 'shimmerColor', type: 'string', default: 'rgba(255, 255, 255, 0.3)', description: 'Color of the shimmer effect.' },
    ],
    code: `import { ShimmerButton } from './ShimmerButton';

export function Example() {
  return (
    <ShimmerButton>
      Click me!
    </ShimmerButton>
  );
}`
  },
  {
    slug: 'parallax-card',
    name: 'Parallax Card',
    description: 'A 3D card with parallax effect based on mouse movement.',
    category: '3D & Interactive',
    component: ParallaxCard,
    props: [
      { name: 'intensity', type: 'number', default: '20', description: 'Intensity of the parallax effect.' },
    ],
    code: `import { ParallaxCard } from './ParallaxCard';

export function Example() {
  return (
    <ParallaxCard intensity={15}>
      <h3 className="text-xl font-bold text-white">Parallax Effect</h3>
      <p className="text-secondary mt-2">Move your mouse over me</p>
    </ParallaxCard>
  );
}`
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
}`
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
      { name: 'size', type: '"sm" | "md" | "lg" | "xl"', default: 'md', description: 'Modal size.' },
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
}`
  },
  {
    slug: 'tooltip',
    name: 'Tooltip',
    description: 'A tooltip that appears on hover with smooth animations.',
    category: 'UI Components',
    component: Tooltip,
    props: [
      { name: 'content', type: 'ReactNode', description: 'Tooltip content.' },
      { name: 'position', type: '"top" | "bottom" | "left" | "right"', default: 'top', description: 'Tooltip position.' },
    ],
    code: `import { Tooltip } from './Tooltip';

export function Example() {
  return (
    <Tooltip content="This is a tooltip" position="top">
      <button>Hover me</button>
    </Tooltip>
  );
}`
  },
  {
    slug: 'progress',
    name: 'Progress',
    description: 'An animated progress bar with multiple variants.',
    category: 'UI Components',
    component: Progress,
    props: [
      { name: 'value', type: 'number', description: 'Current progress value.' },
      { name: 'max', type: 'number', default: '100', description: 'Maximum value.' },
      { name: 'variant', type: '"default" | "success" | "warning" | "danger"', default: 'default', description: 'Color variant.' },
      { name: 'showLabel', type: 'boolean', default: 'false', description: 'Show percentage label.' },
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
}`
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
}`
  }
];
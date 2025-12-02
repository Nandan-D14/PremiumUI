import { SplitText } from '../components/lib/SplitText';
import { SpotlightCard } from '../components/lib/SpotlightCard';
import { TiltedCard } from '../components/lib/TiltedCard';
import { ComponentDoc } from '../types';

export const COMPONENT_REGISTRY: ComponentDoc[] = [
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
  }
];
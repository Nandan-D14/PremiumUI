import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, MapPin } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface PropertyShowcaseCardProps {
  title: string;
  description: string;
  image: string;
  rating?: number;
  duration?: string;
  isFavorite?: boolean;
  onFavoriteClick?: () => void;
  onReserveClick?: () => void;
  className?: string;
}

export const PropertyShowcaseCard: React.FC<PropertyShowcaseCardProps> = ({
  title,
  description,
  image,
  rating = 4.5,
  duration = '3 Night Stay',
  isFavorite = false,
  onFavoriteClick,
  onReserveClick,
  className,
}) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl group',
        className
      )}
    >
      {/* Image Container with Gradient Overlay */}
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90" />
        
        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onFavoriteClick?.();
          }}
          className={cn(
            'absolute top-4 right-4 w-10 h-10 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300',
            isFavorite 
              ? 'bg-white/90 text-red-500' 
              : 'bg-white/20 text-white hover:bg-white/30'
          )}
        >
          <Heart
            size={20}
            className={cn(
              'transition-all',
              isFavorite && 'fill-current'
            )}
          />
        </button>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          {/* Title */}
          <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-white/90 mb-4 line-clamp-2 drop-shadow">
            {description}
          </p>

          {/* Rating and Duration */}
          <div className="flex items-center gap-3 mb-4">
            {/* Rating Badge */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold">{rating}</span>
            </div>

            {/* Duration Badge */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md">
              <MapPin size={14} />
              <span className="text-sm font-medium">{duration}</span>
            </div>
          </div>

          {/* Reserve Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.stopPropagation();
              onReserveClick?.();
            }}
            className="w-full py-3.5 rounded-full bg-white text-gray-900 font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Reserve now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

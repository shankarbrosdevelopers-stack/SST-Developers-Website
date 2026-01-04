import React from 'react';
import { X, MapPin, Bed, Bath, Move } from 'lucide-react';
import { Property } from '../types';

interface PropertySearchModalProps {
    isOpen: boolean;
    onClose: () => void;
    properties: Property[];
    searchCriteria: {
        location?: string;
        type?: string;
        budget?: string;
    };
    onPropertyClick: (property: Property) => void;
}

export const PropertySearchModal: React.FC<PropertySearchModalProps> = ({
    isOpen,
    onClose,
    properties,
    searchCriteria,
    onPropertyClick
}) => {
    React.useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    console.log('PropertySearchModal is rendering!', { properties, searchCriteria });

    const getCriteriaText = () => {
        const criteria = [];
        if (searchCriteria.location) criteria.push(`Location: ${searchCriteria.location}`);
        if (searchCriteria.type) criteria.push(`Type: ${searchCriteria.type}`);
        if (searchCriteria.budget) {
            const budgetText = searchCriteria.budget.replace('under-', 'Under ₹').replace('l', ' Lakhs').replace('cr', ' Cr');
            criteria.push(`Budget: ${budgetText}`);
        }
        return criteria.join(' • ');
    };

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-start justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in overflow-y-auto"
            onClick={handleOverlayClick}
        >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl my-8 animate-scale-in">
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-slate-200 p-6 rounded-t-2xl z-10">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-800">
                                Search Results
                            </h2>
                            <p className="text-slate-500 mt-1">
                                {properties.length} {properties.length === 1 ? 'property' : 'properties'} found
                            </p>
                            {getCriteriaText() && (
                                <p className="text-sm text-secondary mt-2 font-medium">
                                    {getCriteriaText()}
                                </p>
                            )}
                        </div>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors flex-shrink-0"
                            aria-label="Close modal"
                        >
                            <X className="text-slate-600" size={24} />
                        </button>
                    </div>
                </div>

                {/* Results */}
                <div className="p-6">
                    {properties.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MapPin className="text-slate-400" size={40} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">No Properties Found</h3>
                            <p className="text-slate-500 max-w-md mx-auto">
                                We couldn't find any properties matching your search criteria. Try adjusting your filters or browse all properties.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {properties.map((prop) => (
                                <div
                                    key={prop.id}
                                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer border border-slate-100"
                                    onClick={() => {
                                        onPropertyClick(prop);
                                        onClose();
                                    }}
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={prop.image}
                                            alt={prop.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-3 left-3 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                            For Sale
                                        </div>
                                        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg">
                                            <span className="font-bold">{prop.price}</span>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="text-xs text-secondary font-bold uppercase mb-1 tracking-wide">
                                            {prop.type}
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-secondary transition-colors">
                                            {prop.title}
                                        </h3>
                                        <div className="flex items-center text-slate-500 text-sm mb-3">
                                            <MapPin size={14} className="mr-1" />
                                            {prop.location}
                                        </div>
                                        <div className="flex justify-between py-3 border-t border-slate-100 text-slate-600 text-xs">
                                            <div className="flex items-center gap-1">
                                                <Bed size={16} /> {prop.beds} Beds
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Bath size={16} /> {prop.baths} Baths
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Move size={16} /> {prop.sqft} sqft
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

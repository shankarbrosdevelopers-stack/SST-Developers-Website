export interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  type: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  status?: string;
}

export interface Project {
  id: number;
  name: string;
  priceRange: string;
  possession: string;
  reraId: string;
  location: string;
  amenities: string[];
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface EventItem {
  id: number;
  src: string;
  alt: string;
}
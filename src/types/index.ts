// Common types for the ryokan portfolio website

export interface RoomType {
  id: string;
  name: string;
  description: string;
  images: string[];
  price: number;
  capacity: number;
  amenities: string[];
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

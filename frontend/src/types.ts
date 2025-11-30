import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  quote: string;
}

export interface NavLink {
  name: string;
  href: string;
}
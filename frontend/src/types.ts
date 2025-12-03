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

// -----------------------------
// Admin Dashboard Types
// -----------------------------

export type DesignStatus = 'pending' | 'printing' | 'completed';

export interface Design {
  id: number;
  productId: string;
  variantId: string;
  color: string;
  size: string;
  quantity: number;            // ensure your backend sends this field
  artworkFile: string;
  artworkUrl: string;
  cartId: string | null;
  checkoutUrl: string | null;
  status: DesignStatus;
  createdAt: string;           // ISO datetime
  updatedAt: string | null;
}

export interface DesignsPageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  currentPage: number;
  perPage: number;
  total: number;
}

export interface DesignsResponse {
  data: Design[];
  pageInfo: DesignsPageInfo;
}

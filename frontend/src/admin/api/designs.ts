// src/api/designs.ts
import type { DesignStatus, DesignsResponse } from '../types/designs';

export interface FetchDesignsParams {
  status?: DesignStatus | 'all';
  search?: string;
  sort?: 'created_desc' | 'created_asc';
  page?: number;
  perPage?: number;
}

// 👇 adjust this to match how you hit PHP from the browser
const BASE_API_URL = 'http://localhost/NewShopify-React/backend/public/api.php';

export async function fetchDesigns(
  params: FetchDesignsParams = {}
): Promise<DesignsResponse> {
  const {
    status = 'pending',
    search,
    sort = 'created_desc',
    page = 1,
    perPage = 25,
  } = params;

  const query = new URLSearchParams();

  if (status && status !== 'all') query.set('status', status);
  if (search) query.set('search', search);
  if (sort) query.set('sort', sort);
  if (page) query.set('page', String(page));
  if (perPage) query.set('perPage', String(perPage));

  // This will request:
  //   http://localhost/NewShopify-React/backend/public/api.php/api/designs?...
  const url = `${BASE_API_URL}/api/designs?${query.toString()}`;

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!res.ok) {
    let details = '';
    try {
      details = await res.text();
    } catch {
      // ignore
    }
    throw new Error(
      `Failed to fetch designs (${res.status})${details ? `: ${details}` : ''}`
    );
  }

  const json = await res.json();

  if (Array.isArray(json.data) && json.pageInfo) {
    return json as DesignsResponse;
  }

  const arr = Array.isArray(json) ? (json as any[]) : [];
  return {
    data: arr as any,
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
      currentPage: page,
      perPage,
      total: arr.length,
    },
  };
}

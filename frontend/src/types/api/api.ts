export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  status: number;
  data: T;
  path?: string;
  timestamp?: string;
  errors?: Record<string, string>;
}

export interface PageMetadata {
  size: number;
  number: number;
  totalElements: number;
  totalPages: number;
}

export interface PageResponse<T> {
  content: T[];
  page: PageMetadata;
}
export {};
declare global {
  export interface AppiToken {
    type: string
    name: string
    token: string
    abilities: string[]
    lastUsedAt: string
    expiresAt: string
  }
  export interface Me {
    user: User
    enrollments: Enrollment[]
  }
  
  export interface Enrollment {
    id: number
    siteId: string
    userId: string
    role: string
    created_at: string
    updatedAt: string
    site: Site
  }
  
  export interface Site {
    id: string
    name: string
    domain: string
    description: string
    logo: string | null
    props?: Prop[]
    created_at: string
    updatedAt: string
  }

  export interface Pagination<T extends Iterable<any>> {
    data: T
    current_page: number
    from: number
    last_page: number
    per_page: number
    to: number
    total: number
  }

  export interface Toast {
    active: boolean
    type: 'success' | 'error' | 'warning' | 'info'
    message: string
  }

  export interface Prop {
    name: string,
    value: any
  }

  export interface Comment {
    id: string
    site_id: string
    commentable_type: string
    commentable_id: string
    user_id: string
    parent_id: any
    content: string
    approved_at: string
    created_at: string
    updated_at: string
    user: User
    children: Comment[]
  }

  /* New */
  export interface Post {
    id: string
    user_id: string
    site_id: string
    slug: string
    name: string
    description: string
    picture: string
    content: string
    format: string
    active: number
    created_at: string
    updated_at: string
    categories: Category[]
    user: User
    attrs: Attr[]
  }

  export interface CategoryPost {
    categoryable_type: string
    categoryable_id: string
    category_id: string
  }

  export interface Category {
    id: string
    site_id: string
    slug: string
    name: string
    description: string
    picture: string
    created_at: string
    updated_at: string
    pivot: CategoryPost
  }

  export interface User {
    id: string
    name: string
    email: string
    email_verified_at: any
    provider: any
    avatar: string
    created_at: string
    updated_at: string
  }

  export interface Attr {
    id: number
    site_id: string
    attributable_type: string
    attributable_id: string
    name: string
    type: string
    value: string
    created_at: string
    updated_at: string
  }
  
}
export type Product = {
    id: number
    name: string
    description: string
    price: number
    image: string
    category: string
    subcategory?: string
    rating?: number
}

export type Category = {
    id: number
    name: string
    subcategories?: string[]
}

export type FilterOptions = {
    categories: string[]
    priceRange: [number, number]
    minRating: number
    sortOption: 'price-asc' | 'price-desc' | 'rating' | ''
}
export type SearchOptions = {
    searchTerm: string
}

export type PaginationOptions = {
    currentPage: number
    itemsPerPage: number
}

export type ProductListProps = {
    products: Product[]
    filterOptions: FilterOptions
    searchOptions: SearchOptions
    paginationOptions: PaginationOptions
    onFilterChange: (options: Partial<FilterOptions>) => void
    onSearchChange: (options: Partial<SearchOptions>) => void
    onPageChange: (page: number) => void
}

export type ProductDetailProps = {
    product: Product
}

export type CategoryFilterProps = {
    categories: string[]
    selectedCategory: string
    onCategorySelect: (category: string) => void
}

export type PriceFilterProps = {
    priceRange: [number, number]
    onPriceChange: (range: [number, number]) => void
}

export type RatingFilterProps = {
    minRating: number
    onRatingChange: (rating: number) => void
}

export type SortOptionsProps = {
    sortOption: 'price-asc' | 'price-desc' | 'rating' | ''
    onSortChange: (option: 'price-asc' | 'price-desc' | 'rating' | '') => void
}

export type SearchBarProps = {
    searchTerm: string
    onSearchChange: (term: string) => void
}

export type PaginationProps = {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

export type CartItem = {
    product: Product
    quantity: number
}

export type CartProps = {
    items: CartItem[]
    onAddItem: (product: Product, quantity?: number) => void
    onRemoveItem: (productId: number) => void
    onUpdateQuantity: (productId: number, quantity: number) => void
}

export type CheckoutProps = {
    cartItems: CartItem[]
    onCheckout: (details: any) => void
}

export type User = {
    id: number
    name: string
    email: string
    address?: string
}

export type UserProfileProps = {
    user: User
    onUpdateProfile: (user: Partial<User>) => void
}

export type Order = {
    id: number
    userId: number
    items: CartItem[]
    total: number
    date: string
}

export type OrderHistoryProps = {
    orders: Order[]
}
export type Review = {
    id: number
    productId: number
    userId: number
    rating: number
    comment: string
    date: string
}

export type ReviewProps = {
    reviews: Review[]
    onAddReview: (review: Partial<Review>) => void
}

export type WishlistProps = {
    products: Product[]
    onAddToWishlist: (product: Product) => void
    onRemoveFromWishlist: (productId: number) => void
}

export type Address = {
    id: number
    userId: number
    line1: string
    line2?: string
    city: string
    state: string
    zip: string
    country: string
}

export type AddressBookProps = {
    addresses: Address[]
    onAddAddress: (address: Partial<Address>) => void
    onUpdateAddress: (addressId: number, address: Partial<Address>) => void
    onRemoveAddress: (addressId: number) => void
}

export type PaymentMethod = {
    id: number
    userId: number
    cardNumber: string
    cardHolder: string
    expiryDate: string
}

export type PaymentMethodsProps = {
    methods: PaymentMethod[]
    onAddPaymentMethod: (method: Partial<PaymentMethod>) => void
    onRemovePaymentMethod: (methodId: number) => void
}

export type Notification = {
    id: number
    userId: number
    message: string
    read: boolean
    date: string
}

export type NotificationsProps = {
    notifications: Notification[]
    onMarkAsRead: (notificationId: number) => void
    onClearNotifications: () => void
}

export type SettingsProps = {
    user: User
    onUpdateSettings: (settings: Partial<User>) => void
}

export type FAQ = {
    question: string
    answer: string
}

export type FAQProps = {
    faqs: FAQ[]
}

export type SupportProps = {
    onContactSupport: (message: string) => void
}

export type BlogPost = {
    id: number
    title: string
    content: string
}

export type BlogPostProps = {
    post: BlogPost
    onEdit: (post: Partial<BlogPost>) => void
    onDelete: (postId: number) => void
}
export type BlogListProps = {
    posts: BlogPost[]
    onCreate: (post: Partial<BlogPost>) => void
}
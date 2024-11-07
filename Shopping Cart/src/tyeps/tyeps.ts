interface UserState {
    id: string;
    name: string;
    preferences: UserPreferences;
    }
    
    interface ProductsState {
    items: Product[];
    categories: Category[];
    filters: Filter[];
    }
    
    interface CartState {
    items: CartItem[];
    total: number;
    }
    
export interface Note {
    note: {
    id: number;
    title: string;
    content: string;
    category: 'work' | 'personal' | 'shopping' | null;
    createdAt: string;
    };

    }
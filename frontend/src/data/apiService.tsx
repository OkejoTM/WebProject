import { Game } from './gameType';
import { Category } from './categoryType';

const API_URL = 'http://localhost:4000/api'; // Базовый URL API

export const ApiService = {
    // --- Games ---
    // async getGames(): Promise<Game[]> {
    //     const response = await fetch(`${API_URL}/games`);
    //     if (!response.ok) {
    //         throw new Error('Ошибка при загрузке игр');
    //     }
    //     return response.json();
    // },

    async getGameById(id: number): Promise<Game> {
        const response = await fetch(`${API_URL}/games/${id}`);
        if (!response.ok) {
            throw new Error(`Ошибка при загрузке игры с ID ${id}`);
        }
        return response.json();
    },

    async createGame(game: Partial<Game>): Promise<Game> {
        const response = await fetch(`${API_URL}/games`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(game),
        });
        if (!response.ok) {
            throw new Error('Ошибка при создании игры');
        }
        return response.json();
    },

    async updateGame(id: number, game: Partial<Game>): Promise<Game> {
        const response = await fetch(`${API_URL}/games/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(game),
        });
        if (!response.ok) {
            throw new Error(`Ошибка при обновлении игры с ID ${id}`);
        }
        return response.json();
    },

    async deleteGame(id: number): Promise<void> {
        const response = await fetch(`${API_URL}/games/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`Ошибка при удалении игры с ID ${id}`);
        }
    },    

    // --- Categories ---

    async getGamesByCategoryId(categoryId: number): Promise<Game[]> {
        const response = await fetch(`${API_URL}/categories/${categoryId}/games`);
        if (!response.ok) {
            throw new Error(`Ошибка при загрузке игр для категории с ID ${categoryId}`);
        }
        return response.json();
    },

    async getCategories(): Promise<Category[]> {
        const response = await fetch(`${API_URL}/categories`);
        if (!response.ok) {
            throw new Error('Ошибка при загрузке категорий');
        }
        return response.json();
    },

    async getCategoryById(id: number): Promise<Category> {
        const response = await fetch(`${API_URL}/categories/${id}`);
        if (!response.ok) {
            throw new Error(`Ошибка при загрузке категории с ID ${id}`);
        }
        return response.json();
    },

    async createCategory(category: Partial<Category>): Promise<Category> {
        const response = await fetch(`${API_URL}/categories`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(category),
        });
        if (!response.ok) {
            throw new Error('Ошибка при создании категории');
        }
        return response.json();
    },

    async updateCategory(id: number, category: Partial<Category>): Promise<Category> {
        const response = await fetch(`${API_URL}/categories/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(category),
        });
        if (!response.ok) {
            throw new Error(`Ошибка при обновлении категории с ID ${id}`);
        }
        return response.json();
    },

    async deleteCategory(id: number): Promise<void> {
        const response = await fetch(`${API_URL}/categories/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`Ошибка при удалении категории с ID ${id}`);
        }
    },
};

export interface CategoryModel {
    id: number;
    name: string;
    image: string;
}

export interface CreateCategoryModel {
    name: string;
    image: File;
}

export interface EditCategoryModel {
    id: number;
    name: string;
    imageUrl: string;
    newImage?: File;
}
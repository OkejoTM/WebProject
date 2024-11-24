"use client";

import { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";
import CategoryForm from "../../../../../components/category/CategoryForm"; 

import { Category } from "../../../../../data/categoryType"; 
import { ApiService } from "@/data/apiService";

export default function EditCategoryPage() {
  const params: { category_id: string } = useParams();
  const [category, setCategory] = useState<Category | null>(null); 
  const [loading, setLoading] = useState(true);
  const categoryId = Number(params.category_id); // Извлекаем game_id из пути


  useEffect(() => {
    const fetchCategory = async () => {      
      if (!isNaN(categoryId)) {
        try {
          const fetchedCategory = await ApiService.getCategoryById(categoryId); 
          if (fetchedCategory) {
            setCategory(fetchedCategory);
          } else {
            setCategory(null); 
          }
        } catch (error) {
          console.error("Ошибка загрузки категории:", error);
          setCategory(null); // Ошибка 
        }
      }
      setLoading(false);
    };

    fetchCategory();
  }, [categoryId]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (!category) {
    return notFound();
  }

  return (
    <>
      <h1 className="page-title">Редактирование игры</h1>
      <CategoryForm category={category} /> 
    </>
  );
}

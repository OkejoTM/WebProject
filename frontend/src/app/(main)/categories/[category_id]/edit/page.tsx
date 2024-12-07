"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams, notFound } from "next/navigation";
import CategoryForm from "../../../../../components/category/CategoryForm";
import { Category } from "../../../../../data/categoryType";
import { ApiService } from "@/data/apiService";
import withAuth from "@/components/other/withAuth";

function EditCategoryPage() {
  const params: { category_id: string } = useParams();
  const router = useRouter();
  const categoryId = Number(params.category_id); // Преобразуем ID в число
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const [notAuth, setNotAuth] = useState(false);

  useEffect(() => {
    const fetchCategory = async () => {
      if (isNaN(categoryId)) {
        setLoading(false);
        return;
      }

      try {
        const fetchedCategory = await ApiService.getCategoryById(categoryId);
        if (fetchedCategory) {
          setCategory(fetchedCategory);
        } else {
          setCategory(null); // Категория не найдена
        }
      } catch (error: any) {
        console.log("Ошибка загрузки категории:", error);

        // Проверяем, если ошибка из-за отсутствия токена (401)
        if (error.response?.status === 401) {
        {
          setNotAuth(true);
        }
      }
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [categoryId, router]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (!category && !notAuth) {
    return notFound(); // Выводим 404, если категория не найдена или ошибка
  }

  return (
    <>
      <h1 className="page-title">Редактирование категории</h1>
      <CategoryForm category={category || undefined} />
    </>
  );
}

export default withAuth(EditCategoryPage);

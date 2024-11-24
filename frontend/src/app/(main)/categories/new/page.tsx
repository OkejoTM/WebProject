"use client";

import CategoryForm from "../../../../components/category/CategoryForm";
import { useParams } from "next/navigation";

export default function NewGamePage() {
  const params = useParams();

  return (
    <>
      <h1 className="page-title">Создать новую категорию</h1>
      <CategoryForm />
    </>
  );
}

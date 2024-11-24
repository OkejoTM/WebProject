"use client";

import GameForm from "../../../../../../components/GameForm";
import { useParams } from "next/navigation";

export default function NewGamePage() {
  const params = useParams();
  const categoryId = Number(params.category_id); // Получение category_id из маршрута

  return (
    <>
      <h1 className="page-title">Создать новую игру</h1>
      <GameForm categoryId={categoryId} /> {/* Передача categoryId в GameForm */}
    </>
  );
}

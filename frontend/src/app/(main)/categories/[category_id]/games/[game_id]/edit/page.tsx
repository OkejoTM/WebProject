"use client";

import { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";
import GameForm from "../../../../../../../components/GameForm";

import { Game } from "../../../../../../../data/gameType";
import { ApiService } from "@/data/apiService";

export default function EditGamePage() {
  const params = useParams();
  const categoryId = Number(params.category_id); // Извлекаем category_id из пути
  const gameId = Number(params.game_id); // Извлекаем game_id из пути

  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGame = async () => {
      if (!isNaN(gameId)) {
        try {
          const fetchedGame = await ApiService.getGameById(gameId);

          // Проверка: игра должна быть связана с категорией
          if (fetchedGame && fetchedGame.categoryId === categoryId) {
            setGame(fetchedGame);
          } else {
            setGame(null); // Игра не найдена или не принадлежит категории
          }
        } catch (error) {
          console.error("Ошибка загрузки игры:", error);
          setGame(null);
        }
      }
      setLoading(false);
    };

    fetchGame();
  }, [categoryId, gameId]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (!game) {
    return notFound();
  }

  return (
    <>
      <h1 className="page-title">Редактирование игры</h1>
      <GameForm game={game} categoryId={categoryId} /> {/* Передаем game и categoryId */}
    </>
  );
}

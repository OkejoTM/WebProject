"use client";

import { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";
import GameForm from "../../../../../../../components/GameForm";
import { Game } from "../../../../../../../data/gameType";
import { ApiService } from "@/data/apiService";
import withAuth from "@/components/other/withAuth";

function EditGamePage() {
  const params = useParams();
  const categoryId = Number(params.category_id);
  const gameId = Number(params.game_id);

  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGame = async () => {
      if (!isNaN(gameId)) {
        try {
          const fetchedGame = await ApiService.getGameById(gameId);
          if (fetchedGame && fetchedGame.categoryId === categoryId) {
            setGame(fetchedGame);
          } else {
            setGame(null);
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
      <GameForm game={game} categoryId={categoryId} />
    </>
  );
}

export default withAuth(EditGamePage);

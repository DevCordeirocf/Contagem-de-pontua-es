import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Trophy, Plus, RotateCcw } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { APP_TITLE } from "@/const";

interface Player {
  id: string;
  name: string;
  score: number;
}

export default function Home() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [newPlayerName, setNewPlayerName] = useState("");
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
  const [ranking, setRanking] = useState<string>("");
  const [winLimit, setWinLimit] = useState<string>("");
  const [winner, setWinner] = useState<Player | null>(null);
  const [showWinLimitForm, setShowWinLimitForm] = useState(true);

  // Adicionar novo jogador
  const addPlayer = () => {
    if (newPlayerName.trim()) {
      const newPlayer: Player = {
        id: Date.now().toString(),
        name: newPlayerName,
        score: 0,
      };
      setPlayers([...players, newPlayer]);
      setNewPlayerName("");
    }
  };

  // Registrar pontuação
  const addScore = () => {
    if (selectedPlayer && ranking) {
      const rankingNum = parseInt(ranking);
      if (rankingNum > 0 && rankingNum <= 100) {
        setPlayers((prevPlayers) =>
          prevPlayers.map((player) =>
            player.id === selectedPlayer
              ? { ...player, score: player.score + rankingNum }
              : player
          )
        );
        setRanking("");
      }
    }
  };

  // Verificar se alguém venceu
  useEffect(() => {
    if (winLimit && players.length > 0) {
      const winLimitNum = parseInt(winLimit);
      const winnerPlayer = players.find((p) => p.score >= winLimitNum);
      if (winnerPlayer) {
        setWinner(winnerPlayer);
      }
    }
  }, [players, winLimit]);

  // Resetar jogo
  const resetGame = () => {
    setPlayers([]);
    setNewPlayerName("");
    setSelectedPlayer(null);
    setRanking("");
    setWinLimit("");
    setWinner(null);
    setShowWinLimitForm(true);
  };

  // Ordenar jogadores por pontuação
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  if (winner) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-4 border-yellow-400 shadow-2xl">
          <CardHeader className="text-center">
            <Trophy className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
            <CardTitle className="text-3xl">🎉 Parabéns! 🎉</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-2xl font-bold text-gray-800 mb-2">{winner.name}</p>
            <p className="text-lg text-gray-600 mb-6">venceu com {winner.score} pontos!</p>
            <Button onClick={resetGame} className="w-full" size="lg">
              <RotateCcw className="w-4 h-4 mr-2" />
              Jogar Novamente
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-8 pt-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{APP_TITLE}</h1>
          <p className="text-gray-600">Pontuação = Classificação no Top 100</p>
        </div>

        {/* Configurar limite de vitória */}
        {showWinLimitForm && (
          <Card className="mb-6 border-2 border-blue-200">
            <CardHeader>
              <CardTitle>Configurar Jogo</CardTitle>
              <CardDescription>Defina o limite de pontos para vencer</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input
                  type="number"
                  placeholder="Limite de pontos para vencer (ex: 500)"
                  value={winLimit}
                  onChange={(e) => setWinLimit(e.target.value)}
                  min="1"
                />
                <Button
                  onClick={() => setShowWinLimitForm(false)}
                  disabled={!winLimit}
                >
                  Confirmar
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {!showWinLimitForm && (
          <div className="grid md:grid-cols-3 gap-6">
            {/* Seção de Adicionar Jogadores */}
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Adicionar Jogador</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Input
                    placeholder="Nome do jogador"
                    value={newPlayerName}
                    onChange={(e) => setNewPlayerName(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addPlayer()}
                  />
                  <Button onClick={addPlayer} className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Adicionar
                  </Button>
                </CardContent>
              </Card>

              {/* Seção de Registrar Pontuação */}
              {players.length > 0 && (
                <Card className="mt-4">
                  <CardHeader>
                    <CardTitle className="text-lg">Registrar Pontuação</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Jogador
                      </label>
                      <select
                        value={selectedPlayer || ""}
                        onChange={(e) => setSelectedPlayer(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Selecione um jogador</option>
                        {players.map((player) => (
                          <option key={player.id} value={player.id}>
                            {player.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <Input
                      type="number"
                      placeholder="Classificação (1-100)"
                      value={ranking}
                      onChange={(e) => setRanking(e.target.value)}
                      min="1"
                      max="100"
                      onKeyPress={(e) => e.key === "Enter" && addScore()}
                    />
                    <Button
                      onClick={addScore}
                      className="w-full"
                      disabled={!selectedPlayer || !ranking}
                    >
                      Adicionar Pontos
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Seção de Placar */}
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Placar</CardTitle>
                  <CardDescription>
                    Limite: {winLimit} pontos | Jogadores: {players.length}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {players.length === 0 ? (
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>Adicione jogadores para começar</AlertDescription>
                    </Alert>
                  ) : (
                    <div className="space-y-2">
                      {sortedPlayers.map((player, index) => (
                        <div
                          key={player.id}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-lg font-bold text-gray-400 w-8">
                              #{index + 1}
                            </span>
                            <span className="font-medium text-gray-800">{player.name}</span>
                          </div>
                          <span className="text-xl font-bold text-blue-600">
                            {player.score}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Botão de Reset */}
              {players.length > 0 && (
                <Button
                  onClick={resetGame}
                  variant="outline"
                  className="w-full mt-4"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Resetar Jogo
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

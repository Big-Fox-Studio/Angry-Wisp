// Importation directe des fichiers JSON
const loadGames = () => {
  // On utilise require.context pour charger dynamiquement tous les fichiers game.json
  const gamesContext = require.context('../games', true, /game\.json$/)
  
  return gamesContext.keys().map(key => {
    const game = gamesContext(key)
    return {
      ...game,
      // On s'assure que l'ID existe
      id: game.id || key.split('/')[1]
    }
  })
}

export const useGames = () => {
  return loadGames()
}
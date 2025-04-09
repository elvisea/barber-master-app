type logStatusParams = {
  storeName: string;
  isLoading: boolean;
  itemsLength: number;
  fetchCount: number;
  fetchFunctionName: string;
};

export function logStatus({
  storeName,
  isLoading,
  itemsLength,
  fetchCount,
  fetchFunctionName
}: logStatusParams): void {
  console.log(`🛒 Store [${storeName}] está carregando?`, isLoading ? "🟢 SIM" : "🔴 NÃO");
  console.log(`📦 Quantidade de itens [${storeName}]:`, itemsLength);
  console.log(`🔄 Função '${fetchFunctionName}' chamada ${fetchCount} vez(es). (Contador para testes, removê-lo após a verificação)`);

  console.log("=".repeat(150));
}

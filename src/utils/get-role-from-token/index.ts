import { Roles } from "@/enums";

export function getRoleFromToken(token: string) {
  // Divide o token em partes
  const parts = token.split(".");

  if (parts.length !== 3) {
    throw new Error("Token inválido.");
  }

  // Decodifica a parte do payload (segunda parte do token)
  const payload = parts[1];

  // Adiciona padding se necessário
  const padding = "=".repeat((4 - (payload.length % 4)) % 4);
  const base64 = (payload + padding).replace(/-/g, "+").replace(/_/g, "/");

  // Converte de base64 para string
  const jsonPayload = JSON.parse(atob(base64));

  // Retorna o valor de role
  return jsonPayload.role as Roles;
}

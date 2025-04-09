export const getNameInitials = (nome: string): string => {
  const nomes = nome.split(" ");

  if (nomes.length === 1) {
    return nomes[0].charAt(0).toUpperCase();
  } else if (nomes.length >= 2) {
    const inicialPrimeiroNome = nomes[0].charAt(0).toUpperCase();
    const inicialSegundoNome = nomes[1].charAt(0).toUpperCase();
    return inicialPrimeiroNome + inicialSegundoNome;
  } else {
    return "";
  }
};

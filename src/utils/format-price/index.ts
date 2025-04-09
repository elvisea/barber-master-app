const formatPrice = (value: string): string => {
  if (!value) return '';

  // Remover qualquer caractere não numérico
  let numericValue = value.replace(/\D/g, '');

  // Formatar como moeda (exemplo: 1.000,00)
  numericValue = numericValue.replace(/(\d)(\d{3})(?=\d)/g, '$1.$2');
  numericValue = numericValue.replace(/(\d)(\d{2})$/, '$1,$2'); // Centavos

  return numericValue;
};

const parsePrice = (value: string): string => {
  // Remover caracteres não numéricos
  return value.replace(/\D/g, '');
};

export { formatPrice, parsePrice }

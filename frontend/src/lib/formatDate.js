export function formatDate(dateISO) {
  const date = new Date(dateISO);

  let formattedDate = date.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Reemplaza ambos " de " por espacios
  return formattedDate.replace(/ de /g, " ");
}

//16. Proporcione un ejemplo para migrar una función con promesas a async/await.
function obtenerNumero() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(110);
    }, 1000);
  });
}

//migrar a async/await
async function mostrarNumero() {
  const numero = await obtenerNumero();
  console.log("Número obtenido:", numero);
}

mostrarNumero();

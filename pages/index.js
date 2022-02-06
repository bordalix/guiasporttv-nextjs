import React from 'react';

export default function Home({ features }) {
  // api no longer available, redirect to official guide
  if (process.browser) {
    setTimeout(() => {
      window.location = 'https://sporttv.pt/guia'
    }, 3000);
  }
  return (
    <p>Projecto arquivado, a redireccionar para o guia oficial</p>
  );
}

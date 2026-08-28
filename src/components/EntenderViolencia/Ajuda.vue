<template>
  <section class="ajuda">
    <h2>Precisa de Ajuda?</h2>

    <p>
      Se você se identificou com alguma das situações descritas, saiba que não está sozinha. Busque
      ajuda.
    </p>

    <div class="botoes-ajuda">
      <a href="tel:180">Ligar 180</a>
      <a href="#">Buscar apoio</a>
    </div>
  </section>
</template>


<style>
* {
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100%;
  max-width: none;
  min-width: 0;
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  min-width: 0;
  margin: 0;
  font-family: Georgia, 'Times New Roman', serif;
  background: #ffffff;
}

.pagina {
  width: 100%;
  max-width: none;
  background: #ffffff;
  color: #4a0011;
}

a {
  text-decoration: none;
}

.logo {
  color: #ffffff;
  font-size: 28px;
}

.menu {
  display: flex;
  align-items: center;
  gap: 34px;
}

.menu a {
  color: #ffffff;
  font-size: 15px;
}

.contato {
  padding: 10px 25px;
  border-radius: 25px;
  background: #4a0011;
}


.introducao {
  width: 86%;
  margin: 45px auto;
  padding: 55px 100px;
  text-align: center;
  border-radius: 25px;
  background: #feb9cd;
}

.introducao h1 {
  margin: 0 0 22px;
  font-size: 32px;
}

.introducao p {
  max-width: 850px;
  margin: 8px auto;
  font-size: 20px;
  line-height: 1.7;
}


.tipos h2,
.alertas h2,
.lei h2,
.direitos h2,
.ajuda h2 {
  margin: 0 0 35px;
  text-align: center;
  font-size: 32px;
}

.tipos {
  width: 86%;
  margin: 0 auto 60px;
}

.tipos-conteudo {
  padding: 35px 60px;
  border-radius: 25px;
  background: #fdf1e2;
}

.tipo {
  min-height: 150px;
  display: grid;
  grid-template-columns: 1fr 80px 1fr;
  align-items: center;
  gap: 35px;
  position: relative;
}

.tipo:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 75px;
  bottom: -75px;
  width: 2px;
  background: #4a0011;
  transform: translateX(-50%);
}

.tipo-texto {
  text-align: right;
}

.tipo-texto h3,
.exemplos strong {
  font-size: 20px;
}

.tipo-texto p,
.exemplos p {
  font-size: 18px;
  line-height: 1.6;
}

.numero {
  width: 52px;
  height: 52px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  border-radius: 50%;
  color: #ffffff;
  background: #4a0011;
  font-size: 20px;
}

.exemplos {
  text-align: left;
}


.alertas {
  width: 70%;
  margin: 0 auto 60px;
  padding: 45px 60px;
  border-radius: 25px;
  background: #feb9cd;
}

.alertas h2 {
  margin: 0 0 30px;
  text-align: center;
  font-size: 32px;
}

.texto-secao {
  max-width: 800px;
  margin: 0 auto 30px;
  text-align: center;
  font-size: 20px;
  line-height: 1.6;
}

.alertas-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px 20px;
  max-width: 950px;
  margin: 0 auto;
}

.alerta {
  min-height: 85px;
  padding: 18px 22px;
  display: flex;
  align-items: center;
  border-radius: 15px;
  background: #fdf1e2;
  font-size: 18px;
  line-height: 1.45;
}


.lei {
  width: 86%;
  margin: 0 auto 60px;
  padding: 50px 65px;
  border-radius: 25px;
  background: #fdf1e2;
}

.lei > p {
  max-width: 900px;
  margin: 0 auto 35px;
  text-align: center;
  font-size: 23px;
  line-height: 1.7;
}

.lei-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}

.lei-card {
  padding: 30px;
  border-radius: 18px;
  background: #feb9cd;
}

.lei-card h3 {
  margin-top: 0;
  font-size: 28px;
}

.lei-card p {
  font-size: 19px;
  line-height: 1.6;
}


.direitos {
  width: 86%;
  margin: 0 auto 60px;
}

.direitos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.direito {
  min-height: 190px;
  padding: 30px;
  border-radius: 18px;
  background: #fdf1e2;
}

.direito h3 {
  margin-top: 0;
  font-size: 23px;
}

.direito p {
  font-size: 19px;
  line-height: 1.6;
}


.ajuda {
  width: 75%;
  margin: 0 auto 60px;
  padding: 45px 60px;
  text-align: center;
  border-radius: 25px;
  color: #ffffff;
  background: #4a0011;
}

.ajuda h2 {
  margin: 0 0 20px;
  font-size: 32px;
}

.ajuda p {
  max-width: 750px;
  margin: 0 auto 30px;
  font-size: 18px;
  line-height: 1.6;
}

.botoes-ajuda {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.botoes-ajuda a {
  padding: 13px 30px;
  border-radius: 25px;
  color: #4a0011;
  background: #fdf1e2;
  font-size: 16px;
}



.redes {
  display: flex;
  gap: 15px;
  margin-top: 20px;
  font-size: 13px;
}


.introducao,
.tipos-conteudo,
.alertas,
.lei,
.lei-card,
.direito,
.ajuda {
  box-shadow: 0 5px 15px rgba(74, 0, 17, 0.2);
}

h1,
h2,
h3 {
  text-shadow: 1px 2px 3px rgba(74, 0, 17, 0.3);
}


@media (max-width: 900px) {
  body {
    min-width: 0;
  }


  .menu {
    flex-wrap: wrap;
    justify-content: center;
  }

  .tipo {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .tipo-texto,
  .exemplos {
    text-align: center;
  }

  .tipo:not(:last-child)::after {
    display: none;
  }

  .alertas-grid,
  .lei-grid,
  .direitos-grid {
    grid-template-columns: 1fr;
  }
}
</style>
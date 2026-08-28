<script setup>
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
</script>
<template>

  <header>
      <AppHeader/>
    </header>
  <div class="pagina">

    
    <main>
      <section class="titulo">
        <h1>Capacitação</h1>

        <p>
          Aprenda, informe-se e esteja preparado para oferecer um acolhimento responsável e
          humanizado.
        </p>
      </section>

      <section class="videos">
        <div class="video-card">
          <iframe
            src="https://www.youtube.com/embed/e18dTRQjZHw"
            title="Como acolher?"
            frameborder="0"
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
              web-share;
            "
            allowfullscreen
          >
          </iframe>

          <h2>Como acolher?</h2>

          <p>Aprenda como oferecer um acolhimento seguro, respeitoso e humanizado.</p>
        </div>

        <div class="video-card">
          <iframe
            src="https://www.youtube.com/embed/gCG4ZjUinRk"
            title="Escuta e acolhimento"
            frameborder="0"
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
              web-share;
            "
            allowfullscreen
          >
          </iframe>

          <h2>Escuta e acolhimento</h2>

          <p>Entenda a importância da escuta ativa e do apoio sem julgamentos.</p>
        </div>

        <div class="video-card">
          <iframe
            src="https://www.youtube.com/embed/mg92G5wBWus"
            title="Rede de apoio"
            frameborder="0"
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
              web-share;
            "
            allowfullscreen
          >
          </iframe>

          <h2>Rede de apoio</h2>

          <p>Conheça a importância das redes de apoio e da orientação adequada.</p>
        </div>

        <div class="video-card">
          <iframe
            src="https://www.youtube.com/embed/TBX-3LA_h5s"
            title="Preparação para acolher"
            frameborder="0"
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
              web-share;
            "
            allowfullscreen
          >
          </iframe>

          <h2>Preparação para acolher</h2>

          <p>Informações importantes para quem deseja fazer parte da rede de apoio.</p>
        </div>
      </section>

      <section class="materiais">
        <h2>Materiais para Download</h2>

        <p class="subtitulo">Acesse materiais educativos para complementar sua capacitação.</p>

        <div class="materiais-cards">
          <div class="material-card">
            <div class="icone">↓</div>

            <div class="material-texto">
              <h3>Cartilha de Acolhimento</h3>

              <p>Material educativo para aprender mais sobre acolhimento humanizado.</p>
            </div>

            <a href="/pdf/04.pdf" target="_blank">
              <button>Baixar</button>
            </a>
          </div>

          <div class="material-card">
            <div class="icone">↓</div>

            <div class="material-texto">
              <h3>Guia de Apoio</h3>

              <p>Guia com informações importantes para quem deseja ajudar.</p>
            </div>

            <a href="/pdf/02.pdf" target="_blank">
              <button>Baixar</button>
            </a>
          </div>

          <div class="material-card">
            <div class="icone">↓</div>

            <div class="material-texto">
              <h3>Manual do Voluntário</h3>

              <p>Informações e orientações para participar da rede de apoio.</p>
            </div>

            <a href="/pdf/01.pdf" target="_blank">
              <button>Baixar</button>
            </a>
          </div>

          <div class="material-card">
            <div class="icone">↓</div>

            <div class="material-texto">
              <h3>Material Educativo</h3>

              <p>Conteúdos complementares para continuar sua capacitação.</p>
            </div>

            <a href="/pdf/03.pdf" target="_blank">
              <button>Baixar</button>
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
  <footer>
    <AppFooter/>
  </footer>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.pagina {
  width: 100%;
  min-height: 100vh;

  background-color: #ffffff;

  color: #5b001c;

  font-family: Georgia, 'Times New Roman', serif;
}

main {
  width: 100%;

  max-width: none;

  margin: 0;

  padding: 50px 6vw 80px;
}

.titulo {
  width: 100%;

  text-align: center;

  margin-bottom: 50px;
}

.titulo h1 {
  color: #680019;

  font-size: clamp(36px, 4vw, 58px);

  margin-bottom: 12px;
}

.titulo p {
  color: #6b4650;

  font-size: clamp(13px, 1.2vw, 17px);

  line-height: 1.5;

  max-width: 750px;

  margin: 0 auto;
}

.videos {
  width: 100%;

  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 35px;

  margin: 0 auto 70px;
}

.video-card {
  width: 100%;

  background-color: #fff1df;

  border: 2px solid #f3c0ce;

  border-radius: 20px;

  padding: 20px;

  overflow: hidden;
}

.video-card iframe {
  width: 100%;

  height: 320px;

  display: block;

  border-radius: 13px;

  border: none;

  background-color: #eeeeee;
}

.video-card h2 {
  color: #5b001c;

  font-size: clamp(19px, 1.7vw, 26px);

  margin-top: 20px;

  margin-bottom: 10px;
}

.video-card p {
  color: #4d3c3c;

  font-size: clamp(13px, 1vw, 16px);

  line-height: 1.6;
}

.materiais {
  width: 100%;

  margin: 0 auto;

  text-align: center;
}

.materiais > h2 {
  color: #5b001c;

  font-size: clamp(25px, 2.5vw, 35px);

  margin-bottom: 10px;
}

.subtitulo {
  color: #6b4650;

  font-size: clamp(13px, 1vw, 16px);

  margin-bottom: 35px;
}

.materiais-cards {
  width: 100%;

  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 25px;
}

.material-card {
  width: 100%;

  min-height: 125px;

  background-color: #fff1df;

  border: 2px solid #f3c0ce;

  border-radius: 18px;

  padding: 22px;

  display: flex;

  align-items: center;

  text-align: left;

  gap: 18px;
}

.icone {
  width: 55px;

  height: 55px;

  flex-shrink: 0;

  background-color: #f8a9c4;

  color: #62001d;

  border-radius: 12px;

  display: flex;

  align-items: center;

  justify-content: center;

  font-family: Arial, sans-serif;

  font-size: 28px;

  font-weight: bold;
}

.material-texto {
  flex: 1;
}

.material-texto h3 {
  color: #5b001c;

  font-size: clamp(15px, 1.3vw, 19px);

  margin-bottom: 7px;
}

.material-texto p {
  color: #755e5e;

  font-size: clamp(11px, 0.9vw, 14px);

  line-height: 1.5;
}

.material-card button {
  width: 85px;

  height: 38px;

  flex-shrink: 0;

  border: none;

  border-radius: 7px;

  background-color: #62001d;

  color: white;

  font-family: Georgia, 'Times New Roman', serif;

  font-size: 12px;

  cursor: pointer;
}

.material-card button:hover {
  opacity: 0.9;
}

@media (max-width: 900px) {
  main {
    padding: 40px 30px 60px;
  }

  .videos {
    gap: 25px;
  }

  .video-card iframe {
    height: 250px;
  }
}

@media (max-width: 700px) {
  main {
    padding: 30px 20px 50px;
  }

  .titulo {
    margin-bottom: 35px;
  }

  .videos {
    grid-template-columns: 1fr;

    gap: 20px;

    margin-bottom: 50px;
  }

  .video-card iframe {
    height: 220px;
  }

  .materiais-cards {
    grid-template-columns: 1fr;
  }

  .material-card {
    min-width: 0;

    padding: 18px;
  }
}
</style>
```

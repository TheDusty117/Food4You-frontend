<template>
  <footer class="footer">
    <div class="container mt-3">
      <div class="footer-links">
        <div class="footer-column">
          <h3>Scopri Food4You</h3>
          <ul>
            <li><a href="#">Investitori</a></li>
            <li><a href="#">Chi siamo</a></li>
            <li><a href="#">Ristoranti</a></li>
            <li><a href="#">Altro</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Pressroom</h3>
          <ul>
            <li><a href="#">Programmazione</a></li>
            <li><a href="#">Design</a></li>
            <li><a href="#">Lavora con noi</a></li>
            <li><a href="#">Diventa nostro partner</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Note legali</h3>
          <ul>
            <li><a href="#">Termini &amp; Condizioni</a></li>
            <li><a href="#">Informativa sulla privacy</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Aiuto</h3>
          <ul>
            <li><a href="#">Contatti</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Tipi di cucina</a></li>
          </ul>
        </div>
      </div>
      <h5 class="footer-text mt-5 mb-4">Realizzato dal Team4</h5>
      <div class="extra-content d-flex justify-content-center">
        <div class="extra-content-item col-3">
          <div>
            <img src="/img/TheDusty117.jpeg" alt="Immagine 5" class="rounded-circle mx-5">
            <a href="https://github.com/TheDusty117" class="link-style">TheDusty117</a>
          </div>
        </div>
        <div class="extra-content-item col-3">
          <div>
            <img src="/img/Blaser993.png" alt="Immagine 6" class="rounded-circle mx-5">
            <a href="https://github.com/Blaser993" class="link-style">Blaser993</a>
          </div>
        </div>
        <div class="extra-content-item col-3">
          <div>
            <img src="/img/stefanodisanza.png" alt="Immagine 7" class="rounded-circle mx-5">
            <a href="https://github.com/stefanodisanza" class="link-style">stefanodisanza</a>
          </div>
        </div>
        <div class="extra-content-item col-3">
          <div>
            <img src="/img/nicolaoo 2.png" alt="Immagine 8" class="rounded-circle mx-5">
            <a href="https://github.com/nicolaoo" class="link-style">nicolaoo</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.extra-content-item {
  text-align: center;
}

.extra-content-item img {
  max-width: 100%;
}

.extra-content-item a {
  font-size: 16px;
  color: #333;
  text-decoration: none;
  margin-top: 8px;
  display: block;
}

.rounded-circle {
  max-width: 100%;
}

.footer-image {
  display: flex;
  align-items: center;
}

.footer-image img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.footer-image p {
  color: white;
  font-size: 14px;
  margin: 0;
}

.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.footer {
  background-color: limegreen;
  padding: 20px;
  text-align: center;
  margin-top: auto;
}

.footer-text {
  color: white;
  margin: 0;
}

.footer-links {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.footer-column {
  flex: 1;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
}

.footer-column h3 {
  color: white;
  font-size: 18px;
  margin-bottom: 10px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column li {
  margin-bottom: 8px;
  font-size: 14px;
}

.footer-column li a {
  color: white;
  text-decoration: none;
  cursor: pointer;
}

.footer-column li a:hover {
  color: black;
}
</style>
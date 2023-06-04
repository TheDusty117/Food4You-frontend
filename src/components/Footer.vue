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
      <p class="footer-text">Realizzato dal Team4</p>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer {
  background-color: limegreen;
  padding: 20px;
  text-align: center;
}

.footer-text {
  color: white;
  font-size: 16px;
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

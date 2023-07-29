// Tüm ".menu-icon" öğelerini seçtiğimiz ve her birine tıklanma olayını eklediğimiz kısım.
document.querySelectorAll(".menu-icon").forEach(function (menuIcon) {
    menuIcon.addEventListener("click", function () {
      // Tıklanan menü öğesini seçtiğimiz ve "active" sınıfını ekleyip kaldırdığımız kısım.
      this.classList.toggle("active");
      
      // Tüm "div" öğelerinden "no-animation" sınıfını kaldırıyoruz.
      document.querySelectorAll("div").forEach(function (div) {
        div.classList.remove("no-animation");
      });
    });
  });
  
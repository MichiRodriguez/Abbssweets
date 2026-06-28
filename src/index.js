const WHATSAPP_URL = "https://wa.me/message/AA46BEUFZDWTP1";
const INSTAGRAM_URL =
  "https://www.instagram.com/abbssweets?igsh=MWwxd3NtN25zaDk2Yw==";

const PRODUCTS = [
  { img: "Queque de chocolate clásico.jpeg", category: "queques" },
  { img: "Bandeja de queque de chocolate con chispas de chocolate semiamargo.jpeg", category: "queques" },
  { img: "Porción de queque de chocolate.jpeg", category: "queques" },

  { img: "Torta chilena.jpeg", category: "tortas" },
  { img: "Porción de torta chilena con condensada cocinada.jpeg", category: "tortas" },
  { img: "Torta de melocotón.jpeg", category: "tortas" },
  { img: "Torta de melocotón con fresas y ron cortez.jpeg", category: "tortas" },
  { img: "Porción de torta de melocotón.jpeg", category: "tortas" },
  { img: "Pastel de chocolate con buttercream de merengue suizo.jpeg", category: "tortas" },
  { img: "Pastel de vainilla con relleno de melocotón.jpeg", category: "tortas" },
  { img: "Bizcocho de vainilla con relleno de dulce de leche.jpeg", category: "tortas" },
  { img: "Tres leches clásico mediano.jpeg", category: "tortas" },
  { img: "Tres leches sencillo con ron cortez.jpeg", category: "tortas" },

  { img: "Cheesecake de fresa.jpeg", category: "cheesecakes" },
  { img: "Porción de cheesecake de fresa.jpeg", category: "cheesecakes" },
  { img: "Cheesecake de maracuya.jpeg", category: "cheesecakes" },
  { img: "Cheesecake de maracuya mediano.jpeg", category: "cheesecakes" },
  { img: "Cheesecake frío de maracuya.jpeg", category: "cheesecakes" },
  { img: "Porción de cheesecake de limón.jpeg", category: "cheesecakes" },
  { img: "Porción de cheesecake de pitahaya.jpeg", category: "cheesecakes" },

  { img: "Cupcakes de chocolate con buttercream de merengue italiano.jpeg", category: "otros" },
  { img: "Brownie sencillo.jpeg", category: "otros" },
];

function titleFromImg(img) {
  return img.replace(/\.[^.]+$/, "");
}

const grid = document.getElementById("productsGrid");

function cardMarkup(product) {
  const title = titleFromImg(product.img);
  return `
    <article class="product-card" data-category="${product.category}">
      <div class="product-media">
        <img src="assets/${encodeURIComponent(product.img)}" alt="${title}" loading="lazy" />
      </div>
      <div class="product-body">
        <h3>${title}</h3>
      </div>
    </article>`;
}

function renderProducts(filter = "todos") {
  const list =
    filter === "todos"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === filter);
  grid.innerHTML = list.map(cardMarkup).join("");
}

renderProducts();

const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderProducts(btn.dataset.filter);
  });
});

const header = document.getElementById("header");
const onScroll = () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
};
window.addEventListener("scroll", onScroll);
onScroll();

const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

function closeMenu() {
  nav.classList.remove("open");
  navToggle.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const form = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  ["nombre", "email", "mensaje"].forEach((id) => {
    const field = document.getElementById(id);
    if (!field.value.trim()) {
      field.classList.add("invalid");
      valid = false;
    } else {
      field.classList.remove("invalid");
    }
  });

  const email = document.getElementById("email");
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
  if (email.value.trim() && !emailOk) {
    email.classList.add("invalid");
    valid = false;
  }

  if (!valid) {
    feedback.hidden = false;
    feedback.style.background = "#fee2e2";
    feedback.style.color = "#991b1b";
    feedback.textContent =
      "Por favor completa los campos requeridos correctamente.";
    return;
  }

  feedback.hidden = false;
  feedback.style.background = "#dcfce7";
  feedback.style.color = "#166534";
  feedback.textContent =
    "¡Gracias! Te redirigimos a nuestro WhatsApp para completar tu pedido...";

  form.reset();
  setTimeout(() => {
    window.open(WHATSAPP_URL, "_blank");
  }, 1200);
});

document.getElementById("year").textContent = new Date().getFullYear();

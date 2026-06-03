const APP_VERSION = "28";

const defaultCatalog = {
  categories: [
    { id: "aperitif", label: "Aperitif", icon: "☀" },
    { id: "longdrink", label: "Longdrink", icon: "▥" },
    { id: "schnaepse", label: "Schnäpse", icon: "◇" },
    { id: "wein-bier", label: "Wein / Bier", icon: "▰" },
    { id: "alkoholfrei", label: "Alkoholfrei", icon: "○" },
    { id: "pfand", label: "Pfand", icon: "□" }
  ],
  drinks: [
    ["prosecco", "Prosecco 0,1 l", "aperitif", 3.5, "🥂", ["#f1c75b", "#fff4bc"], ["Prosecco", "Sektglas"], ["Gekühlt einschenken.", "Direkt servieren."]],
    ["aperol-spritz", "Aperol Spritz 0,3 l", "aperitif", 6.5, "🍊", ["#ef7f3b", "#f6cf72"], ["Prosecco", "Aperol", "Soda", "Eis", "Orange"], ["Glas mit Eis füllen.", "Aperol und Prosecco dazugeben.", "Mit Soda auffüllen.", "Kurz rühren und garnieren."]],
    ["wildberry-lillet", "Wildberry Lillet 0,3 l", "aperitif", 6, "🫐", ["#7c3b82", "#f4a6d7"], ["Lillet", "Wild Berry", "Eis", "Beeren optional"], ["Glas mit Eis füllen.", "Lillet eingießen.", "Mit Wild Berry auffüllen.", "Kurz rühren."]],
    ["ficken-fanta", "FickenFanta 0,3 l", "aperitif", 6, "🍹", ["#e85538", "#f6c45e"], ["Ficken Likör", "Fanta", "Eis optional"], ["Likör ins Glas geben.", "Mit Fanta auffüllen.", "Kurz umrühren."]],
    ["jaeger-bull", "Jäger Bull 4 cl", "longdrink", 7, "⚡", ["#2b1b15", "#d9a441"], ["4 cl Jägermeister", "Energy Drink", "Eis"], ["Glas mit Eis füllen.", "Jägermeister eingießen.", "Mit Energy auffüllen."]],
    ["wodka-bull", "Wodka Bull 4 cl", "longdrink", 7, "⚡", ["#8da7b8", "#f4e15f"], ["4 cl Wodka", "Energy Drink", "Eis"], ["Glas mit Eis füllen.", "Wodka eingießen.", "Mit Energy auffüllen."]],
    ["gin-tonic", "Gin Tonic 4 cl", "longdrink", 7, "🥒", ["#a9d7cf", "#f8fbf1"], ["4 cl Gin", "Tonic Water", "Eis", "Gurke oder Limette"], ["Glas mit Eis füllen.", "Gin eingießen.", "Mit Tonic auffüllen.", "Garnitur dazugeben."]],
    ["jaegermeister", "Jägermeister 2 cl", "schnaepse", 3, "◆", ["#2b1b15", "#c47b32"], ["Jägermeister"], ["Gekühlt ins Shotglas geben."]],
    ["berliner-luft", "Berliner Luft 2 cl", "schnaepse", 3, "◆", ["#8fd3d7", "#f7ffff"], ["Berliner Luft"], ["Gekühlt ins Shotglas geben."]],
    ["ficken-likoer", "Ficken Likör 2 cl", "schnaepse", 3, "◆", ["#d61f35", "#f5a2a7"], ["Ficken Likör"], ["Gekühlt ins Shotglas geben."]],
    ["flocki-spezial", "Flocki Spezial 2 cl", "schnaepse", 3, "◆", ["#4c3b2e", "#d7b892"], ["Flocki Spezial"], ["Geheimtipp kalt servieren."]],
    ["klopfer", "Klopfer 1 Stk.", "schnaepse", 2, "◆", ["#5b6c7a", "#d9e0e7"], ["Klopfer"], ["Flasche ausgeben."]],
    ["rotwein", "Rotwein 0,2 l", "wein-bier", 4, "🍷", ["#6f1d2b", "#d38b8b"], ["Dornfelder trocken"], ["0,2 l einschenken.", "Im Weinglas servieren."]],
    ["weisswein", "Weißwein 0,2 l", "wein-bier", 4, "🥂", ["#e4d27a", "#fff6c9"], ["Pfälzer Landwein halbtrocken"], ["0,2 l einschenken.", "Gekühlt servieren."]],
    ["weinschorle", "Weinschorle süß/sauer 0,5 l", "wein-bier", 6, "🍷", ["#e5c46a", "#fff0b8"], ["Wein", "Limo oder Sprudel"], ["Becher mit Wein füllen.", "Süß oder sauer auffüllen.", "Kurz rühren."]],
    ["san-cucino", "San Cucino 0,33 l", "wein-bier", 4, "🍺", ["#e2a23c", "#fff0a8"], ["Bier von der Brauerei Julius"], ["Flasche öffnen.", "Mit Pfand ausgeben."]],
    ["laetitia", "Laetitia 0,33 l", "wein-bier", 4, "🍺", ["#c88d35", "#f3d995"], ["Bier von der Brauerei Julius"], ["Flasche öffnen.", "Mit Pfand ausgeben."]],
    ["radler", "Radler 0,5 l", "wein-bier", 4, "🍺", ["#e8b850", "#fff4bb"], ["Radler"], ["0,5 l ausgeben.", "Mit Pfand ausgeben."]],
    ["frucade-cola-mix", "Frucade Cola-Mix 0,5 l", "alkoholfrei", 3, "🥤", ["#412017", "#e56b3f"], ["Frucade Cola-Mix"], ["Kalt ausgeben.", "Mit Pfand ausgeben."]],
    ["coca-cola", "Coca-Cola 0,33 l", "alkoholfrei", 3, "🥤", ["#2c1712", "#ca4836"], ["Coca-Cola"], ["Kalt ausgeben.", "Mit Pfand ausgeben."]],
    ["apfelsaftschorle", "Apfelsaftschorle 0,5 l", "alkoholfrei", 3, "🍏", ["#86a84c", "#e9f3b0"], ["Apfelsaftschorle"], ["Kalt ausgeben.", "Mit Pfand ausgeben."]],
    ["wasser", "Wasser spritzig / still 0,5 l", "alkoholfrei", 2.5, "💧", ["#4aa3df", "#c9f0ff"], ["Wasser spritzig oder still"], ["Kalt ausgeben.", "Mit Pfand ausgeben."]]
  ].map(([id, name, category, price, icon, colors, ingredients, steps]) => ({
    id,
    name,
    category,
    price,
    icon,
    colors,
    image: "",
    ingredients,
    steps
  }))
};

const storageKeys = {
  catalog: "bar-kasse.catalog.v4",
  happyHour: "bar-kasse.happy-hour.v1",
  sales: "bar-kasse.sales.v1",
  shifts: "bar-kasse.shifts.v1",
  popularHidden: "bar-kasse.popular-hidden.v1",
  stopAck: "bar-kasse.stop-ack.v1"
};

const denominations = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05];
const defaultHappyHourConfig = {
  enabled: true,
  start: "20:00",
  end: "21:00",
  price: 5,
  categoryIds: ["longdrink"],
  productIds: ["aperol-spritz"]
};
const depositProduct = {
  id: "auto-pfand",
  name: "Pfand",
  category: "pfand",
  price: 2,
  icon: "□"
};
const order = new Map();
const cashCounts = new Map();
let cashOverride = null;
let depositReturnCount = 1;
let catalog = loadCatalog();
let sales = loadSales();
let shifts = loadShifts();
let happyHourConfig = loadHappyHour();
let activeCategory = catalog.categories[0]?.id || "";
let happyHourActive = isHappyHour();

const formatter = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });
const byId = (id) => document.getElementById(id);

const categoryTabs = byId("categoryTabs");
const drinkGrid = byId("drinkGrid");
const popularList = byId("popularList");
const orderList = byId("orderList");
const itemCount = byId("itemCount");
const orderTotal = byId("orderTotal");
const lastSale = byId("lastSale");
const cashDialog = byId("cashDialog");
const recipeDialog = byId("recipeDialog");
const denominationGrid = byId("denominationGrid");
const cashQuick = byId("cashQuick");
const stopDialog = byId("stopDialog");
const depositDialog = byId("depositDialog");

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadCatalog() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKeys.catalog));
    if (saved?.categories?.length && Array.isArray(saved.drinks)) return saved;
  } catch {
    localStorage.removeItem(storageKeys.catalog);
  }
  return clone(defaultCatalog);
}

function loadSales() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKeys.sales));
    if (Array.isArray(saved)) return saved;
  } catch {
    localStorage.removeItem(storageKeys.sales);
  }
  return [];
}

function todayDateValue() {
  return localDateValue(new Date());
}

function localDateValue(date) {
  const offset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 10);
}

function localTimeValue(date) {
  return new Intl.DateTimeFormat("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  }).format(date);
}

function defaultShifts() {
  const now = new Date();
  const startsAt = new Date(now.getTime() - 60 * 60000);
  const endsAt = new Date(now.getTime() + 5 * 60 * 60000);
  const stopAt = new Date(endsAt.getTime() - 30 * 60000);
  return [
    {
      id: "demo-shift",
      name: "Abendschicht",
      date: localDateValue(startsAt),
      start: localTimeValue(startsAt),
      end: localTimeValue(endsAt),
      stop: localTimeValue(stopAt),
      people: ["Mia", "Noah", "Lea"]
    }
  ];
}

function loadShifts() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKeys.shifts));
    if (Array.isArray(saved)) return saved;
  } catch {
    localStorage.removeItem(storageKeys.shifts);
  }
  return defaultShifts();
}

function loadHappyHour() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKeys.happyHour));
    return {
      ...clone(defaultHappyHourConfig),
      ...saved,
      categoryIds: Array.isArray(saved?.categoryIds) ? saved.categoryIds : [...defaultHappyHourConfig.categoryIds],
      productIds: Array.isArray(saved?.productIds) ? saved.productIds : [...defaultHappyHourConfig.productIds]
    };
  } catch {
    localStorage.removeItem(storageKeys.happyHour);
  }
  return clone(defaultHappyHourConfig);
}

function saveCatalog() {
  localStorage.setItem(storageKeys.catalog, JSON.stringify(catalog));
}

function saveSales() {
  localStorage.setItem(storageKeys.sales, JSON.stringify(sales));
}

function saveShifts() {
  localStorage.setItem(storageKeys.shifts, JSON.stringify(shifts));
}

function saveHappyHour() {
  localStorage.setItem(storageKeys.happyHour, JSON.stringify(happyHourConfig));
}

function money(value) {
  return formatter.format(Number(value) || 0);
}

function moneyShort(value) {
  return money(value).replace(",00", "");
}

function timeToMinutes(value) {
  const [hours, minutes] = String(value || "00:00").split(":").map(Number);
  return (hours || 0) * 60 + (minutes || 0);
}

function isHappyHour(date = new Date()) {
  if (!happyHourConfig.enabled) return false;
  const now = date.getHours() * 60 + date.getMinutes();
  const start = timeToMinutes(happyHourConfig.start);
  const end = timeToMinutes(happyHourConfig.end);
  if (start === end) return false;
  return start < end ? now >= start && now < end : now >= start || now < end;
}

function hasHappyHourPrice(drink, date = new Date()) {
  if (!isHappyHour(date) || drink.id === depositProduct.id) return false;
  return happyHourConfig.categoryIds.includes(drink.category) || happyHourConfig.productIds.includes(drink.id);
}

function getUnitPrice(drink, date = new Date()) {
  return hasHappyHourPrice(drink, date) ? happyHourConfig.price : drink.price;
}

function hasDrinkInfo(drink) {
  return Boolean((drink.ingredients || []).length || (drink.steps || []).length);
}

function getTotal() {
  return [...order.values()].reduce((sum, line) => sum + getUnitPrice(line.drink) * line.quantity, 0);
}

function getItemCount() {
  return [...order.values()]
    .filter((line) => line.drink.id !== depositProduct.id)
    .reduce((sum, line) => sum + line.quantity, 0);
}

function parseLines(value) {
  return value.split("\n").map((line) => line.trim()).filter(Boolean);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function drinkImageMarkup(drink, className) {
  if (drink.image) {
    return `<div class="${className} uploaded" style="background-image:url('${drink.image.replaceAll("'", "%27")}')"></div>`;
  }
  return `<div class="${className}" aria-hidden="true">${drink.icon || "●"}</div>`;
}

function ensureActiveCategory() {
  if (!catalog.categories.some((category) => category.id === activeCategory)) {
    activeCategory = catalog.categories[0]?.id || "";
  }
}

function renderCategories() {
  ensureActiveCategory();
  categoryTabs.innerHTML = "";
  catalog.categories.forEach((category) => {
    const tab = document.createElement("button");
    tab.className = "category-tab";
    tab.type = "button";
    tab.role = "tab";
    tab.setAttribute("aria-selected", String(category.id === activeCategory));
    tab.textContent = category.label;
    tab.addEventListener("click", () => {
      activeCategory = category.id;
      renderCategories();
      renderDrinks();
    });
    categoryTabs.append(tab);
  });
}

function renderDrinks() {
  drinkGrid.innerHTML = "";
  if (activeCategory === "pfand") {
    renderDepositCategory();
    return;
  }
  const drinks = catalog.drinks.filter((drink) => drink.category === activeCategory);
  if (!drinks.length) {
    drinkGrid.innerHTML = `<div class="empty-order full-grid">In dieser Kategorie sind noch keine Produkte angelegt.</div>`;
    return;
  }

  drinks.forEach((drink) => {
    drinkGrid.append(createDrinkCard(drink));
  });
}

function createDrinkCard(drink, options = {}) {
  const happyHourPrice = hasHappyHourPrice(drink);
  const showInfoButton = !options.compact && hasDrinkInfo(drink);
  const card = document.createElement("div");
  card.className = `drink-card${options.compact ? " compact-drink-card" : ""}${happyHourPrice ? " happy-hour-card" : ""}`;
  card.role = "button";
  card.tabIndex = 0;
  card.setAttribute("aria-label", `${drink.name} fuer ${money(getUnitPrice(drink))} hinzufuegen`);
  card.style.setProperty("--drink-a", drink.colors?.[0] || "#9aa6a1");
  card.style.setProperty("--drink-b", drink.colors?.[1] || "#f4e9d7");
  card.innerHTML = `
    ${happyHourPrice ? `<span class="happy-hour-badge">Happy Hour ${moneyShort(happyHourConfig.price)}</span>` : ""}
    ${drinkImageMarkup(drink, "drink-art")}
    <div class="drink-meta">
      <div class="drink-copy">
        <span class="drink-name">${drink.name}</span>
      </div>
      <div class="drink-actions">
        ${showInfoButton ? `<button class="recipe-button" type="button" aria-label="Info zu ${escapeHtml(drink.name)} anzeigen"><span class="info-icon" aria-hidden="true">i</span><span class="info-label">Info</span></button>` : ""}
        <span class="drink-price${happyHourPrice ? " happy-hour-price" : ""}">
          ${happyHourPrice ? `<small>${money(drink.price)}</small>` : ""}
          ${money(getUnitPrice(drink))}
        </span>
      </div>
    </div>
  `;
  card.addEventListener("click", () => {
    addDrink(drink.id);
    showAddFeedback(card);
  });
  card.addEventListener("keydown", (event) => {
    if (event.target !== card) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      addDrink(drink.id);
      showAddFeedback(card);
    }
  });
  const recipeButton = card.querySelector(".recipe-button");
  if (recipeButton) {
    recipeButton.addEventListener("click", (event) => {
      event.stopPropagation();
      showRecipe(drink);
    });
  }
  return card;
}

function showAddFeedback(card) {
  window.clearTimeout(card.feedbackTimer);
  card.classList.remove("is-added");
  void card.offsetWidth;
  card.classList.add("is-added");
  card.feedbackTimer = window.setTimeout(() => {
    card.classList.remove("is-added");
  }, 650);
}

function renderPopular() {
  const sold = new Map();
  sales.forEach((sale) => {
    sale.items.forEach((line) => {
      if (line.categoryId === "pfand") return;
      sold.set(line.productId, (sold.get(line.productId) || 0) + line.quantity);
    });
  });
  const fallback = ["aperol-spritz", "prosecco", "wodka-bull"];
  const popularIds = [...sold.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([id]) => id);
  const ids = [...new Set([...popularIds, ...fallback])]
    .map((id) => catalog.drinks.find((drink) => drink.id === id))
    .filter(Boolean)
    .slice(0, 3);

  popularList.innerHTML = "";
  ids.forEach((drink) => popularList.append(createDrinkCard(drink, { compact: true })));
}

function setPopularHidden(hidden) {
  document.body.classList.toggle("popular-hidden", hidden);
  byId("togglePopular").textContent = hidden ? "Schnellzugriff einblenden" : "Schnellzugriff ausblenden";
  byId("togglePopular").setAttribute("aria-pressed", String(hidden));
  localStorage.setItem(storageKeys.popularHidden, hidden ? "1" : "0");
}

function initPopularVisibility() {
  const hidden = localStorage.getItem(storageKeys.popularHidden) === "1";
  setPopularHidden(hidden);
}

function renderDepositCategory() {
  const card = document.createElement("div");
  card.className = "drink-card deposit-return-card";
  card.role = "button";
  card.tabIndex = 0;
  card.setAttribute("aria-label", "Pfand zurückgeben");
  card.style.setProperty("--drink-a", "#153c76");
  card.style.setProperty("--drink-b", "#dce7f7");
  card.innerHTML = `
    <div class="drink-art" aria-hidden="true">□</div>
    <div class="drink-meta">
      <div>
        <span class="drink-name">Pfand zurückgeben</span>
        <span class="order-sub">Geld auszahlen oder Klopfer ausgeben</span>
      </div>
      <span class="drink-price">${money(depositProduct.price)}</span>
    </div>
  `;
  card.addEventListener("click", openDepositReturn);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openDepositReturn();
    }
  });
  drinkGrid.append(card);
}

function openDepositReturn() {
  renderDepositReturn();
  depositDialog.showModal();
}

function addDrink(id) {
  const drink = catalog.drinks.find((item) => item.id === id);
  if (!drink) return;
  const existing = order.get(id);
  order.set(id, { drink, quantity: existing ? existing.quantity + 1 : 1 });
  const deposit = order.get(depositProduct.id);
  order.set(depositProduct.id, {
    drink: depositProduct,
    quantity: deposit ? deposit.quantity + 1 : 1
  });
  renderOrder();
}

function changeQuantity(id, delta) {
  const existing = order.get(id);
  if (!existing && id === depositProduct.id && delta > 0) {
    order.set(depositProduct.id, { drink: depositProduct, quantity: delta });
    renderOrder();
    return;
  }
  if (!existing) return;
  const next = existing.quantity + delta;
  if (next <= 0) {
    order.delete(id);
  } else {
    order.set(id, { ...existing, quantity: next });
  }
  renderOrder();
}

function renderOrder() {
  orderList.innerHTML = "";
  const lines = [...order.values()].sort((a, b) => {
    if (a.drink.id === depositProduct.id) return 1;
    if (b.drink.id === depositProduct.id) return -1;
    return 0;
  });

  if (!lines.length) {
    orderList.innerHTML = `<div class="empty-order">Tippe links auf Drinks, um die Bestellung zu starten.</div>`;
  } else {
    lines.forEach(({ drink, quantity }) => {
      const isDeposit = drink.id === depositProduct.id;
      const unitPrice = getUnitPrice(drink);
      const happyHourPrice = hasHappyHourPrice(drink);
      const item = document.createElement("div");
      item.className = `order-item${isDeposit ? " deposit-line" : ""}`;
      item.innerHTML = `
        <div class="quantity-stepper">
          <button class="stepper-button" type="button" aria-label="${drink.name} entfernen">−</button>
          <button class="stepper-button" type="button" aria-label="${drink.name} hinzufügen">+</button>
        </div>
        <div>
          <div class="order-name">${quantity} × ${drink.name}</div>
          <span class="order-sub">${isDeposit ? "Automatisch, manuell korrigierbar" : `${money(unitPrice)} pro Stück${happyHourPrice ? " · Happy Hour" : ""}`}</span>
        </div>
        <div class="order-line-total">${money(unitPrice * quantity)}</div>
      `;
      const [minus, plus] = item.querySelectorAll(".stepper-button");
      minus.addEventListener("click", () => changeQuantity(drink.id, -1));
      plus.addEventListener("click", () => changeQuantity(drink.id, 1));
      orderList.append(item);
    });
  }

  itemCount.textContent = String(getItemCount());
  orderTotal.textContent = money(getTotal());
  const hasOrder = order.size > 0;
  byId("payCard").disabled = !hasOrder;
  byId("openCash").disabled = !hasOrder;
}

function recordSale(method, received = null, change = null) {
  const total = getTotal();
  const createdAt = new Date();
  const items = [...order.values()].map(({ drink, quantity }) => ({
    drink,
    quantity,
    unitPrice: getUnitPrice(drink, createdAt),
    happyHourPrice: hasHappyHourPrice(drink, createdAt)
  })).map(({ drink, quantity, unitPrice, happyHourPrice }) => ({
      productId: drink.id,
      productName: drink.name,
      categoryId: drink.category,
      categoryName: drink.id === depositProduct.id
        ? "Pfand"
        : catalog.categories.find((category) => category.id === drink.category)?.label || drink.category,
      quantity,
      unitPrice,
      lineTotal: Number((unitPrice * quantity).toFixed(2)),
      priceNote: happyHourPrice ? "Happy Hour" : ""
    }));
  sales.push({
    id: `sale-${Date.now()}`,
    createdAt: createdAt.toISOString(),
    method,
    total: Number(total.toFixed(2)),
    received,
    change,
    items
  });
  saveSales();
}

function recordDepositReturn(mode) {
  const quantity = depositReturnCount;
  const total = Number((depositProduct.price * quantity).toFixed(2));
  const isCash = mode === "cash";
  sales.push({
    id: `deposit-${Date.now()}`,
    createdAt: new Date().toISOString(),
    method: isCash ? "deposit-cash" : "deposit-klopfer",
    total: isCash ? -total : 0,
    received: null,
    change: isCash ? total : 0,
    items: [
      {
        productId: isCash ? "pfand-rueckgabe-geld" : "pfand-rueckgabe-klopfer",
        productName: isCash ? "Pfandrückgabe Geld" : "Pfandrückgabe Klopfer",
        categoryId: "pfand",
        categoryName: "Pfand",
        quantity,
        unitPrice: isCash ? -depositProduct.price : 0,
        lineTotal: isCash ? -total : 0
      }
    ]
  });
  saveSales();
  closeDialog(depositDialog);
  lastSale.hidden = false;
  lastSale.textContent = isCash
    ? `Pfandrückgabe: ${quantity} × Pfand, ${money(total)} ausgezahlt.`
    : `Pfandrückgabe: ${quantity} × Pfand gegen ${quantity} Klopfer.`;
  depositReturnCount = 1;
  renderDepositReturn();
  renderStats();
}

function completeSale(method, received = null, change = null) {
  const total = getTotal();
  if (!total) return;
  const count = getItemCount();
  recordSale(method, received, change);
  order.clear();
  resetCash();
  renderOrder();
  closeDialog(cashDialog);
  lastSale.hidden = false;
  lastSale.textContent =
    method === "card"
      ? `Letzte Zahlung: ${count} Artikel, ${money(total)}, mit Karte bezahlt.`
      : `Letzte Zahlung: ${count} Artikel, ${money(total)}, bar erhalten ${money(received)}, Rückgeld ${money(change)}.`;
}

function showRecipe(drink) {
  byId("recipeTitle").textContent = drink.name;
  byId("recipePrice").textContent = hasHappyHourPrice(drink)
    ? `Happy Hour ${money(getUnitPrice(drink))} · regulär ${money(drink.price)}`
    : money(drink.price);
  const image = byId("recipeImage");
  image.className = "recipe-image";
  image.style.backgroundImage = "";
  image.style.setProperty("--drink-a", drink.colors?.[0] || "#9aa6a1");
  image.style.setProperty("--drink-b", drink.colors?.[1] || "#f4e9d7");
  if (drink.image) {
    image.classList.add("uploaded");
    image.style.backgroundImage = `url('${drink.image.replaceAll("'", "%27")}')`;
    image.textContent = "";
  } else {
    image.textContent = drink.icon || "●";
  }
  byId("recipeIngredients").innerHTML = (drink.ingredients || []).map((item) => `<li>${item}</li>`).join("");
  byId("recipeSteps").innerHTML = (drink.steps || []).map((item) => `<li>${item}</li>`).join("");
  recipeDialog.showModal();
}

function cashLabel(value) {
  if (value >= 1) return Number.isInteger(value) ? `${value} €` : money(value);
  return `${Math.round(value * 100)} ct`;
}

function getQuickCashValues(due) {
  if (!due) return [];
  const roundedEuro = Math.ceil(due);
  const roundedFive = Math.ceil(due / 5) * 5;
  const base = [due, roundedEuro, roundedFive, 10, 20, 50, 100]
    .filter((value) => value >= due)
    .map((value) => Number(value.toFixed(2)));
  return [...new Set(base)].slice(0, 5);
}

function setCashAmount(value) {
  cashCounts.clear();
  cashOverride = value;
  renderCash();
}

function renderQuickCash(due) {
  cashQuick.innerHTML = "";
  getQuickCashValues(due).forEach((value, index) => {
    const button = document.createElement("button");
    button.className = `quick-cash-button${cashOverride === value ? " is-selected" : ""}`;
    button.type = "button";
    button.innerHTML = index === 0
      ? `<span>Passend</span><strong>${money(value)}</strong>`
      : `<span>Erhalten</span><strong>${cashLabel(value)}</strong>`;
    button.addEventListener("click", () => setCashAmount(value));
    cashQuick.append(button);
  });
}

function renderDenominations() {
  denominationGrid.innerHTML = "";
  const groups = [
    { title: "Scheine", values: denominations.filter((value) => value >= 5), className: "cash-bills" },
    { title: "Münzen", values: denominations.filter((value) => value < 5), className: "cash-coins" }
  ];
  groups.forEach((group) => {
    const section = document.createElement("section");
    section.className = `denomination-section ${group.className}`;
    section.innerHTML = `<h3>${group.title}</h3><div class="denomination-buttons"></div>`;
    const buttonWrap = section.querySelector(".denomination-buttons");
    group.values.forEach((value) => {
    const count = cashCounts.get(value) || 0;
    const button = document.createElement("button");
    button.className = "denomination-button";
    button.type = "button";
      button.innerHTML = `<strong>${cashLabel(value)}</strong><span>${count} × gewählt</span>`;
    button.addEventListener("click", () => {
        cashOverride = null;
      cashCounts.set(value, count + 1);
      renderCash();
    });
      buttonWrap.append(button);
    });
    denominationGrid.append(section);
  });
}

function renderDepositReturn() {
  byId("depositCount").textContent = String(depositReturnCount);
  byId("depositValue").textContent = money(depositReturnCount * depositProduct.price);
}

function getCashReceived() {
  if (cashOverride !== null) return cashOverride;
  return [...cashCounts.entries()].reduce((sum, [value, count]) => sum + value * count, 0);
}

function renderCash() {
  const due = getTotal();
  const received = getCashReceived();
  const change = Math.max(0, received - due);
  byId("cashDue").textContent = money(due);
  byId("cashReceived").textContent = money(received);
  byId("cashChange").textContent = money(change);
  byId("cashChange").closest(".cash-status").classList.toggle("is-ready", received >= due && due > 0);
  byId("finishCash").disabled = received < due || due === 0;
  renderQuickCash(due);
  renderDenominations();
}

function resetCash() {
  cashCounts.clear();
  cashOverride = null;
  renderCash();
}

function closeDialog(dialog) {
  if (dialog.open) dialog.close();
}

function dateTimeFromParts(dateValue, timeValue, startsAt = null) {
  const [year, month, day] = dateValue.split("-").map(Number);
  const [hour, minute] = timeValue.split(":").map(Number);
  const value = new Date(year, month - 1, day, hour, minute || 0, 0, 0);
  if (startsAt && value <= startsAt) value.setDate(value.getDate() + 1);
  return value;
}

function getShiftWindow(shift) {
  const startsAt = dateTimeFromParts(shift.date, shift.start);
  const endsAt = dateTimeFromParts(shift.date, shift.end, startsAt);
  const stopAt = dateTimeFromParts(shift.date, shift.stop, startsAt);
  return { startsAt, endsAt, stopAt };
}

function getCurrentShift(now = new Date()) {
  return shifts
    .map((shift) => ({ shift, ...getShiftWindow(shift) }))
    .find(({ startsAt, endsAt }) => now >= startsAt && now <= endsAt);
}

function timeText(date) {
  return new Intl.DateTimeFormat("de-DE", { hour: "2-digit", minute: "2-digit" }).format(date);
}

function minutesUntil(date, now = new Date()) {
  return Math.ceil((date.getTime() - now.getTime()) / 60000);
}

function renderShiftStatus() {
  const current = getCurrentShift();
  const card = byId("shiftCard");
  const name = byId("shiftName");
  const details = byId("shiftDetails");
  card.classList.remove("warning", "stop");

  if (!current) {
    name.textContent = "Keine Schicht aktiv";
    details.innerHTML = card.classList.contains("compact-shift")
      ? `<span>Keine aktive Schicht</span>`
      : `<span>In den Einstellungen kannst du Schichten anlegen.</span>`;
    return;
  }

  const now = new Date();
  const untilStop = minutesUntil(current.stopAt, now);
  const untilEnd = minutesUntil(current.endsAt, now);
  const people = current.shift.people?.length ? current.shift.people.join(", ") : "Noch niemand eingeteilt";
  name.textContent = current.shift.name || "Aktive Schicht";
  details.innerHTML = card.classList.contains("compact-shift")
    ? `
      <span>${timeText(current.startsAt)} bis ${timeText(current.endsAt)}</span>
      <span>${people}</span>
      <span>Stopp ${timeText(current.stopAt)}</span>
    `
    : `
      <span>${timeText(current.startsAt)} bis ${timeText(current.endsAt)}</span>
      <span>Ausschankstopp: ${timeText(current.stopAt)}</span>
      <span>${people}</span>
      <span>${untilStop > 0 ? `${untilStop} Min. bis Stopp` : `Ausschankstopp erreicht`} · ${untilEnd} Min. bis Schichtende</span>
    `;

  if (untilStop <= 0) {
    card.classList.add("stop");
  } else if (untilStop <= 30) {
    card.classList.add("warning");
  }
}

function maybeShowStopWarning() {
  const current = getCurrentShift();
  if (!current || stopDialog.open) return;
  const now = new Date();
  const warningAt = new Date(current.stopAt.getTime() - 30 * 60000);
  if (now < warningAt || now >= current.stopAt) return;
  const ackKey = `${current.shift.id}-${current.shift.date}-${current.shift.stop}`;
  if (localStorage.getItem(storageKeys.stopAck) === ackKey) return;
  byId("stopMessage").textContent = `${current.shift.name}: Ausschankstopp um ${timeText(current.stopAt)}. Bitte letzte Bestellungen rechtzeitig ansagen.`;
  stopDialog.showModal();
}

function getStats() {
  const byProduct = new Map();
  let revenue = 0;
  let items = 0;
  sales.forEach((sale) => {
    revenue += sale.total;
    sale.items.forEach((line) => {
      if (line.categoryId !== "pfand") {
        items += line.quantity;
      }
      const key = line.productId;
      const current = byProduct.get(key) || {
        productName: line.productName,
        categoryName: line.categoryName,
        quantity: 0,
        revenue: 0
      };
      current.quantity += line.quantity;
      current.revenue += line.lineTotal;
      byProduct.set(key, current);
    });
  });
  return {
    revenue,
    items,
    orders: sales.length,
    rows: [...byProduct.values()].sort((a, b) => b.revenue - a.revenue)
  };
}

function renderStats() {
  const stats = getStats();
  byId("statsRevenue").textContent = money(stats.revenue);
  byId("statsItems").textContent = String(stats.items);
  byId("statsOrders").textContent = String(stats.orders);
  byId("statsRows").innerHTML =
    stats.rows.map((row) => `
      <tr>
        <td>${row.productName}</td>
        <td>${row.categoryName}</td>
        <td>${row.quantity}</td>
        <td>${money(row.revenue)}</td>
      </tr>
    `).join("") || `<tr><td colspan="4">Noch keine Verkäufe erfasst.</td></tr>`;
}

function csvEscape(value) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

function downloadCsv() {
  const rows = [["Datum", "Zahlart", "Produkt", "Kategorie", "Anzahl", "Einzelpreis", "Zeilensumme", "Preisregel", "Bestellsumme"]];
  sales.forEach((sale) => {
    sale.items.forEach((line) => {
      rows.push([
        new Date(sale.createdAt).toLocaleString("de-DE"),
        paymentLabel(sale.method),
        line.productName,
        line.categoryName,
        line.quantity,
        line.unitPrice.toFixed(2).replace(".", ","),
        line.lineTotal.toFixed(2).replace(".", ","),
        line.priceNote || "",
        sale.total.toFixed(2).replace(".", ",")
      ]);
    });
  });
  const csv = rows.map((row) => row.map(csvEscape).join(";")).join("\n");
  const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `bar-kasse-verkaeufe-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function paymentLabel(method) {
  if (method === "card") return "Karte";
  if (method === "cash") return "Bar";
  if (method === "deposit-cash") return "Pfand Geld";
  if (method === "deposit-klopfer") return "Pfand Klopfer";
  return method;
}

function renderSettings() {
  renderCategoryEditor();
  renderDrinkEditor();
  renderHappyHourEditor();
  renderShiftEditor();
}

function renderCategoryEditor() {
  byId("categoryEditor").innerHTML = catalog.categories.map((category) => `
    <article class="edit-card" data-category-id="${category.id}">
      <label>Name<input data-field="label" value="${escapeHtml(category.label)}"></label>
      <label>Icon<input data-field="icon" value="${escapeHtml(category.icon)}"></label>
      <div class="edit-actions">
        <button class="secondary-button compact" data-action="save-category" type="button">Speichern</button>
        <button class="secondary-button compact danger-soft" data-action="delete-category" type="button">Kategorie löschen</button>
      </div>
    </article>
  `).join("") || `<div class="empty-order">Noch keine Kategorien angelegt.</div>`;
}

function renderDrinkEditor() {
  byId("drinkEditor").innerHTML = catalog.drinks.map((drink) => `
    <article class="edit-card product-edit" data-drink-id="${drink.id}">
      <label>Name<input data-field="name" value="${escapeHtml(drink.name)}"></label>
      <label>Preis<input data-field="price" type="number" min="0" step="0.1" value="${drink.price}"></label>
      <label>Kategorie<select data-field="category">${catalog.categories.map((category) => `<option value="${category.id}" ${category.id === drink.category ? "selected" : ""}>${escapeHtml(category.label)}</option>`).join("")}</select></label>
      <label>Icon<input data-field="icon" value="${escapeHtml(drink.icon || "")}"></label>
      <label>Zutaten<textarea data-field="ingredients">${escapeHtml((drink.ingredients || []).join("\n"))}</textarea></label>
      <label>Zubereitung<textarea data-field="steps">${escapeHtml((drink.steps || []).join("\n"))}</textarea></label>
      <label>Bild hochladen<input data-field="image" type="file" accept="image/*"></label>
      <div class="edit-actions">
        <button class="secondary-button compact" data-action="save-drink" type="button">Speichern</button>
        <button class="secondary-button compact" data-action="clear-image" type="button">Bild löschen</button>
        <button class="secondary-button compact danger-soft" data-action="delete-drink" type="button">Produkt löschen</button>
      </div>
    </article>
  `).join("") || `<div class="empty-order">Noch keine Produkte angelegt.</div>`;
}

function renderShiftEditor() {
  byId("shiftEditor").innerHTML = shifts.map((shift) => `
    <article class="edit-card shift-edit" data-shift-id="${shift.id}">
      <label>Name<input data-field="name" value="${escapeHtml(shift.name)}"></label>
      <label>Datum<input data-field="date" type="date" value="${escapeHtml(shift.date)}"></label>
      <label>Start<input data-field="start" type="time" value="${escapeHtml(shift.start)}"></label>
      <label>Ende<input data-field="end" type="time" value="${escapeHtml(shift.end)}"></label>
      <label>Ausschankstopp<input data-field="stop" type="time" value="${escapeHtml(shift.stop)}"></label>
      <label>Team<textarea data-field="people">${escapeHtml((shift.people || []).join("\n"))}</textarea></label>
      <div class="edit-actions">
        <button class="secondary-button compact" data-action="save-shift" type="button">Speichern</button>
        <button class="secondary-button compact danger-soft" data-action="delete-shift" type="button">Schicht löschen</button>
      </div>
    </article>
  `).join("") || `<div class="empty-order">Noch keine Schichten angelegt.</div>`;
}

function renderHappyHourEditor() {
  byId("happyHourEditor").innerHTML = `
    <div class="happy-hour-grid">
      <label class="toggle-setting">
        <input data-field="enabled" type="checkbox" ${happyHourConfig.enabled ? "checked" : ""}>
        <span>Happy Hour aktiv</span>
      </label>
      <label>Start<input data-field="start" type="time" value="${escapeHtml(happyHourConfig.start)}"></label>
      <label>Ende<input data-field="end" type="time" value="${escapeHtml(happyHourConfig.end)}"></label>
      <label>Happy-Hour-Preis<input data-field="price" type="number" min="0" step="0.1" value="${happyHourConfig.price}"></label>
    </div>
    <div class="happy-hour-groups">
      <section>
        <h4>Kategorien</h4>
        <div class="check-list">
          ${catalog.categories.map((category) => `
            <label>
              <input data-happy-category="${category.id}" type="checkbox" ${happyHourConfig.categoryIds.includes(category.id) ? "checked" : ""}>
              <span>${escapeHtml(category.label)}</span>
            </label>
          `).join("")}
        </div>
      </section>
      <section>
        <h4>Einzelne Produkte</h4>
        <div class="check-list">
          ${catalog.drinks.map((drink) => `
            <label>
              <input data-happy-product="${drink.id}" type="checkbox" ${happyHourConfig.productIds.includes(drink.id) ? "checked" : ""}>
              <span>${escapeHtml(drink.name)}</span>
            </label>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}

function addCategory() {
  const id = `kat-${Date.now()}`;
  catalog.categories.push({ id, label: "Neue Kategorie", icon: "□" });
  activeCategory = id;
  saveCatalog();
  renderAll();
  renderSettings();
}

function addProduct() {
  const category = activeCategory || catalog.categories[0]?.id || "";
  catalog.drinks.push({
    id: `produkt-${Date.now()}`,
    name: "Neues Produkt",
    category,
    price: 0,
    icon: "●",
    colors: ["#7c8a82", "#f2eadb"],
    image: "",
    ingredients: [],
    steps: []
  });
  saveCatalog();
  renderAll();
  renderSettings();
}

function addShift() {
  shifts.push({
    id: `shift-${Date.now()}`,
    name: "Neue Schicht",
    date: todayDateValue(),
    start: "18:00",
    end: "02:00",
    stop: "01:30",
    people: []
  });
  saveShifts();
  renderShiftStatus();
  renderSettings();
}

async function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function handleSettingsClick(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const categoryCard = button.closest("[data-category-id]");
  const drinkCard = button.closest("[data-drink-id]");
  const shiftCard = button.closest("[data-shift-id]");

  if (button.dataset.action === "save-happy-hour") {
    const editor = byId("happyHourEditor");
    happyHourConfig = {
      enabled: editor.querySelector('[data-field="enabled"]').checked,
      start: editor.querySelector('[data-field="start"]').value || defaultHappyHourConfig.start,
      end: editor.querySelector('[data-field="end"]').value || defaultHappyHourConfig.end,
      price: Number(editor.querySelector('[data-field="price"]').value) || defaultHappyHourConfig.price,
      categoryIds: [...editor.querySelectorAll("[data-happy-category]:checked")].map((input) => input.dataset.happyCategory),
      productIds: [...editor.querySelectorAll("[data-happy-product]:checked")].map((input) => input.dataset.happyProduct)
    };
    happyHourActive = isHappyHour();
    saveHappyHour();
    renderAll();
    renderSettings();
    return;
  }

  if (button.dataset.action === "save-category" && categoryCard) {
    const category = catalog.categories.find((item) => item.id === categoryCard.dataset.categoryId);
    category.label = categoryCard.querySelector('[data-field="label"]').value.trim() || category.label;
    category.icon = categoryCard.querySelector('[data-field="icon"]').value.trim() || "□";
  }

  if (button.dataset.action === "delete-category" && categoryCard) {
    const categoryId = categoryCard.dataset.categoryId;
    const category = catalog.categories.find((item) => item.id === categoryId);
    const productCount = catalog.drinks.filter((drink) => drink.category === categoryId).length;
    const message = productCount
      ? `Kategorie "${category?.label || ""}" und ${productCount} Produkt(e) darin löschen?`
      : `Kategorie "${category?.label || ""}" löschen?`;
    if (!window.confirm(message)) return;
    catalog.categories = catalog.categories.filter((item) => item.id !== categoryId);
    catalog.drinks = catalog.drinks.filter((drink) => drink.category !== categoryId);
    order.clear();
    ensureActiveCategory();
  }

  if (button.dataset.action === "delete-drink" && drinkCard) {
    const drinkId = drinkCard.dataset.drinkId;
    const drink = catalog.drinks.find((item) => item.id === drinkId);
    if (!window.confirm(`Produkt "${drink?.name || ""}" löschen?`)) return;
    catalog.drinks = catalog.drinks.filter((item) => item.id !== drinkId);
    order.delete(drinkId);
  }

  if ((button.dataset.action === "save-drink" || button.dataset.action === "clear-image") && drinkCard) {
    const drink = catalog.drinks.find((item) => item.id === drinkCard.dataset.drinkId);
    drink.name = drinkCard.querySelector('[data-field="name"]').value.trim() || drink.name;
    drink.price = Number(drinkCard.querySelector('[data-field="price"]').value) || 0;
    drink.category = drinkCard.querySelector('[data-field="category"]').value;
    drink.icon = drinkCard.querySelector('[data-field="icon"]').value.trim() || "●";
    drink.ingredients = parseLines(drinkCard.querySelector('[data-field="ingredients"]').value);
    drink.steps = parseLines(drinkCard.querySelector('[data-field="steps"]').value);
    if (button.dataset.action === "clear-image") {
      drink.image = "";
    } else {
      const file = drinkCard.querySelector('[data-field="image"]').files[0];
      if (file) drink.image = await readFileAsDataUrl(file);
    }
  }

  if (button.dataset.action === "delete-shift" && shiftCard) {
    shifts = shifts.filter((shift) => shift.id !== shiftCard.dataset.shiftId);
    saveShifts();
    renderShiftStatus();
    renderSettings();
    return;
  }

  if (button.dataset.action === "save-shift" && shiftCard) {
    const shift = shifts.find((item) => item.id === shiftCard.dataset.shiftId);
    shift.name = shiftCard.querySelector('[data-field="name"]').value.trim() || shift.name;
    shift.date = shiftCard.querySelector('[data-field="date"]').value || todayDateValue();
    shift.start = shiftCard.querySelector('[data-field="start"]').value || "18:00";
    shift.end = shiftCard.querySelector('[data-field="end"]').value || "02:00";
    shift.stop = shiftCard.querySelector('[data-field="stop"]').value || shift.end;
    shift.people = parseLines(shiftCard.querySelector('[data-field="people"]').value);
  }

  saveCatalog();
  saveShifts();
  renderAll();
  renderSettings();
}

function resetDemoData() {
  catalog = clone(defaultCatalog);
  shifts = defaultShifts();
  activeCategory = catalog.categories[0].id;
  saveCatalog();
  saveShifts();
  renderAll();
  renderSettings();
}

function clearSales() {
  const approved = window.confirm("Alle gespeicherten Verkäufe wirklich löschen? Das kann nicht rückgängig gemacht werden.");
  if (!approved) return;
  sales = [];
  saveSales();
  renderStats();
}

function extractAppVersion(html) {
  return html.match(/app\.js\?v=(\d+)/)?.[1] || "";
}

function refreshApp() {
  const url = new URL(window.location.href);
  url.searchParams.set("v", APP_VERSION);
  url.searchParams.set("refresh", Date.now().toString());
  window.location.replace(url.toString());
}

async function checkForAppUpdate({ reloadWhenNew = false } = {}) {
  if (!navigator.onLine) return;
  try {
    const response = await fetch(`./index.html?update-check=${Date.now()}`, {
      cache: "no-store"
    });
    if (!response.ok) return;
    const remoteVersion = extractAppVersion(await response.text());
    if (!remoteVersion || remoteVersion === APP_VERSION) return;

    if (reloadWhenNew && order.size === 0 && !document.querySelector("dialog[open]")) {
      const url = new URL(window.location.href);
      url.searchParams.set("v", remoteVersion);
      url.searchParams.set("refresh", Date.now().toString());
      window.location.replace(url.toString());
    }
  } catch {
    // Offline bleibt die installierte App mit dem vorhandenen Cache nutzbar.
  }
}

function showSettingsTab(tabName) {
  document.querySelectorAll("[data-settings-tab]").forEach((tab) => {
    tab.setAttribute("aria-selected", String(tab.dataset.settingsTab === tabName));
  });
  document.querySelectorAll("[data-settings-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.settingsPanel !== tabName;
  });
}

function renderAll() {
  renderCategories();
  renderDrinks();
  renderPopular();
  renderOrder();
  renderStats();
  renderShiftStatus();
}

function updateClock() {
  const time = new Intl.DateTimeFormat("de-DE", {
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date());
  const [hour, minute] = time.split(":");
  const clock = byId("clock");
  clock.setAttribute("aria-label", time);
  clock.innerHTML = `<span>${hour}</span><span class="clock-colon">:</span><span>${minute}</span>`;
  renderShiftStatus();
  maybeShowStopWarning();
  const nextHappyHourActive = isHappyHour();
  if (nextHappyHourActive !== happyHourActive) {
    happyHourActive = nextHappyHourActive;
    renderDrinks();
    renderPopular();
    renderOrder();
    renderCash();
  }
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then((registration) => registration.update())
      .catch(() => {});
  }
}

byId("clearOrder").addEventListener("click", () => {
  order.clear();
  renderOrder();
});
byId("payCard").addEventListener("click", () => completeSale("card"));
byId("openCash").addEventListener("click", () => {
  renderCash();
  cashDialog.showModal();
});
byId("finishCash").addEventListener("click", () => {
  const received = getCashReceived();
  completeSale("cash", received, received - getTotal());
});
byId("resetCash").addEventListener("click", resetCash);
byId("closeCash").addEventListener("click", () => closeDialog(cashDialog));
byId("closeDeposit").addEventListener("click", () => closeDialog(depositDialog));
byId("depositMinus").addEventListener("click", () => {
  depositReturnCount = Math.max(1, depositReturnCount - 1);
  renderDepositReturn();
});
byId("depositPlus").addEventListener("click", () => {
  depositReturnCount += 1;
  renderDepositReturn();
});
byId("returnDepositCash").addEventListener("click", () => recordDepositReturn("cash"));
byId("returnDepositKlopfer").addEventListener("click", () => recordDepositReturn("klopfer"));
byId("closeRecipe").addEventListener("click", () => closeDialog(recipeDialog));
byId("openStats").addEventListener("click", () => {
  renderStats();
  byId("statsDialog").showModal();
});
byId("closeStats").addEventListener("click", () => closeDialog(byId("statsDialog")));
byId("downloadCsv").addEventListener("click", downloadCsv);
byId("togglePopular").addEventListener("click", () => {
  setPopularHidden(!document.body.classList.contains("popular-hidden"));
});
byId("openSettings").addEventListener("click", () => {
  renderSettings();
  byId("settingsDialog").showModal();
});
byId("closeSettings").addEventListener("click", () => closeDialog(byId("settingsDialog")));
byId("addCategory").addEventListener("click", addCategory);
byId("addDrink").addEventListener("click", addProduct);
byId("addShift").addEventListener("click", addShift);
byId("refreshApp").addEventListener("click", refreshApp);
byId("resetDemoData").addEventListener("click", resetDemoData);
byId("clearSales").addEventListener("click", clearSales);
byId("categoryEditor").addEventListener("click", handleSettingsClick);
byId("drinkEditor").addEventListener("click", handleSettingsClick);
byId("happyHourEditor").addEventListener("click", handleSettingsClick);
document.querySelector('[data-action="save-happy-hour"]').addEventListener("click", handleSettingsClick);
byId("shiftEditor").addEventListener("click", handleSettingsClick);
document.querySelectorAll("[data-settings-tab]").forEach((tab) => {
  tab.addEventListener("click", () => showSettingsTab(tab.dataset.settingsTab));
});
byId("closeStop").addEventListener("click", () => closeDialog(stopDialog));
byId("ackStop").addEventListener("click", () => {
  const current = getCurrentShift();
  if (current) {
    localStorage.setItem(storageKeys.stopAck, `${current.shift.id}-${current.shift.date}-${current.shift.stop}`);
  }
  closeDialog(stopDialog);
});
document.addEventListener("dblclick", (event) => {
  if (event.target.closest("input, select, textarea")) return;
  event.preventDefault();
}, { passive: false });

renderAll();
renderDenominations();
renderDepositReturn();
initPopularVisibility();
updateClock();
registerServiceWorker();
checkForAppUpdate({ reloadWhenNew: true });
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) checkForAppUpdate({ reloadWhenNew: true });
});
window.addEventListener("online", () => checkForAppUpdate({ reloadWhenNew: true }));
setInterval(updateClock, 10000);
setInterval(() => checkForAppUpdate({ reloadWhenNew: true }), 5 * 60 * 1000);

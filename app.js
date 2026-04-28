const defaultCatalog = {
  categories: [
    { id: "spritz", label: "Spritz", icon: "☀" },
    { id: "longdrinks", label: "Longdrinks", icon: "▥" },
    { id: "cocktails", label: "Cocktails", icon: "◇" },
    { id: "bier", label: "Bier", icon: "▰" },
    { id: "alkoholfrei", label: "Ohne Alkohol", icon: "○" }
  ],
  drinks: [
    ["aperol", "Aperol Spritz", "spritz", 7.5, "🍊", ["#ef7f3b", "#f6cf72"], ["6 cl Prosecco", "4 cl Aperol", "2 cl Soda", "Eis", "Orange"], ["Weinglas mit Eis füllen.", "Aperol und Prosecco eingießen.", "Mit Soda auffüllen und kurz rühren.", "Mit Orange garnieren."]],
    ["hugo", "Hugo", "spritz", 7.5, "🌿", ["#4ca66a", "#d7f3a8"], ["6 cl Prosecco", "2 cl Holunderblütensirup", "Soda", "Minze", "Limette", "Eis"], ["Glas mit Eis, Minze und Limette vorbereiten.", "Holunderblütensirup und Prosecco dazugeben.", "Mit Soda auffüllen.", "Einmal sanft umrühren."]],
    ["limoncello", "Limoncello Spritz", "spritz", 8, "🍋", ["#f2c94c", "#fff2a6"], ["5 cl Limoncello", "7 cl Prosecco", "Soda", "Zitrone", "Eis"], ["Glas großzügig mit Eis füllen.", "Limoncello und Prosecco eingießen.", "Mit Soda auffüllen.", "Mit Zitronenscheibe servieren."]],
    ["gin-tonic", "Gin Tonic", "longdrinks", 8.5, "🥒", ["#a9d7cf", "#f8fbf1"], ["5 cl Gin", "Tonic Water", "Eis", "Gurke oder Limette"], ["Highball-Glas mit Eis füllen.", "Gin eingießen.", "Mit Tonic auffüllen.", "Garnitur dazugeben."]],
    ["moscow-mule", "Moscow Mule", "longdrinks", 8.5, "🫚", ["#c56a32", "#f0b164"], ["5 cl Vodka", "2 cl Limettensaft", "Ginger Beer", "Eis", "Limette"], ["Becher oder Glas mit Eis füllen.", "Vodka und Limettensaft dazugeben.", "Mit Ginger Beer auffüllen.", "Kurz rühren und garnieren."]],
    ["cuba-libre", "Cuba Libre", "longdrinks", 8, "🥃", ["#7a3f22", "#d89958"], ["5 cl Rum", "Cola", "Limette", "Eis"], ["Glas mit Eis und Limettenspalten füllen.", "Rum dazugeben.", "Mit Cola auffüllen.", "Kurz rühren."]],
    ["mojito", "Mojito", "cocktails", 9, "🍃", ["#2f9e62", "#c7f6cf"], ["5 cl weißer Rum", "2 cl Limettensaft", "2 TL Zucker", "Soda", "Minze", "Crushed Ice"], ["Minze, Zucker und Limettensaft sanft andrücken.", "Rum und Crushed Ice dazugeben.", "Mit Soda auffüllen.", "Vorsichtig umrühren."]],
    ["margarita", "Margarita", "cocktails", 9.5, "🍸", ["#41b8a5", "#f5d85e"], ["5 cl Tequila", "2 cl Triple Sec", "2 cl Limettensaft", "Salzrand"], ["Glas mit Salzrand vorbereiten.", "Zutaten mit Eis kräftig shaken.", "In das Glas abseihen.", "Mit Limette garnieren."]],
    ["espresso-martini", "Espresso Martini", "cocktails", 10, "☕", ["#3a2219", "#c8925b"], ["4 cl Vodka", "3 cl Espresso", "2 cl Kaffeelikör", "1 cl Zuckersirup"], ["Frischen Espresso abkühlen lassen.", "Alle Zutaten mit Eis shaken.", "Fein in Martiniglas abseihen.", "Mit Kaffeebohnen garnieren."]],
    ["pils", "Pils 0,3", "bier", 3.5, "🍺", ["#f2b84b", "#fff1a6"], ["Pils vom Fass"], ["Glas schräg halten.", "Langsam einschenken.", "Schaumkrone setzen lassen.", "Direkt servieren."]],
    ["weizen", "Weizen 0,5", "bier", 5, "🍻", ["#e0a13a", "#fff2bb"], ["Weizenbier"], ["Glas schräg halten.", "Langsam einschenken.", "Rest leicht schwenken und aufgießen.", "Mit Schaumkrone servieren."]],
    ["cola", "Cola", "alkoholfrei", 3, "🥤", ["#2c1712", "#ca4836"], ["Cola", "Eis optional", "Zitrone optional"], ["Glas vorbereiten.", "Cola einschenken.", "Nach Wunsch Eis und Zitrone dazugeben."]],
    ["wasser", "Wasser", "alkoholfrei", 2.5, "💧", ["#4aa3df", "#c9f0ff"], ["Still oder Sprudel"], ["Flasche oder Glas wählen.", "Kalt servieren."]],
    ["virgin-mojito", "Virgin Mojito", "alkoholfrei", 6.5, "🍋", ["#62b96f", "#e7f9a9"], ["Limette", "Minze", "Zucker", "Soda", "Crushed Ice"], ["Limette, Minze und Zucker sanft andrücken.", "Crushed Ice dazugeben.", "Mit Soda auffüllen.", "Kurz umrühren."]]
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
  catalog: "bar-kasse.catalog.v2",
  sales: "bar-kasse.sales.v1",
  shifts: "bar-kasse.shifts.v1",
  stopAck: "bar-kasse.stop-ack.v1"
};

const denominations = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05];
const order = new Map();
const cashCounts = new Map();
let catalog = loadCatalog();
let sales = loadSales();
let shifts = loadShifts();
let activeCategory = catalog.categories[0]?.id || "";

const formatter = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });
const byId = (id) => document.getElementById(id);

const categoryTabs = byId("categoryTabs");
const drinkGrid = byId("drinkGrid");
const orderList = byId("orderList");
const itemCount = byId("itemCount");
const orderTotal = byId("orderTotal");
const lastSale = byId("lastSale");
const cashDialog = byId("cashDialog");
const recipeDialog = byId("recipeDialog");
const denominationGrid = byId("denominationGrid");
const stopDialog = byId("stopDialog");

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

function saveCatalog() {
  localStorage.setItem(storageKeys.catalog, JSON.stringify(catalog));
}

function saveSales() {
  localStorage.setItem(storageKeys.sales, JSON.stringify(sales));
}

function saveShifts() {
  localStorage.setItem(storageKeys.shifts, JSON.stringify(shifts));
}

function money(value) {
  return formatter.format(Number(value) || 0);
}

function getTotal() {
  return [...order.values()].reduce((sum, line) => sum + line.drink.price * line.quantity, 0);
}

function getItemCount() {
  return [...order.values()].reduce((sum, line) => sum + line.quantity, 0);
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
    tab.innerHTML = `<span aria-hidden="true">${category.icon}</span><span>${category.label}</span>`;
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
  const drinks = catalog.drinks.filter((drink) => drink.category === activeCategory);
  if (!drinks.length) {
    drinkGrid.innerHTML = `<div class="empty-order full-grid">In dieser Kategorie sind noch keine Produkte angelegt.</div>`;
    return;
  }

  drinks.forEach((drink) => {
    const card = document.createElement("div");
    card.className = "drink-card";
    card.role = "button";
    card.tabIndex = 0;
    card.setAttribute("aria-label", `${drink.name} fuer ${money(drink.price)} hinzufuegen`);
    card.style.setProperty("--drink-a", drink.colors?.[0] || "#9aa6a1");
    card.style.setProperty("--drink-b", drink.colors?.[1] || "#f4e9d7");
    card.innerHTML = `
      ${drinkImageMarkup(drink, "drink-art")}
      <div class="drink-meta">
        <div>
          <span class="drink-name">${drink.name}</span>
          <button class="recipe-button" type="button">Rezept ansehen</button>
        </div>
        <span class="drink-price">${money(drink.price)}</span>
      </div>
    `;
    card.addEventListener("click", () => addDrink(drink.id));
    card.addEventListener("keydown", (event) => {
      if (event.target !== card) return;
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        addDrink(drink.id);
      }
    });
    card.querySelector(".recipe-button").addEventListener("click", (event) => {
      event.stopPropagation();
      showRecipe(drink);
    });
    drinkGrid.append(card);
  });
}

function addDrink(id) {
  const drink = catalog.drinks.find((item) => item.id === id);
  if (!drink) return;
  const existing = order.get(id);
  order.set(id, { drink, quantity: existing ? existing.quantity + 1 : 1 });
  renderOrder();
}

function changeQuantity(id, delta) {
  const existing = order.get(id);
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
  const lines = [...order.values()];

  if (!lines.length) {
    orderList.innerHTML = `<div class="empty-order">Tippe links auf Drinks, um die Bestellung zu starten.</div>`;
  } else {
    lines.forEach(({ drink, quantity }) => {
      const item = document.createElement("div");
      item.className = "order-item";
      item.innerHTML = `
        <div class="quantity-stepper">
          <button class="stepper-button" type="button" aria-label="${drink.name} entfernen">−</button>
          <button class="stepper-button" type="button" aria-label="${drink.name} hinzufügen">+</button>
        </div>
        <div>
          <div class="order-name">${quantity} × ${drink.name}</div>
          <span class="order-sub">${money(drink.price)} pro Stück</span>
        </div>
        <div class="order-line-total">${money(drink.price * quantity)}</div>
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
  const items = [...order.values()].map(({ drink, quantity }) => ({
    productId: drink.id,
    productName: drink.name,
    categoryId: drink.category,
    categoryName: catalog.categories.find((category) => category.id === drink.category)?.label || drink.category,
    quantity,
    unitPrice: drink.price,
    lineTotal: Number((drink.price * quantity).toFixed(2))
  }));
  sales.push({
    id: `sale-${Date.now()}`,
    createdAt: new Date().toISOString(),
    method,
    total: Number(total.toFixed(2)),
    received,
    change,
    items
  });
  saveSales();
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
  byId("recipePrice").textContent = money(drink.price);
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

function renderDenominations() {
  denominationGrid.innerHTML = "";
  denominations.forEach((value) => {
    const count = cashCounts.get(value) || 0;
    const button = document.createElement("button");
    button.className = "denomination-button";
    button.type = "button";
    button.innerHTML = `<strong>${money(value)}</strong><span>${count} × ausgewählt</span>`;
    button.addEventListener("click", () => {
      cashCounts.set(value, count + 1);
      renderCash();
    });
    denominationGrid.append(button);
  });
}

function getCashReceived() {
  return [...cashCounts.entries()].reduce((sum, [value, count]) => sum + value * count, 0);
}

function renderCash() {
  const due = getTotal();
  const received = getCashReceived();
  const change = Math.max(0, received - due);
  byId("cashDue").textContent = money(due);
  byId("cashReceived").textContent = money(received);
  byId("cashChange").textContent = money(change);
  byId("finishCash").disabled = received < due || due === 0;
  renderDenominations();
}

function resetCash() {
  cashCounts.clear();
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
    details.innerHTML = `<span>In den Einstellungen kannst du Schichten anlegen.</span>`;
    return;
  }

  const now = new Date();
  const untilStop = minutesUntil(current.stopAt, now);
  const untilEnd = minutesUntil(current.endsAt, now);
  const people = current.shift.people?.length ? current.shift.people.join(", ") : "Noch niemand eingeteilt";
  name.textContent = current.shift.name || "Aktive Schicht";
  details.innerHTML = `
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
      items += line.quantity;
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
  const rows = [["Datum", "Zahlart", "Produkt", "Kategorie", "Anzahl", "Einzelpreis", "Zeilensumme", "Bestellsumme"]];
  sales.forEach((sale) => {
    sale.items.forEach((line) => {
      rows.push([
        new Date(sale.createdAt).toLocaleString("de-DE"),
        sale.method === "card" ? "Karte" : "Bar",
        line.productName,
        line.categoryName,
        line.quantity,
        line.unitPrice.toFixed(2).replace(".", ","),
        line.lineTotal.toFixed(2).replace(".", ","),
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

function renderSettings() {
  renderCategoryEditor();
  renderDrinkEditor();
  renderShiftEditor();
}

function renderCategoryEditor() {
  byId("categoryEditor").innerHTML = catalog.categories.map((category) => `
    <article class="edit-card" data-category-id="${category.id}">
      <label>Name<input data-field="label" value="${escapeHtml(category.label)}"></label>
      <label>Icon<input data-field="icon" value="${escapeHtml(category.icon)}"></label>
      <button class="secondary-button compact" data-action="save-category" type="button">Speichern</button>
    </article>
  `).join("");
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
      </div>
    </article>
  `).join("");
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

  if (button.dataset.action === "save-category" && categoryCard) {
    const category = catalog.categories.find((item) => item.id === categoryCard.dataset.categoryId);
    category.label = categoryCard.querySelector('[data-field="label"]').value.trim() || category.label;
    category.icon = categoryCard.querySelector('[data-field="icon"]').value.trim() || "□";
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

function renderAll() {
  renderCategories();
  renderDrinks();
  renderOrder();
  renderStats();
  renderShiftStatus();
}

function updateClock() {
  byId("clock").textContent = new Intl.DateTimeFormat("de-DE", {
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date());
  renderShiftStatus();
  maybeShowStopWarning();
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
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
byId("closeRecipe").addEventListener("click", () => closeDialog(recipeDialog));
byId("openStats").addEventListener("click", () => {
  renderStats();
  byId("statsDialog").showModal();
});
byId("closeStats").addEventListener("click", () => closeDialog(byId("statsDialog")));
byId("downloadCsv").addEventListener("click", downloadCsv);
byId("openSettings").addEventListener("click", () => {
  renderSettings();
  byId("settingsDialog").showModal();
});
byId("closeSettings").addEventListener("click", () => closeDialog(byId("settingsDialog")));
byId("addCategory").addEventListener("click", addCategory);
byId("addDrink").addEventListener("click", addProduct);
byId("addShift").addEventListener("click", addShift);
byId("resetDemoData").addEventListener("click", resetDemoData);
byId("clearSales").addEventListener("click", clearSales);
byId("categoryEditor").addEventListener("click", handleSettingsClick);
byId("drinkEditor").addEventListener("click", handleSettingsClick);
byId("shiftEditor").addEventListener("click", handleSettingsClick);
byId("closeStop").addEventListener("click", () => closeDialog(stopDialog));
byId("ackStop").addEventListener("click", () => {
  const current = getCurrentShift();
  if (current) {
    localStorage.setItem(storageKeys.stopAck, `${current.shift.id}-${current.shift.date}-${current.shift.stop}`);
  }
  closeDialog(stopDialog);
});

renderAll();
renderDenominations();
updateClock();
registerServiceWorker();
setInterval(updateClock, 10000);

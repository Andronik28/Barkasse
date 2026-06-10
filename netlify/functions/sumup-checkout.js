const json = (statusCode, body) => ({
  statusCode,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body)
});

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  const apiKey = process.env.SUMUP_API_KEY;
  const merchantCode = process.env.SUMUP_MERCHANT_CODE;
  const readerId = process.env.SUMUP_READER_ID;
  const affiliateKey = process.env.SUMUP_AFFILIATE_KEY;

  if (!apiKey || !merchantCode || !readerId || !affiliateKey) {
    return json(500, { error: "SumUp ist noch nicht vollständig konfiguriert." });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { error: "Ungueltige Anfrage." });
  }

  const amount = Number(payload.amount);
  if (!Number.isFinite(amount) || amount <= 0) {
    return json(400, { error: "Ungueltiger Betrag." });
  }

  const checkoutBody = {
    total_amount: {
      currency: payload.currency || "EUR",
      minor_unit: 2,
      value: Math.round(amount * 100)
    },
    affiliate: affiliateKey,
    description: String(payload.description || "Bar Kasse").slice(0, 120)
  };

  const response = await fetch(`https://api.sumup.com/v0.1/merchants/${merchantCode}/readers/${readerId}/checkout`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(checkoutBody)
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    return json(response.status, {
      error: result.message || result.error || "SumUp Checkout konnte nicht gestartet werden.",
      details: result
    });
  }

  return json(200, {
    ok: true,
    checkout: result
  });
};

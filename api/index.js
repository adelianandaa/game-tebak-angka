export default function handler(req, res) {

  // ✅ WAJIB biar Flutter Web bisa akses
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // handle preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const min = parseInt(req.query.min) || 1;
  const max = parseInt(req.query.max) || 100;

  if (min > max) {
    return res.status(400).json({
      status: false,
      message: "min tidak boleh lebih besar dari max"
    });
  }

  const random = Math.floor(Math.random() * (max - min + 1)) + min;

  res.status(200).json({
    status: true,
    random: random,
    min: min,
    max: max
  });
}

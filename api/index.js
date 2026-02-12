export default function handler(req, res) {
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

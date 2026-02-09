const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token;

  // 1. Проверяем, есть ли токен в заголовке
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // 2. Получаем токен
      token = req.headers.authorization.split(" ")[1];

      // 3. Проверяем токен
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // 4. Находим пользователя и прикрепляем к req
      req.user = await User.findById(decoded.id).select("-password");

      next(); // Пускаем дальше
    } catch (error) {
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  // 5. Если токена нет
  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
};

module.exports = { protect };
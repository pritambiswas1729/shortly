// const sessionIdToUserMap = new Map();
const jwt = require("jsonwebtoken");
const secret = "Pritam@123@$#";
function setUser(user) {
  //   sessionIdToUserMap.set(id, user);
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    secret
  );
}

function getUser(token) {
  //   return sessionIdToUserMap.get(id);
  if (!token) return null;
  return jwt.verify(token, secret);
}

module.exports = {
  setUser,
  getUser,
};

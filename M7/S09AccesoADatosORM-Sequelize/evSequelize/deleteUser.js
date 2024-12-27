//importr User
const User = require('./User');
async function deleteUser(_id) {
  let user = await User.destroy({
    where: {
      id: _id,
    },
  });
  console.log(user);
  user.close;
}
deleteUser(2);

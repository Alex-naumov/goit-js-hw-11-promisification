const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
  const promise = new Promise((resolve, reject) => {
    const updatedUsers = allUsers.map((user) =>
      user.name === userName ? { ...user, active: !user.active } : user
    );
    resolve(updatedUsers);
  });
  return promise;
};

const logger = (updatedUsers) => console.table(updatedUsers);

/*
 * Сейчас работает так
 */

toggleUserState(users, "Mango").then(logger);
toggleUserState(users, "Lux").then(logger);

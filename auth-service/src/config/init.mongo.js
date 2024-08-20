db.createUser({
  user: "myUser",
  pwd: "myUserPassword",
  roles: [{ role: "readWrite", db: "myDatabase" }]
});

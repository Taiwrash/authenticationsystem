const signInBtn = document.getElementById("sign-in");

signInBtn.addEventListener("click", (e) => {
  const signInEmail = document.getElementById("email").value;
  const signInPassword = document.getElementById("password").value;
  const signInMyForm = document.getElementById("my-form");

  db.collection("users")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        const data = {
          id: doc.id,
          email: doc.data().email,
          hash: doc.data().hash,
        };

        if (signInEmail === data.email) {
          bcrypt.compare(signInPassword, data.hash).then((valid) => {
            if (!valid) {
              return window.alert("Please enter a correct Passowrd!");
            } else {
              return window.alert("You are succesfully Login");
            }
          });
        } else {
          return window.alert("Please enter a correct email address");
        }
      });
    });

  e.preventDefault();
  db.collection("users");
  console.log("User Successfully Logged in");
  signInMyForm.reset();
});

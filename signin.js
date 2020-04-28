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

        let location = " ";

        if (signInEmail !== "" && signInEmail === data.email) {
          bcrypt.compare(signInPassword, data.hash);
          location = "welcome.html";
        } else {
          location = "signup.html";
        }
        this.location.href = location;
        console.log(location);
      });
    });
  console.log(location);
  e.preventDefault();
  signInMyForm.reset();
});

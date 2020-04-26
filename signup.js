const bcrypt = dcodeIO.bcrypt;

const submitBtn = document.getElementById("sign-up");
submitBtn.addEventListener("click", (e) => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const myForm = document.getElementById("my-form");
  console.log(email);
  console.log(password);

  bcrypt.hash(password, 10).then((hash) => {
    db.collection("users")
      .add({ email, hash })
      .then((docRef) => {
        console.log("document id: ", docRef.id);
      })
      .catch((error) => {
        console.log("This is error ", error);
      });
  });
  e.preventDefault();
  if (email == "" && password == "") {
    db.collection("users");
  }

  console.log("User Successfully added");
  myForm.reset();
});

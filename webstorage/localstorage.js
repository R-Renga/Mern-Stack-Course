//local
const data = localStorage.setItem("username","raja");

const result = localStorage.getItem("username");

console.log(result);


// localStorage.removeItem("username");

// localStorage.clear();

//session
sessionStorage.setItem("firstname","renga")

sessionStorage.getItem("firstname");

sessionStorage.removeItem("firstname");

sessionStorage.clear();

 

// res.cookie("token", "abc123", {
//   httpOnly: true,
//   secure: true,
//   sameSite: "strict",
//   maxAge: 60 * 1000 
// });




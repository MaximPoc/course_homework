var arr = [
  {
      userName:"Test",
      lastName:"Test",
      email:"test.test@gmail.com"
  },
  {
      userName:"Dmitro",
      lastName:"Porohov",
      email:"dmitro.porohov@yahoo.com"
  },
  {
      userName:"Andrii",
      lastName:"",
      email:"andrii@mail.ru"
  },
];

var emailRegVal = /^[a-zA-Z0-9._-]+@(gmail\.com|yahoo\.com)$/;

var trustedEmails = [];

for (var i = 0; i < arr.length; i++) {
  var email = arr[i].email;

  if (emailRegVal.test(email)) {
      console.log(email + " Валідна пошта");
      trustedEmails.push(email);
  } 
  else {
      console.log(email + " Пошта не підтримується");
  }
}

console.log("Валідна пошта: " + trustedEmails);

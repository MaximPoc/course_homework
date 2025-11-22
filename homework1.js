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

var emailRegVal = /^[a-zA-Z0-9._-]+@(gmail\.com|yahoo\.com)$/; // робимо перевірку на символи до @ та після

for (var i = 0; i < arr.length; i++) {
  var email = arr[i].email; // цикл перевірок поля email

  if (emailRegVal.test(email)) {
      console.log(email + " Валідна пошта"); // виводемо знаення валідної пошти 
  } 
  else {
      console.log(email + " Пошта не підтримується"); // виводимо значення невалідної пошти 
  }
}


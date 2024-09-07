let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  
  users = users.map(user => {
    let a;
    if (user.name === "Маша") 
    {
      a = true;
    } else 
    {
      a = false;
    }
  
    return {
      ...user,
      admin: a
    };
  });
  
  console.log(users);
  
/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/

const person ={
    Name: "Abdullah Al Abbas",
    Age: 36,
    City: "Bayan"
}
console.log(person);

/******************************
	Q2) Add a new key email to the person object and assign it an email address.
********************************/

person.Email= "SL_amg@msn.com";
console.log(person);

/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/
// const hasKey=person.forEach(function(person){
//     if(person !=== )
// })
// need to solve this i having a hard tiem with this Q3


// -----------------------------------------------------------------------------------//

const movies = [
    {
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      year: 1994,
      genre: "Drama",
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: 1972,
      genre: "Crime",
    },
    {
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      year: 1994,
      genre: "Crime",
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      genre: "Action",
    },
    {
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      year: 1994,
      genre: "Drama",
    },
  ];
  /******************************
      Q4) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to print the titles of all the movies.
  ********************************/ //foreach function
  
  const printTital= movies.forEach(function(movies){ //call array in function

    console.log(movies.title);
  })
  
  /******************************
      Q5) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to count how many movies were released in the year 1994.
  ********************************/// count number thereofor reduce function
  
  let numberOfMoviesIn94 = movies.reduce(function(total,movies){
    if (movies.year === 1994)
        total = total +1;
        return total;
  },0);

    console.log(numberOfMoviesIn94);
  
  /******************************
      Q6) Write a function that updates the genre of the movie "The Dark Knight"
   to "Action/Drama" and returns the modified array of movies. map function 
  ********************************/
  
  let changeGenre = movies.map(function(movies){
    if (movies.genre === "Action")
        return movies.genre = "Action/Drama";

  });
  console.log(changeGenre);
  console.log(movies);
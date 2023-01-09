var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

function addFavoriteBook(bookName) {
  //need to add function for function names

  if (!bookName.includes("Great")) {
    favoriteBooks.push(bookName); //favoriteBooks isn't limited
  }
}

function print() {
  for (let name of favoriteBooks) {
    console.log(name);
  }
}

print();

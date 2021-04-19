export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'Властелин Колец',
      author: 'Дж. Толкин',
      price: 10,
      imageURL: 'https://m.media-amazon.com/images/I/41gqJ6z++uL.jpg'
    },
    {
      id: 2,
      title: 'Преступление и наказание',
      author: 'Ф.М. Достоевский',
      price: 15,
      imageURL: 'https://m.media-amazon.com/images/I/41MMhlrg2TL.jpg'
    }
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //Имитируем ошибку
        if (Math.random() > 0.75) {
          reject(new Error('Something gone wrong...'));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}
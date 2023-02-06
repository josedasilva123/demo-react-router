import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

const Home = () => {
   const [books, setBooks] = useState([]);

   useEffect(() => {
      async function loadBooksData() {
         try {
            const response = await api.get("/books");
            setBooks(response.data);
         } catch (error) {
            console.log(error);
         }
      }
      loadBooksData();
   }, []);

   return (
      <section>
         <h1>Selecione um livro abaixo</h1>
         <ul>
            {books.map((book) => (
               <li key={book.id}>
                  <Link to={`/book/${book.id}`}>
                     <h3>{book.name}</h3>
                     <img src={book.cover} alt={book.name} />
                     <p>Gênero: {book.genre}</p>
                     <p>Artista: {book.art}</p>
                  </Link>
               </li>
            ))}
         </ul>
      </section>
   );
};

export default Home;

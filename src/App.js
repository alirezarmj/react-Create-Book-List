
import { useState, useEffect } from 'react';
import View from './View';

const getDataFromLs = () => {
  const data = localStorage.getItem('books')
  if (data) {
    return JSON.parse(data)
  } else {
    return []
  }
}

function App() {

  const [books, setBooks] = useState(getDataFromLs())
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [number, setNumber] = useState("");

  const deleteHandle = (number) => {
    const filterBook = books.filter((element) => {
      return element.number !== number;
    })
    setBooks(filterBook)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let book = {
      title,
      author,
      number
    }
    setBooks([...books, book])
  }
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])


  return (
    <section>
      <div className="container">
        <div className="row text-center mt-3 ">
          <h2>لیست کتابها</h2>
          <p>کتاب جدید خود را به کتابخانه اضافه کنید</p>
        </div>
        <div className="row mt-2 align-items-center">
          <div className="col-md-4 leftCol py-3">
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">عنوان</label>
                <input type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">نویسنده</label>
                <input type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  required
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword2" class="form-label">شماره#</label>
                <input type="text"
                  class="form-control"
                  id="exampleInputPassword2"
                  required
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <button type="submit" class="btn btn-success w-100 ">افزودن</button>
            </form>
          </div>
          <div className="col-md-5 offset-md-3 mt-md-0 mt-4">
            <div className="contain p-2">
              {books.length >= 1 &&
                <div>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">شماره#</th>
                        <th scope="col">عنوان</th>
                        <th scope="col">نویسنده</th>
                        <th scope="col ">حذف</th>
                      </tr>
                    </thead>
                    <tbody class="table-group">
                      <View books={books} deleteHandle={deleteHandle} />
                    </tbody>
                  </table>
                  <button className='btn btn-danger w-100' onClick={()=>{setBooks([])}}>حذف همه</button>
                </div>
              }
              {
                books.length < 1 && <div className='text-center'>کتابی برای نمایش وجود ندارد</div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;





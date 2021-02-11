import "./App.css"
import { HiUpload } from "react-icons/hi"
import { books } from "./books"
import SpecificBook from "./book"

const dogImg1 = "https://material.angular.io/assets/img/examples/shiba2.jpg"
const dogImg2 =
  "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/20113314/Carolina-Dog-standing-outdoors.jpg"
const dogImg3 =
  "https://www.cesarsway.com/wp-content/uploads/2019/10/AdobeStock_190562703.jpeg"

function App() {
  return (
    <div className='container mt-4'>
      <h4 className='display-4 text-center mb-4'>
        <br />
        React Upload File
      </h4>

      <div className='input-group mb-4'>
        <input type='text' className='form-control' />
        <button type='button' className='btn btn-outline-secondary'>
          Browse
        </button>
      </div>
      <div className='mt-4 display-4 text-center mb-4'>
        <button type='button' className='btn btn-primary'>
          Upload
          <HiUpload />
        </button>
      </div>
      <h2 className='display-4 text-center mb-4'>Dogs</h2>
      <div className='container'>
        <div className='row'>
          <div className='col-sm'>
            <SimpleDog title='Dog 1' text='Dog Type 1' img={dogImg1} />
          </div>
          <div className='col-sm'>
            <SimpleDog title='Dog 2' text='Dog Type 2' img={dogImg2}>
              <p> More Dog Info </p>
            </SimpleDog>
          </div>
          <div className='col-sm'>
            <SimpleDog title='Dog 3' text='Dog Type 3' img={dogImg3} />
          </div>
        </div>
      </div>

      <h2 className='display-4 text-center mb-4'>Books</h2>
      <div className='container'>
        <BookList />
      </div>
    </div>
  )
}

const SimpleDog = ({ title, text, img, children }) => {
  return (
    <div className='card' style={{ width: "18rem" }}>
      <img src={img} className='card-img-top' />
      <div className='card-body'>
        <h5 className='card-title'>
          {title} {children}
        </h5>
        <p className='card-text'>{text}</p>
        <a href='#' className='btn btn-primary'>
          View
        </a>
      </div>
    </div>
  )
}

const BookList = () => {
  return (
    <div className='row'>
      {books.map((book) => {
        // const { title, author, img } = book
        return (
          <div key={book.id} className='col-sm'>
            {/* First Way */}
            {/* <Book title={title} author={author} img={img} /> */}

            {/* Second Way */}
            {/* <Book key={book.id} book={book} /> */}

            {/* Third Way */}
            <SpecificBook key={book.id} {...book} />
          </div>
        )
      })}
    </div>
  )
}

export default App

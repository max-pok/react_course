import "./App.css"
import { HiUpload } from "react-icons/hi"

const dogImg1 = "https://material.angular.io/assets/img/examples/shiba2.jpg"
const dogImg2 =
  "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/20113314/Carolina-Dog-standing-outdoors.jpg"
const dogImg3 =
  "https://www.cesarsway.com/wp-content/uploads/2019/10/AdobeStock_190562703.jpeg"

const books = [
  {
    id: 1,
    title: "Think Again: The Power of Knowing What You Don't Know",
    author: "Adam Grant",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/41bChkOa4zL._AC_UL210_SR210,210_.jpg",
  },
  {
    id: 2,
    title: "The Hill We Climb: An Inaugural Poem for the Country",
    author: "Amanda Gorman",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/91QclGg4BjL._AC_UL210_SR210,210_.jpg",
  },
  {
    id: 3,
    title: "The Hill We Climb and Other Poems",
    author: "Amanda Gorman",
    img:
      "data:image/webp;base64,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",
  },
  {
    id: 4,
    title: "The Hill We Climb and Other Poems",
    author: "Amanda Gorman",
    img:
      "data:image/webp;base64,UklGRiAOAABXRUJQVlA4IBQOAADQSgCdASrEACUBPw2GuFEnJaMhpZO5iOghic3cLXYcKG+cX2kWi/T7R3o5/3nT19HfmA8z7/sesvoV/WN/rHrG+df62X+ZyVDzf/hu4D/O+JPm7iK5h59r7z+5e3H+c/2/i7+++Idkz2ZoAvrf34OpN4R5//+n43H2r0M/856xn+z5cn0SYIC30pSlKUpG7YszThA+0szMzCeith0/zkQ3qZF4IcS/YedXZEQ67cw5Zo7G+1GBulmrqqqFeotsKtK8Xx8Mqv84ZwkMMMzL4yaX22eLg/c8y1GP+9FrhOxxLq5LG75pzkKKC+/yEEUZ1xmTOfFRZ0uXii/Wrh9ORa64yZpY6+unljMHyTwz8NaQcHqgupgMlvTi0uFXaOnC0i13snuRJcSJRh3RGkTHOF25F8BATNetnCvMSz0kIBzvhj0yBWpLGwM5WzPtHjdWYOjZkREF8ZCAUn1vRCqG96fjdc7TRYzUkfTPYGMzeo35Dh3KIXW9aUhyXGsPhtSLXr9JTB25r+2Vj8hQ3mDvAyEviKYldpIIAvrqY4wNngPSUMtnjwyXm1rd+Kv/qF0FF2dEN7bbzsa5G0Pog4EEMoomU38PbpC2OoxDNtx/P04zw25dL1NMIKfsVEwRWUGEH70d9o/+gTBj8R2TvFiku3gfwMbb/3F7CC4Cu8+JxMkaowm/KavN8TUuM/pPmpijGPqTf9abz9Ldm/F9e8cjiGohF1XXR7bdq/LGNn5KLL2wfcl+cYbo7JLGLa0x9yj8A1Uf3HMkeAXsptwRu0XJ2ZzaGNUErWu+19GcI+hP4wQAAPzNWU03OPczxF5Yuif5JyLd8YsYW4mglNpO+adJtlb4WpB/DZJAF1NKwSBefE9NRex0BDxNQAH2BwNnMSA/+YmmqbDhPKXMqt1HaenmDETeS9C53QOiBGS3aP/HvhlTcG75rZ1OSPgNnDcSY96n4a8ZtKEMdLgIj9ZWYHjv1waIJK8Td7yNX00+XXjmWulorjFw5tzW8fIg3dsDCURT3UlroPp/tlbp4LB8FGPI5TlexQrTM6SrvPobO7xkYJJq3ShkiL50oGYxHKwW1d+Yu+0y4E7GY70ph0vI1sJ+RX1Vm9c4N9oj8we1SHeXLXfMkcr2ZS3j57uxa8Bdm/ZZXRLnbQL5vK/HOyLxwoj/T/4uPoQUg+FQ5ZSU+SqG/Ykk5/PRmXuEaYpMBAxx2yM57iYb99KIvbmCIDgolAAa+Ev1fuL4Q/Js99XgQ+2BjqCgNuHnQ+LAefsYBP84vBCZyyvQYGZd9Lxq96N1ATynxR09DqWxwlIX7PAM0em0YFe1gE84rkORXct6edwq39JPOT9dZrXUERa9cP89K3hVI85axwIMnLWFTlWVRLrxokn5vRrx0VIdcbmuDVdFzmeGb6Ox594KSE2+6y/0BrKaA9/xXXh/uPuZ2AZHUi8WGY+/QGedrZc/B/Mtj2hEt7Xa2fxS0J06KOL4A2V+vjy49/LnKVDCB09QBuJmXCNzwLkXFVGK/j59Sjz1OIIhxVRkSU4KChe/1bv0KOKAZqiX2vSCO77Lfw97sk7dG8Dzh07JiU0fcEFt7o/mFkAuECkdxGFpjmvA8ByvCX+YY3T5tKgIKVlTfXNaShMxIzVnqWoVu/yluam7jONTeVbi3Ho/qcecgnn0oDpWlLI3IHcouSs/Rscf09rCUl5Sv4GN39k3fQpdyPZrHt4MYkcdGoRFkmc/EGn+rVZiyc0F2d5SSJ2n/9GosfLjt4we2gz/KHhFu/yLDTGvTgj7lCo4IWKmSBBVJiRM90n6TYcwZQsDmc9SOtelGZWLH7pxmwd/fvkrAb17KmTiaKweOyLbgXbeKHVZNUzAWcy5kPJG1npBpnAqho7tYUBGCCXl51UqB/bOE1P3JqCwhH2JTbk3EDAQSbEDzCHpP+WLTmyfHJILGmVl2UvbXvIcEsCtHFfAe0L0qXy3zMKETzJZdG37sx6ArfP15ID9rSyhdDVii1Yzfhykxs6GQT+CqW6KdYOUXhYkwEffHBXGvR+aJ1ksxPfI53h5BJcvQOu8y2j2GNE/l3/sB7sAPdBhBYxns+P9B7QInrQsdIfwY8M6BVeEH90lTlX1c35cOEI5NAEBS0Q0oNl48Hrzh3d5Ee+v4ky0xi/o88MJJpkPZrjRgKKgD2B+lKpdYrbla9BJuQuGDBlLipgktOaZVfrwKlfPrMpVvdlctz3Ymk6ZS7vtPKOj6rB1q6LWm0lmaIwef0ljpqWTIekoMYq7B88KUU1CTHKNSDj0jWk8Dvf8YPAjf033/lTNKOeu8tZLopcKX5vljVBxmsq9gKx+T4kL9peVztXs/n4nR06+aCauV4AkoDlUZk5oA2tDx0CSkfJhC6eCKYLbFQpcmGC57P7wyh/ue1H/Gk6dOdE1qwK0E+/kzJ67q8cMv9j3ueJddQS6x9Vqh64gkowQK45V0Z70OkDNmRzTaAm3HLGKeJN74ykftCGppyKIF9NA+BX9g5l59E7PqCRKtiGOJ7Mz502EXVFS39/3c4iTyIigays0hUFe0qlbcBvzme0JrUZaU5Rx29B708vUtuSaOOrR0awp6cvC8m9CUHwXhKE4Hekc477HqblvWqbuz2aAyWLFSlJeavsgRoF6rgEkt4Grq8d8IkL4DMWESCBfIpYGTBtg+BW1qV7XowVmJ6RPPxoDBgunnVZDoNapgz+YOsKH+sYoZBYkhzGnHklChCAsTumGBKnkvi0kn/WtoYlB3vg9BLjeRuqYcXEAxHTifvXViTIaPEwFhykTXroemYo3qsDLfnfkmWHEWnvw3DTVzucImNit8BlU8aFeTel2vqK/hw9P+OJ//rcRAWUclFePCBmjqfCT4Xb7hDXB5rwsvr5eLUjNGTy8CoP7qkiRjsYJYxX7Dg+edLwx4dyiVw1ZiBWJ/6uMz0cWW9ngQ33TOjiEMBmSpFk7lzVflA3lCpfX2BVFMf4pCUvaE+PSRbP/cPMhchl1rVuN3zBjHvKaxPMLoAuYpo16RTmlXEHCISwysR4ZWEUfEnzKwWa+Ut+nxtgOuDoYChxAyXvcuzZwO8URNES5JZbzaP6YDQiZRZMBcoCbVX/ncKdpkaw0ottkZtfwIUk7ZNZpm/0KsKycwrAd70eFDKNHu5gH99YajfLxbPgGao/FEn0zqDZ+ciI4gdZpQKkrN+zyNzi3rZtcBrUFj8MwvAzVgnUpsLYwL8HlRY9dpa2xIddh6r12DmUyTC0giNhtRye+rYhMFImc6qrl8eoNYgu/NUqvZGjB/aH+yW8GGyL2JgNPJ3KRozKRyF/r9coQpFhzHEppCOA30dG2DVDG8qqSuzTfbzRVD5v4ptkUQQY4EqiRSf6chEMA+otCHlH9ny+Eqv0leLDkb4I7EaPMbt/HWoYAaI61fR2td5tM/PvAHP89HDcpS3TW/xsvlfoZGNTnCiKIVGft4wqugQ6WWPRwaP3ySq7y6CS68ZLQsRejxhc02T2q/QyBfvX36gc/prbzsvjFYDuMx7zR8e+HrBDlyjs6H0qXiNiAc8sTN1EcH+UXCTn3IONcIHNLj+5CKfjCdB1VUqaLgsXUjp0oT5Shf8IEe6d8N0gHyqfEhIvnntSih5nLIWQSfy7Zqiwxzk3QlDv/YJlwNWFE7yXOhTBjlX5g2WA/78xiPohjzWTq7+preTvY/vBxhKUc+D+9jqMLvwGp4R5CMZTQsLMGt5oBRaOcusIZR1LEhTG5UXBXbl88egYGQ2EA182cQYtsaJt37siCUNtuooP/mPYgAjyeCo/QEpeETK9/e+lYaS1uZlTuYWZGXwOeDSjirTOIR485C+vl5mKO0hBXdHWz9eEGHbdex6temYwBg2tGKCaVUvdZzk+z6iEkbRnXOu8Bg9cd5pr5uJHbtoK4Sfaxi9HMAyiZQAUsq0masrQRKkiNFEiDWvll/5nlK3Jr7ymb+msWSA+vChm61qHvI7n1WRbGjk77embx8+3u+hQS89v/2zwRUvJ0BobVy4P7DApNPsvFg5Yw4cQYqDTnB6xhPp7ZychqLsc0A+/b55IMVzNZmJGUrF9F4VEN3EkfnzTrjMKTDIXTvlR7qgsifodIiKiqtMKeqYNSYte6URbH/mtUEfk7iquSzX+82mJ372X0OYvL8Reb50RfKZFWriZx5F6F2QpJVwwVxunoMXwS11oXotwdz9xPGgHqY2HWUqT6yyNioCAeLbYS5MCwjRMjh/yr1tqPuRqRMqsnObhZlee72h9j1tpzWyG/NQpOHWdOQc44yf8sQ7fFGEl6dZmBFpIQgCKxJ0FXqciD+eAtoyE/CIH8TfR88E37yqXRXO0N2hbwdI62jlwnn2s02wsQxxWEzKtxsNnzKDwRTjfQMuMDwOLFkUwiu6oi3Ri8HYSi+gj5bXSXc+UUbUDC4Rd0kiEcwWf3QFX2crveuadASjGUexjcCdDt3vpN5JLw1n81jNU+R1u8Ag0nDwZMJ1OWhTriEbTqaHwZudf1ZPbb9qFT3ZpNbX5edxFPlWGwnZUaSUC6c0UtOIwBuhhGEEBQIRT0v7VnYl+oQ9WQ+QSw7QwRhhnmqpq/yEPeyi1uy08p5BpvJpslETACORxZwhrWlW90gNM3QcHcC6eVsvaiRB8zuj1NQB6+wfasLznIMxKGIXdx8hQsaZ5KBp8DVuBtXbHO0ziy6FWbhXGci1fKMtGQyORngr79zaPFbBZ51OoXHuzjN5wNgiyaRP8/YtlnMfFH/8CSVhryBOFzDfETpgP0nvHlNUrHQDb5iR6z2IS/yzyODJzpXLigAAAA",
  },
]

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
        const { title, author, img } = book
        return (
          <div className='col-sm'>
            {/* First Way */}
            {/* <Book title={title} author={author} img={img} /> */}
            {/* Second Way */}
            <Book key={book.key} book={book} />
          </div>
        )
      })}
    </div>
  )
}

const Book = (props) => {
  /* First Way */
  // const { title, text, img, children } = props;

  /* Second Way */
  const { title, text, img, children } = props.book
  return (
    <div className='card' style={{ width: "18rem" }}>
      <img src={img} className='card-img-top' />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>
          {text} {children}
        </p>
        <a href='#' className='btn btn-primary'>
          View
        </a>
      </div>
    </div>
  )
}

export default App

import React from "react"

const Book = (props) => {
  /* First & Third Way */
  const { title, author, img, children } = props

  /* Second Way */
  // const { title, author, img, children } = props.book

  // attribute, eventHandller
  // onClick, onMouseOver

  const clickHandler = (e) => {
    console.log(e)
    alert("hello world")
  }

  const complexExample = (author) => {
    console.log(author)
  }
  return (
    <div
      className='card'
      style={{ width: "18rem" }}
      onMouseOver={() => {
        // console.log(title)
      }}
    >
      <img src={img} className='card-img-top' />
      <div className='card-body'>
        <h5 className='card-title' onClick={() => console.log(title)}>
          {title}
        </h5>
        <p className='card-text'>
          {author} {children}
        </p>
        <button
          type='button'
          className='btn btn-primary'
          onClick={clickHandler}
        >
          View
        </button>
        <button
          type='button'
          className='btn btn-primary'
          onClick={() => complexExample(author)}
        >
          View (Complex Example)
        </button>
      </div>
    </div>
  )
}

export default Book

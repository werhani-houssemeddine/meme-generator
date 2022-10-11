import memeData from './data'
function Form() {

  const submitHandler = (e) => {
    e.preventDefault();

    //for make sure that the button works fine
    //console.log('Clicked');

    function getMemeImage() {
      const memesArray = memeData.data.memes;
      const randomNumber = Math.floor(Math.random() * memesArray.length);
      const { url } = memesArray[randomNumber];
    }

    getMemeImage();
  }

  return (
    <main>
      <form className="meme-form" onSubmit={submitHandler}>
        <input type="text" placeholder="top text" className="form-input" />
        <input type="text" placeholder="bottom text" className="form-input" />
        <button className="form-button">Get a new meme image 🖼</button>
      </form>
    </main>
  );
}

export default Form;

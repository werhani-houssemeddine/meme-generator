import memeData from './data';
import { useState } from 'react';

function Form() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

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
  };

  function handleChange(event) {
    const {name, value} = event.target;
    
    setMeme((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <main>
      <form className="meme-form" onSubmit={submitHandler}>
        <input
          type="text"
          name="topText"
          placeholder="top text"
          className="form-input"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          name="bottomText"
          placeholder="bottom text"
          className="form-input"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form-button">Get a new meme image 🖼</button>
      </form>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Form;

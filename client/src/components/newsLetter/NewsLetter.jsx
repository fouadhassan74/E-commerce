import React from "react";
import "../newsLetter/NewsLetter.scss";
import { Send } from "@mui/icons-material";
function NewsLetter() {
  return (
    <div className='newsLetterContainer'>
      <div className='title'>News Letter</div>
      <p>Get timely updates from your favorite products.</p>
      <div className='inputContainer'>
        <input type='text' placeholder='Your Email' />
        <button>
          <Send />
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;

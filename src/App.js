import React from "react";
import PropTypes from "prop-types";

const favFood = [
  {id:11,
  name: 'Pizza',
  image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fw.namu.la%2Fs%2F0290152abd136b91cbd6b576c2be08df841f752c674b732a54b2cbe23e7dbaf389511f0a5688b190d2e83339812271b5324205469c314aedd68a1b52f4f1ddd347640283273c75c6e754bfc4f4cda82408348defed9bead8869f6b97303d98ae668119ef77c5d58355da1640a24344bb&imgrefurl=https%3A%2F%2Fnamu.wiki%2Fw%2F%25ED%2594%25BC%25EC%259E%2590&tbnid=seQ1Bf2N2c6hoM&vet=12ahUKEwjdmqfm1ZjvAhUxEqYKHagqDa0QMygCegUIARDWAQ..i&docid=P_CrebuGKrkEtM&w=750&h=610&q=%ED%94%BC%EC%9E%90&ved=2ahUKEwjdmqfm1ZjvAhUxEqYKHagqDa0QMygCegUIARDWAQ",
  rating:5
  },
  {id:22,
  name: 'Kimchi',
  image:"https://www.google.com/imgres?imgurl=http%3A%2F%2Fgdimg1.gmarket.co.kr%2Fgoods_image2%2Fsmall_moreimg%2F150%2F528%2F1505282345%2F1505282345_01.jpg%3Fver%3D1578876076&imgrefurl=http%3A%2F%2Fitem.gmarket.co.kr%2FItem%3Fgoodscode%3D1505282345&tbnid=3ls0vfj6KrQ5qM&vet=12ahUKEwi7naez1pjvAhVHXJQKHf81Dv0QMygCegUIARDkAQ..i&docid=UvJWdTS7zGX9WM&w=600&h=600&q=ralcl&ved=2ahUKEwi7naez1pjvAhVHXJQKHf81Dv0QMygCegUIARDkAQ",
  rating:4.5
  },
  {id:33,
  name: '밥버거',
  image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Frecipe1.ezmember.co.kr%2Fcache%2Frecipe%2F2018%2F05%2F25%2Ff29b0efb9b695c568d95f8cd86c04b4b1.jpg&imgrefurl=https%3A%2F%2Fwww.10000recipe.com%2Frecipe%2F6889576&tbnid=L1AzTghvImM3EM&vet=12ahUKEwiL-P7R1pjvAhUBUJQKHddXBJoQMygJegUIARDkAQ..i&docid=3acIXGGl0spnlM&w=1125&h=1500&q=%EB%B0%A5%EB%B2%84%EA%B1%B0&ved=2ahUKEwiL-P7R1pjvAhUBUJQKHddXBJoQMygJegUIARDkAQ",
  rating:4
  }
]

function Food({name, img, rating}){
  return <div>
    <h3> I love {name}</h3>
    <h4>{rating}/5</h4>
    <img src={img} alt={name}/>
  </div>
}

Food.propTypes={
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() { //App이라는 component는 HTML을 반환하는 함수.
  return (<div>
    {favFood.map(food=>(
    <Food key={food.id} 
          name={food.name} 
          img={food.image} 
          rating={food.rating}/>))}
    </div>
    );
}

export default App;

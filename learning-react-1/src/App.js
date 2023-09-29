import "./App.css";
import ReactRoundedImage from "react-rounded-image";
import CatPhoto from "./assets/cat.jpg";

function Home() {
  return (
    <div>
      <center>
        <h1>Senthilnathan</h1>
      </center>
      <center>
        <p>This is a description</p>
      </center>
      <center>
        <ReactRoundedImage
          image={CatPhoto}
          roundedColor="#6499E9"
          imageWidth="150"
          imageHeight="150"
          roundedSize="13"
          borderRadius="70"
        />
      </center>
    </div>
  );
}

export default Home;

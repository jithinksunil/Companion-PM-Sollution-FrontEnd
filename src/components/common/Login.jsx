import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postApi } from "../../api/axiosCalls";
import Cookies from "js-cookie";
import { userShema } from "../../validations/UserValidation";

function Login({ formName, setLoggedIn, apiCall, tokenName, responseRoute }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formData = { email, password };
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!emailFormat.test(email)) {
      alert("Please enter a valid email");
    }
    if (!passwordFormat.test(password)) {
      alert("Please enter a alpha numeric password of lenght 6");
    }
    const isValid = await userShema.isValid(formData);
    if (isValid && emailFormat.test(email) && passwordFormat.test(password)) {
      postApi(apiCall, formData, (response) => {
        if (response.data.verified) {
          Cookies.set(tokenName, response.data.token, { expires: 7000 });
          navigate(responseRoute);
          setLoggedIn(true);

        }
        alert(response.data.message);
      });
    }
  };

  return (
    <div className="bg-white rounded-lg px-10 py-10 shadow-2xl text-center">
      <div className="flex justify-center ">
        <img
          className="w-32 py-2"
          src="https://res.cloudinary.com/df8w69xon/image/upload/v1678773094/Companion%20web%20application/companion/companion_vn1uma.png"
          alt=""
        />
      </div>
      <p>{formName}</p>
      <form onSubmit={handleLogin}>
        <input
          className="block my-2 rounded-xl h-9 border-gray-500"
          required
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="block my-2 rounded-xl h-9 border-gray-500"
          required
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="flex justify-center py-2">
          <input
            type="submit"
            value="Login"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
          />
        </div>
      </form>
    </div>
  );
}
export default Login;

const Login = () => {
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Log In and Manage your 
          <span className="text-black"> Patients</span>
        </h1>  
      </div>
      <div>
        <form action="">
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Email
            </label>
            <input 
              type="email"
              placeholder="Registration email" 
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
          </div>

          <div className="my-5">
            <label
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Password
            </label>
            <input 
              type="password"
              placeholder="Your password" 
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
          </div>

          <input 
            type="submit" 
            value="Log in"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase 
                       font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"  
          />
        </form>
      </div>      
    </>
  );
}

export default Login
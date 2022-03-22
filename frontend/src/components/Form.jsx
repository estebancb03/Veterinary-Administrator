const Form = () => {
  return (
    <>
        <p className="text-lg text-center mb-10">
            Add your patients and { '' }
            <span className="text-indigo-600 font-bold">manage them</span>
        </p>
        <form
            className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md"
        >
            <div className="mb-5">
                <label 
                    htmlFor="pet"
                    className="text-gray-700 uppercase font-bold"
                >Pet's name</label>
                <input 
                    id="pet"
                    type="text"
                    placeholder="Pet's name"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>
            <div className="mb-5">
                <label 
                    htmlFor="owner"
                    className="text-gray-700 uppercase font-bold"
                >Owner's name</label>
                <input 
                    id="owner"
                    type="text"
                    placeholder="Owner's name"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>
            <div className="mb-5">
                <label 
                    htmlFor="email"
                    className="text-gray-700 uppercase font-bold"
                >Owner's email</label>
                <input 
                    id="email"
                    type="text"
                    placeholder="Owner's email"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>
            <div className="mb-5">
                <label 
                    htmlFor="date"
                    className="text-gray-700 uppercase font-bold"
                >Date</label>
                <input 
                    id="date"
                    type="date"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>
            <div className="mb-5">
                <label 
                    htmlFor="symptom"
                    className="text-gray-700 uppercase font-bold"
                >Symptom</label>
                <textarea 
                    id="email"
                    placeholder="Describe the symptom"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>
            <input 
                type="submit"
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                value="Add patient" 
            />
        </form>
    </>
  );
}

export default Form
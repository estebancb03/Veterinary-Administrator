
import { useEffect, useState } from "react";
import Alert from '../components/Alert';
import AdminNav from "../components/AdminNav";
import useAuthentication from '../hooks/useAuthentication';

const EditProfile = () => {
    const [alert, setAlert] = useState({});
    const [profile, setProfile] = useState({});
    const { authentication, updateProfile } = useAuthentication();
    useEffect(() => {
        setProfile(authentication);
    }, [authentication]);
    const handleSubmit = async e => {
        e.preventDefault();
        const { name, email } = profile;
        if([name, email].includes('')) {
            setAlert({ message: 'Name and email are required', error: true });
            return;
        }
        const result = await updateProfile(profile);
        setAlert(result);
    }
    const { message } = alert;
    return (
        <>
            <AdminNav />
            <h2 className="font-black text-3xl text-center mt-10">Edit profile</h2>
            <p className="text-xl mt-5 mb-10 text-center">Modify your { '' } 
                <span className="text-indigo-600 font-bold">information here</span>
            </p>
            <div className="flex justify-center">
                <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
                    { message && <Alert alert={ alert } /> }
                    <form onSubmit={ handleSubmit }>
                        <div className="my-3">
                            <label className="uppercase font-bold text-gray-600">Name</label>
                            <input 
                                type="text" 
                                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                                name="name"
                                value={ profile.name || '' }
                                onChange={ e => setProfile({
                                    ...profile,
                                    [e.target.name]: e.target.value
                                }) }
                            />
                        </div>
                        <div className="my-3">
                            <label className="uppercase font-bold text-gray-600">Website</label>
                            <input 
                                type="text" 
                                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                                name="web"
                                value={ profile.web || ''  }
                                onChange={ e => setProfile({
                                    ...profile,
                                    [e.target.name]: e.target.value
                                }) }
                            />
                        </div>
                        <div className="my-3">
                            <label className="uppercase font-bold text-gray-600">Phone</label>
                            <input 
                                type="text" 
                                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                                name="phone"
                                value={ profile.phone || '' }
                                onChange={ e => setProfile({
                                    ...profile,
                                    [e.target.name]: e.target.value
                                }) }
                            />
                        </div>
                        <div className="my-3">
                            <label className="uppercase font-bold text-gray-600">Email</label>
                            <input 
                                type="email" 
                                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                                name="email"
                                value={ profile.email || '' }
                                onChange={ e => setProfile({
                                    ...profile,
                                    [e.target.name]: e.target.value
                                }) }
                            />
                        </div>
                        <input 
                            type="submit" 
                            value="Save changes"
                            className="bg-indigo-700 px-10 py-3 font-bold text-white rounded-lg uppercase w-full mt-5 hover:cursor-pointer"
                        />
                    </form>
                </div>
            </div>
        </>
    );
}

export default EditProfile;
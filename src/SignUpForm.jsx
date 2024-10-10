// /* eslint-disable react/prop-types */


// const SignUpForm = ({ onChangeHandler }) => {
//   const fieldTypes = ['text', 'text', 'email', 'password', 'number', 'select'];
//   const fieldLabels = ['First Name', 'Last Name', 'Email', 'Password', 'Age', 'Gender'];
//   const fieldPlaceholders = [
//     'Enter your first name',
//     'Enter your last name',
//     'Enter your email',
//     'Enter your password',
//     'Enter your age',
//     null 
//   ];

//   const fields = fieldTypes.map((type, index) => ({
//     label: fieldLabels[index],
//     type,
//     name: fieldLabels[index].toLowerCase().replace(' ', ''),
//     placeholder: fieldPlaceholders[index],
//     options: type === 'select' ? ['Male', 'Female'] : undefined,
//     onChange: onChangeHandler 
//   }));

//   return (
//     <div >
//     <div className="bg-red-400 max-w-md mx-auto mt-10 p-5 border-2 border-green-500 rounded-lg shadow-lg">
//       <h1 className="text-2xl font-bold text-center mb-5">Sign Up</h1>
//       <form>
//         {fields.map((field, index) => (
//           <div key={index} className="mb-4">
//             <label className="block mb-1 text-gray-700 text-start" value ={field.name}>
//               {field.label}
//             </label>
//             {field.type === 'select' ? (
//               <select
//                 name={field.name}
//                 className="border border-gray-300 rounded-lg p-2 w-full"
//                 onChange={field.onChange}
//               >
//                 <option value="" disabled>Select your gender</option>
//                 {field.options.map((option, idx) => (
//                   <option key={idx} value={option}>{option}</option>
//                 ))}
//               </select>
//             ) : (
//               <input
//                 type={field.type}
//                 name={field.name}
//                 placeholder={field.placeholder}
//                 className="border border-gray-300 rounded-lg p-2 w-full"
//                 onChange={field.onChange}
//                 required
//               />
//             )}
//           </div>
//         ))}
//         <button type="submit" className="bg-green-500 text-white font-bold py-2 rounded-lg w-full">
//           Sign Up
//         </button>
//       </form>
//     </div>
//   </div>
//   );
// };

// export default SignUpForm;
//--------------------------------------------------------------------------------------

import { useState } from 'react';

function SignUpForm() {
  const [fields, setFields] = useState({
    fname: '',
    lname: '',
    pno: '',
    address: '',
    gender: '',
    email: '',
    password: '',
    confirm: '',
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFields((previous) => {
      return { ...previous, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-600 p-6">
      
      <div className="bg-slate-200 rounded-lg shadow-lg w-full max-w-2xl p-10 my-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-600">Sign Up</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="flex gap-4">
            <div className="w-1/2">
              <h3 className="text-sm font-medium">First Name</h3>
              <input type="text" name="fname" placeholder="First Name" onChange={changeHandler} className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"/>
            </div>
            <div className="w-1/2">
              <h3 className="text-sm font-medium">Last Name</h3>
              <input type="text" name="lname" placeholder="Last Name" onChange={changeHandler} className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"/>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium">Phone Number</h3>
            <input type="text" name="pno" placeholder="Phone Number" onChange={changeHandler} className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"/>
          </div>

          <div>
            <h3 className="text-sm font-medium">Address</h3>
            <input type="text" name="address" placeholder="Address" onChange={changeHandler} className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"/>
          </div>

          <div>
            <h3 className="text-sm font-medium">Gender</h3>
            <select
              name="gender" onChange={changeHandler} className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="">Select your gender</option>
              <option>Female</option>
              <option>Male</option>
            </select>
          </div>

          <div>
            <h3 className="text-sm font-medium">Email</h3>
            <input type="email" name="email" placeholder="Email" onChange={changeHandler} className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"/>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <h3 className="text-sm font-medium">Password</h3>
              <input
                type="password" name="password" placeholder="Password" onChange={changeHandler} className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"/>
            </div>
            <div className="w-1/2">
              <h3 className="text-sm font-medium">Confirm Password</h3>
              <input
                type="password" name="confirm" placeholder="Confirm Password" onChange={changeHandler} className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"/>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit" className="bg-purple-600 text-white font-bold py-2 px-10 mt-2 rounded-lg hover:bg-purple-700 transition duration-200" >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;

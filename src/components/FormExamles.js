// import { useRef } from "react"

// export const Form = () => {
//     const inputFirstName = useRef<HTMLInputElement>(null)
//     const inputLastName = useRef<HTMLInputElement>(null)
//     const inputAge = useRef<HTMLInputElement>(null)

//     interface FormDataType {firstName:string, lastName: string, age: string}
//     const formData: FormDataType = {firstName: "", lastName: "", age: ""}

//     const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         formData.firstName = inputFirstName?.current?.value||""
//         formData.lastName = inputLastName?.current?.value||""
//         formData.age = inputAge?.current?.value||""
//         console.log(formData)
// 	//Form submission happens here
//     }

//     return(
//         <form onSubmit={onSubmitHandler}>
//             <div><label htmlFor="first_name">First Name</label></div>
//             <div><input id="first_name" ref={inputFirstName} type="text"/></div>
//             <div><label htmlFor="last_name">Last Name</label></div>
//             <div><input id="last_name" ref={inputLastName} type="text"/></div>
//             <div><label htmlFor="age">Age</label></div>
//             <div><input id="age" ref={inputAge} type="number"/></div>
//             <input type="submit"/>
//         </form>
//     )
// }

// import { useState } from "react"

// export const Form = () => {
//     const formData = {firstName: "", lastName: "", age: ""}
//     const [responseBody, setResponseBody] = useState(formData)

//     const inputChangeHandler = (event) => {
//         const {name, value} = event.target
//         setResponseBody({...responseBody, [name]: value})
//     }
//     const onSubmitHandler = (event) => {
//         event.preventDefault()
//         console.log(responseBody)
// 	//Form submission happens here
//     }

//     return(
//         <form onSubmit={onSubmitHandler}>
//             <div><label htmlFor="firstName">First Name</label></div>
//             <div><input id="firstName" name="firstName" onChange={(e)=>inputChangeHandler(e)} type="text"/></div>
//             <div><label htmlFor="lastName">Last Name</label></div>
//             <div><input id="lastName" name="lastName" onChange={(e)=>inputChangeHandler(e)} type="text"/></div>
//             <div><label htmlFor="age">Age</label></div>
//             <div><input id="age" name="age" onChange={(e)=>inputChangeHandler(e)} type="number"/></div>
//             <input type="submit"/>
//         </form>
//     )
// }

export const Form = () => {
  const responseBody = {};

  const inputChangeHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, property) => (responseBody[property] = value));
    console.log(JSON.stringify(responseBody));
    //Form submission happens here
  };
  return (
    <form onSubmit={inputChangeHandler}>
      <div>
        <label htmlFor="firstName">First Name</label>
      </div>
      <div>
        <input id="firstName" name="firstName" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
      </div>
      <div>
        <input id="lastName" name="lastName" type="text" />
      </div>
      <div>
        <label htmlFor="age">Age</label>
      </div>
      <div>
        <input id="age" name="age" type="number" />
      </div>
      <input type="submit" />
    </form>
  );
};

// const responseBody = {};

//   let job = {
//     jobTitle: "JavaScript Developer",
//     location: "USA",
//   };

//   const inputChangeHandler = (event) => {
//     event.preventDefault();

//     //const obj = Object.assign({}, arraynew)
//     const formData = new FormData(event.currentTarget);
//     //formData.append('sex', 'Male');

//     formData.forEach((value, property) => (responseBody[property] = value));
//     console.log(JSON.stringify(responseBody));

//     let newhoonmain = { ...responseBody, ...job };
//     console.log("This is the New Object :", newhoonmain);
//console.log(responseBody);




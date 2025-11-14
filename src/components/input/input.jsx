import { useState } from "react";
import "../input/input.css";

function Input() {
    const [password, setPassword] = useState("");
    const [messageNumber, setMessageNumber] = useState("");
    const [messageLength, setMessageLength] = useState("");
    const [colorNumber, setColorNumber] = useState("");
    const [colorLength, setColorLength] = useState("");

    const Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let has_number = false;

    const handleCheck = () => {

        for (let item in Numbers) {
            if (password.includes(Numbers[item])) {
                has_number = true;
                break;
            }
        }


        if (has_number) {
            setMessageNumber("There is a number in the input.");
            setColorNumber("green");
        } else {
            setMessageNumber("The number in the input does not exist.");
            setColorNumber("red");
        }


        if (password.length === 0) {
            setMessageLength("please enter your password");
            setColorLength("orange");
        } else if (password.length < 8) {
            setMessageLength("this password is too short at least 8 characters required !!");
            setColorLength("red");
        } else {
            setMessageLength("has 8 characters");
            setColorLength("green");
        }
    };

    return (
        <section className="py-5 mt-5">
            <div className="container">
                <div className="row">
                    <div>
                        <div className="py-5">
                            <p id="tagp">
                                Please enter your password below to check its quality!
                            </p>
                        </div>

                        <div className="input-container">
                            <input
                                type="text"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className="button" onClick={handleCheck}>
                                Check
                            </button>
                        </div>


                        {messageNumber && (
                            <p
                                className="message py-2 mt-4"
                                style={{ color: colorNumber, marginTop: "10px" }}
                            >
                                {messageNumber}
                            </p>
                        )}


                        {messageLength && (
                            <p
                                className="message py-2"
                                style={{ color: colorLength, marginTop: "5px" }}
                            >
                                {messageLength}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Input;






























// import { useState } from "react";
// import "../input/input.css";

// function Input() {
//     const [number, setNumber] = useState("");
//     const [password, setPassword] = useState("");
//     const [message, setMessage] = useState("");
//     const [color, setColor] = useState("");
//     const Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
//     let has_number = false

//     const handleCheck = () => {
//         for (let item in Numbers) {
//             if (password.includes(item)) {
//                 has_number = true
//                 break
//             }
//         }

//         if (has_number) {
//             setNumber("There is a number in the input.")
//             setColor("green")
//         } else {
//             setNumber("The number in the input does not exist.")
//             setColor("red")
//         }


//         if (password.length === 0) {
//             setMessage("please enter your password");
//             setColor("orange");
//         } else if (password.length < 8) {
//             setMessage("this password is too short at least 8 characters required !!");
//             setColor("red");
//         } else {
//             setMessage("has 8 characters");
//             setColor("green");
//         }
//     };

//     return (
//         <section className="py-5 mt-5">
//             <div className="container">
//                 <div className="row">
//                     <div>
//                         <div className="py-5">
//                             <p id="tagp">
//                                 please enter your password below to check It's quality !
//                             </p>
//                         </div>

//                         <div className="input-container">
//                             <input
//                                 type="text"
//                                 placeholder="Enter Password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                             <button className="button" onClick={handleCheck}>
//                                 Check
//                             </button>
//                         </div>

//                         {message && (
//                             <p className="message py-3 mt-5" style={{ color: color, marginTop: "10px" }}>{message}</p>
//                         )}

//                         {number && (
//                             <p className="number py-3 mt-5" style={{ color: color, marginTop: "10px" }}>{number}</p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Input;

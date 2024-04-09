import React, { useState } from "react";
import Header from "../Components/Header";

function Javascript() {
  const [topic, setTopic] = useState("Overview");
  return (
    <div className="w-full flex flex-col gap-2">
      <Header></Header>
      <div className="flex w-full justify-between">
        <div className="w-[24%] flex flex-col bg-gray-700 text-white p-4 gap-4 text-xl">
          <h1 className="font-bold underline text-2xl">JS Tutorial</h1>
          <label className="cursor-pointer">Overview</label>
          <label className="cursor-pointer">Introduction</label>
          <label className="cursor-pointer">Basic</label>
          <label
            style={{color: topic == "Variables" ? "aqua" : "white", fontWeight: topic=="Variables" ? 700 : 400}}
            onClick={() => setTopic("Variables")}
            className="cursor-pointer"
          >
            Variables
          </label>
          <label style={{color: topic == "Data Types" ? "aqua" : "white", fontWeight: topic=="Data Types" ? 700 : 400}}
            onClick={() => setTopic("Data Types")}
            className="cursor-pointer"
          >
            Data Types
          </label>
          <label className="cursor-pointer">
            Interaction: alert, prompt & confirm
          </label>
          <label className="cursor-pointer">Type Conversion</label>
          <label className="cursor-pointer">Basic Operators</label>
          <label className="cursor-pointer">Comparisons Operators</label>
          <label className="cursor-pointer">Comparisons Operators</label>
          <label className="cursor-pointer">Condtional Statements</label>
          <label className="cursor-pointer">Logical Operators</label>
          <label className="cursor-pointer">Loops</label>
          <label className="cursor-pointer">"switch" Statements</label>
          <label className="cursor-pointer">Functions</label>
          <label className="cursor-pointer">Numbers</label>
          <label className="cursor-pointer">Strings</label>
          <label className="cursor-pointer">Arrays</label>
          <label className="cursor-pointer">Objects</label>
          <label className="cursor-pointer">Date & Time</label>
          <label className="cursor-pointer">Destructuring assignment</label>
          <label className="cursor-pointer">JSON</label>
          <label className="cursor-pointer">
            Scheduling: setTimeout & setInterval
          </label>
        </div>
        <div className="w-[75%] flex flex-col p-4">
          {/* ------------------------------------------------------Variables------------------------------------------------- */}
          {topic == "Variables" && (
            <div className="flex flex-col gap-4 ">
              <h1 className="text-3xl font-bold text-center">Variables</h1>
              <p>
                Variables are used to store this information. A variable is a
                “named storage” for data.
              </p>
              <p>
                In JavaScript, variables are used to store and manage data. They
                are created using the var, let, or const keyword.
              </p>
              <div className="flex flex-col ml-8 gap-8">
                <div>
                  <label>
                    <span className="font-bold text-lg">1. var: </span>Declares
                    a variable. It has a function-scoped or globally-scoped
                    behavior.
                  </label>
                  <div className="bg-gray-100 p-4 font-semibold">
                    var x = 10;
                  </div>
                  <label>
                    Example: In this example, we will declare variables using
                    var.
                  </label>
                </div>
                <div>
                  <label>
                    <span className="font-bold text-lg">2. let: </span>
                    Introduces block-scoped variables. It’s commonly used for
                    variables that may change their value.
                  </label>
                  <div className="bg-gray-100 p-4 font-semibold">
                    let y = "Hello";
                  </div>
                  <label>
                    Example: In this example, we will declare variables using
                    let.
                  </label>
                </div>
                <div>
                  <label>
                    <span className="font-bold text-lg">3. const:: </span>
                    Declares variables that cannot be reassigned. It’s
                    block-scoped as well.
                  </label>
                  <div className="bg-gray-100 p-4 font-semibold">
                    const PI = 3.14;
                  </div>
                  <label>
                    Example: In this example, we will declare variables using
                    const.
                  </label>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-center mt-6">
                JavaScript Identifiers
              </h1>
              <p>
                All <span className="font-bold"> JavaScript variables</span>{" "}
                must be identified with unique names. These unique names are
                called <span className="font-bold">identifiers.</span>
              </p>
              <p>
                The general rules for constructing names for variables (unique
                identifiers) are:
              </p>
              <ul className="w-full list-disc ml-10">
                <li>
                  Names can contain letters, digits, underscores, and dollar
                  signs.
                </li>
                <li>Names must begin with a letter.</li>
                <li>
                  Names can also begin with $ and _ (but we will not use it in
                  this tutorial).
                </li>
                <li>
                  Names are case sensitive (y and Y are different variables).
                </li>
                <li>
                  Reserved words (like JavaScript keywords) cannot be used as
                  names.
                </li>
              </ul>
            </div>
          )}
          {/* ------------------------------------------Data Type----------------------------------------------------- */}
          {topic == "Data Types" && (
            <div className="flex flex-col gap-4 overflow-hidden">
              <h1 className="text-3xl font-bold text-center">Data Types</h1>
              <p>
                A value in JavaScript is always of a certain type. For example,
                a string or a number. The latest ECMAScript standard defines eight data types Out of which seven data types are Primitive(predefined) and one complex or Non-Primitive. Here, we’ll cover them in general and in the next
                chapters we’ll talk about each of them in detail.
              </p>
              <h2 className="font-bold text-2xl">Primitive Data Types</h2>
              <label>The predefined data types provided by JavaScript language are known as primitive data types. Primitive data types are also known as in-built data types.</label>
                
              <div className="flex flex-col gap-8 overflow-hidden">
                <div className="w-full flex flex-col gap-2">
                  <label>
                    <span className="font-bold text-lg">1. Number: </span>JavaScript numbers are always stored in double-precision 64-bit binary format IEEE 754. Unlike other programming languages, you don’t need int, float, etc to declare different numeric values.
                  </label>
                  <div className="bg-gray-100 p-4 font-semibold">
                    var x = 10;
                  </div>
                  <label>
                    Example: In this example, we stored a number type value in a variable.
                  </label>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label>
                    <span className="font-bold text-lg">2. BigInt: </span>BigInt is a built-in object in JavaScript that provides a way to represent whole numbers larger than 253-1.</label>
                  <div className="bg-gray-100 p-4 font-semibold">
                  let x = 999999999999999;
                  </div>
                  <label>
                    Example: In this example, we stored a big integer type value in a variable.
                  </label>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label>
                    <span className="font-bold text-lg">3. String: </span>JavaScript Strings are similar to sentences. They are made up of a list of characters, which is essentially just an “array of characters, like “Hello GeeksforGeeks” etc.</label>
                  <div className="bg-gray-100 p-4 font-semibold">
                    let name = "John";
                  </div>
                  <label>
                    Example: In this example, we stored a string type value in a variable.
                  </label>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label>
                    <span className="font-bold text-lg">4. Boolean: </span>Represent a logical entity and can have two values: true or false.</label>
                  <div className="bg-gray-100 p-4 font-semibold">
                    var answer = true;
                  </div>
                  <label>
                    Example: In this example, we stored a boolean type value in a variable.
                  </label>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label>
                    <span className="font-bold text-lg">5. Null: </span>This type has only one value that is null.</label>
                  <div className="bg-gray-100 p-4 font-semibold">
                    let x = null;
                  </div>
                  <label>
                    Example: In this example, we stored a null type value in a variable.
                  </label>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label>
                    <span className="font-bold text-lg">6. Undefined: </span>A variable that has not been assigned a value is undefined.</label>
                  <div className="bg-gray-100 p-4 font-semibold">
                    let x;
                  </div>
                  <label>
                    Example: In this example, we didn't defined any value to a variable.
                    var.
                  </label>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label>
                    <span className="font-bold text-lg">7. Symbol: </span>Symbols return unique identifiers that can be used to add unique property keys to an object that won’t collide with keys of any other code that might add to the object.</label>
                  
                </div>
                
              </div>
              <h2 className="font-bold text-2xl">Non-Primitive Data Types</h2>
              <label>The data types that are derived from primitive data types of the JavaScript language are known as non-primitive data types. It is also known as derived data types or reference data types.</label>
                
              <div className="flex flex-col gap-8 overflow-hidden">
                <div className="w-full flex flex-col gap-2">
                  <label>
                    <span className="font-bold text-lg">1. Object: </span>It is the most important data type and forms the building blocks for modern JavaScript. We will learn about these data types in detail in further articles.</label>
                   <label>The object data type can contain:</label>
                   <ul className="w-full list-disc font-semibold ml-8">
                    <li> An object</li>
                    <li> An array</li>
                    <li> A date</li>
                   </ul>
                </div>
                
              </div>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Javascript;

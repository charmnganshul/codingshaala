import React, { useState } from "react";
import Header from "../Components/Header";

function Javascript() {
  const [topic, setTopic] = useState("Overview");
  return (
    <div className="w-full flex flex-col">
      <Header></Header>
      <div className="flex w-full justify-between">
        <div className="w-[24%] fixed flex flex-col overflow-scroll h-[100vh] bg-gray-700 text-white p-4 gap-4 text-md">
          <h1 className="font-bold underline text-2xl">CSS Tutorial</h1>
          <label
            style={{
              color: topic == "Overview" ? "aqua" : "white",
              fontWeight: topic == "Overview" ? 700 : 400,
            }}
            onClick={() => setTopic("Overview")}
            className="cursor-pointer"
          >
            Overview
          </label>
          <label
            style={{
              color: topic == "Box Model" ? "aqua" : "white",
              fontWeight: topic == "Box Model" ? 700 : 400,
            }}
            onClick={() => setTopic("Box Model")}
            className="cursor-pointer"
          >
            Box Model
          </label>
          <label
            style={{
              color: topic == "Selectors" ? "aqua" : "white",
              fontWeight: topic == "Selectors" ? 700 : 400,
            }}
            onClick={() => setTopic("Selectors")}
            className="cursor-pointer"
          >
            Selectors
          </label>
          <label
            style={{
              color: topic == "HTML Attributes" ? "aqua" : "white",
              fontWeight: topic == "HTML Attributes" ? 700 : 400,
            }}
            onClick={() => setTopic("HTML Attributes")}
            className="cursor-pointer"
          >
            HTML Attributes
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
        <div className="w-[75%] flex flex-col p-4 ml-[24%]">
          {/* ------------------------------------------------------Overview------------------------------------------------- */}
          {topic == "Overview" && (
            <div className="flex flex-col gap-4 overflow-hidden">
              <h1 className="text-3xl font-bold text-center">CSS</h1>
              <p>
                Cascading Style Sheets, fondly referred to as CSS, is a simple
                design language intended to transform the presentation of a Web
                Pages as well as many ostensibly nonweb environments.
              </p>
              <p>
                CSS is a style sheet or presentational language that is used to
                layout, format, and style documents that are written in HTML to
                make them look beautiful. CSS is generally used with HTML to
                change the style of web pages and user interfaces. You can use
                CSS to change the color, backgrounds, borders, paddings,
                margins, fonts, icons, position and various other properties of
                HTML elements in a web document.
              </p>
            </div>
          )}
          {/* ------------------------------------------Box Model----------------------------------------------------- */}
          {topic == "Box Model" && (
            <div className="flex flex-col gap-4 overflow-hidden">
              <h1 className="text-3xl font-bold text-center">CSS Box Model</h1>

              <label>
                All HTML elements can be considered as boxes.<br></br>
                In CSS, the term "box model" is used when talking about design
                and layout.The CSS box model is essentially a box that wraps
                around every HTML element. It consists of: content, padding,
                borders and margins.
              </label>

              <div className="flex justify-center">
                <img src="https://web.dev/static/learn/css/box-model/image/a-diagram-showing-four-m-af72960a9e79a.svg"></img>
              </div>
              <h2 className="font-bold text-2xl">Margin:</h2>
              <label>
                Margins are used to create space around elements, outside of any
                defined borders.<br></br>
                The CSS margin properties are used to create space around
                elements, outside of any defined borders. With CSS, you have
                full control over the margins. There are properties for setting
                the margin for each side of an element (top, right, bottom, and
                left).<br></br>
                CSS has properties for specifying the margin for each side of an
                element:
              </label>

              <ul className="font-bold list-disc">
                <li>1. margin-top</li>
                <li>2. margin-left</li>
                <li>3. margin-bottom</li>
                <li>4. margin-right</li>
              </ul>
              <h2 className="font-bold text-2xl">Padding</h2>
              <label>
                The CSS padding properties are used to generate space around an
                element's content, inside of any defined borders.<br></br>
                With CSS, you have full control over the padding. There are
                properties for setting the padding for each side of an element
                (top, right, bottom, and left).<br></br>
                CSS has properties for specifying the padding for each side of
                an element:
              </label>
              <ul className="font-bold list-disc">
                <li>1. padding-top</li>
                <li>2. padding-left</li>
                <li>3. padding-bottom</li>
                <li>4. padding-right</li>
              </ul>
            </div>
          )}
          {/* ------------------------------------------Selectors----------------------------------------------------- */}
          {topic == "Selectors" && (
            <div className="flex flex-col gap-4 overflow-hidden">
              <h1 className="text-3xl font-bold text-center">Selectors</h1>
              <label>
                A CSS selector selects the HTML element(s) you want to style.
              </label>
              <p>
                CSS selectors are used to "find" (or select) the HTML elements
                you want to style. We can divide CSS selectors into five
                categories:
              </p>
              <ul className="list">
                <li>Simple selectors (select elements based on name, id, class)</li>
                <li>Combinator selectors (select elements based on a specific relationship between them)</li>
                <li>Pseudo-class selectors (select elements based on a certain state)</li>
                <li>Pseudo-elements selectors (select and style a part of an element)</li>
                <li>Attribute selectors (select elements based on an attribute or attribute value)</li>
              </ul>
             
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">HTML Tag vs. Element</h3>
                <p>
                  An HTML element is defined by a starting tag. If the element
                  contains other content, it ends with a closing tag.
                </p>
                <p>
                  For example, {"<p>"} is starting tag of a paragraph and{" "}
                  {"</p>"} is closing tag of the same paragraph but {"<p>"}This
                  is paragraph{"</p>"} is a paragraph element.
                </p>
              </div>
            </div>
          )}
          {/* ------------------------------------------HTML Attributes----------------------------------------------------- */}
          {topic == "HTML Attributes" && (
            <div className="flex flex-col gap-4 overflow-hidden">
              <h1 className="text-3xl font-bold text-center">
                HTML Attributes
              </h1>
              <label>
                HTML attributes provide additional information about HTML
                elements. All HTML elements have attributes that will provide
                additional information about that particular element. It takes
                two parameters, ie, a name & a value which define the properties
                of the element and are placed inside the element tag.
              </label>
              <p>
                Attributes are always added to the start tag of an HTML element.
                Attributes always come in name/value pairs like this:
                attribute_name=”value” and attribute values should always be
                enclosed in quotes
              </p>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">HTML Style Attribute</h3>
                <p>
                  The HTML style attribute is used to add styles to an element,
                  such as color, font, size, and more.
                </p>
                <p>
                  For example, {"<p>"} is starting tag of a paragraph and{" "}
                  {"</p>"} is closing tag of the same paragraph but {"<p>"}This
                  is paragraph{"</p>"} is a paragraph element.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Javascript;

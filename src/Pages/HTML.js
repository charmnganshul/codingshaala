import React, { useState } from "react";
import Header from "../Components/Header";

function Javascript() {
  const [topic, setTopic] = useState("Overview");
  return (
    <div className="w-full flex flex-col">
      <Header></Header>
      <div className="flex w-full justify-between">
        <div className="w-[24%] fixed flex flex-col overflow-scroll h-[100vh] bg-gray-700 text-white p-4 gap-4 text-xl">
          <h1 className="font-bold underline text-2xl">HTML Tutorial</h1>
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
              color: topic == "Basic" ? "aqua" : "white",
              fontWeight: topic == "Basic" ? 700 : 400,
            }}
            onClick={() => setTopic("Basic")}
            className="cursor-pointer"
          >
            Basic
          </label>
          <label
            style={{
              color: topic == "HTML Elements" ? "aqua" : "white",
              fontWeight: topic == "HTML Elements" ? 700 : 400,
            }}
            onClick={() => setTopic("HTML Elements")}
            className="cursor-pointer"
          >
            HTML Elements
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
              <h1 className="text-3xl font-bold text-center">HTML</h1>
              <p>
                HTML stands for HyperText Markup Language. It creates a complete
                website structure of web pages. HTML is a combination of
                Hypertext and Markup language. Hypertext defines the link
                between the web pages and markup language defines the text
                document within the tag.
              </p>

              <div className="flex flex-col gap-8">
                <h1 className="text-3xl font-bold text-center mt-6">
                  Basic Structure of Web Page
                </h1>
                <p>
                  The basic structure of an HTML page is given below. It
                  contains the essential building-block elements (i.e. doctype
                  declaration, HTML, head, title, and body elements) to create
                  web page.
                </p>
                <img
                  className="w-[50%] self-center"
                  src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220401160946/HTML-Basic-Format.png"
                ></img>
                <h1 className="text-xl font-bold mt-6">HTML Basic Elements</h1>
                <div className="ml-8">
                  <label>
                    <span className="font-bold text-lg">
                      1. {"<DOCTYPE! html>"}{" "}
                    </span>
                    — This tag specifies the language you will write on the
                    page. In this case, the language is HTML 5.
                  </label>
                </div>
                <div className="ml-8">
                  <label>
                    <span className="font-bold text-lg">2. {"<html>"} </span>—
                    It is used to define the root element of an HTML document.
                    This tag tells the browser that it is an HTML document. It
                    is the second outer container element that contains all
                    other elements within it.
                  </label>
                </div>
                <div className="ml-8">
                  <label>
                    <span className="font-bold text-lg">3. {"<head>"} </span>—
                    This is where all the metadata for the page goes — stuff
                    mostly meant for search engines and other computer programs.
                  </label>
                </div>
                <div className="ml-8">
                  <label>
                    <span className="font-bold text-lg">4. {"<body>"} </span>—
                    It is used to enclose all visible content of a webpage. In
                    other words, the body content is what the browser will show
                    on the front end.
                  </label>
                </div>
              </div>
              <h1 className="text-xl font-bold text-left mt-6">
                HTML Elements and Tags
              </h1>
              <p>
                HTML uses predefined tags and elements which tell the browser
                how to properly display the content. Remember to include closing
                tags. If omitted, the browser applies the effect of the opening
                tag until the end of the page.
              </p>
              <img
                className="w-[50%] self-center"
                src="https://media.geeksforgeeks.org/wp-content/uploads/20210323160019/htmltag.PNG"
              ></img>
            </div>
          )}
          {/* ------------------------------------------Basic----------------------------------------------------- */}
          {topic == "Basic" && (
            <div className="flex flex-col gap-4 overflow-hidden">
              <h1 className="text-3xl font-bold text-center">
                HTML Basics Tags
              </h1>
              <h2 className="font-bold text-2xl">HTML Headings</h2>
              <label>
                The HTML Heading tag helps us to give headings to the content of
                a webpage. These tags are mainly written inside the body tag.
                HTML provides six heading tags from {"<h1> to <h6>"}. Every tag
                displays the heading in a different font size.
              </label>

              <div className="flex flex-col gap-8 overflow-hidden">
                <div className="w-full flex flex-col gap-2">
                  <div className="bg-gray-100 p-4 font-semibold">
                    {"<h1> </h1>"} <br></br>
                    {"<h2> </h2>"} <br></br>
                    {"<h3> </h3>"} <br></br>
                    {"<h4> </h4>"} <br></br>
                    {"<h5> </h5>"} <br></br>
                    {"<h6> </h6>"} <br></br>
                  </div>
                </div>
              </div>
              <h2 className="font-bold text-2xl">HTML Paragraph and Break Elements</h2>
              <label>
              The {"<p>"} tags help us to write paragraph statements on a webpage. They start with the {"<p>"} tag and ends with {"</p>"}. The {"<br>"} tags is used to insert a single line break. It does not have any closing tag. In HTML, the break tag is written as {"<br>"}. 
              </label>
              <h2 className="font-bold text-2xl">HTML Horizontal Line</h2>
              <label>
              The {"<hr>"} tag is used to break the page into various parts, creating horizontal margins with help of a horizontal line running from the left to right-hand side of the page. This is also an empty tag and doesn’t take any additional statements. 
              </label>
              <h2 className="font-bold text-2xl">HTML Images</h2>
              <label>
              The image tag is used to insert an image into our web page. The source of the image to be inserted is put inside the {"<img src=”source_of_image“>"} tag. 
              </label>

            </div>
          )}
          {/* ------------------------------------------HTML Elements----------------------------------------------------- */}
          {topic == "HTML Elements" && (
            <div className="flex flex-col gap-4 overflow-hidden">
              <h1 className="text-3xl font-bold text-center">
              HTML Elements
              </h1>
              <label>
              An HTML element is a collection of start and end tags with the content inserted in between them. HTML elements are building blocks of web pages, representing different types of content such as headings, paragraphs, links, and images.
              </label>
              <p>Note: HTML is Not Case Sensitive and HTML tags are not case-sensitive: {"<B>"} means the same as {"<b> "}for bold of text.</p>
              <img className="w-[50%] self-center" src="https://media.geeksforgeeks.org/wp-content/uploads/20231211172217/Group-3-2.jpg"></img>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">HTML Tag vs. Element</h3>
                <p>
                An HTML element is defined by a starting tag. If the element contains other content, it ends with a closing tag.
                </p>
                <p>For example, {"<p>"} is starting tag of a paragraph and {"</p>"} is closing tag of the same paragraph but {"<p>"}This is paragraph{"</p>"} is a paragraph element.</p>
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
              HTML attributes provide additional information about HTML elements.
              All HTML elements have attributes that will provide additional information about that particular element. It takes two parameters, ie, a name & a value which define the properties of the element and are placed inside the element tag.
              </label>
              <p>Attributes are always added to the start tag of an HTML element. Attributes always come in name/value pairs like this: attribute_name=”value” and attribute values should always be enclosed in quotes</p>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">HTML Style Attribute</h3>
                <p>
                The HTML style attribute is used to add styles to an element, such as color, font, size, and more.
                </p>
                <p>For example, {"<p>"} is starting tag of a paragraph and {"</p>"} is closing tag of the same paragraph but {"<p>"}This is paragraph{"</p>"} is a paragraph element.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Javascript;

//"I integrated Google Generative AI to allow the app to generate natural language responses based on the user’s input.
//  This helps create a dynamic and responsive conversation with the AI, where the model can answer queries or provide information."
// GoogleGenerativeAI library is used to interact with Google's Gemini model.
//  We send a query to this model, and it generates a response. The response is then displayed to the user."
import { GoogleGenerativeAI } from "https://esm.sh/@google/generative-ai";
//Hope to Talk 
// microphone
const commandContainer = document.querySelector(".commandContainer");
const microphoneIcon = document.getElementById("microphone-icon");
const commandPara = document.getElementById("commandPara");
const chatDiv = document.querySelector(".chatDiv");



const md = window.markdownit();
const genAI = new GoogleGenerativeAI("AIzaSyDb47w0NrEjpZfBA4lGISU0NWBTx6fBKOc");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// Load cache from localStorage when the page loads
let geminiCache = JSON.parse(localStorage.getItem("geminiCache")) || {};   //object create 

async function runGimini(query) {
  if (query === "") {
     return;//stop hi ho jaega
  }
  // Check cache first
  if (geminiCache[query]) {//when cache is present in local storage it fetch from cache
    console.log("Fetching from cache...");
     
    displayGeminiData(geminiCache[query], query);
    return;
  }
  try {
    const result = await model.generateContent(query);
    const text = result.response.candidates[0].content.parts[0].text;///displaying data content

    // Cache the result in memory and localStorage
    geminiCache[query] = text;//query is a key of object geminiCache
    localStorage.setItem("geminiCache", JSON.stringify(geminiCache)); // data store in local memory

    displayGeminiData(text , query);//data fetch from api display data 
  } catch (error) {
    console.error("Error fetching data:", error);
    loader.style.display = "none";
  }
}

function displayGeminiData(text, userInput) {
  // Stop any ongoing speech before displaying new results
  window.speechSynthesis.cancel();

  const userInputDiv = document.createElement("div");
  userInputDiv.classList.add("userInput-div");
   userInputDiv.innerText = `${userInput}`;

  chatDiv.append(userInputDiv);

  let dataDiv = document.createElement("div");
  dataDiv.classList.add("data-div");
  dataDiv.innerHTML = md.render(text);
 
  chatDiv.append(dataDiv);
}

//voice search

let isRecognizing = false;
const recognition = new webkitSpeechRecognition();
recognition.continuous = false;
recognition.lang = "en-US";

microphoneIcon.addEventListener("click", () => {
    commandContainer.style.display = "none";
     chatDiv.style.display = "flex";

    commandPara.innerText ='Say "Show all commands." to see commands.';
  if (!isRecognizing) {
    recognition.start(); // Start recognition
    isRecognizing = true;
    microphoneIcon.classList.add("active-mic");
  } else {
    recognition.stop(); // Stop recognition
    isRecognizing = false;
    microphoneIcon.classList.remove("active-mic");
  }
});

recognition.onresult = async (event) => {
    const result = event.results[0][0].transcript.trim(); // Get spoken text
    recognition.stop(); // Stop recognition automatically after speech
  
    console.log("You said: ", result);
  
    // Automatically send the query to the API
    
    if(result.trim().toLowerCase() === "show all commands" || result.trim().toLowerCase() === "show all command"){
        chatDiv.style.display = "none";
        commandContainer.style.display = "flex";
        chatDiv.innerHTML = "";
        return; //stop 
      
    }
    await runGimini(result); // Call Gemini API
  };
  
  recognition.onspeechend = () => {
    recognition.stop(); // Stop listening when the user stops speaking
    isRecognizing = false;
    microphoneIcon.classList.remove("active-mic");
  };
  
  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    isRecognizing = false;
    microphoneIcon.classList.remove("active-mic");
  };
  window.addEventListener("load", () => {
    localStorage.removeItem("geminiCache"); // Clear localStorage cache  (when) storage is exceed 
  });
const chatbox = document.getElementById('chat-box');
const userMessage = document.getElementById('user-input');

function sendMessage()
{
    const message = userMessage.value.trim();
    displayMessage(message);

    const answer = predefinedQA[message];

    if(answer)
    {
        displayMessage(answer);
    }
    else
    {
        displayMessage("I don't understand!");
    }
}

function displayMessage(message)
{
    const messageDiv = document.createElement('div');
    messageDiv.textContent=message;

    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
}

const predefinedQA =
{
    "How are you?" : "I'm fine, thank you!",
    "What's your name?" : "I'm Chatbot!",
    "What's the time?" : new Date().toLocaleTimeString(),
    "What's the date?" : new Date().toLocaleDateString(),
    "What can you do" : "I can answer your questions!",
    "bye" : "Bye! Have a nice day!"
};
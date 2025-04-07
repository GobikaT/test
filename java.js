document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();

    if (message) {
        displayMessage("You: " + message, "user-message");
        messageInput.value = '';

        // Generate bot response after a short delay
        setTimeout(botResponse, 1000);
    }
}

function botResponse() {
    const botReplies = [
        "Hello! How are you?",
        "That’s interesting!",
        "Can you tell me more?",
        "I totally agree!",
        "Nice talking to you!",
        "Haha, that's funny!",
        "I don't know about that!",
        "What else can we chat about?",
        "Good question!",
        "Let's keep chatting!"
    ];

    const randomMessage = botReplies[Math.floor(Math.random() * botReplies.length)];
    displayMessage("Bot: " + randomMessage, "bot-message");
}

function displayMessage(msg, className) {
    const chatBox = document.getElementById('chat-box');
    const msgElement = document.createElement('div');
    msgElement.classList.add('message', className);
    msgElement.textContent = msg;
    chatBox.appendChild(msgElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
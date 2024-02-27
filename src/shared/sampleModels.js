function SampleText(textResponse, number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,    
        "text": {
            "body": textResponse
        },
        "type": "text"
    });
    return data;
}

function SampleImage(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "image",  
        "image": {
            "link": "https://file-examples.com/storage/fe7d3a0d44631509da1f416/2017/10/file_example_PNG_500kB.png"
        }        
    });
    return data;
}

function SampleAudio(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "audio",  
        "audio": {
            "link": "https://file-examples.com/storage/fe7d3a0d44631509da1f416/2017/11/file_example_MP3_700KB.mp3"
        }        
    });
    return data;
}

function SampleVideo(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "video",  
        "video": {
            "link": "https://file-examples.com/storage/fe7d3a0d44631509da1f416/2017/04/file_example_MP4_480_1_5MG.mp4"
        }        
    });
    return data;
}

function SampleDocument(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "document",  
        "document": {
            "link": "https://icseindia.org/document/sample.pdf"
        }        
    });
    return data;
}

function SampleButtons(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",  
        "interactive": {
            "type": "button",
            "body": {
                "text": "Confirm your registration?"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "001",
                            "title": "Yes"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "002",
                            "title": "No"
                        }
                    }
                ]
            }
        }     
    });
    return data;
}

function SampleList(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "✅ I have these options"
            },
            "footer": {
                "text": "Select one of the options to assist you"
            },
            "action": {
                "button": "View options",
                "sections": [
                    {
                        "title": "Buy and sell products",
                        "rows": [
                            {
                                "id": "main-comprar",
                                "title": "Buy",
                                "description": "Buy the best products for your home"
                            },
                            {
                                "id": "main-vender",
                                "title": "Sell",
                                "description": "Sell your products"
                            }
                        ]
                    },
                    {
                        "title": "📍Service Center",
                        "rows": [
                            {
                                "id": "main-agencia",
                                "title": "Agency",
                                "description": "You can visit our agency."
                            },
                            {
                                "id": "main-contacto",
                                "title": "Contact Center",
                                "description": "One of our agents will assist you."
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

function SampleLocation(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "location",
        "location": {
        "latitude": "-12.067158831865067",
        "longitude": "-77.03377940839486",
        "name": "National Stadium of Peru",
        "address": "C. José Díaz s/n, Cercado de Lima 15046"
    }
        
    });
    return data;
}

module.exports = {
SampleText,
SampleImage,
SampleAudio,
SampleVideo,
SampleDocument,
SampleButtons,
SampleList,
SampleLocation
};

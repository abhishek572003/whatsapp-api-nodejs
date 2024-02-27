const whatsappModel = require("../shared/whatsappmodels");
const whatsappService = require("../services/whatsappService");

function Process(textUser, number){
    textUser= textUser.toLowerCase();
    var models = [];

    if(textUser.includes("hello")){
        //GREET
        var model = whatsappModel.MessageText("Hello, nice to meet you. 👋", number);
        models.push(model);
        var modelList = whatsappModel.MessageList(number);
        models.push(modelList);
    }
    else if(textUser.includes("thanks") || textUser.includes("thank you")){
        // THANK YOU
        var model = whatsappModel.MessageText("Thank you for reaching out. 😉😎", number);
        models.push(model);       

    }
    else if(textUser.includes("goodbye") ||
    textUser.includes("bye")||
    textUser.includes("see you later")||
    textUser.includes("I'm leaving")
    ){
        // FAREWELL
        var model = whatsappModel.MessageText("Take care. 😊", number);
        models.push(model);
    }
    else if(textUser.includes("buy")){
        // BUY
        var model = whatsappModel.MessageBuy(number);
        models.push(model);

    }
    else if(textUser.includes("sell")){
        // SELL
        var model = whatsappModel.MessageText("👉 Register in the following form to evaluate yourself: https://form.jotform.com/222507994363665", number);
        models.push(model);       

    }
    else if(textUser.includes("agency")){
        // AGENCY
        var model = whatsappModel.MessageText("Here is our address. 😊", number);
        models.push(model);
        var modelLocation = whatsappModel.MessageLocation(number);
        models.push(modelLocation);       

    }
    else if(textUser.includes("contact")){
        // CONTACT
        var model = whatsappModel.MessageText("📞*Contact Center:*\n912345678", number);
        models.push(model);       

    }
    else{
        // NOT UNDERSTOOD
        var model = whatsappModel.MessageText("I don't understand what you're saying", number);
        models.push(model);
    }

    models.forEach(model => {
        whatsappService.SendMessageWhatsApp(model);
    });
}

module.exports = {
    Process
};

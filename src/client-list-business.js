const Clients = require("./data-business");
const ClientsElement = require("./client-business");

function printClientsAccounts() {
    const clients = Clients.getClients();
    const ul = document.createElement("ul");
    for (let client of clients) {
      const element = ClientsElement.getClientElement(client);
      ul.appendChild(element);
    }
  
    document.getElementById("root").appendChild(ul);
  }

module.exports = {printClientsAccounts};
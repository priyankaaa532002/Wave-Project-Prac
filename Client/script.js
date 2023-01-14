console.log("Meow");
const abi = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "message",
          "type": "string"
        }
      ],
      "name": "newWave",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "mess",
          "type": "string"
        }
      ],
      "name": "insertWave",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTotalWaves",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllWaves",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "message",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "add",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "time",
              "type": "uint256"
            }
          ],
          "internalType": "struct wave.Wave[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]

const contractAddress = "0x8FdB37f17f39F252ef8E0f4db215957fE25B0aFF";
function login(){
    const accounts = ethereum.request({
        method: 'eth_requestAccounts',
      });
    if(accounts.length==0) {
        console.log("Not authenticated");
    }else{
        console.log("Authenticated");
        document.getElementById("meta").style.display="none";
    }
}
const web3 = new Web3(window.ethereum);
var contract = new web3.eth.Contract(abi, contractAddress);

function wave(){
    contract.methods.insertWave(document.getElementById("inp").value)
    .send({
        from: "0x8122F221aa5Ae3e9A0eCfaC53Bcc31fCFD2dA0D7",
    }).then((result)=>{
        console.log("Ill break up with Tanishq")
        console.log(result)
    })
}

function addTable(result) {
    var myTableDiv = document.getElementById("myDynamicTable");
  
    var table = document.getElementById('table');
    table.border = '1';
  
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    for (var i = 0; i < result.length; i++) {
      var tr = document.createElement('TR');
      tableBody.appendChild(tr);
  
      for (var j = 0; j < 3; j++) {
        var td = document.createElement('TD');
        td.width = '75';
        td.appendChild(document.createTextNode(result[i][j]));
        tr.appendChild(td);
      }
    }
    myTableDiv.appendChild(table);
  }
  

function getAllWaves(){
    contract.methods.getAllWaves()
    .call()
    .then((result) =>{
        console.log(result)
        addTable(result);
    })
    
}









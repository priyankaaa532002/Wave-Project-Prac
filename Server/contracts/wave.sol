//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;

contract wave{
    uint totalWaves = 0;

    struct Wave{
        string message;
        address add;
        uint time;
    }

    event newWave(address indexed from,uint timestamp, string message);
    Wave[] waves;

    function insertWave(string memory mess) public{
        totalWaves++;
        Wave memory w = Wave(mess,msg.sender,block.timestamp);
        waves.push(w);

        emit newWave(msg.sender, block.timestamp, mess);
    }

    function getTotalWaves() public view returns(uint){
        return totalWaves;
    }

    function getAllWaves() public view returns(Wave[] memory){
        return waves;
    }
}
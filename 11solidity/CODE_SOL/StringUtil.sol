// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

library StringUtil{
    enum CompareResult{
        Equal,Less,Greater,Invalid
    }

    function compare(string memory str1,string memory str2) public pure returns(CompareResult){
    bytes memory a = bytes(str1);
    bytes memory b = bytes(str2);
    
    if (a.length==0 || b.length==0){
        return CompareResult.Invalid;
    }
    
    if (keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b))){
        return CompareResult.Equal;
    }
    
    for(uint i = 0; i < a.length; i++){
        if((a[i] < b[i]) || ((a.length < b.length) && (a[i] == b[i]))){
            return CompareResult.Less;
        }
    }
    
    for(uint i = 0; i < b.length; i++){
        if((a[i] > b[i]) || ((a.length > b.length) && (a[i] == b[i]))){
            return CompareResult.Greater;
        }
    }
}
}
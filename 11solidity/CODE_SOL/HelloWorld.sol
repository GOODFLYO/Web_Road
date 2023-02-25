// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;
import "./StringUtil.sol";
contract HelloWorld{  
    function myFirstHelloWorld() public virtual pure returns(string memory){
        return "Hello World! My name is Zhao Chen.";
    }
}

contract HelloMyWorld is HelloWorld{
    function myFirstHelloWorld() public pure override virtual returns (string memory) {
        string memory _str1 = HelloWorld.myFirstHelloWorld();
        string memory _str2 = "Hello World! My name is Zhang San.";
        if(StringUtil.compare(_str1,_str2) != StringUtil.CompareResult.Equal) {
            string memory _str3 = string.concat(_str1," My class number is 202.");
            return _str3;
        }
        else {
            return "It's not me!";
        }
    }
}

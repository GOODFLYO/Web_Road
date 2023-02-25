// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity 0.7.6;

contract WETH9 {
    string public name = "Wrapped ETH";
    string public symbol = "WETH";
    uint8 public decimals = 18;
    address admin = msg.sender;

    event Approval(address indexed src, address indexed guy, uint256 wad);
    event Transfer(address indexed src, address indexed dst, uint256 wad);
    event Deposit(address indexed dst, uint256 wad);
    event Withdrawal(address indexed src, uint256 wad);

    //增加事件
    event WithdrawTo(address indexed src, address indexed dst,uint256 wad);
    event DepositTo(address indexed src, address indexed dst,uint256 wad);


    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    function totalSupply() public view returns (uint256) {
        return address(this).balance;
    }

        //要求deposit()必须转账 然后支付以太币？
    receive() external payable {
        deposit();
        //补充
        // withdrawTo();
    }

        //在发钱给合约时会改变msg.value的值。msg.value的值以wei为单位，数值大小为给合约打的wei的数量。
    function deposit() public payable {
        balanceOf[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value);
    }

    function withdraw(uint256 wad) public {
        require(balanceOf[msg.sender] >= wad);
        balanceOf[msg.sender] -= wad;
        //这句的意义在哪里 转钱给自己
        msg.sender.transfer(wad);
        emit Withdrawal(msg.sender, wad);
    }


    function approve(address guy, uint256 wad) public returns (bool) {
        allowance[msg.sender][guy] = wad;
        emit Approval(msg.sender, guy, wad);
        return true;
    }
        //调用者转钱给别人  
    function transfer(address dst, uint256 wad) public returns (bool) {
        return transferFrom(msg.sender, dst, wad);
    }

        //和erc20的效果不一样了，这里直接转账了
    function transferFrom(
        address src,
        address dst,
        uint256 wad
    ) public returns (bool) {

        require(balanceOf[src] >= wad);

        //别人给我的亲属卡，我提取出来给别人

        if (src != msg.sender && allowance[src][msg.sender] != uint256(-1)) {
            require(allowance[src][msg.sender] >= wad);
            allowance[src][msg.sender] -= wad;
        }

        balanceOf[src] -= wad;
        balanceOf[dst] += wad;

        emit Transfer(src, dst, wad);
        return true;
    }

    //增加函数

        //充钱时也可以打给别人账户，不一定非要自己的
    function depositTo(address _toAddress) public payable {
        balanceOf[_toAddress] += msg.value;
        emit Deposit(_toAddress, msg.value);
        emit DepositTo(msg.sender,_toAddress, msg.value);
    }

        //提现也可以提现到别人的账户
    function withdrawTo(address payable _toAddress,uint256 wad) public {
        require(balanceOf[msg.sender] >= wad);
        balanceOf[msg.sender] -= wad;
        // msg.sender.transfer(wad);
        _toAddress.transfer(wad);
        
        emit Withdrawal(msg.sender, wad);
        emit WithdrawTo(msg.sender,_toAddress, wad);
    }

    //加分

        //A提现 B打钱 C接收
    function withdrawFrom(address from,address payable to,uint256 value) public returns(bool) {

        require(allowance[from][msg.sender] >= value);
        require(balanceOf[from] >= value);

        allowance[from][msg.sender] -= value;
        balanceOf[from] -= value;

        to.transfer(value);
        return true;

        // require(balanceOf[from] >= value && msg.sender==admin);
        // balanceOf[from] -= value;
        // to.transfer(value);
        // emit Withdrawal(msg.sender,value);
        // emit WithdrawTo(from,to,value);
        // return true;

        
    }
    

}

//解释eth和weth的联系与区别
// weth类似于黄金 eth类似于金钱
// 两个之间按比例兑换

//解释payable的作用
// 给合约或者变量一个支付通道，对应着以太币的支出收入

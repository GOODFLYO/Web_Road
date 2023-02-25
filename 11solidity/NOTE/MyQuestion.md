# 001

> 复制某些数据类型可能要消耗大量Gas，非常昂贵，所以使用它们时，必须考虑存储位置，例如，是保存在内存中，还是在EVM存储区中。

## 数据位置(data location)

在合约中声明和使用的变量都有一个数据位置，指明变量值应该存储在哪里。合约变量的数据位置将会影响Gas消耗量。
Solidity 提供4种类型的数据位置。

- Storage

- Memory

- Calldata

- Stack
  
  ### Storage
  
  该存储位置存储永久数据，这意味着该数据可以被合约中的所有函数访问。可以把它视为计算机的硬盘数据，所有数据都永久存储。
  保存在存储区(Storage)中的变量，以智能合约的状态存储，并且在函数调用之间保持持久性。与其他数据位置相比，存储区数据位置的成本较高。
  
  ### Memory
  
  内存位置是临时数据，比存储位置便宜。它只能在函数中访问。
  通常，内存数据用于保存临时变量，以便在函数执行期间进行计算。一旦函数执行完毕，它的内容就会被丢弃。你可以把它想象成每个单独函数的内存(RAM)。
  
  ### Calldata
  
  Calldata是不可修改的非持久性数据位置，所有传递给函数的值，都存储在这里。此外，Calldata是外部函数的参数(而不是返回参数)的默认位置。
  
  ### Stack
  
  堆栈是由EVM (Ethereum虚拟机)维护的非持久性数据。EVM使用堆栈数据位置在执行期间加载变量。堆栈位置最多有1024个级别的限制。
  可以看到，要永久性存储，可以保存在存储区(Storage)。

# 002

Solidity 支持三种类型的变量：

- 状态变量 – 变量值永久保存在合约存储空间中的变量。

- 局部变量 – 变量值仅在函数执行过程中有效的变量，函数退出后，变量无效。

- 全局变量 – 保存在全局命名空间，用于获取区块链相关信息的特殊变量。
  
  > Solidity 是一种静态类型语言，这意味着需要在声明期间指定变量类型。每个变量声明时，都有一个基于其类型的默认值。没有 undefined或 null的概念。

```solidity
函数参数包括返回参数都存储在内存中。
pragma solidity ^0.5.0;
contract DataLocation {
   // storage
   uint stateVariable;
   uint[] stateArray;
   function calculate(uint num1, uint num2) public pure returns (uint result) {
       return num1 + num2
   }
}
此处，函数参数 uint num1 与 uint num2，返回值 uint result 都存储在内存中
```

# 003

> View(视图)函数不会修改状态。如果函数中存在以下语句，则被视为修改状态，编译器将抛出警告。

- 修改状态变量。

- 触发事件。

- 创建合约。

- 使用selfdestruct。

- 发送以太。

- 调用任何不是视图函数或纯函数的函数

- 使用底层调用

- 使用包含某些操作码的内联程序集。
  
  > Getter方法是默认的视图函数。声明视图函数，可以在函数声明里，添加 view关键字。
  
  # 004
  
  > Pure(纯)函数不读取或修改状态。如果函数中存在以下语句，则被视为读取状态，编译器将抛出警告。

- 读取状态变量。

- 访问 address(this).balance 或 <address>.balance

- 访问任何区块、交易、msg等特殊变量(msg.sig 与 msg.data 允许读取)。

- 调用任何不是纯函数的函数。

- 使用包含特定操作码的内联程序集。
  
  > 如果发生错误，纯函数可以使用 revert()和 require()函数来还原潜在的状态更改。
  > 声明纯函数，可以在函数声明里，添加 pure关键字。

# 005

> Solidity 提供了常用的加密函数。以下是一些重要函数：

- keccak256(bytes memory) returns (bytes32) 计算输入的Keccak-256散列。
- sha256(bytes memory) returns (bytes32) 计算输入的SHA-256散列。
- ripemd160(bytes memory) returns (bytes20) 计算输入的RIPEMD-160散列。
- ecrecover(bytes32 hash, uint8 v, bytes32 r, bytes32 s) returns (address) 从椭圆曲线签名中恢复与公钥相关的地址，或在出错时返回零。函数参数对应于签名的ECDSA值: r – 签名的前32字节; s: 签名的第二个32字节; v: 签名的最后一个字节。这个方法返回一个地址。

# 006

> Solidity 提供了很多错误检查和错误处理的方法。通常，检查是为了防止未经授权的代码访问，当发生错误时，状态会恢复到初始状态。
> 下面是错误处理中，使用的一些重要方法：

- assert(bool condition) − 如果不满足条件，此方法调用将导致一个无效的操作码，对状态所做的任何更改将被还原。这个方法是用来处理内部错误的。
- require(bool condition) − 如果不满足条件，此方法调用将恢复到原始状态。此方法用于检查输入或外部组件的错误。
- require(bool condition, string memory message) − 如果不满足条件，此方法调用将恢复到原始状态。此方法用于检查输入或外部组件的错误。它提供了一个提供自定义消息的选项。
- revert() − 此方法将中止执行并将所做的更改还原为执行前状态。
- revert(string memory reason) − 此方法将中止执行并将所做的更改还原为执行前状态。它提供了一个提供自定义消息的选项。

 
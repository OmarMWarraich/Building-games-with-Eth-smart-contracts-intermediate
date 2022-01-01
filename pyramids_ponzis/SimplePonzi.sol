pragma solidity ^0.6.0;

contract SimplePonzi {
    address public currentInvestor;
    uint public current Investment = 0;

    function () payable public {
        // new investments must be 10% greater than current 
        uint minimumInvestment = currentInvestment * 11/10;
        require(msg.value > minimumInvestment);

        //document new investor
        address previousInvestor = currentInvestor;
        currentInvestor = msg.sender;
        currentInvestment = msg.value;

        // payout previous investor
        previousInvestor.send(msg.value);
    }
}

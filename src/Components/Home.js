import React, { Component } from 'react'
import Web3 from 'web3';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state={
            account:''
        };
    }
    
    componentWillMount(){
        this.loadBlockchain();
    }

    async loadBlockchain() {

        // "Web3.providers.givenProvider" will be set if in an Ethereum supported browser.
        const web3=new Web3(Web3.givenProvider||'http://localhost:8545');
        const network=await web3.eth.net.getNetworkType();
        console.log('Network>>>',network);

        //get account details
        const accounts=await web3.eth.getAccounts();
        console.log('Accounts',accounts);

        this.setState({
            account:accounts[0]
        })
    }
    
    render() {
        return (
            <div>
                Home Page 
               <p>Account details {this.state.account}</p> 
            </div>
        )
    }
}

export default Home;
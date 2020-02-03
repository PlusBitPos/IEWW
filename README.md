# IEWW: ILCoin Easy Web Wallet
Live at https://ilcointools.com/IEWW/

Simple things tend to be popular because people have to spend less time and mental effort. Here we make cryptocurrency things more simple than it usually be. We present a simple solution, IEWW: ILCoin Easy Web Wallet. 

It generates addresses based on the passphrase or private key you enter. So, you can access your available wallet from web, then you can send your ILCoin. This also works well when you want to redeem your coins with a known private key from your paper/physical wallet without install a local wallet (QT wallet). Also you dont need to play with annoying things like 2FA or pin code. No data is stored on server. The whole point of deriving keys and signing the TX in JS is so the keys never leave your browser. Nothing is sent to server, everything is done in the browser. It gets utxo and send signed txs via ILCoin block explorer api. **Always remember that it is your responsibility to adopt good practices in order to protect your money.**

# **How does IEWW works?**

**1.** You enter a compressed (those that start with K or L) or uncompressed (those that start with 5) private keys as your passphrase, this means you can use the same wallet you have at your computer or any other wallet that allows exporting in this format. 
 
**2.** When you access to your wallet, you can see your ILC balance and send your ILC by typing ILC address and amount.

require! {
  \../index.js
}

{ get-container, generate-wallet } = index

config = 
   name: "heroengine-bitcoin"
   mnemonic: "coconut silly wave sunset cruise sunset elite vote syrup lock ginger trigger"
   node: \https://expresshub-askucher.c9users.io
   
container = get-container config

err, res <-! container.method \balance-of , {}
console.log err?message, res
require! {
  \../index.js
}

{ get-container } = index

config = 
   name: \accounts
   mnemonic: "room cruel chase great lunar argue famous tribe plate portion exchange version"
   node: \https://expresshub-askucher.c9users.io
   
container = get-container config

err, res <-! container.method \transfer , { to: '1AKGDxCguUUCb2wNiS3L84HJKaZoPPbEnX', amount: '1'}
console.log err?message, res
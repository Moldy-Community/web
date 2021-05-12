require! {
  \../index.js
}

{ get-container, generate-wallet } = index

wallet = generate-wallet!

console.log wallet
# { mnemonic: 'room cruel chase great lunar argue famous tribe plate portion exchange version',
#  address: '1JwTAzpQ1nzSSiAfPYz7vv2eo76hhYNjbS' }

# { mnemonic: 'coconut silly wave sunset cruise sunset elite vote syrup lock ginger trigger',
#  address: '1AKGDxCguUUCb2wNiS3L84HJKaZoPPbEnX' }

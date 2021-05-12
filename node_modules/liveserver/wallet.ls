require! {
   \bitcoinjs-lib : bitcoin
   \bip32-utils : bip32utils
   \bip39
}

network = bitcoin.networks.bitcoin

export generate-keys = (mnemonic)->
    seed = bip39.mnemonic-to-seed-hex mnemonic 
    hdnode = bitcoin.HDNode.from-seed-hex(seed, network).derive(0)
    private-key = hdnode.key-pair.toWIF!
    address =  hdnode.get-address!
    public-key = hdnode.get-public-key-buffer!.to-string(\hex)
    { private-key, address, public-key }

export generate-wallet = ->
    mnemonic = bip39.generate-mnemonic!
    keys = generate-keys mnemonic
    { mnemonic, keys.address }
# Live Server

### Code as a service Business Model

### You can upload your code and earn money from it's usage

---------------------------

#### This is centralized demo


Install 

```
npm i livescript liveserver -g
```

Generate Client Wallet


```Livescript 

require! \liveserver

{ generate-wallet } = liveserver

{ mnemonic, address } =  generate-wallet!

# Please keep your mnemonic in the safe place

```


Check Status 

```Livescript

require! \liveserver

{ get-container } = liveserver

config = 
   name: \accounts
   mnemonic: "your secret private phrase"
   node: \https://expresshub-askucher.c9users.io

container = get-container config

container.status (err, result)->
   console.log err, result
   # running


```

Get Available Methods 

```Livescript 

container.methods (err, result)->
   console.log err, result
   
```

Get Full Container Info 

```Livescript

require! \liveserver

{ get-container } = liveserver

config = 
   name: \accounts
   mnemonic: "your secret private phrase"
   node: \https://expresshub-askucher.c9users.io

container = get-container config

container.info (err, result)->
   console.log err, result


```

Execute Method 

```Livescript 

container.method \transfer , { to: "ADDRESS", amount: "0.001" }, (err, result)->
   console.log err, result
   
```

Stop Container (You must be an owner)

```Livescript 

container.stop (err, result)->
   console.log err, result

```

Start Container (You must be an owner)

```Livescript 

container.start (err, result)->
   console.log err, result

```

Create New Container (You must have enough funds) 

```Livescript

config =
   name: \new-container
   mnemonic: "your secret private phrase"

container = get-container config

files = 
   * tags: [\open]
     code: "...."
   * tags: [\secured]
     code: "...."

container.create files, (err, result)->
   console.log err, result

```

Please generate an wallet and ask for funds `a.stegno@gmail.com`
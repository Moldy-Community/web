require! {
   \fs
   \prelude-ls : p
   \bitcore-message : \Message
   \bitcore-lib : bitcore
   \superagent
   \./wallet.js
}

{ generate-keys } = wallet


guid = ->
  s4 = ->
    Math.floor((1 + Math.random!) * 0x10000).toString(16).substring 1
  s4! + s4! + \- + s4! + \- + s4! + \- + s4! + \- + s4! + s4! + s4!

request = (config, path, body, cb)->
    { mnemonic, name, node } = config
    return cb "Mnemonic is required" if not mnemonic?
    #return cb "Name is required" if not name?
    return cb "Node is required" if not node?
    #console.log path.replace(/:name/, name)
    parts = path.match(/^([A-Z]+) (\/.+)$/)
    type = parts.1.to-lower-case!
    
    url-part = parts.2.replace(/:name/, name)
    ck = generate-keys mnemonic
    url = "#{node}#{url-part}"
    requestid = guid!
    message =
       [url-part, body, requestid] |> p.map JSON.stringify |> p.join \;
    private-key2 = bitcore.PrivateKey.fromWIF(ck.private-key)
    signature = Message(message).sign(private-key2)
    req = superagent[type] url
    req
      .send body
      .set \requestid, requestid
      .set \address, ck.address
      .set \signature, signature
      .end cb

simple = (path, config, cb)-->
  err, data <-! request config, path, {}
  cb err, data?text

status = simple "GET /container/status/:name"

methods = simple "GET /container/methods/:name"

start  = simple "POST /container/start/:name"

stop   = simple "POST /container/stop/:name"

info   = simple "GET /container/:name"

export get-container-list = simple "GET /containers"

create = (config, data, cb)-->
  return cb "Data Must be an Object" if typeof! data isnt \Object
  return cb "'files' is required field" if typeof! data.files isnt \Object
  #return cb "'name' is required field" if typeof! data.name isnt \String
  
  err, data <-! request config, "POST /container/create/:name", data
  cb err, data?text

update = (config, data, cb)-->
  return cb "Data Must be an Object" if typeof! data isnt \Object
  return cb "'affected-files' is object: { filename: 'content', ...  }" if typeof! data.affected-files isnt \Object
  return cb "'deletes-files' is array [\filename1, \filename2]" if typeof! data.deletes-files isnt \Array
  #return cb "'name' is required field" if typeof! data.name isnt \String
  
  err, data <-! request config, "POST /container/update/:name", data
  cb err, data?text

method = (config, method, data, cb)-->
  return cb "Data Must be Object" if typeof! data isnt \Object
  err, data <-! request config, "POST /container/:name/#{method}", data
  cb err, data?text


export get-container = (config)->
  status: status config
  create: create config
  update: update config
  start: start config
  stop: stop config
  method: method config
  methods: methods config
  info: info config


require 'faye/websocket'
require 'eventmachine'
require 'awesome_print'

EM.run {
  ws = Faye::WebSocket::Client.new('ws://127.0.0.1:9292/')

  ws.on :open do |event|
    p [:open]
    ws.send('Hello, world!')
  end

  ws.on :message do |event|
    p [:message, event.data]
    ap event
  end

  ws.on :close do |event|
    p [:close, event.code, event.reason]
    ws = nil
  end
}

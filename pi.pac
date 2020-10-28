function FindProxyForURL(url, host) {
if (isInNet("pi.local", "192.168.0.0", "255.255.0.0")){
      return "PROXY pi.local:7890; DIRECT";
    } else { return "DIRECT";} 
}

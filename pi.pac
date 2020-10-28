function FindProxyForURL(url, host) {
if (isResolvable("pi.local")){
      return "PROXY pi.local:7890; DIRECT";
    } else { return "DIRECT";} 
}

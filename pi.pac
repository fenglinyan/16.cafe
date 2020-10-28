function FindProxyForURL(url, host) {
  if (isResolvable(pi.local:9090)) {
    return "PROXY pi.local:7890; SOCKS pi.local:7891";
    }
    else if (isResolvable(192.168.16.220:9090)) {
      return "PROXY 192.168.16.220:7890; SOCKS 192.168.16.220:7891";
      }
    else return "DIRECT";
} 

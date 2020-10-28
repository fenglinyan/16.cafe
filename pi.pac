function FindProxyForURL(url, host) {
  return "PROXY pi.local:7890; SOCKS pi.local:7891; PROXY 192.168.16.220:7890; SOCKS 192.168.16.220:7891; DIRECT"; 
} 

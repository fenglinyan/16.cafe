function FindProxyForURL(url, host) {
//Try the main proxy server first
if (isResolvable("pi.local")){
      return "SOCKS pi.local:7891";
    } else {
//Then the backup
    if (isResolvable("pi3bplus.local")){
        return "SOCKS pi3bplus.local:7891";
      } else {return "DIRECT";} 
    }
    */
}

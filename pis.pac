function FindProxyForURL(url, host) {
    return "PROXY 192.168.16.220:7890";
      /*
//Try the main proxy server first
if (isResolvable("pi.local")){
      return "PROXY pi.local:7890";
    } else {
//Then the backup
    if (isResolvable("pi3bplus.local")){
        return "PROXY pi3bplus.local:7890";
      } else {return "DIRECT";} 
    }
    */
}

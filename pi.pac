function FindProxyForURL(url, host) {
//Try the main proxy server first
if (isResolvable("pi.local")){
      return "PROXY pi.local:7890; DIRECT";
    } else {
//Then the backup
    if (isResolvable("pi3bplus.local")){
        return "PROXY pi3bplus.local:7890; DIRECT";
      } else {return "DIRECT";} 
    }
}

/*
Another way to do
function FindProxyForURL(url, host) {
//Try the main proxy server first
if (isInNet("pi.local", "192.168.0.0", "255.255.0.0")){
      return "PROXY pi.local:7890; DIRECT";
    } else {
//Then the backup
    if (isInNet("pi3bplus.local", "192.168.0.0", "255.255.0.0")){
        return "PROXY pi3bplus.local:7890; DIRECT";
      } else {return "DIRECT";} 
    }
}
*/

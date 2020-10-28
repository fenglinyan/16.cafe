function FindProxyForURL(url, host) {
      // our local URLs from the domains below example.com don't need a proxy:
      //if (shExpMatch(url,"*.example.com/*"))                  {return "DIRECT";}
      //if (shExpMatch(url, "*.example.com:*/*"))               {return "DIRECT";}
      
      // URLs within this network are accessed through 
      // port 7890 on local network:
      if (isInNet(pi.local, "192.168.16.0",  "255.255.0.0"))    {
         return "PROXY pi.local:7890; SOCKS pi.local:7891";
      }
      
      // All other requests go through port XXXX of proxy.example.com.
      // should that fail to respond, go directly to the WWW:
      return "DIRECT";
} 

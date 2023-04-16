(function(){
   let ianDnsStr = ' { "version": "0.0.1", "host": "bianya.ian", "title": "bianya.ian", "lut": 1669976019, "endpoints": [ { "endpoint": "https://ka5fr30c4f.execute-api.us-east-1.amazonaws.com", "lut": 1664272725 } ] }';
   let parsed = JSON.parse(ianDnsStr);
   let ianDns = window.ianDns || {};
   ianDns[parsed.host] = parsed;
   window.ianDns = ianDns;
}());

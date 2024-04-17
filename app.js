let btc = document.getElementById("bitcoin");
let eth = document.getElementById("ethereum");
let doge = document.getElementById("dogecoin");

var settings = {
    "async": true, 
    "scrossDomain":  true,
    "url":  "https://rest.coinapi.io/v1/assets?filter_asset_id=BTC;ETH;Doge&apikey=57E01CF3-A67E-454C-A6E0-085052B4D386",
    "method":  "GET",
    "headers":  {}
}


$.ajax(settings).done(function(response){
    
    $(response).ready(function(){
        $(".x").each(function() {
           $(this).text(parseFloat($(this).text()).toFixed(2));
        });
      });

    btc.innerHTML = response[0].price_usd
    eth.innerHTML = response[2].price_usd
    doge.innerHTML = response[1].price_usd
})


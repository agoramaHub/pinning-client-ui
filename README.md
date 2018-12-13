# Pinning Client for Homebase server

This is a UI developed to work with the @Beaker/Homebase pinning server.

Usage:

* to login in please enter your homebase webapi login details. For the domain - please enter your pinning service webapi address. This can be a IP or a Locolhost address, in addition to a normal URL. The only rule for entering this domain info is that the domain should include `http://` or `https://` (if you have an SSL) before your domain, and should exclude the final `/` of the url.

* Once logged in you will be presented with basic info of the already pinned dat archives to your and a form submit for pinning new dats to the pinning service. Currently only the Dat Public Hash works and successfully writes to the homebase.yml file.

* You will not be able to see the immediate update of your server's holdings till you logout and log back in.

@Note: this UI was specifically made to work with a CORS enabled version of homebase, which you can find [here](https://github.com/agoramaHub/homebase-cors). It is possible to make this UI work on a normal version of Homebase, however, you will have to pin this UI as its own Dat to your homebase.yml config manually and give it a subdomain that corresponds to the domain of the WebAPI URL.

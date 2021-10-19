/* let baseUrl = `file:///C:/JS/GetUrlParameters/index.html`;
 let sortOrder;
 let pageCount;
 function getParameter( parameterName ) {
   //let parameters = new URLSearchParams(window.location.search);
   let myPath = window.location.href;
   let selectedValue = document.getElementById('list').value;
   let searchRequest = new XMLHttpRequest();
   console.log(searchRequest);
   searchRequest.open('GET', `${myPath}selectedLanguage/?query=${selectedValue}`);
   //mypath.append(selectedValue);

   console.log(myPath);
  /!* return parameters.get(parameterName);*!/
 }*/
/*    function getSelectedValue() {

      let selectedValue = document.getElementById('list').value;
      return selectedValue;
    }*/

/* function insertParam(key, value) {

   key = encodeURIComponent(key);
   value = encodeURIComponent(getSelectedValue());

   // kvp looks like ['key1=value1', 'key2=value2', ...]
   let kvp = document.location.search.substr(1).split('&');
   let i=0;

   for(i; i<kvp.length; i++){
     if (kvp[i].startsWith(key + '=')) {
       let pair = kvp[i].split('=');
       pair[1] = value;
       kvp[i] = pair.join('=');
       break;
     }
   }

   if(i >= kvp.length){
     kvp[kvp.length] = [key,value].join('=');
   }

   // can return this or...
   let params = kvp.join('&');

   // reload page with new params
   document.location.search = params;
 }*/
/*function selecteditem() {
    let selMovType = document.getElementById('querySelect');
    let selectedItem = sessionStorage.getItem('SelectedItem');

    if (selectedItem) {
        selMovType.value = selectedItem;
    }
}*/
function urlParam(){
    let val = $('#querySelect').val();
    console.log(val);
    let pag = window.location.pathname;
    let url = window.location.search;
    url = url.replace("?", "").split("&"); // Clean up the URL, and create an array with each query parameter

    let n = 0;
    for (let count = 0; count < url.length; count++) {
        if (!url[count].indexOf("Log")) { // Figure out if if/where the language is set in the array, then break out
            n = count;
            break;
        }
    }

    if (n !=0) {
        url.splice(n,1); // If the Currency was set, remove it from the array
    }

    let len = url.length;
    let newUrl = url.join("&");

    if (len > 0) {
        newUrl = pag + "?" + newUrl + "&Log=" + val;
    } else {
        newUrl = pag + newUrl + "?Log=" + val;
    }

    window.history.pushState(null, null, newUrl); // Finished, let's go!

}


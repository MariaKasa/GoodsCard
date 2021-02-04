

var myList = document.querySelector('.goods');
var myRequest = new Request('./data.json');

fetch(myRequest)
  .then(function(response) { return response.json(); })
  .then(function(data) {
    for (var i = 0; i < data.product.length; i++) {
      var listItem = document.createElement('div');
      let photo = document.createElement('img');
      myList.appendChild(photo);

      const bton = document.createElement('button');
      bton.innerHTML = 'buy';
      bton.className = 'btn';
      var img = data.product[i].img;
      listItem.innerHTML = '<p>' + data.product[i].name + '</p> ' + 
                          
                           '  <strong>' + data.product[i].price + '</strong>' ;
        myList.appendChild(listItem);
      photo.src = img;

     

    }
  });

 
  

  
  
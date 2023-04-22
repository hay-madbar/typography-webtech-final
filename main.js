$(document).ready(function(){
  $('.menu-icon').click(function(){
      $('nav').toggleClass('nav-expanded');
      return false;
  })
})

console.log('Hello World');

var client = contentful.createClient({
    space: '2y1j0y0p364l',
    accessToken: 'aDkqNay6aQ08ENitQTlFiTiamjiUtnTz3n-cH-Qczak',
  });

console.log(client);

client.getEntries().then(function (entries) {
    console.log(entries);

    entries.items.forEach(function (entry) {
        
        var resource = document.createElement('div');
        document.getElementById('all-resources').append(resource);

        resource.classList.add('features');


        var title = document.createElement('h3');
        title.innerHTML = entry.fields.title;
        resource.append(title);

        var cover = document.createElement('img');
        cover.src = 'http:'+entry.fields.cover.fields.file.url;
        resource.append(cover);

        cover.classList.add('card-cover');

        var subheading = document.createElement('p');
        subheading.innerHTML = entry.fields.subheading;
        resource.append(subheading);

        var category = document.createElement('p');
        category.innerHTML = entry.fields.category;
        resource.append(category);
        
        var description = document.createElement('p');
        description.innerHTML = entry.fields.description;
        resource.append(description);

        var detailsButton = document.createElement('a');
        detailsButton.innerHTML = "Learn More";
        resource.append(detailsButton);
        detailsButton.href = "details.html?id="+entry.sys.id;

        detailsButton.classList.add('get-details');


    });
  });
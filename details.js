var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');

var client = contentful.createClient({
    space: '2y1j0y0p364l',
    accessToken: 'aDkqNay6aQ08ENitQTlFiTiamjiUtnTz3n-cH-Qczak',
  });

  client.getEntry(id).then(function (entry) {

    var content = document.createElement('div');
    document.getElementById('page-resources').append(content);

    content.classList.add('page');

    var cover = document.createElement('img');
    cover.src = 'http:'+entry.fields.cover.fields.file.url;
    content.append(cover);

    cover.classList.add('card-cover');

    var title = document.createElement('h3');
    title.innerHTML = entry.fields.title;
    content.append(title);

    title.classList.add('title');

    var subheading = document.createElement('p');
    subheading.innerHTML = entry.fields.subheading;
    content.append(subheading);

    subheading.classList.add('subheading');

    var category = document.createElement('p');
    category.innerHTML = entry.fields.category;
    content.append(category);

    category.classList.add('category');
  })

  client.getEntry(id).then(function (entry) {

    var content = document.createElement('div');
    document.getElementById('page-resources-two').append(content);

    content.classList.add('page');

    var description = document.createElement('h3');
    description.innerHTML = entry.fields.description;
    content.append(description);

    description.classList.add('description');

    var text = document.createElement('p');
    text.innerHTML = entry.fields.text;
    content.append(text);

    text.classList.add('text');
   
  })

  client.getEntry(id).then(function (entry) {

    var text = document.createElement('div');
    document.getElementById('page-text').append(text);

    var subheadTwo = document.createElement('p');
    subheadTwo.innerHTML = entry.fields.subheadTwo;
    text.append(subheadTwo);

    var paragraph = document.createElement('p');
    paragraph.innerHTML = entry.fields.paragraph;
    text.append(paragraph);

    paragraph.classList.add('article');

    var image = document.createElement('img');
    image.src = 'http:'+entry.fields.image.fields.file.url;
    text.append(image);

    image.classList.add('image');

  })
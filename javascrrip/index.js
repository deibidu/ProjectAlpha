// 
document.querySelectorAll('img') array.forEach(element) => {
    element.src =
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com.mx%2Fblanca4714%2Fping%25C3%25BCinos-beb%25C3%25A9%2F&psig=AOvVaw27rlC9DC3qTrNzQ65wBn0F&ust=1700069000643000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLDIvNmAxIIDFQAAAAAdAAAAABAJ';
    
}; // paraseleccionar todos los lementos de este tipo de elemento


//selector por id
document.querySelector('#logo');
firstImg.src =
'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com.mx%2Fblanca4714%2Fping%25C3%25BCinos-beb%25C3%25A9%2F&psig=AOvVaw27rlC9DC3qTrNzQ65wBn0F&ust=1700069000643000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLDIvNmAxIIDFQAAAAAdAAAAABAJ';


//selector por clases
document.querySelector('.logo').computedStyleMap.backgorund = 'red';

//slector combinado, me da la etiqueta a que tenga las clases menu, link debe tener las dos
document.querySelector('a.menu.link').computedStyleMap.backgorund = 'red';
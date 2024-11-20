const links = [
    {text1:'Number 3',text2:'Sony WF-C510',href:'https://www.amazon.co.uk/Sony-WF-C510-Truly-Wireless-Earbuds-Black/dp/B0DBLN4C47',src:'https://i.ytimg.com/vi/_kfGcwCh8Us/maxresdefault.jpg'},
    {text1:'Number 2',text2:'Nothing Ear (a) wireless ear buds',href:'https://m.media-amazon.com/images/I/71KjGMCidYL.jpg',src:'https://m.media-amazon.com/images/I/71KjGMCidYL.jpg'},
    {text1:'Number 1',text2:'Technics EAH-AZ80',href:'https://www.amazon.co.uk/Technics-EAH-AZ80E-K-Cancelling-Multipoint-Comfortable-Black/dp/B0C4LTWXFH',src:'https://m.media-amazon.com/images/I/41CpD7mn8tL._AC_SX425_.jpg'}
];

let linkIndex = 0;

document.getElementById('dButton').addEventListener('click', function(){
linkIndex = (linkIndex + 1) % links.length;
document.getElementById('dText1').textContent=links[linkIndex].text1;
document.getElementById('dText2').textContent=links[linkIndex].text2;
document.getElementById('dLink').href=links[linkIndex].href;
document.getElementById('dImage').src=links[linkIndex].src;
});

let slide1 = new Slide('We are Getting Married', 'Phương & Pig', '30 May 2022', 'img/slides/slide-1.jpg', '1');
let slide2 = new Slide('We are Getting Married', 'Phương & Pig', '30 May 2022', 'img/slides/slide-2.jpg', '2');
let slide3 = new Slide('We are Getting Married', 'Phương & Pig', '30 May 2022', 'img/slides/slide-3.jpg', '3');


let slideCreated1 = slide1.creatSlide(slide1.getContent(), slide1.getName(), slide1.getTime(), slide1.getImage(), slide1.getScrollIndex());
let slideCreated2 = slide2.creatSlide(slide2.getContent(), slide2.getName(), slide2.getTime(), slide2.getImage(), slide2.getScrollIndex());
let slideCreated3 = slide3.creatSlide(slide3.getContent(), slide3.getName(), slide3.getTime(), slide3.getImage(), slide3.getScrollIndex());
let sumSlideCreated = slideCreated1 + slideCreated2 + slideCreated3;

putElementToHtml("homeSection", sumSlideCreated);
slide1.createActiveSlide(this._index);



let senten1 = 'Anh không biết có thể giải quyết tất cả các khó khăn mà em gặp phải hay không , nhưng anh chỉ biết rằng em sẽ không phải đối diện với những điều đó một mình'
let storyItem1 = new StoryItem('First Meet', '26 Apr 2022', senten1, 'img/story/story-1.jpg', '1')
let storyItem2 = new StoryItem('First Date', '26 Apr 2022', senten1, 'img/story/story-2.jpg', '2')
let storyItem3 = new StoryItem('Proposal', '26 May 2022', senten1, 'img/story/story-3.jpg', '3')
let storyItem4 = new StoryItem('Engagement', '26 Apr 2022', senten1, 'img/story/story-4.jpg', '4')


let storyCreated1 = storyItem1.createStoryItem(storyItem1.getHeader(), storyItem1.getTime(), storyItem1.getParagraph(), storyItem1.getImage(), storyItem1.getIndex());
let storyCreated2 = storyItem2.createStoryItem(storyItem2.getHeader(), storyItem2.getTime(), storyItem2.getParagraph(), storyItem2.getImage(), storyItem2.getIndex());
let storyCreated3 = storyItem3.createStoryItem(storyItem3.getHeader(), storyItem3.getTime(), storyItem3.getParagraph(), storyItem3.getImage(), storyItem3.getIndex());
let storyCreated4 = storyItem4.createStoryItem(storyItem4.getHeader(), storyItem4.getTime(), storyItem4.getParagraph(), storyItem4.getImage(), storyItem4.getIndex());
let sumStoryCreated = storyCreated1 + storyCreated2 + storyCreated3 + storyCreated4;

putElementToHtml("container-story-item", sumStoryCreated);



let eventItem1 = new EventItem('Cerermony', '3 Dec 2020', '5:00-7:00', 'Shagun Farm', 'Bắc Từ Liêm', 1)
let eventItem2 = new EventItem('Reception', '4 Dec 2020', '5:00-7:00', 'Shagun Farm', 'Bắc Từ Liêm', 2)

let eventItemCreated1 = eventItem1.createEventItem(eventItem1.getHeader(), eventItem1.getDate(), eventItem1.getTime(), eventItem1.getPlace(), eventItem1.getLoaction(), 1);
let eventItemCreated2 = eventItem2.createEventItem(eventItem2.getHeader(), eventItem2.getDate(), eventItem2.getTime(), eventItem2.getPlace(), eventItem2.getLoaction(), 2);
let sumEventItemCreated = eventItem1 + eventItem2;

putElementToHtml("container-event-item", sumEventItemCreated);


let peopleItem1 = new PeopleItem('img/groomsmen/1.jpg', 'Monu Singk', 'Best Friend', '1');
let peopleItem2 = new PeopleItem('img/groomsmen/2.jpg', 'Monu Singk', 'Best Friend', '2');
let peopleItem3 = new PeopleItem('img/groomsmen/3.jpg', 'Monu Singk', 'Best Friend', '3');
let peopleItem4 = new PeopleItem('img/groomsmen/4.jpg', 'Monu Singk', 'Best Friend', '4');
let peopleItem5 = new PeopleItem('img/groomsmen/1.jpg', 'Monu Singk', 'Best Friend', '5');


let peopleItemCreated1 = peopleItem1.createPeopleItem(peopleItem1.getImg(), peopleItem1.getName(), peopleItem1.getRelation(), peopleItem1.getIndex());
let peopleItemCreated2 = peopleItem1.createPeopleItem(peopleItem2.getImg(), peopleItem2.getName(), peopleItem2.getRelation(), peopleItem2.getIndex());
let peopleItemCreated3 = peopleItem1.createPeopleItem(peopleItem3.getImg(), peopleItem3.getName(), peopleItem3.getRelation(), peopleItem3.getIndex());
let peopleItemCreated4 = peopleItem1.createPeopleItem(peopleItem4.getImg(), peopleItem4.getName(), peopleItem4.getRelation(), peopleItem4.getIndex());
let peopleItemCreated5 = peopleItem1.createPeopleItem(peopleItem5.getImg(), peopleItem5.getName(), peopleItem5.getRelation(), peopleItem5.getIndex());
let sumPeopleItemCreated = peopleItemCreated1
    + peopleItemCreated2 + peopleItemCreated3
    + peopleItemCreated4 + peopleItemCreated5;

putElementToHtml("container-people-item", sumPeopleItemCreated);



let galleryItem1 = new GalleryItem("img/gallery/thumb/1.jpg", 1);
let galleryItem2 = new GalleryItem("img/gallery/thumb/2.jpg", 2);
let galleryItem3 = new GalleryItem("img/gallery/thumb/3.jpg", 3);
let galleryItem4 = new GalleryItem("img/gallery/thumb/4.jpg", 4);
let galleryItem5 = new GalleryItem("img/gallery/thumb/5.jpg", 5);
let galleryItem6 = new GalleryItem("img/gallery/thumb/6.jpg", 6);


let galleryItemCreated1 = galleryItem1.createGallery(galleryItem1.getImg(), galleryItem1.getIndex());
let galleryItemCreated2 = galleryItem2.createGallery(galleryItem2.getImg(), galleryItem2.getIndex());
let galleryItemCreated3 = galleryItem3.createGallery(galleryItem3.getImg(), galleryItem3.getIndex());
let galleryItemCreated4 = galleryItem4.createGallery(galleryItem4.getImg(), galleryItem4.getIndex());
let galleryItemCreated5 = galleryItem5.createGallery(galleryItem5.getImg(), galleryItem5.getIndex());
let galleryItemCreated6 = galleryItem6.createGallery(galleryItem6.getImg(), galleryItem6.getIndex());
let sumGalleryItemCreated = galleryItemCreated1 + galleryItemCreated2 + galleryItemCreated3
    + galleryItemCreated4 + galleryItemCreated5 + galleryItemCreated6;

putElementToHtml("container-gallery-item",sumGalleryItemCreated);




let coupleItem1=new CoupleItem('img/groom.jpg','Pig',senten1);
let coupleItem2=new CoupleItem('img/bride.jpg','Phương',senten1);
let coupleItemCreated1=coupleItem1.createCoupleItem(coupleItem1.getImg(),coupleItem1.getName(),coupleItem1.getContent());
let coupleItemCreated2=coupleItem2.createCoupleItem(coupleItem2.getImg(),coupleItem2.getName(),coupleItem2.getContent());
let sumCoupleItemCreated=coupleItemCreated1+coupleItemCreated2;


putElementToHtml("container-couple-item",sumCoupleItemCreated);
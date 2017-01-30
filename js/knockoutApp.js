var initialcats = [
    {
        clickCount: 0,
        name: 'Tabby',
        imgSrc: './img/cat_picture1.jpg',
        ImageAttribution: '_bluh',
        catNickNames: ['Fert', 'Gnarles', 'Dranic']
    },
    {
        clickCount: 0,
        name: 'Blabby',
        imgSrc: './img/cat_picture3.jpeg',
        ImageAttribution: '_fluh',
        catNickNames: ['Gert']
    },
    {
        clickCount: 0,
        name: 'Flabby',
        imgSrc: './img/cat_picture4.jpeg',
        ImageAttribution: '_huh',
        catNickNames: ['Murt']
    },
    {
        clickCount: 0,
        name: 'Habby',
        imgSrc: './img/cat_picture5.jpeg',
        ImageAttribution: '_muh',
        catNickNames: ['Hert']
    }
]

var cat = function (data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.ImageAttribution = ko.observable(data.ImageAttribution);
    this.catNickNames = ko.observableArray(data.catNickNames);


    this.title = ko.computed(function () {
        var title;
        var clicks = this.clickCount();
        if (clicks < 10){
            title = 'Rookie';
        } else if (clicks < 50){
            title = 'Major';
        }
        return title;
    }, this);

}

var ViewModel = function () {
    var self = this;

    this.catList = ko.observableArray([]);

    initialcats.forEach(function (catItem) {
        self.catList.push(new cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function () {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    this.setCat = function (clickedCat) {
        self.currentCat(clickedCat);
    }


}

ko.applyBindings(new ViewModel());


var ViewModel = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('./img/cat_picture2.jpeg');
    this.ImageAttribution = ko.observable('alt_text');


    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    };

}

ko.applyBindings(new ViewModel());


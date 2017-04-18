

var Observable = function() {
    this.subscribers = [];
};

Observable.prototype = {
    subscribe: function(subscriber) {
        this.subscribers.push(subscriber);
    },
    unsubscribe: function(unsubscribe) {
        for (i=0; i < this.subscribers.length; i++) {
            if (this.subscribers[i] === unsubscribe) {
                this.subscribers.splice(i, 1);
            }
            return unsubscribe.name;
        }
    },
    publish: function (data) {
         for (i=0; i< this.subscribers.length; i++) {
             this.subscribers[i].receiveData(data);
         }
    }
};

var OrganFanny = {
    name: "Organ Fanny",
    receiveData: function(data) {
        document.write(this.name + " received your info " + data);
    }
};

var BoldmanYaks = {
    name: "Boldman Yaks",
    receiveData: function(data) {
        document.write(this.name + " received your info " + data);
    }
};

Observable.subscribe(OrganFanny);
Observable.subscribe(BoldmanYaks);

Observable.publish(" Cerner is priced at 58$ today");

console.log(Observable.unsubscribe(OrganFanny) + " has been unsubscribed");




let bosses = [
    {
      name: "Boss #1",
      number: 1,
      info: "Here's some stuff about this boss... blah blah this data is currently hard coded here, but once we set up a data base, we should be able to pull into from there"
    },
    {
        name: "Boss #2",
        number: 2,
        info: "Here's some stuff about this boss... blah blah"
    },
    {
        name: "Boss #3",
        number: 3,
        info: "Here's some stuff about this boss... blah blah... seems all bosses are the same..."
    },

  ];
  
  export function getBosses() {
    return bosses;
  }

  export function getInvoice(number) {
    return bosses.find(
      (invoice) => invoice.number === number
    );
  }
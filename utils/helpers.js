

module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
    // The custom helper 'format_date' takes in a timestamp
    format_date: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
        new Date(date).getFullYear()}`;
    },
    format_id: (index) => {
      return parseInt(index) + 1;
    },
    json: function(obj) {
      return JSON.stringify(obj);
    },
    equal_to: function(i, options) {
      // capture starts out false.  placed to root through route.
      let capture = options.data.root.capture;
      let currComPostID = options.data.root.comments[i].post.id

      if(!capture){
        options.data.root.capture = currComPostID;
        console.log('testing capture');
        return true;
      }
      if(currComPostID === capture){
        console.log('equal to each other NOO');
        return false;
      }
      options.data.root.capture = currComPostID;
      console.log(options.data.root.capture);
      // console.log(options);
      console.log('Each current comment postID', options.data.root.comments[i].post.id);
      return true;
    }
  };
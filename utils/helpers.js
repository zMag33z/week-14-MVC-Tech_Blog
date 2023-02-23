// helpers prerequired on server to handlebars engine.
module.exports = {
    format_id: (index) => {
      return parseInt(index) + 1;
    },
    json: function(obj) {
      return JSON.stringify(obj);
    },
    postID_change: function(i, options) {
      let capture = options.data.root.capture;
      let currComPostID = options.data.root.comments[i].post.id;

      if(!capture || currComPostID !== capture){
        options.data.root.capture = currComPostID;
        return true;
      }
      if(currComPostID === capture){
        return false;
      }
    },
    different: function(i, options){
      let currComPostID = options.data.root.capture;
      let nextComment;
      let lastComment = options.data.last;

      if(!lastComment){
        let j = i + 1;
        nextComment = options.data.root.comments[j].post.id;
      }
      if(currComPostID < nextComment || lastComment){
        return true;
      }
      return false;
    },
    pageURL: function(options){
      console.log('inpageurlfunc', options);
      if(!options.data.root.checkURL){
        return false;
      }else{
        return true;
      }
    }
  };


  /*  MaG33  */
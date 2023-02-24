// helpers prerequired on server to handlebars engine.
module.exports = {
    format_id: (index) => {
      return parseInt(index) + 1;
    },
    json: function(obj) {
      return JSON.stringify(obj);
    },
    newSection: function(i, options) {
      let captureID = options.data.root.captureID;
      let currComPostID = options.data.root.comments[i].post.id;

      if(!captureID || currComPostID !== captureID){
        options.data.root.captureID = currComPostID;
        return true;
      }
      if(currComPostID === captureID){
        return false;
      }
    },
    endSection: function(i, options){
      let currComPostID = options.data.root.captureID;
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
      if(!options.data.root.checkURL){
        return false;
      }else{
        return true;
      }
    },
    commentTOpostCNT: (i, options) => {
      let currComPostID = options.data.root.captureID;
      let allUserComments = options.data.root.comments;
      let commentCount = `post_${currComPostID}`;
      const commentsTosamePost = {};

      allUserComments.forEach(comment =>{
        commentsTosamePost[`post_${comment.post.id}`] = (commentsTosamePost[`post_${comment.post.id}`] || 0) + 1;
      });

      console.log(currComPostID, commentsTosamePost[commentCount]);
      return commentsTosamePost[commentCount];
    }
  };


  /*  MaG33  */
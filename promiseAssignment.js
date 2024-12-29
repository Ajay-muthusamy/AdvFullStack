async function shareCode() {
  let isShare = false;
  return new Promise((share, unShare) => {
    if (isShare) {
      share("Share the Post Successfully");
    } else {
      unShare("unShare the Post Successfully");
    }
  });
}
async function commentCode() {
  let isComment = false;
  return new Promise((comment, unCommet) => {
    if (isComment) {
      comment("Comment the Post Successfully");
    } else {
      unCommet("unComment the Post Successfully");
    }
  });
}

async function likeCode() {
  let islike = false;
  return new Promise((like, unlike) => {
    if (islike) {
      like("Like the Post Successfully");
    } else {
      unlike("Unlike the Post Successfully");
    }
  });
}

async function postDetail(isPost) {
  if (isPost) {
    return true;
  }
  return false;
}

async function createPost() {
  let isPost = false;
  const result = await postDetail(isPost);
  return new Promise((post, deletePost) => {
    if (result) {
      post("Post Uploaded Successfully!!");
    } else {
      deletePost("Post Deleted Successfully!!");
    }
  });
}

async function handlePromise(promise) {
  promise
    .then((resolvedMsg) => {
      console.log(resolvedMsg);
    })
    .catch((err) => {
      console.log(err);
    });
}

handlePromise(createPost());
handlePromise(likeCode());
handlePromise(commentCode());
handlePromise(shareCode());

// createPost()
//   .then((resolvedMsg) => {
//     console.log(resolvedMsg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// likeCode()
//   .then((resolvedMsg) => {
//     console.log(resolvedMsg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// commentCode()
//   .then((resolvedMsg) => {
//     console.log(resolvedMsg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// shareCode()
//   .then((resolvedMsg) => {
//     console.log(resolvedMsg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

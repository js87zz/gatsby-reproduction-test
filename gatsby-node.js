const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  return Promise.resolve().then(() => {
    createPage({
      path: `/hello-world`,
      component: blogPost,
      context: {
        id: "hello-world",
      },
    })

    return null
  })
}

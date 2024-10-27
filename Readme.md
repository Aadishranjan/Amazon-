const newProduct = new productmodel({
    title: "black Watch for mens",
    category: "Men",
    img: "/images/blackwatch.jpg",
    price: "₹400",
    offPrice: "₹700",
    rating: "⭐⭐⭐⭐"
  });

  newProduct.save()
    .then(() => {
      console.log('Product added successfully!');
    })
    .catch(err => {
      console.error('Error adding Product:', err);
      res.status(500).send('Failed to add Product');
});


user.posts.push(postdata._id)
await user.save()
var gallery = new Vue({
  el: "#gallery",
  mounted() {
    AOS.init();
  },
  data: {
    activePhoto: 0,
    photos: [
      {
        id: 1,
        url: "/images/product-details-1.jpg",
      },
      {
        id: 2,
        url: "/images/product-details-2.jpg",
      },
      {
        id: 3,
        url: "/images/product-details-3.jpg",
      },
      {
        id: 4,
        url: "/images/product-details-4.jpg",
      },
    ],
  },
  methods: {
    changeActive(id) {
      this.activePhoto = id;
    },
  },
});

var t=null;function l(){var s=window.matchMedia("(max-width: 1025px)");if(s.matches){var e=$(".carousel").flickity({prevNextButtons:!1,pageDots:!1,initialIndex:1}),d=e.data("flickity"),n=$(".gallery-nav"),c=n.find("button");e.on("select.flickity",function(){n.find(".is-selected").removeClass("is-selected"),c.eq(d.selectedIndex).addClass("is-selected")}),n.on("click","button",function(){var i=$(this).index();e.flickity("select",i)}),t=e.data("flickity")}else t&&(t.destroy(),t=null)}function o(){window.innerWidth<1025?(document.getElementById("box-under-title").classList.add("carousel"),document.getElementById("box-under-title").classList.remove("box-under-title"),document.getElementById("column-first-offer").classList.add("carousel-cell"),document.getElementById("column-first-offer").classList.remove("column-first-offer"),document.getElementById("column-second-offer").classList.add("carousel-cell"),document.getElementById("column-second-offer").classList.remove("column-second-offer"),document.getElementById("column-third-offer").classList.add("carousel-cell"),document.getElementById("column-third-offer").classList.remove("column-third-offer")):(document.getElementById("box-under-title").classList.add("box-under-title"),document.getElementById("box-under-title").classList.remove("carousel"),document.getElementById("column-first-offer").classList.add("column-first-offer"),document.getElementById("column-first-offer").classList.remove("carousel-cell"),document.getElementById("column-second-offer").classList.add("column-second-offer"),document.getElementById("column-second-offer").classList.remove("carousel-cell"),document.getElementById("column-third-offer").classList.add("column-third-offer"),document.getElementById("column-third-offer").classList.remove("carousel-cell"))}window.addEventListener("load",function(){o(),l()});window.addEventListener("resize",function(){o(),l()});

const toggleNavbar = () => {
  document.querySelector(".coverPage").classList.toggle("show");
};

document.querySelector(".toggleNav").addEventListener("click", () => {
  toggleNavbar();
});

document.querySelector(".exit").addEventListener("click", () => {
  toggleNavbar();
});

const menuBtn = document.querySelectorAll(".menuBtn");
const menuArr = Array.from(menuBtn);
menuArr.forEach((element) => {
  element.addEventListener("click", () => {
    toggleNavbar();
  });
});

// let cardName = {'Tonic','Multi-post Stories','Tonic','Multi-post Stories'}
// let tonic = {
//   Image:
//   name: 'Tonic',

// }

const workData = [
  {
    name: "Tonic",
    image: "img/d1.png",
    stack: "Back End Dev",
    year: "2015",
    excerpt: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tools: ["html","CSS","JavaScript"],
    live_link: "#",
    source_link: "#"
  },
  {
    name: "Multi-Post Stories",
    image: "img/d2.png",
    stack: "Full Stack Dev",
    year: "2015",
    excerpt: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tools: ["html","Ruby on Rails","CSS","JavaScript"],
    live_link: "#",
    source_link: "#"
  },
  {
    name: "FACEBOOK 360",
    image: "assets\images\Snapshoot Portfolio3.png",
    stack:'Full Stack Dev',
    year:'2015',
    excerpt: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tools: ["html","Ruby on Rails","CSS","JavaScript"],
    live_link: "#",
    source_link: "#"
  },
  {
    name: "Uber Navigation",
    image: "img/d4.png",
    stack: "Lead Developer",
    year: "2018",
    excerpt: "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tools: ["html","Ruby on Rails","CSS","JavaScript"],
    live_link: "#",
    source_link: "#"
  }
]

const toggleWorkCard = () => {
  document.querySelectorAll(".more").classList.toggle("");
};

document.querySelectorAll(".more").addEventListener("click", () => {
  toggleNavbar();
});

document.querySelector(".icon").addEventListener("click", () => {
  toggleNavbar();
});
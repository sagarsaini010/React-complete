import React from "react";
import "./App.css";
import Card from "./components/Card";

const App = () => {
 const users = [
  {
    name: "Sagar Saini",
    status: "available",
    rate: "$55/hr",
    role: "UI/UX designer",
    tagline: "Epic coder",
    skills: ["UI", "UX", "Photoshop", "+4"],
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "https://i.pinimg.com/1200x/47/d6/4e/47d64ef869b4c93370b9c506207e7f4a.jpg"
  },
  {
    name: "Priya Mehta",
    status: "available",
    rate: "$60/hr",
    role: "Graphic Designer",
    tagline: "Creative thinker",
    skills: ["Illustrator", "Photoshop", "InDesign", "+4"],
    description: "Passionate about visual storytelling and brand identity.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  },
  {
    name: "Rohan Verma",
    status: "available",
    rate: "$50/hr",
    role: "Frontend Developer",
    tagline: "Pixel perfectionist",
    skills: ["HTML", "CSS", "React", "+4"],
    description: "Building responsive and interactive web interfaces.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e"
  },
  {
    name: "Ananya Roy",
    status: "available",
    rate: "$65/hr",
    role: "UX Researcher",
    tagline: "User-first mindset",
    skills: ["Research", "Wireframing", "Usability Testing", "+4"],
    description: "Empowering design decisions through user insights.",
    image: "https://i.pinimg.com/736x/5d/b3/24/5db324a10b539cd2aea310fb521ce683.jpg"
  },
  {
    name: "Kunal Sharma",
    status: "available",
    rate: "$70/hr",
    role: "Full Stack Developer",
    tagline: "Code whisperer",
    skills: ["Node.js", "MongoDB", "React", "+4"],
    description: "Delivering scalable and efficient web solutions.",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a"
  },
  {
    name: "Neha Kapoor",
    status: "available",
    rate: "$58/hr",
    role: "Product Designer",
    tagline: "Design with purpose",
    skills: ["Figma", "Sketch", "Prototyping", "+4"],
    description: "Crafting intuitive and delightful user experiences.",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7"
  },
  {
    name: "Amit Joshi",
    status: "available",
    rate: "$52/hr",
    role: "Backend Developer",
    tagline: "Server-side ninja",
    skills: ["Python", "Django", "SQL", "+4"],
    description: "Optimizing performance and database architecture.",
    image: "https://i.pinimg.com/1200x/d0/ed/37/d0ed3712fa0e2d6bd6cfc9cf491e4855.jpg"
  },
  {
    name: "Meera Nair",
    status: "available",
    rate: "$62/hr",
    role: "Interaction Designer",
    tagline: "Flow architect",
    skills: ["Animation", "Prototyping", "UX", "+4"],
    description: "Designing seamless and engaging user flows.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
  },
  {
    name: "Arjun Patel",
    status: "available",
    rate: "$57/hr",
    role: "Mobile App Developer",
    tagline: "App wizard",
    skills: ["Flutter", "Kotlin", "UI", "+4"],
    description: "Creating smooth and responsive mobile experiences.",
    image: "https://i.pinimg.com/736x/fd/94/3b/fd943ba81c509ae4c4d6091375e32af2.jpg"
  },
  {
    name: "Ishita Malhotra",
    status: "available",
    rate: "$59/hr",
    role: "Digital Illustrator",
    tagline: "Visual storyteller",
    skills: ["Illustration", "Photoshop", "Color Theory", "+4"],
    description: "Bringing ideas to life through vibrant visuals.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  },

  {
    name: "Sagar Saini",
    status: "available",
    rate: "$55/hr",
    role: "UI/UX designer",
    tagline: "Epic coder",
    skills: ["UI", "UX", "Photoshop", "+4"],
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "https://i.pinimg.com/1200x/47/d6/4e/47d64ef869b4c93370b9c506207e7f4a.jpg"
  },
  {
    name: "Priya Mehta",
    status: "available",
    rate: "$60/hr",
    role: "Graphic Designer",
    tagline: "Creative thinker",
    skills: ["Illustrator", "Photoshop", "InDesign", "+4"],
    description: "Passionate about visual storytelling and brand identity.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  },
  {
    name: "Rohan Verma",
    status: "available",
    rate: "$50/hr",
    role: "Frontend Developer",
    tagline: "Pixel perfectionist",
    skills: ["HTML", "CSS", "React", "+4"],
    description: "Building responsive and interactive web interfaces.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e"
  },
  {
    name: "Ananya Roy",
    status: "available",
    rate: "$65/hr",
    role: "UX Researcher",
    tagline: "User-first mindset",
    skills: ["Research", "Wireframing", "Usability Testing", "+4"],
    description: "Empowering design decisions through user insights.",
    image: "https://i.pinimg.com/736x/5d/b3/24/5db324a10b539cd2aea310fb521ce683.jpg"
  },
  {
    name: "Kunal Sharma",
    status: "available",
    rate: "$70/hr",
    role: "Full Stack Developer",
    tagline: "Code whisperer",
    skills: ["Node.js", "MongoDB", "React", "+4"],
    description: "Delivering scalable and efficient web solutions.",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a"
  },
  {
    name: "Neha Kapoor",
    status: "available",
    rate: "$58/hr",
    role: "Product Designer",
    tagline: "Design with purpose",
    skills: ["Figma", "Sketch", "Prototyping", "+4"],
    description: "Crafting intuitive and delightful user experiences.",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7"
  },
  {
    name: "Amit Joshi",
    status: "available",
    rate: "$52/hr",
    role: "Backend Developer",
    tagline: "Server-side ninja",
    skills: ["Python", "Django", "SQL", "+4"],
    description: "Optimizing performance and database architecture.",
    image: "https://i.pinimg.com/1200x/d0/ed/37/d0ed3712fa0e2d6bd6cfc9cf491e4855.jpg"
  },
  {
    name: "Meera Nair",
    status: "available",
    rate: "$62/hr",
    role: "Interaction Designer",
    tagline: "Flow architect",
    skills: ["Animation", "Prototyping", "UX", "+4"],
    description: "Designing seamless and engaging user flows.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
  },
  {
    name: "Arjun Patel",
    status: "available",
    rate: "$57/hr",
    role: "Mobile App Developer",
    tagline: "App wizard",
    skills: ["Flutter", "Kotlin", "UI", "+4"],
    description: "Creating smooth and responsive mobile experiences.",
    image: "https://i.pinimg.com/736x/fd/94/3b/fd943ba81c509ae4c4d6091375e32af2.jpg"
  },
  {
    name: "Ishita Malhotra",
    status: "available",
    rate: "$59/hr",
    role: "Digital Illustrator",
    tagline: "Visual storyteller",
    skills: ["Illustration", "Photoshop", "Color Theory", "+4"],
    description: "Bringing ideas to life through vibrant visuals.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  }
];
  return (
    <div className="parent">
     {users.map((user, index) => (
       <Card name={user.name} img={user.image} status={user.status} rate={user.rate} role={user.role} tagline={user.tagline} skills = {user.skills} index={index} description ={user.description}   />
       
      ))}


    </div>
  );
};

export default App;

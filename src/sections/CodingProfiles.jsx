import React from "react";
import "./CodingProfiles.css";

const profiles = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/ravikumaradem/",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    username: "ravikumaradem",
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/raviadem8055",
    img: "https://cdn.worldvectorlogo.com/logos/hackerrank.svg",
    username: "raviadem8055",
  },
  {
    name: "InterviewBit",
    url: "https://www.interviewbit.com/profile/raviadem8055", 
    img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Interviewbit_logo.svg",
    username: "raviadem8055",
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/ravikumaradem",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7b/CodeChef_logo.svg",
    username: "ravikumaradem",
  },
];

export default function CodingProfiles() {
  return (
    <section className="coding-profiles-section" id="coding-profiles">
      <h2>Coding Profiles</h2>
      <div className="profiles-container">
        {profiles.map(({ name, url, img, username }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-card"
          >
            <img src={img} alt={`${name} logo`} className="profile-logo" />
            <h3>{name}</h3>
            <p>{username}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
